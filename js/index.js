/*
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

(function () {
  var Marzipano = window.Marzipano;
  var bowser = window.bowser;
  var screenfull = window.screenfull;
  var configData = window.APP_DATA;
  var firstLoad = true;

  // Grab elements from DOM.
  var panoElement = document.querySelector('#pano');
  var sceneNameElement = document.querySelector('#titleBar .sceneName');
  var sceneListElement = document.querySelector('#sceneList');
  var sceneElements = document.querySelectorAll('#sceneList .scene');
  var mapElement = document.querySelector('.map');
  var counterElement = document.querySelector('#hotspotCounter');
  var sceneListToggleElement = document.querySelector('#sceneListToggle');
  var autorotateToggleElement = document.querySelector('#autorotateToggle');
  var fullscreenToggleElement = document.querySelector('#fullscreenToggle');
  var objectiveToggleElement = document.querySelector('#objectiveToggle');

  var mat4 = Marzipano.dependencies.glMatrix.mat4;
  var quat = Marzipano.dependencies.glMatrix.quat;
  var degToRad = Marzipano.util.degToRad;
  var viewerElement = document.querySelector("#pano");
  var enterVrElement = document.querySelector("#enter-vr");
  var noVrElement = document.querySelector("#no-vr");

  // Detect desktop or mobile mode.
  if (window.matchMedia) {
    var setMode = function () {
      if (mql.matches) {
        document.body.classList.remove('desktop');
        document.body.classList.add('mobile');
      } else {
        document.body.classList.remove('mobile');
        document.body.classList.add('desktop');
      }
    };
    var mql = matchMedia("(max-width: 500px), (max-height: 500px)");
    setMode();
    mql.addListener(setMode);
  } else {
    document.body.classList.add('desktop');
  }

  // Detect whether we are on a touch device.
  document.body.classList.add('no-touch');
  window.addEventListener('touchstart', function () {
    document.body.classList.remove('no-touch');
    document.body.classList.add('touch');
  });

  // Use tooltip fallback mode on IE < 11.
  if (bowser.msie && parseFloat(bowser.version) < 11) {
    document.body.classList.add('tooltip-fallback');
  }

  // ------------------ start video
  function createVideo() {
    var introVideo;
    // Video requires WebGL support.
    var videoViewerOpts = {
      stageType: 'webgl',
      controls: {
        mouseViewMode: configData.settings.mouseViewMode
      }
    };

    var videoViewer = new Marzipano.Viewer(panoElement, videoViewerOpts);

    // Create asset and source.
    var videoAsset = new VideoAsset();
    var videoSource = new Marzipano.SingleAssetSource(videoAsset);

    // Create geometry.
    // This is a trivial equirectangular geometry with a single level.
    // The level size need not match the actual video dimensions because it is
    // only used to determine the most appropriate level to render, and no such
    // choice has to be made in this case.
    var videoGeometry = new Marzipano.EquirectGeometry([{
      width: 1
    }]);

    // Create video view.
    // We display the video at a fixed vertical fov.
    var videoLimiter = Marzipano.RectilinearView.limit.vfov(90 * Math.PI / 180, 90 * Math.PI / 180);
    var videoView = new Marzipano.RectilinearView({
      fov: Math.PI / 2
    }, videoLimiter);

    // Create video scene.
    var videoScene = videoViewer.createScene({
      source: videoSource,
      geometry: videoGeometry,
      view: videoView
    });

    // Start playback on click.
    // Playback cannot start automatically because most browsers require the play()
    // method on the video element to be called in the context of a user action.
    document.body.addEventListener('click', tryStart);
    document.body.addEventListener('touchstart', tryStart);

    // Whether playback has started.
    var started = false;

    // Try to start playback.
    function tryStart() {
      if (started) {
        return;
      }
      started = true;

      introVideo = document.createElement('video');
      introVideo.src = configData.settings.introVideo.url;
      introVideo.crossOrigin = 'anonymous';

      introVideo.autoplay = true;
      introVideo.loop = false;

      // Prevent the video from going full screen on iOS.
      introVideo.playsInline = true;
      introVideo.webkitPlaysInline = true;

      introVideo.play();


      waitForReadyState(introVideo, introVideo.HAVE_METADATA, 100, function () {
        waitForReadyState(introVideo, introVideo.HAVE_ENOUGH_DATA, 100, function () {
          videoAsset.setVideo(introVideo);
        });
      });

      introVideo.onended = function () {
        hideHint();
        videoViewer.destroy();
        panoElement.innerHTML = "";

        createTour();
      }
    }

    videoScene.switchTo();
    // Wait for an element to reach the given readyState by polling.
    // The HTML5 video element exposes a `readystatechange` event that could be
    // listened for instead, but it seems to be unreliable on some browsers.
    function waitForReadyState(element, readyState, interval, done) {
      var timer = setInterval(function () {
        if (element.readyState >= readyState) {
          clearInterval(timer);
          done(null, true);
        }
      }, interval);
    }
    // ------------------ end video viewer
  }
  // ------------------ start tour viewer
  function hotspotsBySceneLookup() {
    return configData.scenes.reduce(function (aggr, sceneEntry) {
      aggr[sceneEntry.id] = {
        infoHotspots: sceneEntry.infoHotspots,
        modalHotspots: sceneEntry.modalHotspots,
        roleHotspots: sceneEntry.roleHotspots,
        hotspotCount: sceneEntry.infoHotspots.length + sceneEntry.modalHotspots.length + sceneEntry.roleHotspots.length,
      }
      return aggr
    }, {})
  }
  var hotspotsByScene = hotspotsBySceneLookup();
  function updateSceneCompletionCounter(sceneID, initializing) {
    var sceneHotspots = hotspotsByScene[sceneID]
    var el = document.querySelector('#sceneList .scene[data-id="' + sceneID + '"] .sceneCompletionCount ')
    var clickedCount = document.querySelectorAll('.hotspot[data-scene-id="' + sceneID + '"].clicked ').length
    if(el && sceneHotspots.hotspotCount > 0){
      el.innerHTML = "  (" + clickedCount + "/" + sceneHotspots.hotspotCount + ")"
    }
    if((sceneHotspots.hotspotCount > 0 || !initializing) && clickedCount == sceneHotspots.hotspotCount){
      var playBtnElem = document.querySelector('#sceneList .scene[data-id="' + sceneID + '"] i')
      if(playBtnElem) playBtnElem.style["color"] = "#8f8f8f"
    }
  }
  function writeSceneNames(){
    var sceneNameMarkup = data.scenes.reduce(function(aggr, scene){
      return aggr + 
        '<a href="#" class="scene" data-id="' + scene.id + '">' +
          '<li class="text">' + 
            (scene.short_name ? scene.short_name : scene.name) + 
            '<span class="sceneCompletionCount"></span>' +
            '<i style="float: right; margin-top: 6px;" class="fas fa-chevron-circle-right"></i>' +
          '</li>' +
        '</a>'
    }, "")
    document.querySelector("#sceneList .scenes").innerHTML = sceneNameMarkup
    data.scenes.map((scene) => {
      updateSceneCompletionCounter(scene.id, true)
    })
  }
  function createTour() {
    //Write out nav
    writeSceneNames();

    // Viewer options.


    var viewerOpts = {
      controls: {
        mouseViewMode: configData.settings.mouseViewMode
      }
    };

    //attach the viewer to pano element
    var viewer = new Marzipano.Viewer(panoElement, viewerOpts);
    // Create scenes.
    var scenes = configData.scenes.map(function (data) {
      var urlPrefix = "tiles";
      var source = Marzipano.ImageUrlSource.fromString(
        urlPrefix + "/" + data.id + "/{z}/{f}/{y}/{x}.jpg", {
          cubeMapPreviewUrl: urlPrefix + "/" + data.id + "/preview.jpg"
        });
      var geometry = new Marzipano.CubeGeometry(data.levels);

      var limiter = Marzipano.RectilinearView.limit.traditional(data.faceSize, 100 * Math.PI / 180, 120 * Math.PI / 180);
      var view = new Marzipano.RectilinearView(data.initialViewParameters, limiter);

      var scene = viewer.createScene({
        source: source,
        geometry: geometry,
        view: view,
        pinFirstLevel: true
      });


      // Create link hotspots.
      data.linkHotspots.forEach(function (hotspot) {
        var element = createLinkHotspotElement(hotspot, data.id);
        scene.hotspotContainer().createHotspot(element, {
          yaw: hotspot.yaw,
          pitch: hotspot.pitch
        });
      });

      // Create info hotspots.
      data.infoHotspots.forEach(function (hotspot) {
        var element = createInfoHotspotElement(hotspot, data.id);
        scene.hotspotContainer().createHotspot(element, {
          yaw: hotspot.yaw,
          pitch: hotspot.pitch
        });
      });

      // Create Modal hotspots.
      data.modalHotspots.forEach(function (hotspot) {
        var element = createModalHotspotElement(hotspot, data.id);
        scene.hotspotContainer().createHotspot(element, {
          yaw: hotspot.yaw,
          pitch: hotspot.pitch
        });
      });

      // create role hotspots
      data.roleHotspots.forEach(function (hotspot) {
        var element = createRoleHotspotElement(hotspot, data.id);
        scene.hotspotContainer().createHotspot(element, {
          yaw: hotspot.yaw,
          pitch: hotspot.pitch
        });
      });

      // create direction hotspots
      data.directions.forEach(function (hotspot) {
        var element = createDirectionsHotspot(hotspot, data.id);
        scene.hotspotContainer().createHotspot(element, {
          yaw: hotspot.yaw,
          pitch: hotspot.pitch
        });
      });

      return {
        data: data,
        scene: scene,
        view: view
      };
    });

    // Set handler for scene switch.
    scenes.forEach(function (scene) {
      var el = document.querySelector('#sceneList .scene[data-id="' + scene.data.id + '"]');
      el.addEventListener('click', function () {
        switchScene(scene);

        // On mobile, hide scene list after selecting a scene.
        if (document.body.classList.contains('mobile')) {
          hideSceneList();
        }
      });
    });

    //dom elements for welcome modal
    var welcomeTitleElement = document.querySelector("#welcomeTitle");
    var welcomeDescElement = document.querySelector("#welcomeDescription");
    var objectivesElement = document.querySelector("#objectives");
    var creditsElement = document.querySelector("#credits");
    var welcomeModal = document.querySelector(".welcome");


    buildWelcomeModal();

    // load first scene

    switchScene(scenes[0]);
    hotspotVisited();


    // Set up autorotate, if enabled.
    var autorotate = Marzipano.autorotate({
      yawSpeed: 0.04,
      targetPitch: 0,
      targetFov: Math.PI / 2
    });
    if (configData.settings.autorotateEnabled) {
      autorotateToggleElement.classList.add('enabled');
      startAutorotate();

    }

    // Set handler for autorotate toggle.
    autorotateToggleElement.addEventListener('click', toggleAutorotate);

    // Set up fullscreen mode, if supported.
    // if (screenfull.enabled && data.settings.fullscreenButton) {
    //   document.body.classList.add('fullscreen-enabled');
    //   fullscreenToggleElement.addEventListener('click', toggleFullscreen);
    // } else {
    //   document.body.classList.add('fullscreen-disabled');
    // }

    // Set handler for scene list toggle.
    sceneListToggleElement.addEventListener('click', toggleSceneList);

    // Start with the scene list open on desktop.
    if (!document.body.classList.contains('mobile')) {
      document.querySelector("#welcome-modal .info-hotspot-close-wrapper").addEventListener("click", function () {
        showSceneList();
      })


      if (document.querySelector(".info-hotspot-modal.welcome .start-btn")) {
        document.querySelector(".info-hotspot-modal.welcome .start-btn").addEventListener("click", function () {
          showSceneList();
        })
      }

    } else {
      hideSceneList();
    }

    // DOM elements for view controls.
    var viewUpElement = document.querySelector('#viewUp');
    var viewDownElement = document.querySelector('#viewDown');
    var viewLeftElement = document.querySelector('#viewLeft');
    var viewRightElement = document.querySelector('#viewRight');
    var viewInElement = document.querySelector('#viewIn');
    var viewOutElement = document.querySelector('#viewOut');

    // Dynamic parameters for controls.
    var velocity = 0.7;
    var friction = 3;

    // Associate view controls with elements.
    var controls = viewer.controls();
    controls.registerMethod('upElement', new Marzipano.ElementPressControlMethod(viewUpElement, 'y', -velocity, friction), true);
    controls.registerMethod('downElement', new Marzipano.ElementPressControlMethod(viewDownElement, 'y', velocity, friction), true);
    controls.registerMethod('leftElement', new Marzipano.ElementPressControlMethod(viewLeftElement, 'x', -velocity, friction), true);
    controls.registerMethod('rightElement', new Marzipano.ElementPressControlMethod(viewRightElement, 'x', velocity, friction), true);
    controls.registerMethod('inElement', new Marzipano.ElementPressControlMethod(viewInElement, 'zoom', -velocity, friction), true);
    controls.registerMethod('outElement', new Marzipano.ElementPressControlMethod(viewOutElement, 'zoom', velocity, friction), true);

    function sanitize(s) {
      return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;');
    }


    function buildWelcomeModal() {
      var title = configData.welcome.title;
      var description = configData.welcome.description;
      var objectives = configData.welcome.objectives;
      var credits = configData.welcome.credits;

      welcomeTitleElement.innerHTML = title;
      welcomeDescElement.innerHTML = description;


      if (objectives) {
        objectives.forEach(function (objective) {
          var objEl = document.createElement("li");
          objEl.innerHTML = objective.text;
          objectivesElement.append(objEl);

        });
      }

      if (credits) {
        var creditsBtn = document.querySelector("#creditsBtn");

        if (creditsBtn) {
          creditsBtn.classList.remove("hide");

          creditsBtn.addEventListener("click", function () {
            creditsElement.classList.toggle("hide");
          })

          credits.forEach(function (credit) {
            var creditEl = document.createElement("li");
            creditEl.innerHTML = credit.name + ", " + credit.title;
            creditsElement.append(creditEl);
          });
        }
      }

      var hide = function () {

        welcomeModal.classList.remove('visible');

      };
      // Hide content when close icon is clicked.
      document.querySelector('.welcome .info-hotspot-close-wrapper').addEventListener('click', function () {
        hide();
        if (document.querySelector("footer")) {
          document.querySelector("footer").classList.toggle("visible");
        }
        if (configData.settings.autorotateEnabled) {
          autorotateToggleElement.classList.add('enabled');
          startAutorotate();
        }
      });

      objectiveToggleElement.addEventListener('click', function () {
        var welcomeModalElement = document.querySelector(".welcome");
        welcomeModalElement.classList.toggle('visible');
        if (document.querySelector("footer")) {
          document.querySelector("footer").classList.toggle("visible");
        }
      });

      var welcomeButton = document.querySelector("#welcome-modal .start-btn button");
      var pretest = configData.settings.pretest.enable;


      if (welcomeButton) {
        welcomeButton.type = "button";
        welcomeButton.addEventListener('click', function () {
          hide();
          if (configData.settings.autorotateEnabled) {
            autorotateToggleElement.classList.add('enabled');
            startAutorotate();
          }
        });

        if (pretest) {

          preTestBtn(welcomeButton);

        } else {
          welcomeButton.innerHTML = "Start Tour";
        }
      }
      welcomeModal.classList.add("visible");

      saveSceneListStatus();
    }

    function switchScene(scene) {

      var fun = transitionFunctions['throughBlack'];
      var ease = easing['easeInOutExpo'];

      stopAutorotate();
      scene.view.setParameters(scene.data.initialViewParameters);

      if (firstLoad) {
        scene.scene.switchTo({
          transitionDuration: 1000,
        });
        firstLoad = false;
      } else {
        scene.scene.switchTo({
          transitionDuration: 1000,
          transitionUpdate: fun(ease)
        });
      }

      startAutorotate();
      updateSceneName(scene);
      updateSceneList(scene);
      updateMapPosition(scene);
    }

    function switchSceneBack(scene, viewParameters) {

      var fun = transitionFunctions['throughBlack'];
      var ease = easing['easeInOutExpo'];

      stopAutorotate();
      scene.view.setParameters(viewParameters);

      scene.scene.switchTo({
        transitionDuration: 1000,
        transitionUpdate: fun(ease)
      });

      startAutorotate();
      updateSceneName(scene);
      updateSceneList(scene);
      updateMapPosition(scene);
    }

    function updateSceneName(scene) {
      updateSceneCompletionCounter(scene.data.id)
      sceneNameElement.innerHTML = sanitize(scene.data.name);
    }

    function updateSceneList(scene) {
      for (var i = 0; i < sceneElements.length; i++) {
        var el = sceneElements[i];
        if (el.getAttribute('data-id') === scene.data.id) {
          el.classList.add('current');
        } else {
          el.classList.remove('current');
        }
      }
    }

    function updateMapPosition(scene) {

      var mapEl = document.querySelector("#point");
      var sceneId = scene.data.id.split("-");
      var newPosition = "locus" + sceneId[0];
      var oldPosition = mapEl.classList.value;
      mapEl.classList.remove(oldPosition);
      mapEl.classList.add(newPosition);

    }

    function updateMapOrientation(rotation) {
      if (!rotation) rotation = 0;
      //Add rotation transform to map indicator
      var mapEl = document.querySelector("#point svg");
      mapEl.style.transform = "rotate(" + rotation + "deg)";
    }

    var positionUpdateTimeout;
    viewer.addEventListener('viewChange', function (e) {
      //Take incoming yaw in radians and convert to degrees to set map orientation
      updateMapOrientation(180 * viewer.view().yaw() / Math.PI)
    });

    function showSceneList() {
      sceneListElement.classList.add('enabled');
      sceneListToggleElement.classList.add('enabled');
      mapElement.classList.add('enabled');
      counterElement.classList.add('enabled');
    }

    function hideSceneList() {
      sceneListElement.classList.remove('enabled');
      sceneListToggleElement.classList.remove('enabled');
      mapElement.classList.remove('enabled');
      counterElement.classList.remove('enabled');
    }

    function toggleSceneList() {
      sceneListElement.classList.toggle('enabled');
      sceneListToggleElement.classList.toggle('enabled');
      mapElement.classList.toggle('enabled');
      counterElement.classList.toggle('enabled');
    }

    function startAutorotate() {
      if (!autorotateToggleElement.classList.contains('enabled')) {
        return;
      }
      viewer.startMovement(autorotate);
      viewer.setIdleMovement(3000, autorotate);
    }

    function stopAutorotate() {
      viewer.stopMovement();
      viewer.setIdleMovement(Infinity);
    }

    function toggleAutorotate() {
      if (autorotateToggleElement.classList.contains('enabled')) {
        autorotateToggleElement.classList.remove('enabled');
        stopAutorotate();
      } else {
        autorotateToggleElement.classList.add('enabled');
        startAutorotate();
      }
    }

    function toggleFullscreen() {
      screenfull.toggle();
      if (screenfull.isFullscreen) {
        fullscreenToggleElement.classList.add('enabled');
      } else {
        fullscreenToggleElement.classList.remove('enabled');
      }
    }

    function createLinkHotspotElement(hotspot) {

      // Create wrapper element to hold icon and tooltip.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('link-hotspot');

      // Create image element for info hotspot.
      var icon = document.createElement('img');
      icon.src = 'img/link.png';
      icon.classList.add('link-hotspot-icon');


      // Set rotation transform.
      var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
      for (var i = 0; i < transformProperties.length; i++) {
        var property = transformProperties[i];
        icon.style[property] = 'rotate(' + hotspot.rotation + 'rad)';
      }

      // Add click event handler.
      wrapper.addEventListener('click', function () {

        if (hotspot.back) {

          switchSceneBack(findSceneById(hotspot.target), hotspot.back);

        } else {

          switchScene(findSceneById(hotspot.target));

        }

        // change orientation if a back link
      });

      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

      // Create tooltip element.
      var tooltip = document.createElement('div');
      tooltip.classList.add('hotspot-tooltip');
      tooltip.classList.add('link-hotspot-tooltip');
      tooltip.innerHTML = findSceneDataById(hotspot.target).name;

      wrapper.appendChild(icon);
      wrapper.appendChild(tooltip);

      return wrapper;
    }

    function createInfoHotspotElement(hotspot, sceneID) {

      // Create wrapper element to hold icon and tooltip.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('info-hotspot');
      wrapper.classList.add('info-text');
      wrapper.setAttribute("data-scene-id", sceneID)

      // Create hotspot/tooltip header.
      var header = document.createElement('div');
      header.classList.add('info-hotspot-header');

      // Create image element.
      var iconWrapper = document.createElement('div');
      iconWrapper.classList.add('info-hotspot-icon-wrapper');
      // var icon = document.createElement('img');
      // icon.src = 'img/info.png';
      // icon.classList.add('info-hotspot-icon');
      var icon = document.createElement('i');
      icon.classList.add('fas', 'fa-info', 'fa-2x');
      iconWrapper.appendChild(icon);


      // Create title element.
      var titleWrapper = document.createElement('div');
      titleWrapper.classList.add('info-hotspot-title-wrapper');
      var title = document.createElement('div');
      title.classList.add('info-hotspot-title');
      title.innerHTML = hotspot.title;
      titleWrapper.appendChild(title);

      // Create close element.
      var closeWrapper = document.createElement('div');
      closeWrapper.classList.add('info-hotspot-close-wrapper');
      var closeIcon = document.createElement('img');
      closeIcon.src = 'img/close.png';
      closeIcon.classList.add('info-hotspot-close-icon');
      closeWrapper.appendChild(closeIcon);

      // Construct header element.
      header.appendChild(iconWrapper);
      header.appendChild(titleWrapper);
      header.appendChild(closeWrapper);


      // Create text element.
      var text = document.createElement('div');
      text.classList.add('info-hotspot-text');

      text.innerHTML = "<p>" + hotspot.text + "</p>";

      // Place header and text into wrapper element.
      wrapper.appendChild(header);
      wrapper.appendChild(text);


      // Create a modal for the hotspot content to appear on mobile mode.
      var modal = document.createElement('div');
      modal.innerHTML = wrapper.innerHTML;
      modal.classList.add('info-hotspot-modal');
      document.body.appendChild(modal);

      var toggle = function () {
        wrapper.classList.toggle('visible');
        modal.classList.toggle('visible');

      };

      // Show content when hotspot is clicked.
      wrapper.querySelector('.info-hotspot-header').addEventListener('click', toggle);

      // Hide content when close icon is clicked.
      modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', toggle);

      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

      return wrapper;
    }

    function createModalHotspotElement(hotspot, sceneID) {

      // Create wrapper element to hold icon and tooltip.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('info-hotspot');
      wrapper.classList.add('modal-hotspot');
      wrapper.setAttribute("data-scene-id", sceneID)

      // Create hotspot/tooltip header.
      var header = document.createElement('div');
      header.classList.add('info-hotspot-header');

      // Create image element.
      var iconWrapper = document.createElement('div');
      iconWrapper.classList.add('info-hotspot-icon-wrapper');
      // var icon = document.createElement('img');
      // icon.src = 'img/modal.png';
      // icon.classList.add('modal-hotspot-icon');
      var icon = document.createElement('i');
      icon.classList.add('fas', 'fa-image', 'fa-2x', 'modal-hotspot-icon');
      iconWrapper.appendChild(icon);

      // Create title element.
      var titleWrapper = document.createElement('div');
      titleWrapper.classList.add('info-hotspot-title-wrapper');
      var title = document.createElement('div');
      title.classList.add('info-hotspot-title');
      title.innerHTML = hotspot.title;
      titleWrapper.appendChild(title);

      // Create close element.
      var closeWrapper = document.createElement('div');
      closeWrapper.classList.add('info-hotspot-close-wrapper');
      var closeIcon = document.createElement('img');
      closeIcon.src = 'img/close.png';
      closeIcon.classList.add('info-hotspot-close-icon');
      closeWrapper.appendChild(closeIcon);

      // Construct header element.
      header.appendChild(iconWrapper);
      header.appendChild(titleWrapper);
      header.appendChild(closeWrapper);

      //Create image element or slideshow
      var image = document.createElement('div');
      var modalImages = hotspot.images;

      if (modalImages.length > 1) {

        image.classList.add('slider')
        var figureEl = document.createElement('figure');

        //add each image to parent div
        modalImages.forEach(function (image) {
          var imageSrc = image.imageURL;
          var imageAlt = image.alt;
          var imageText = image.text;
          var imageTextEl = document.createElement('p');
          var imageNum = modalImages.indexOf(image) + 1;
          var totalImages = modalImages.length;
          if (imageText) {
            imageTextEl.innerHTML = image.text + " (" + imageNum + " of " + totalImages + ") ";
          } else {
            imageTextEl.innerHTML = " (" + imageNum + " of " + totalImages + ") ";
          }
          var imageEl = document.createElement('img');
          imageEl.src = imageSrc;
          imageEl.alt = imageAlt;
          figureEl.appendChild(imageTextEl);
          figureEl.appendChild(imageEl);

        });
        image.appendChild(figureEl);

      } else {
        var imageEl = document.createElement('img');
        imageEl.src = modalImages[0].imageURL;
        imageEl.alt = modalImages[0].alt;
        imageEl.classList.add('info-hotspot-image');
        image.appendChild(imageEl);
      }


      // Create text element.
      var text = document.createElement('div');
      text.classList.add('info-hotspot-text');

      text.innerHTML = "<p>" + hotspot.text + "</p>";

      // Place header and text into wrapper element.
      wrapper.appendChild(header);
      wrapper.appendChild(text);
      text.appendChild(image);

      // Create a modal for the hotspot content to appear on mobile mode.
      var modal = document.createElement('div');
      modal.innerHTML = wrapper.innerHTML;
      modal.classList.add('info-hotspot-modal');
      document.body.appendChild(modal);

      // Create a modal for desktop.
      var modalDesktop = document.createElement('div');
      modalDesktop.innerHTML = wrapper.innerHTML;
      modalDesktop.classList.add('modal-hotspot-modal');
      document.body.appendChild(modalDesktop);

      var toggle = function () {
        wrapper.classList.toggle('visible');
        modal.classList.toggle('visible');
        modalDesktop.classList.toggle('visible');
        document.body.classList.toggle('dialogIsOpen');
      };

      // Show content when hotspot is clicked. save status of info panels
      wrapper.querySelector('.info-hotspot-header').addEventListener('click', function () {
        saveSceneListStatus();
        toggle();
        hideSceneList();
      });

      // Hide content when close icon is clicked.
      modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', function () {
        if (sceneList.classList == "reopen") {
          toggle();
          showSceneList();
          sceneList.classList.remove("reopen");
        } else {
          toggle();
        }

      });
      modalDesktop.querySelector('.info-hotspot-close-wrapper').addEventListener('click', function () {
        if (sceneList.classList == "reopen") {
          toggle();
          showSceneList();
          sceneList.classList.remove("reopen");
        } else {
          toggle();
        }
      });

      viewer.addEventListener('sceneChange', function () {
        modalDesktop.classList.remove('visible');
      });

      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

      return wrapper;
    }

    function createRoleHotspotElement(hotspot, sceneID) {

      // Create wrapper element to hold icon and tooltip.
      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('info-hotspot');
      wrapper.classList.add('modal-hotspot');
      wrapper.setAttribute("data-scene-id", sceneID)

      // Create hotspot/tooltip header.
      var header = document.createElement('div');
      header.classList.add('info-hotspot-header');

      // Create image element.
      var iconWrapper = document.createElement('div');
      iconWrapper.classList.add('info-hotspot-icon-wrapper');
      // var icon = document.createElement('img');
      // icon.src = 'img/modal.png';
      //icon.classList.add('modal-hotspot-icon');
      var icon = document.createElement('i');
      icon.classList.add('fas', 'fa-user-md', 'fa-2x', 'modal-hotspot-icon');
      iconWrapper.appendChild(icon);

      // Create title element.
      var titleWrapper = document.createElement('div');
      titleWrapper.classList.add('info-hotspot-title-wrapper');
      var title = document.createElement('div');
      title.classList.add('info-hotspot-title');
      title.innerHTML = hotspot.title;
      titleWrapper.appendChild(title);

      // Create close element.
      var closeWrapper = document.createElement('div');
      closeWrapper.classList.add('info-hotspot-close-wrapper');
      var closeIcon = document.createElement('img');
      closeIcon.src = 'img/close.png';
      closeIcon.classList.add('info-hotspot-close-icon');
      closeWrapper.appendChild(closeIcon);

      // Construct header element.
      header.appendChild(iconWrapper);
      header.appendChild(titleWrapper);
      header.appendChild(closeWrapper);

      //Create image element
      var image = document.createElement('img');
      image.src = hotspot.imageURL;
      image.classList.add('info-hotspot-image');


      // Create text element.
      var text = document.createElement('div');
      text.classList.add('info-hotspot-text');

      text.innerHTML = "<p>" + hotspot.text + "</p>";

      // Place header and text into wrapper element.
      wrapper.appendChild(header);
      wrapper.appendChild(text);
      //text.insertBefore(image, text.firstChild);
      text.appendChild(image);

      // Create a modal for the hotspot content to appear on mobile mode.
      var modal = document.createElement('div');
      modal.innerHTML = wrapper.innerHTML;
      modal.classList.add('info-hotspot-modal');
      document.body.appendChild(modal);

      // Create a modal for desktop.
      var modalDesktop = document.createElement('div');
      modalDesktop.innerHTML = wrapper.innerHTML;
      modalDesktop.classList.add('modal-hotspot-modal');
      document.body.appendChild(modalDesktop);

      var toggle = function () {
        wrapper.classList.toggle('visible');
        modal.classList.toggle('visible');
        modalDesktop.classList.toggle('visible');
        document.body.classList.toggle('dialogIsOpen');

      };

      wrapper.querySelector('.info-hotspot-header').addEventListener('click', function () {
        saveSceneListStatus();
        toggle();
        hideSceneList();
      });

      // Hide content when close icon is clicked.
      modal.querySelector('.info-hotspot-close-wrapper').addEventListener('click', function () {
        if (sceneList.classList == "reopen") {
          toggle();
          showSceneList();
          sceneList.classList.remove("reopen");
        } else {
          toggle();
        }
      });
      modalDesktop.querySelector('.info-hotspot-close-wrapper').addEventListener('click', function () {
        if (sceneList.classList == "reopen") {
          toggle();
          showSceneList();
          sceneList.classList.remove("reopen");
        } else {
          toggle();
        }
      });
      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

      return wrapper;
    }

    function createDirectionsHotspot(hotspot) {

      var wrapper = document.createElement('div');
      wrapper.classList.add('hotspot');
      wrapper.classList.add('link-hotspot');

      var direction = hotspot.direction;
      var arrows = document.createElement('div');
      arrows.classList.add('arrowAnim');

      arrows.innerHTML = '<div class="arrowSliding-left"><div class="arrow"></div></div><div class="arrowSliding-left delay1"><div class="arrow"></div></div><div class="arrowSliding-left delay2"><div class="arrow"></div></div><div class="arrowSliding-left delay3"><div class="arrow"></div></div>';


      // Set rotation transform.
      var transformProperties = ['-ms-transform', '-webkit-transform', 'transform'];
      var rotation = 0;

      switch (direction) {
        case "right":
          rotation = -180;
          break;
        case "left":
          rotation = 0;
          break;
        case "up":
          rotation = -270;
          break;
        case "down":
          rotation = -90;
          break;
        default:
          rotation = 0;
      }

      for (var i = 0; i < transformProperties.length; i++) {
        var property = transformProperties[i];
        arrows.style[property] = 'rotate(' + rotation + 'deg)';
      }

      // Add click event handler.
      wrapper.addEventListener('click', function () {

      });

      // Prevent touch and scroll events from reaching the parent element.
      // This prevents the view control logic from interfering with the hotspot.
      stopTouchAndScrollEventPropagation(wrapper);

      // Create tooltip element.
      var tooltip = document.createElement('div');
      tooltip.classList.add('hotspot-tooltip');
      tooltip.classList.add('link-hotspot-tooltip');
      tooltip.innerHTML = hotspot.description;

      wrapper.appendChild(arrows);
      wrapper.appendChild(tooltip);

      return wrapper;
    }

    function closeOtherHotspots(hotspot) {

    }

    function closeAllHotspots() {

    }
    
    function findSceneById(id) {
      for (var i = 0; i < scenes.length; i++) {
        if (scenes[i].data.id === id) {
          return scenes[i];
        }
      }
      return null;
    }

    function findSceneDataById(id) {
      for (var i = 0; i < configData.scenes.length; i++) {
        if (configData.scenes[i].id === id) {
          return configData.scenes[i];
        }
      }
      return null;
    }

    // Prevent touch and scroll events from reaching the parent element.
    function stopTouchAndScrollEventPropagation(element, eventList) {
      var eventList = ['touchstart', 'touchmove', 'touchend', 'touchcancel',
        'wheel', 'mousewheel'
      ];
      for (var i = 0; i < eventList.length; i++) {
        element.addEventListener(eventList[i], function (event) {
          event.stopPropagation();
        });
      }
    }

  }
  //------------------- end tour viewer

  function saveSceneListStatus() {
    var sceneList = document.querySelector("#sceneList");

    if (sceneList.classList == "enabled") {
      sceneList.classList.add("reopen");

      return true;
    } else {

      return false;
    }
  }

  var hotspotsTotal = 0;
  var hotspotsClicked = 0;

  function updateHotspotTotalCounter() {
    document.querySelector("#hotspotCounter span").innerHTML = hotspotsClicked + "/" + hotspotsTotal
  }

  function hotspotVisited() {
    //make hotspot counter visible
    counterElement.classList.remove("hide");
    var icon = '<i class="fas fa-check-circle green"></i>';
    var elements = document.querySelectorAll(".hotspot.info-hotspot");
    hotspotsTotal = elements.length;

    updateHotspotTotalCounter()

    elements.forEach(function (hotspot) {
      hotspot.addEventListener("click", function (e) {
        var target = (e.currentTarget) ? e.currentTarget : e.srcElement;
        var newEl = document.createElement("i");
        newEl.classList.add('fas', 'fa-check-circle', 'visited');


        if (!target.parentNode.classList.contains('clicked')) {
          target.appendChild(newEl);
          target.classList.add("clicked");
        }

        var hotspotClickedElements = document.body.querySelectorAll(".clicked");
        hotspotsClicked = hotspotClickedElements.length;

        updateHotspotTotalCounter();

        //Hotspot scene tracking
        updateSceneCompletionCounter(hotspot.getAttribute("data-scene-id"));

        if ((hotspotsTotal == hotspotsClicked) && data.settings.posttest.enable) {


          postTestBtn(document.body.querySelector("#hotspotCounter"));
          configData.settings.posttest.enable = false;
        }
      });
    });
  }

  function preTestBtn(welcomeButton) {
    var pretestURL = configData.settings.pretest.url;
    var welcomeButtonForm = document.querySelector("form.start-btn");

    welcomeButtonForm.action = pretestURL;
    welcomeButtonForm.method = "get";
    welcomeButtonForm.target = "_blank";
    welcomeButton.type = "submit";
    welcomeButton.innerHTML = "Begin Pretest";
    welcomeButtonForm.classList.add("pre-test");

  }

  function postTestBtn(el) {

    var postTestUrl = configData.settings.posttest.url;

    var postTestBtn = document.createElement("button");
    var postTestForm = document.createElement("form");

    postTestForm.action = postTestUrl;
    postTestForm.method = "get";
    postTestForm.target = "_blank";
    postTestBtn.type = "submit";
    postTestBtn.innerHTML = "Begin post test";
    postTestForm.classList.add("post-test");
    postTestForm.appendChild(postTestBtn);

    el.appendChild(postTestForm);
  }

  function debugVisted() {

    var icon = '<i class="fas fa-check-circle green"></i>';
    var elements = document.querySelectorAll(".hotspot.info-hotspot");
    hotspotsTotal = elements.length;

    document.querySelector("#debugBtn button").addEventListener("click", function () {
      console.log("debug: " + hotspotsTotal + " hotspots visted.");

      elements.forEach(function (hotspot) {
        var newEl = document.createElement("i");
        newEl.classList.add('fas', 'fa-check-circle', 'visited');

        //if ( !hotspot.parentNode.classList.contains('clicked') ) {
        hotspot.appendChild(newEl);
        hotspot.classList.add("clicked");
        //}

      });
      var hotspotClickedElements = document.body.querySelectorAll(".clicked");
      hotspotsClicked = hotspotClickedElements.length;
      document.querySelector("#hotspotCounter span").innerHTML = hotspotsClicked + "/" + hotspotsTotal;
    });

  }

  function hideHint() {
    document.querySelector("#hint").classList.add("hide");
  }

  function showHint() {
    document.querySelector("#hint").classList.remove("hide");
  }
  // Display the initial scene.
  document.addEventListener("DOMContentLoaded", function (event) {
    if (document.querySelector("#debugBtn")) {
      debugVisted();
    };
    if (configData.settings.introVideo.enable) {
      showHint();
      createVideo();
    } else {
      hideHint();
      createTour();
    }
  })
})();