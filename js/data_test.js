var APP_DATA = {
  "scenes": [
//lobby center
    {
      "id": "0-17th_floor_lobby_center",
      "name": "17th Floor Lobby Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.298181134273209,
        "pitch": -0.0018811932057367642,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0339218921167479,
          "pitch": 0.04799528483026094,
          "rotation": 0,
          "target": "5-east_hallway"
        }

      ],
      "infoHotspots": [
        {
          "yaw": 1.5,
          "pitch": 0.026907942254371875,
          "title": "Family Waiting room",
          "text": "Here family of patients can wait for their relatives and receive updates from physicians and staff."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
// east hallway
    {
      "id": "5-east_hallway",
      "name": "East Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0361393737060602,
        "pitch": 0.16178261569382357,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8105069510866834,
          "pitch": 0.053663110822936844,
          "rotation": 0,
          "target": "0-17th_floor_lobby_center",
          "back" : {
            "yaw": 0,
            "pitch": 0,
            "fov": 1.8073895612144246
          }
        },
        {
          "yaw": -0.5523118661291733,
          "pitch": 0.09450122386454751,
          "rotation": 0,
          "target": "6-east_center"
        }
      ],
      "infoHotspots": [],
      "modalHotspots": [],
      "roleHotspots": [
        {
          "yaw": -1.5,
          "pitch": 0.0,
          "title": "RN",
          "text": "Nurses (RNs) carry out practitioners medical orders and provide frequent patient evaluations.  RNs will have between 1-6 patients that they are caring for depending on the level of care needed by the patient.  One can communicate with an RN in-person, by phone call, or by secure chat in Epic Haiku.",
          "imageURL":"",
          "media":"" // to image carousel in new window
        }
      ],
      "directions": []
    },
// east center
    {
      "id": "6-east_center",
      "name": "East Center",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.586398206024528,
        "pitch": 0.321684038181953,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7006159186003877,
          "pitch": 0.06917474246086996,
          "rotation": 0,
          "target": "5-east_hallway",
          "back" : {
            "yaw": 3,
            "pitch": 0,
            "fov": 1.8073895612144246
          }
        }
      ],
      "infoHotspots": [],
      "modalHotspots": [
        {
          "yaw": -3.1,
          "pitch": 0.25773843126706275,
          "title": "MARTTI",
          "text": "This is our video or audio translation system at Tisch.  It can be brought in to patient rooms to communicate with non-primarily english speaking patients.  Many languages have video interpreting, and if not, it will connect to audio only.  There is an access code on the back of the MAARTI that you will need to initiate your session.",
          "images" : [
            {
              "imageURL":"img/martti.png",
              "imageAlt":"martti interpreter system",
              "text" : ""
            }
          ],

          "actionLink":"https://nyulangone.org" // to image carousel in new window
        }
      ],
      "roleHotspots": [],
      "directions": []
    },
  ],
  "name": "Medicine Orientation Virtual Tour",
  "welcome": {
    "title":"Medicine Virtual Tour - TEST",
    "description" : "Welcome to the Virtual Tour of the Medicine Floor in Tisch. This will provide you a sense of the space, materials and people you will meet when you arrive. Use your mouse or finger to move around the 360° images.",
    "objectives": [
      {
        "id": "01",
        "text": "Complete the pretest and post-test if available."
      },
      {
        "id": "02",
        "text": "Find and read all information markers."
      },
      {
        "id": "03",
        "text": "Understand the roles of different team members."
      }
    ],
    "credits" : [
      {
        "name":"Aron Mednick",
        "title" :"MD, Assistant Director, Clerkship in Medicine"
      },
      {
        "name":"Greg Dorsainville",
        "title" :"Lead Developer"
      },
      {
        "name":"Jordan Poles",
        "title" :"Developer"
      },
      {
        "name":"Jillian Halpern",
        "title" :"Instructional Designer"
      },
      {
        "name":"Greta Elysee",
        "title" :"Production Assistant"
      }
    ],
    "action": ""
  },
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false,
    "introVideo" : {
      "enable": false,
      "url": 'video/elevator.mp4'
    },
    "pretest": {
      "enable": true,
      "url":"https://goo.gl/forms/EhKJOFksmGkGeHeu1"
    },
    "posttest": {
      "enable": true,
      "url":"https://goo.gl/forms/mWmuEZSAi1RvFFFj2"
    }
  }
};
