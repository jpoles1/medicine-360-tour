var APP_DATA = {
  "scenes": [
    {
      "id": "0-17th_floor_lobby_center",
      "name": "17th floor lobby center",
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
          "target": "2-conference_room"
        },
        {
          "yaw": -1.3869059743473144,
          "pitch": 0.04598715763783723,
          "rotation": 0,
          "target": "1-17th_floor_lobby_west"
        },

      ],
      "infoHotspots": [
        {
          "yaw": 3.01175515726986,
          "pitch": 0.026907942254371875,
          "title": "Tisch South Elevators",
          "text": "These elevators stop on floors 1-2, 8-17."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "1-17th_floor_lobby_west",
      "name": "17th floor lobby west",
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
        "yaw": -2.105714564767652,
        "pitch": -0.0240143686247265,
        "fov": 1.8073895612144246
      },
      "linkHotspots": [
        {
          "yaw": 0.004935864655056577,
          "pitch": 0.04957993686185169,
          "rotation": 0,
          "target": "0-17th_floor_lobby_center"
        }
      ],
      "infoHotspots": [],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "2-conference_room",
      "name": "Conference Room",
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
        "yaw": 0.06379825838788733,
        "pitch": 0.06811745005425784,
        "fov": 1.8073895612144246
      },
      "linkHotspots": [
        {
          "yaw": 0.4674741799042508,
          "pitch": 0.07385383078425001,
          "rotation": 0,
          "target": "3-east_west_entrance"
        },
        {
          "yaw": 2.7755751013511416,
          "pitch": 0.07485721308561644,
          "rotation": 0,
          "target": "0-17th_floor_lobby_center"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.3292731187534912,
          "pitch": 0.029591059711144396,
          "title": "Conference Room - 1700A",
          "text": "This is one of general medicine’s conference rooms.  There are academic and clinical meetings here.  It is very likely that you will have some conferences in this room."
        },
        {
          "yaw": 1.4719972437933277,
          "pitch": 0.11714000251878431,
          "title": "Palliative Care office - 1700E",
          "text": "This is where the members of the palliative care team work and sometimes hold meetings.  The team consists of Attendings, Fellows, Residents, Nurse Practitioners, Social Workers and Chaplains."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "3-east_west_entrance",
      "name": "East West Entrance",
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
        "yaw": 0.005591524226591815,
        "pitch": 0.01729298297209958,
        "fov": 1.8073895612144246
      },
      "linkHotspots": [
        {
          "yaw": 1.5571936787750529,
          "pitch": 0.07056317012829716,
          "rotation": 0,
          "target": "4-east_entrance"
        },
        {
          "yaw": -3.1240536288928347,
          "pitch": 0.025951136558749255,
          "rotation": 0,
          "target": "2-conference_room"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.1,
          "pitch": -0.0967201409255658,
          "title": "Tisch north elevator (BB)",
          "text": "Elevator BB: These elevators stop on all floors from Ground to 18."
        },
        {
          "yaw": -1.5334901841429556,
          "pitch": 0.03460929014540426,
          "title": "observation unit",
          "text": "Observation Unit: This is an extension of the Emergency Department.  Patients admitted to this unit are expected to stay less than 2 days and can be from multiple departments.  It is staffed by providers from the ED."
        },
        {
          "yaw": -2.1824912210702667,
          "pitch": 0.05424644003348256,
          "title": "Hand Sanitizer",
          "text": "Text"
        },
        {
          "yaw": 0.4,
          "pitch": -0.25,
          "title": "Make A Right",
          "text": "Make a right past the second set of elevators to go towards 17E. Enter through double doors."
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": [
        {
          "yaw": 0.7456690152231147,
          "pitch": -0.2,
          "title": "Proceed to 17 East",
          "direction":"right",
          "description": "Make a right past the second set of elevators to go towards 17E. Enter through double doors."
        }
      ]
    },
    {
      "id": "4-east_entrance",
      "name": "East Entrance",
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
        "yaw": 2.59510612177439,
        "pitch": 0.08332479355919631,
        "fov": 1.8073895612144246
      },
      "linkHotspots": [
        {
          "yaw": 3.0642114184939757,
          "pitch": 0.014731028448244032,
          "rotation": 0,
          "target": "5-east_hallway"
        },
        {
          "yaw": -0.17605812178056368,
          "pitch": 0.08542605490389477,
          "rotation": 0,
          "target": "3-east_west_entrance"
        }
      ],
      "infoHotspots": [

      ],
      "modalHotspots": [
        {
          "yaw": -1.2961610211914447,
          "pitch": -0.1371135615393868,
          "title": "Infection Control Signs",
          "text": "There are multiple different infection control signs with differing precautions that are necessary.  The signs clearly lay out the intended barrier methods for entering the room.",
          "imageURL":"http://via.placeholder.com/350x150?text='test'",
          "actionLink":"https://nyulangone.org" // to image carousel in new window
        }
      ],
      "roleHotspots": [],
      "directions": []
    },
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
        "yaw": 3.0361393737060602,
        "pitch": 0.16178261569382357,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.8105069510866834,
          "pitch": 0.053663110822936844,
          "rotation": 0,
          "target": "4-east_entrance"
        },
        {
          "yaw": -0.5523118661291733,
          "pitch": 0.09450122386454751,
          "rotation": 0,
          "target": "6-east_center"
        },
        {
          "yaw": 0.4510192100014567,
          "pitch": -0.04776474806952713,
          "rotation": 0,
          "target": "7-east_nursing_station"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.95,
          "pitch": -0.131783107994087,
          "title": "Patient Room TH 1724",
          "text": "In the Tisch building, patients are identified by their room number and bed.  For example: 1724/01 is on the 17th floor, room 1724 and the patient is by the door; 1724/02 - the patient would be by the window."
        },
        {
          "yaw": 3.109203462411516,
          "pitch": -0.08526820239544364,
          "title": "Hand sanitizer",
          "text": "Staff should wash their hand on entering and exiting a room every time."
        },
        {
          "yaw": -1.4,
          "pitch": 0.3,
          "title": "MedCart",
          "text": "Text"
        },
        {
          "yaw": -1.5,
          "pitch": 0.0,
          "title": "RN",
          "text": "Text"
        }
      ],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    },
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
          "yaw": 2.780651471829861,
          "pitch": 0.13976431827827618,
          "rotation": 0,
          "target": "7-east_nursing_station"
        },
        {
          "yaw": -1.7006159186003877,
          "pitch": 0.06917474246086996,
          "rotation": 0,
          "target": "5-east_hallway"
        }
      ],
      "infoHotspots": [

      ],
      "modalHotspots": [
        {
          "yaw": -2.691026906055429,
          "pitch": 0.25773843126706275,
          "title": "MAARTI",
          "text": "this is our video or audio translation system at Tisch.  It can be brought in to patient rooms to communicate with non-primarily english speaking patients.  Many languages have video interpreting, and if not, it will connect to audio only.  There is an access code on the back of the MAARTI that you will need to initiate your session.",
          "imageURL":"img/maarti.jpg",
          "actionLink":"https://nyulangone.org" // to image carousel in new window
        }
      ],
      "roleHotspots": [],
      "directions": []
    },
    {
      "id": "7-east_nursing_station",
      "name": "East Nursing Station",
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
        "yaw": 0.731719603781416,
        "pitch": 0.19569074179961987,
        "fov": 1.8073895612144246
      },
      "linkHotspots": [
        {
          "yaw": -0.018511477672873866,
          "pitch": 0.10694466753640164,
          "rotation": 0,
          "target": "6-east_center"
        },
        {
          "yaw": -0.9026608225461423,
          "pitch": 0.036736834158078935,
          "rotation": 0,
          "target": "5-east_hallway"
        }
      ],
      "infoHotspots": [],
      "modalHotspots": [],
      "roleHotspots": [],
      "directions": []
    }
  ],
  "name": "Medicine Orientation Virtual Tour",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
