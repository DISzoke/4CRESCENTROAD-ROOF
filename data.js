var APP_DATA = {
  "scenes": [
    {
      "id": "0-scaffolding-landing",
      "name": "SCAFFOLDING LANDING",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-main-balcony-corner",
      "name": "MAIN BALCONY CORNER",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-small-balcony-1",
      "name": "SMALL BALCONY 1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6212725041139286,
          "pitch": 0.5931772419180454,
          "rotation": 0,
          "target": "3-small-balcony-2"
        },
        {
          "yaw": -1.1791675922562685,
          "pitch": 0.3732779978244736,
          "rotation": 0,
          "target": "15-main-balcony-3-2"
        },
        {
          "yaw": -0.7958423006811781,
          "pitch": 0.389389174625439,
          "rotation": 0,
          "target": "16-internal-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-small-balcony-2",
      "name": "SMALL BALCONY 2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.231736785068369,
          "pitch": 0.5092477815635235,
          "rotation": 0,
          "target": "2-small-balcony-1"
        },
        {
          "yaw": 0.7850696034779396,
          "pitch": 0.5236606466125835,
          "rotation": 0,
          "target": "4-internal-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-internal-1",
      "name": "INTERNAL 1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.815904305589461,
          "pitch": 0.6193618836838546,
          "rotation": 0,
          "target": "3-small-balcony-2"
        },
        {
          "yaw": 0.6498643938012396,
          "pitch": 0.49987499975126326,
          "rotation": 0,
          "target": "5-main-balcony-corner-2"
        },
        {
          "yaw": -1.1715321047222105,
          "pitch": 0.46353397299700916,
          "rotation": 0,
          "target": "17-internal-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-main-balcony-corner-2",
      "name": "MAIN BALCONY CORNER 2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6626687155993025,
          "pitch": 0.46557607435317827,
          "rotation": 0,
          "target": "4-internal-1"
        },
        {
          "yaw": -0.3589861793761493,
          "pitch": 0.5636914701367566,
          "rotation": 6.283185307179586,
          "target": "6-main-balcony-2-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-main-balcony-2-1",
      "name": "MAIN BALCONY 2-1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5008062527726196,
          "pitch": 0.5758104287363217,
          "rotation": 0,
          "target": "5-main-balcony-corner-2"
        },
        {
          "yaw": 0.2769790264567451,
          "pitch": 0.5850655016794146,
          "rotation": 0,
          "target": "7-main-balcony-2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-main-balcony-2-2",
      "name": "MAIN BALCONY 2-2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.619769979890954,
          "pitch": 0.5719203786019147,
          "rotation": 0,
          "target": "8-main-balcony-2-3"
        },
        {
          "yaw": -2.6489082141087366,
          "pitch": 0.4875027782049166,
          "rotation": 0,
          "target": "6-main-balcony-2-1"
        },
        {
          "yaw": -1.0078291674228375,
          "pitch": 0.5205822243642366,
          "rotation": 0,
          "target": "18-internal-4"
        },
        {
          "yaw": 0.06814198061759669,
          "pitch": 0.5007575101307022,
          "rotation": 0,
          "target": "19-internal-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-main-balcony-2-3",
      "name": "MAIN BALCONY 2-3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.550929959399882,
          "pitch": 0.6772624321543574,
          "rotation": 0,
          "target": "7-main-balcony-2-2"
        },
        {
          "yaw": 0.5552971256406636,
          "pitch": 0.43469075723702666,
          "rotation": 0,
          "target": "9-main-balcony-corner-1-1"
        },
        {
          "yaw": -1.1979833886669802,
          "pitch": 0.8293540226846208,
          "rotation": 0,
          "target": "19-internal-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-main-balcony-corner-1-1",
      "name": "MAIN BALCONY CORNER 1-1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1288314961130084,
          "pitch": 0.6944782104723473,
          "rotation": 0,
          "target": "8-main-balcony-2-3"
        },
        {
          "yaw": -0.26403160667083014,
          "pitch": 0.5718327363526647,
          "rotation": 0,
          "target": "10-main-balcony-1-2"
        },
        {
          "yaw": -1.6137516614505394,
          "pitch": 0.4641279633740183,
          "rotation": 0,
          "target": "19-internal-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-main-balcony-1-2",
      "name": "MAIN BALCONY 1-2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9712984784020513,
          "pitch": 0.5197322017584405,
          "rotation": 0,
          "target": "9-main-balcony-corner-1-1"
        },
        {
          "yaw": 0.6906341443855482,
          "pitch": 0.5392529719450536,
          "rotation": 0,
          "target": "11-main-balcony-1-3"
        },
        {
          "yaw": -0.28304524590985025,
          "pitch": 0.6836175589472653,
          "rotation": 0,
          "target": "21-internal-7"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-main-balcony-1-3",
      "name": "MAIN BALCONY 1-3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.739171246288775,
          "pitch": 0.5172807575597638,
          "rotation": 0,
          "target": "10-main-balcony-1-2"
        },
        {
          "yaw": -1.601780091062519,
          "pitch": 0.6672755945534874,
          "rotation": 0,
          "target": "21-internal-7"
        },
        {
          "yaw": -0.24681376336907057,
          "pitch": 0.535053474612674,
          "rotation": 0,
          "target": "22-internal-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-main-balcony-1-4",
      "name": "MAIN BALCONY 1-4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.37867756112493645,
          "pitch": 0.5957609001742163,
          "rotation": 0,
          "target": "13-main-balcony-corner-3"
        },
        {
          "yaw": -1.5499828216409792,
          "pitch": 0.6896639625613616,
          "rotation": 0,
          "target": "22-internal-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-main-balcony-corner-3",
      "name": "MAIN BALCONY CORNER 3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.414530056676579,
          "pitch": 0.6745709062339209,
          "rotation": 0,
          "target": "12-main-balcony-1-4"
        },
        {
          "yaw": 0.6963527157679401,
          "pitch": 0.45192258214673764,
          "rotation": 0,
          "target": "14-main-balcony-3-1"
        },
        {
          "yaw": -0.8709628151053241,
          "pitch": 0.7256586419807238,
          "rotation": 0,
          "target": "22-internal-8"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-main-balcony-3-1",
      "name": "MAIN BALCONY 3-1",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.4369427585890406,
          "pitch": 0.5464531287470962,
          "rotation": 0,
          "target": "13-main-balcony-corner-3"
        },
        {
          "yaw": 0.4338419981842989,
          "pitch": 0.5514485157043651,
          "rotation": 0,
          "target": "15-main-balcony-3-2"
        },
        {
          "yaw": -1.2250112119495764,
          "pitch": 0.6058612134902681,
          "rotation": 0,
          "target": "23-internal-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-main-balcony-3-2",
      "name": "MAIN BALCONY 3-2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.2541789598718687,
          "pitch": 0.5995382495532411,
          "rotation": 0,
          "target": "14-main-balcony-3-1"
        },
        {
          "yaw": 1.1832210146576774,
          "pitch": 0.340248525081865,
          "rotation": 0,
          "target": "2-small-balcony-1"
        },
        {
          "yaw": -0.5501748570178595,
          "pitch": 0.7329721138455056,
          "rotation": 0,
          "target": "16-internal-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-internal-2",
      "name": "INTERNAL 2",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5557228506912253,
          "pitch": 0.595509643246082,
          "rotation": 0,
          "target": "15-main-balcony-3-2"
        },
        {
          "yaw": 0.7862678375685839,
          "pitch": 0.5581212667890156,
          "rotation": 0,
          "target": "17-internal-3"
        },
        {
          "yaw": -1.3068106553129955,
          "pitch": 0.5797292737213944,
          "rotation": 0,
          "target": "23-internal-9"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-internal-3",
      "name": "INTERNAL 3",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6058804013487737,
          "pitch": 0.5747572374815775,
          "rotation": 0,
          "target": "16-internal-2"
        },
        {
          "yaw": -0.2911619887468042,
          "pitch": 0.44291178157459754,
          "rotation": 0,
          "target": "18-internal-4"
        },
        {
          "yaw": -0.9452575891507387,
          "pitch": 0.44961181565724395,
          "rotation": 0,
          "target": "20-internal-6"
        },
        {
          "yaw": 1.909737845264873,
          "pitch": 0.4548735842774523,
          "rotation": 0,
          "target": "4-internal-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-internal-4",
      "name": "INTERNAL 4",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5093194136780763,
          "pitch": 0.5609673180184025,
          "rotation": 0,
          "target": "17-internal-3"
        },
        {
          "yaw": -1.8345747023141143,
          "pitch": 0.35781736169022693,
          "rotation": 0,
          "target": "16-internal-2"
        },
        {
          "yaw": 0.45574009439326346,
          "pitch": 0.3969318052756048,
          "rotation": 0,
          "target": "19-internal-5"
        },
        {
          "yaw": -0.9705298470835366,
          "pitch": 0.7256088749292413,
          "rotation": 0,
          "target": "20-internal-6"
        },
        {
          "yaw": 1.3394209052968051,
          "pitch": 0.39418549564036276,
          "rotation": 0,
          "target": "7-main-balcony-2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-internal-5",
      "name": "INTERNAL 5",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5839402180670223,
          "pitch": 0.6184769849307763,
          "rotation": 0,
          "target": "18-internal-4"
        },
        {
          "yaw": 1.1055980042042535,
          "pitch": 0.8027086806949253,
          "rotation": 0,
          "target": "8-main-balcony-2-3"
        },
        {
          "yaw": 2.2665189037054194,
          "pitch": 0.6043709836398801,
          "rotation": 0,
          "target": "7-main-balcony-2-2"
        },
        {
          "yaw": -0.0017809495810627851,
          "pitch": 0.3130547797161505,
          "rotation": 0,
          "target": "9-main-balcony-corner-1-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-internal-6",
      "name": "INTERNAL 6",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.7280303311800855,
          "pitch": 0.6749155916736953,
          "rotation": 0,
          "target": "18-internal-4"
        },
        {
          "yaw": 0.5607882569883493,
          "pitch": 0.3741427454577675,
          "rotation": 0,
          "target": "21-internal-7"
        },
        {
          "yaw": -2.3343690543079614,
          "pitch": 0.5249683635204185,
          "rotation": 0,
          "target": "17-internal-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-internal-7",
      "name": "INTERNAL 7",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.238325158046429,
          "pitch": 0.5686165599126518,
          "rotation": 0,
          "target": "20-internal-6"
        },
        {
          "yaw": -1.5916961388747186,
          "pitch": 0.3519317010559231,
          "rotation": 0,
          "target": "18-internal-4"
        },
        {
          "yaw": -2.101952677689294,
          "pitch": 0.3869171608727058,
          "rotation": 0,
          "target": "19-internal-5"
        },
        {
          "yaw": 0.41568368432279534,
          "pitch": 0.5576000018458203,
          "rotation": 0,
          "target": "22-internal-8"
        },
        {
          "yaw": 2.9595827740292364,
          "pitch": 0.48229024859312375,
          "rotation": 0,
          "target": "10-main-balcony-1-2"
        },
        {
          "yaw": 1.5895363592090073,
          "pitch": 0.585383208009695,
          "rotation": 0,
          "target": "11-main-balcony-1-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-internal-8",
      "name": "INTERNAL 8",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.5616148273762533,
          "pitch": 0.572987209191071,
          "rotation": 0,
          "target": "21-internal-7"
        },
        {
          "yaw": 0.43939304563003745,
          "pitch": 0.7219237125425995,
          "rotation": 0,
          "target": "23-internal-9"
        },
        {
          "yaw": -2.198730487424193,
          "pitch": 0.49829306816882024,
          "rotation": 0,
          "target": "11-main-balcony-1-3"
        },
        {
          "yaw": 3.030216787714087,
          "pitch": 0.5671418393224936,
          "rotation": 0,
          "target": "12-main-balcony-1-4"
        },
        {
          "yaw": 1.9947924681297415,
          "pitch": 0.579300338416143,
          "rotation": 0,
          "target": "13-main-balcony-corner-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-internal-9",
      "name": "INTERNAL 9",
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
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.451616268127456,
          "pitch": 0.5819448667641254,
          "rotation": 0,
          "target": "22-internal-8"
        },
        {
          "yaw": 0.8319639428976906,
          "pitch": 0.4864391985031986,
          "rotation": 0,
          "target": "16-internal-2"
        },
        {
          "yaw": 2.096017847117717,
          "pitch": 0.5071480694337733,
          "rotation": 0,
          "target": "14-main-balcony-3-1"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "4 CRESCENT ROAD - LEVEL 6",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
