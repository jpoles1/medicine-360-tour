var APP_DATA = {
  "scenes": [
    {
      "id": "0-12th-floor-elevator",
      "name": "12th Floor Elevator",
      "short_name": "KP12 Elevator",
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
        "yaw": 2.771479676069288,
        "pitch": 0.07075448650457616,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": -1.335340876897659,
          "pitch": 0.03994908170050593,
          "rotation": 0,
          "target": "1-12th-floor-lobby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4239491153742492,
          "pitch": 0.04635850740141123,
          "title": "Unit Entrance",
          "text": "These doors lead to the core or the unit.  From there you can go North, East, South or West.  You would use these doors to get to the service elevator or to conference room KP12-301."
        },
        {
          "yaw": -2.8984281043883353,
          "pitch": -0.1901209412083471,
          "title": "Kimmel Elevators",
          "text": "These elevators are the main elevators for Visitors and Staff.  The elevator stops on nearly all floors but has limited access to Hassenfeld Patient Care Areas.  The Kimmel Cafe is located on KP 7 and is open for Breakfast and Lunch."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "1-12th-floor-lobby",
      "name": "12th Floor Lobby",
      "name": "KP12 Lobby",
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
        "yaw": 2.0849548153894855,
        "pitch": 0.23422688406656178,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": 0.15628523507344028,
          "pitch": 0.0771107775905957,
          "rotation": 1.5707963267948966,
          "target": "0-12th-floor-elevator"
        },
        {
          "yaw": -1.6987227695480698,
          "pitch": 0.1570354729646688,
          "rotation": 0,
          "target": "2-room-12-01"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.14079521572474,
          "pitch": 0.009961384766221215,
          "title": "Waiting Room",
          "text": "This is the visitor waiting room.  This room faces first avenue (west)."
        },
        {
          "yaw": 2.4194627536308477,
          "pitch": 0.011025908408575091,
          "title": "Conference Room",
          "text": "This conference room has different purposes on different units.  Some units use it as a conference room for academic and patient care meetings, while other units use it as a workroom for floor staff."
        },
        {
          "yaw": 1.6626798573221446,
          "pitch": 0.16323712974631022,
          "title": "Concierge",
          "text": "At this desk you will find the unit Concierge.  The unit Concierge has many roles including answering calls from outside the unit as well as directing visitors and staff."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "2-room-12-01",
      "name": "Room 12-01",
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
        "yaw": -0.06068755930952818,
        "pitch": -0.11178960594147824,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": -3.1125974863641304,
          "pitch": 0.13485790294741307,
          "rotation": 0,
          "target": "1-12th-floor-lobby"
        },
        {
          "yaw": -0.046074391481608856,
          "pitch": 0.058798999363951054,
          "rotation": 0,
          "target": "3-room-12-02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9130148084522212,
          "pitch": -0.14096380895268013,
          "title": "Room 12-01",
          "text": "Each patient room is a single occupancy room and is labeled with the floor and room number (ie. 12-01 - 12-34)."
        },
        {
          "yaw": 2.126658397281455,
          "pitch": -0.0373562956978013,
          "title": "Hand Sanitizer",
          "text": "EDIT: Hand Sanitizer - maybe show a hand using the hand sanitizer.  Explain that staff should wash their hand on entering and exiting a room every time."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "3-room-12-02",
      "name": "Room 12-02",
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
        "yaw": -0.07552229602963223,
        "pitch": -0.07630118193078417,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": 3.124756987789409,
          "pitch": 0.060059329966643205,
          "rotation": 0,
          "target": "2-room-12-01",
          "back" : {
            "yaw": -3,
            "pitch": 0,
            "fov": 1.8073895612144246
          }
        },
        {
          "yaw": 0.22031270315098794,
          "pitch": 0.12349636465499003,
          "rotation": 1.5707963267948966,
          "target": "5-central-station-north-01"
        },
        {
          "yaw": 1.6200867254483793,
          "pitch": 0.10977883503787211,
          "rotation": 0,
          "target": "4-equipment-hall"
        },
        {
          "yaw": -0.10454678283580066,
          "pitch": -0.05397634175779231,
          "rotation": 4.71238898038469,
          "target": "9-room-12-04"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.0532421361502422,
          "pitch": 0.2917912525744679,
          "title": "Digital Medication Drawer (DMD)",
          "text": "Outside of each patient room is a dedicated Digital Medication Drawer (DMD).  The DMD is refilled by pharmacy and utilized by nursing for patient medication delivery.  Pharmacy and nurses can access these drawers using biometric access."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "4-equipment-hall",
      "name": "Equipment Hall",
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
        "pitch": 0,
        "yaw": -3.2,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0,
          "pitch": 0,
          "rotation": 0,
          "target": "3-room-12-02",
          "back" : {
            "yaw": 0,
            "pitch": 0,
            "fov": 1.8073895612144246
          }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.433589836345835,
          "pitch": -0.21283391061544776,
          "title": "Staff Bathroom",
          "text": "Each floor has 5 non-patient restrooms.  Can you find them all?  One is hidden!"
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "5-central-station-north-01",
      "name": "Central Station North #1",
      "short_name": "Central Stn #1",
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
        "yaw": -2.233302082665281,
        "pitch": 0.14905347167873906,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": -1.3875511692241016,
          "pitch": 0.1293360634631906,
          "rotation": 9.42477796076938,
          "target": "7-central-station-north-03"
        },
        {
          "yaw": -1.9055223424520094,
          "pitch": 0.09660672485629007,
          "rotation": 3.141592653589793,
          "target": "6-central-station-north-02"
        },
        {
          "yaw": -2.5871256939013527,
          "pitch": 0.07130149204497904,
          "rotation": 3.141592653589793,
          "target": "8-central-station-north-04"
        },
        {
          "yaw": 2.673156047211002,
          "pitch": 0.10683231626030931,
          "rotation": 4.71238898038469,
          "target": "9-room-12-04"
        },
        {
          "yaw": -0.22830700300221984,
          "pitch": 0.02694086065567447,
          "rotation": 0,
          "target": "3-room-12-02",
          "back" : {
            "yaw": -3,
            "pitch": 0,
            "fov": 1.8073895612144246
          }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.117784670473564,
          "pitch": 0.0117270370954774,
          "title": "Infection Control Signs",
          "text": "On these placards you will find infection control signs: There are multiple different infection control signs with differing precautions that are necessary.  The signs clearly lay out the intended barrier methods for entering the room.  (see below for pictures)."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "6-central-station-north-02",
      "name": "Central Station North #2",
      "short_name": "Central Stn #2",
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
        "yaw": -2.8145537876648294,
        "pitch": 0.3815059096539084,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": 1.8984275294034738,
          "pitch": 0.33293170748851253,
          "rotation": 3.141592653589793,
          "target": "5-central-station-north-01"
        },
        {
          "yaw": -1.014584546915021,
          "pitch": 0.0751846991565337,
          "rotation": 3.141592653589793,
          "target": "7-central-station-north-03"
        },
        {
          "yaw": -2.7412924927362745,
          "pitch": 0.14050438752047967,
          "rotation": 3.141592653589793,
          "target": "8-central-station-north-04"
        },
        {
          "yaw": 2.551891867810906,
          "pitch": 0.06642114068316829,
          "rotation": 4.71238898038469,
          "target": "9-room-12-04"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -2.1924718317171106,
          "pitch": 0.07274527201922965,
          "title": "Workstations",
          "text": "There are two types of workstations in the Kimmel Pavilion.  These semi-enclosed workstation and the computers by the windows are “full workstations” and allow for full log in to the NYU network desktop.  The other workstations in the CIC and the workstations on wheels are “Wyse terminals” and have access to Epic and select programs only - but allow for much more rapid Epic access."
        },
        {
          "yaw": -0.534853391749456,
          "pitch": -0.18674743497386714,
          "title": "List of Patients",
          "text": "Here you will find the list of patients and their associated providers (Attendings, NP/PA/Residents, Nurses, PCTs).  The smaller screen is the telemetry systems for the unit."
        },
        {
          "yaw": 0.8385935230762325,
          "pitch": 0.07913437724285366,
          "title": "Pneumatic Tubes",
          "text": "Pneumatic tubes are used to send and receive medications and laboratories."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "7-central-station-north-03",
      "name": "Central Station North #3",
      "short_name": "Central Stn #3",
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
        "yaw": 0.12144443593187404,
        "pitch": 0.21377271212230298,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": 2.694683749041495,
          "pitch": 0.1711669716660733,
          "rotation": 0,
          "target": "6-central-station-north-02"
        },
        {
          "yaw": 2.0471986672645626,
          "pitch": 0.166736808204341,
          "rotation": 0,
          "target": "5-central-station-north-01"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8099820762608783,
          "pitch": -0.05679475133105072,
          "title": "Red emergency outlets",
          "text": "Red outlets are special in that they will continue to have power during a power outage.  They will run off the back-up generators.  Vital equipment (such as a ventilator) should be accessing red outlets."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "8-central-station-north-04",
      "name": "Central Station North #4",
      "short_name": "Central Stn #4",
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
        "yaw": -0.4652733041148487,
        "pitch": 0.4134446527967519,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": 2.082421472844988,
          "pitch": 0.3587056073801058,
          "rotation": 0,
          "target": "6-central-station-north-02"
        },
        {
          "yaw": 2.723362501296206,
          "pitch": 0.06887695864535814,
          "rotation": 0,
          "target": "5-central-station-north-01"
        },
        {
          "yaw": 1.6935093785119788,
          "pitch": 0.013339275117381533,
          "rotation": 0,
          "target": "7-central-station-north-03"
        },
        {
          "yaw": -1.9145905738067182,
          "pitch": 0.036651459788227925,
          "rotation": 0,
          "target": "10-room-12-05"
        },
        {
          "yaw": -2.45122930925087,
          "pitch": 0.08256010433270689,
          "rotation": 3.141592653589793,
          "target": "9-room-12-04"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.09012863592589326,
          "pitch": 0.1907337890361429,
          "title": "Crash Cart",
          "text": "Crash Carts can be found in the CIC.  These carts house key medication and equipment needed in a rapid response or a cardiac arrest.  It would be very reasonable to have a nurse familiarize you to these carts when you first start working in Kimmel."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "9-room-12-04",
      "name": "Room 12-04",
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
        "yaw": -0.6082250024113485,
        "pitch": 0.06565555389183686,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": -0.12801700851034248,
          "pitch": 0.14108920122341218,
          "rotation": 0,
          "target": "10-room-12-05"
        },
        {
          "yaw": 2.804665208240639,
          "pitch": 0.13484878384400467,
          "rotation": 4.71238898038469,
          "target": "5-central-station-north-01"
        },
        {
          "yaw": 3.112739201310781,
          "pitch": 0.08504587305118605,
          "rotation": 0,
          "target": "3-room-12-02",
          "back" : {
            "yaw": -3,
            "pitch": 0,
            "fov": 1.5
          }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.9978836100785573,
          "pitch": 0.5425557853579122,
          "title": "CIC",
          "text": "There are 4 *** (CIC) on each floor in Kimmel.  Each CIC houses workstations, telemetry monitors, phones and various other equipment.  "
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "10-room-12-05",
      "name": "Room 12-05",
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
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.12123638946135351,
          "pitch": -0.05755971273547544,
          "rotation": 0,
          "target": "12-kimmel-north-view"
        },
        {
          "yaw": -0.09817073126071563,
          "pitch": 0.12520826670077057,
          "rotation": 3.141592653589793,
          "target": "11-room-12-05-02"
        },
        {
          "yaw": -0.5214434316121839,
          "pitch": 0.1450338971518388,
          "rotation": 4.71238898038469,
          "target": "13-room-12-05-interior"
        },
        {
          "yaw": -2.7269581834573415,
          "pitch": 0.1537611133548804,
          "rotation": 3.141592653589793,
          "target": "9-room-12-04"
        },
        {
          "yaw": 2.9871292138799586,
          "pitch": 0.14929537464540843,
          "rotation": 4.71238898038469,
          "target": "5-central-station-north-01"
        },
        {
          "yaw": -3.012737719335874,
          "pitch": 0.012619002985790218,
          "rotation": 0,
          "target": "3-room-12-02",
          "back" : {
            "yaw": -3,
            "pitch": 0,
            "fov": 1.8073895612144246
          }
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.1414624834985894,
          "pitch": -0.10169944136008979,
          "title": "Workstations on Wheels (WOWs)",
          "text": "Workstations on Wheels (WOWs) - these can be used by various team members on rounds.  They supply quick access to Epic.  Login can be either with your kerberos ID or with your ID if you have registered for 'tap in/tap out'."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "11-room-12-05-02",
      "name": "Room 12-05 #2",
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
        "yaw": -1.1166507191973274,
        "pitch": 0.3247236347286453,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": -0.4160786674574659,
          "pitch": 0.092526414815147,
          "rotation": 0,
          "target": "12-kimmel-north-view"
        },
        {
          "yaw": -2.181242403817393,
          "pitch": 0.16400752814170794,
          "rotation": 0,
          "target": "13-room-12-05-interior"
        },
        {
          "yaw": -2.950320932769886,
          "pitch": 0.4232170738502017,
          "rotation": 0,
          "target": "10-room-12-05",
          "back" : {
            "yaw": -3,
            "pitch": 0,
            "fov": 1.8073895612144246
          }
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3315365873756093,
          "pitch": 0.12372254847258546,
          "title": "Workstation",
          "text": "There are full workstation computers located in the corners of the units and in the cubicles in the CIC.  From these computers you can access your full network desktop and enjoy the view from Kimmel."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "12-kimmel-north-view",
      "name": "Kimmel North View",
      "short_name": "KP12 N View",
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
        "yaw": 0.005394602598839171,
        "pitch": 0.18099350132417413,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": -3.065369401757705,
          "pitch": 0.022819843603013368,
          "rotation": 0,
          "target": "10-room-12-05",
          "back" : {
            "yaw": -3,
            "pitch": 0,
            "fov": 1.8073895612144246
          }
        },
        {
          "yaw": -2.6499670160033943,
          "pitch": 0.23698104804038067,
          "rotation": 2.356194490192345,
          "target": "11-room-12-05-02"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.6322602537450095,
          "pitch": 0.6717831129425669,
          "title": "34th Street and 1st Avenue",
          "text": "34th Street and 1st Avenue"
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "13-room-12-05-interior",
      "name": "Room 12-05 Interior",
      "short_name": "Room 12-05 Int",
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
        "yaw": 0.9912301353889248,
        "pitch": 0.12776011858177228,
        "fov": 1.534895869072654
      },
      "linkHotspots": [
        {
          "yaw": -1.6366260029950706,
          "pitch": 0.16324904041004018,
          "rotation": 0,
          "target": "10-room-12-05",
          "back" : {
            "yaw": 1.5,
            "pitch": 0,
            "fov": 1.8073895612144246
          }
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.15962636664314545,
          "pitch": -0.4540965639587391,
          "title": "Supplies",
          "text": "Each patient room has its own storage for supplies that are likely to be needed at the bedside (gloves, phlebotomy tubes, gauze, etc).  Each floor has individualized the supply here based upon the needs of their patients."
        },
        {
          "yaw": -0.2496466950721441,
          "pitch": 0.10398752154855906,
          "title": "WOW",
          "text": "A WOW can be found in every patient’s room."
        },
        {
          "yaw": -2.999588493426627,
          "pitch": -0.25449294154303814,
          "title": "ICU Specific Monitor",
          "text": "Rooms with ICU capabilities will have an extra monitor in this location.  One can use their ID to “tap in/tap out” to this monitor to display patient information (vital signs, labs, orders) but can not be used for placing orders."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    }
  ],
  "name": "Medicine Orientation Virtual Tour",
  "welcome": {
    "title":"Medicine Virtual Tour - Kimmel 12th Floor",
    "description" : "Welcome to the Virtual Tour of the Medicine Floor in Kimmel. This will provide you a sense of the space, materials and people you will meet when you arrive. Use your mouse or finger to move around the 360° images.",
    "objectives": [
      {
        "id": "01",
        "text": "Complete the pre-test and post-test if available."
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
      "enable": false,
      "url":""
    },
    "posttest": {
      "enable": false,
      "url":""
    }
  }
};
