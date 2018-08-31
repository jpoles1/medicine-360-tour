var APP_DATA = {
  "scenes": [
    {
      "id": "0-17th_floor_lobby_center",
      "name": "17th_floor_lobby_center",
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
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.01175515726986,
          "pitch": 0.026907942254371875,
          "title": "Elevator",
          "text": "Text"
        }
      ]
    },
    {
      "id": "1-17th_floor_lobby_west",
      "name": "17th_floor_lobby_west",
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
      "infoHotspots": []
    },
    {
      "id": "2-conference_room",
      "name": "conference_room",
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
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 1.4719972437933277,
          "pitch": 0.11714000251878431,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "3-east_west_entrance",
      "name": "east_west_entrance",
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
          "yaw": 0.7456690152231147,
          "pitch": -0.0967201409255658,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": -1.5334901841429556,
          "pitch": 0.03460929014540426,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": -2.1824912210702667,
          "pitch": 0.05424644003348256,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "4-east_entrance",
      "name": "east_entrance",
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
        {
          "yaw": -1.2961610211914447,
          "pitch": -0.1371135615393868,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "5-east_hallway",
      "name": "east_hallway",
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
          "yaw": 2.245723518867141,
          "pitch": -0.131783107994087,
          "title": "Title",
          "text": "Text"
        },
        {
          "yaw": 3.109203462411516,
          "pitch": -0.08526820239544364,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "6-east_center",
      "name": "east_center",
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
        {
          "yaw": -2.691026906055429,
          "pitch": 0.25773843126706275,
          "title": "Title",
          "text": "Text"
        }
      ]
    },
    {
      "id": "7-east_nursing_station",
      "name": "east_nursing_station",
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
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
