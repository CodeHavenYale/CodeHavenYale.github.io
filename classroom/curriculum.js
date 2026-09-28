const WEEKS = [
  {
    "number": 1,
    "topic": "Sequences",
    "title": "First steps"
  },
  {
    "number": 2,
    "topic": "Variables",
    "title": "Pack your bag"
  },
  {
    "number": 3,
    "topic": "Numbers",
    "title": "Pick your strength"
  },
  {
    "number": 4,
    "topic": "Conditionals",
    "title": "Check the path"
  },
  {
    "number": 5,
    "topic": "Loops",
    "title": "Save your typing"
  },
  {
    "number": 6,
    "topic": "Functions",
    "title": "Make your own move"
  },
  {
    "number": 7,
    "topic": "Lists",
    "title": "Plan a route"
  },
  {
    "number": 8,
    "topic": "Combine your skills",
    "title": "The old fort"
  },
  {
    "number": 9,
    "topic": "Final challenge",
    "title": "Bring it home"
  }
];
const LEVELS = [
  {
    "id": "1-1",
    "week": 1,
    "stage": 1,
    "title": "A key for the door",
    "topic": "Sequences",
    "teach": "Python runs your lines from top to bottom. A locked door needs a key of the same color. Collect a key while standing on its tile. Unlock a door while standing next to it.",
    "example": "hero.collect()\nhero.unlock(\"right\")",
    "objective": "Finish every goal below. You choose the route.",
    "hint": "Keys have a round end. Doors are solid blocks. Matching colors and letters go together. S is a switch; bars are a gate.",
    "starter": "from hero_game import hero\n\n# Write your plan here.\n",
    "world": {
      "width": 13,
      "height": 9,
      "path": [
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ],
        [
          8,
          3
        ],
        [
          8,
          5
        ],
        [
          9,
          3
        ],
        [
          9,
          4
        ],
        [
          9,
          5
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        9,
        5
      ],
      "coins": [
        [
          3,
          1
        ],
        [
          7,
          5
        ],
        [
          9,
          3
        ]
      ],
      "keys": [
        [
          3,
          1
        ]
      ],
      "doors": [
        [
          5,
          3
        ]
      ],
      "key_colors": [
        {
          "x": 3,
          "y": 1,
          "color": "red"
        }
      ],
      "door_colors": [
        {
          "x": 5,
          "y": 3,
          "color": "red"
        }
      ],
      "switches": [],
      "gates": [],
      "potions": [],
      "enemies": []
    },
    "mapNote": "Keys and doors share a color and letter. Switches open matching gates.",
    "goals": [
      "Collect all 3 coins.",
      "Open the red door with a red key.",
      "Finish on the green exit marked E."
    ],
    "revision": 2
  },
  {
    "id": "1-2",
    "week": 1,
    "stage": 2,
    "title": "Two keys, two locks",
    "topic": "Sequences",
    "teach": "The red key only opens a red door. The blue key only opens a blue door. A key is used up when its door opens.",
    "example": "hero.collect()\nhero.unlock(\"right\")",
    "objective": "Finish every goal below. You choose the route.",
    "hint": "Keys have a round end. Doors are solid blocks. Matching colors and letters go together. S is a switch; bars are a gate.",
    "starter": "from hero_game import hero\n\n# Write your plan here.\n",
    "world": {
      "width": 13,
      "height": 9,
      "path": [
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          4
        ],
        [
          3,
          5
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        11,
        3
      ],
      "coins": [
        [
          3,
          1
        ],
        [
          3,
          5
        ],
        [
          7,
          1
        ],
        [
          11,
          3
        ]
      ],
      "keys": [
        [
          3,
          1
        ],
        [
          3,
          5
        ]
      ],
      "doors": [
        [
          5,
          3
        ],
        [
          9,
          3
        ]
      ],
      "key_colors": [
        {
          "x": 3,
          "y": 1,
          "color": "blue"
        },
        {
          "x": 3,
          "y": 5,
          "color": "red"
        }
      ],
      "door_colors": [
        {
          "x": 5,
          "y": 3,
          "color": "red"
        },
        {
          "x": 9,
          "y": 3,
          "color": "blue"
        }
      ],
      "switches": [],
      "gates": [],
      "potions": [],
      "enemies": []
    },
    "mapNote": "Keys and doors share a color and letter. Switches open matching gates.",
    "goals": [
      "Collect all 4 coins.",
      "Open the red door with a red key.",
      "Open the blue door with a blue key.",
      "Finish on the green exit marked E."
    ],
    "revision": 2
  },
  {
    "id": "1-3",
    "week": 1,
    "stage": 3,
    "title": "The key inside",
    "topic": "Sequences",
    "teach": "One key is further into the map. Think about which areas you can reach now and which ones are still locked.",
    "example": "hero.collect()\nhero.unlock(\"right\")",
    "objective": "Finish every goal below. You choose the route.",
    "hint": "Keys have a round end. Doors are solid blocks. Matching colors and letters go together. S is a switch; bars are a gate.",
    "starter": "from hero_game import hero\n\n# Write your plan here.\n",
    "world": {
      "width": 13,
      "height": 9,
      "path": [
        [
          1,
          3
        ],
        [
          1,
          7
        ],
        [
          2,
          3
        ],
        [
          2,
          7
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          7
        ],
        [
          4,
          3
        ],
        [
          4,
          7
        ],
        [
          5,
          3
        ],
        [
          5,
          7
        ],
        [
          6,
          3
        ],
        [
          6,
          7
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          7,
          7
        ],
        [
          8,
          3
        ],
        [
          8,
          7
        ],
        [
          9,
          3
        ],
        [
          9,
          5
        ],
        [
          9,
          7
        ],
        [
          10,
          3
        ],
        [
          10,
          5
        ],
        [
          10,
          7
        ],
        [
          11,
          3
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        11,
        7
      ],
      "coins": [
        [
          3,
          1
        ],
        [
          7,
          1
        ],
        [
          9,
          5
        ],
        [
          1,
          7
        ]
      ],
      "keys": [
        [
          3,
          1
        ],
        [
          7,
          1
        ]
      ],
      "doors": [
        [
          5,
          3
        ],
        [
          9,
          3
        ]
      ],
      "key_colors": [
        {
          "x": 3,
          "y": 1,
          "color": "blue"
        },
        {
          "x": 7,
          "y": 1,
          "color": "red"
        }
      ],
      "door_colors": [
        {
          "x": 5,
          "y": 3,
          "color": "blue"
        },
        {
          "x": 9,
          "y": 3,
          "color": "red"
        }
      ],
      "switches": [],
      "gates": [],
      "potions": [],
      "enemies": []
    },
    "mapNote": "Keys and doors share a color and letter. Switches open matching gates.",
    "goals": [
      "Collect all 4 coins.",
      "Open the blue door with a blue key.",
      "Open the red door with a red key.",
      "Finish on the green exit marked E."
    ],
    "revision": 2
  },
  {
    "id": "1-4",
    "week": 1,
    "stage": 4,
    "title": "A switch changes the map",
    "topic": "Sequences",
    "teach": "A switch opens gates of the same color. Stand on the square marked S and use hero.activate(). A key will not open a gate.",
    "example": "hero.collect()\nhero.unlock(\"right\")\nhero.activate()",
    "objective": "Finish every goal below. You choose the route.",
    "hint": "Keys have a round end. Doors are solid blocks. Matching colors and letters go together. S is a switch; bars are a gate.",
    "starter": "from hero_game import hero\n\n# Write your plan here.\n",
    "world": {
      "width": 13,
      "height": 9,
      "path": [
        [
          1,
          3
        ],
        [
          1,
          7
        ],
        [
          2,
          3
        ],
        [
          2,
          7
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          7
        ],
        [
          4,
          3
        ],
        [
          4,
          7
        ],
        [
          5,
          3
        ],
        [
          5,
          7
        ],
        [
          6,
          3
        ],
        [
          6,
          7
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          7,
          7
        ],
        [
          8,
          3
        ],
        [
          8,
          7
        ],
        [
          9,
          3
        ],
        [
          9,
          5
        ],
        [
          9,
          7
        ],
        [
          10,
          3
        ],
        [
          10,
          5
        ],
        [
          10,
          7
        ],
        [
          11,
          3
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        11,
        7
      ],
      "coins": [
        [
          7,
          1
        ],
        [
          9,
          5
        ],
        [
          1,
          7
        ]
      ],
      "keys": [
        [
          7,
          1
        ],
        [
          9,
          5
        ]
      ],
      "doors": [
        [
          9,
          3
        ],
        [
          5,
          7
        ]
      ],
      "key_colors": [
        {
          "x": 7,
          "y": 1,
          "color": "red"
        },
        {
          "x": 9,
          "y": 5,
          "color": "blue"
        }
      ],
      "door_colors": [
        {
          "x": 9,
          "y": 3,
          "color": "red"
        },
        {
          "x": 5,
          "y": 7,
          "color": "blue"
        }
      ],
      "switches": [
        {
          "x": 3,
          "y": 1,
          "color": "purple"
        }
      ],
      "gates": [
        {
          "x": 7,
          "y": 2,
          "color": "purple"
        }
      ],
      "potions": [],
      "enemies": []
    },
    "mapNote": "Keys and doors share a color and letter. Switches open matching gates.",
    "goals": [
      "Collect all 3 coins.",
      "Open the red door with a red key.",
      "Open the blue door with a blue key.",
      "Turn on the purple switch to open the purple gate.",
      "Finish on the green exit marked E."
    ],
    "revision": 2
  },
  {
    "id": "1-5",
    "week": 1,
    "stage": 5,
    "title": "The supply room",
    "topic": "Sequences",
    "teach": "There are three key colors and a gated room. Opening an area can give you what you need somewhere else. Check the whole map before you write your plan.",
    "example": "hero.collect()\nhero.unlock(\"right\")\nhero.activate()",
    "objective": "Finish every goal below. You choose the route.",
    "hint": "Keys have a round end. Doors are solid blocks. Matching colors and letters go together. S is a switch; bars are a gate.",
    "starter": "from hero_game import hero\n\n# Write your plan here.\n",
    "world": {
      "width": 13,
      "height": 9,
      "path": [
        [
          1,
          3
        ],
        [
          1,
          7
        ],
        [
          2,
          3
        ],
        [
          2,
          7
        ],
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          7
        ],
        [
          4,
          3
        ],
        [
          4,
          7
        ],
        [
          5,
          3
        ],
        [
          5,
          7
        ],
        [
          6,
          3
        ],
        [
          6,
          7
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          7,
          7
        ],
        [
          8,
          3
        ],
        [
          8,
          7
        ],
        [
          9,
          3
        ],
        [
          9,
          5
        ],
        [
          9,
          7
        ],
        [
          10,
          3
        ],
        [
          10,
          5
        ],
        [
          10,
          7
        ],
        [
          11,
          3
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        11,
        7
      ],
      "coins": [
        [
          3,
          1
        ],
        [
          7,
          1
        ],
        [
          9,
          5
        ],
        [
          1,
          7
        ]
      ],
      "keys": [
        [
          3,
          1
        ],
        [
          7,
          1
        ],
        [
          5,
          7
        ]
      ],
      "doors": [
        [
          5,
          3
        ],
        [
          9,
          3
        ],
        [
          3,
          7
        ]
      ],
      "key_colors": [
        {
          "x": 3,
          "y": 1,
          "color": "red"
        },
        {
          "x": 7,
          "y": 1,
          "color": "blue"
        },
        {
          "x": 5,
          "y": 7,
          "color": "green"
        }
      ],
      "door_colors": [
        {
          "x": 5,
          "y": 3,
          "color": "red"
        },
        {
          "x": 9,
          "y": 3,
          "color": "blue"
        },
        {
          "x": 3,
          "y": 7,
          "color": "green"
        }
      ],
      "switches": [
        {
          "x": 9,
          "y": 5,
          "color": "purple"
        }
      ],
      "gates": [
        {
          "x": 7,
          "y": 7,
          "color": "purple"
        }
      ],
      "potions": [],
      "enemies": []
    },
    "mapNote": "Keys and doors share a color and letter. Switches open matching gates.",
    "goals": [
      "Collect all 4 coins.",
      "Open the red door with a red key.",
      "Open the blue door with a blue key.",
      "Open the green door with a green key.",
      "Turn on the purple switch to open the purple gate.",
      "Finish on the green exit marked E."
    ],
    "revision": 2
  },
  {
    "id": "1-6",
    "week": 1,
    "stage": 6,
    "title": "Open the courtyard",
    "topic": "Sequences",
    "teach": "Two switches open different gates. Some keys are behind those gates. Work out what each item lets you reach. You can return to an area you have already visited.",
    "example": "hero.collect()\nhero.unlock(\"right\")\nhero.activate()",
    "objective": "Finish every goal below. You choose the route.",
    "hint": "Keys have a round end. Doors are solid blocks. Matching colors and letters go together. S is a switch; bars are a gate.",
    "starter": "from hero_game import hero\n\n# Write your plan here.\n",
    "world": {
      "width": 13,
      "height": 9,
      "path": [
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          1,
          7
        ],
        [
          2,
          3
        ],
        [
          2,
          7
        ],
        [
          3,
          3
        ],
        [
          3,
          7
        ],
        [
          4,
          3
        ],
        [
          4,
          7
        ],
        [
          5,
          3
        ],
        [
          5,
          7
        ],
        [
          6,
          3
        ],
        [
          6,
          7
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          7,
          7
        ],
        [
          8,
          3
        ],
        [
          8,
          7
        ],
        [
          9,
          1
        ],
        [
          9,
          2
        ],
        [
          9,
          3
        ],
        [
          9,
          5
        ],
        [
          9,
          7
        ],
        [
          10,
          3
        ],
        [
          10,
          5
        ],
        [
          10,
          7
        ],
        [
          11,
          3
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        11,
        7
      ],
      "coins": [
        [
          1,
          5
        ],
        [
          7,
          1
        ],
        [
          9,
          1
        ],
        [
          9,
          5
        ],
        [
          1,
          7
        ]
      ],
      "keys": [
        [
          1,
          5
        ],
        [
          9,
          1
        ],
        [
          5,
          7
        ]
      ],
      "doors": [
        [
          5,
          3
        ],
        [
          11,
          4
        ],
        [
          3,
          7
        ]
      ],
      "key_colors": [
        {
          "x": 1,
          "y": 5,
          "color": "blue"
        },
        {
          "x": 9,
          "y": 1,
          "color": "red"
        },
        {
          "x": 5,
          "y": 7,
          "color": "green"
        }
      ],
      "door_colors": [
        {
          "x": 5,
          "y": 3,
          "color": "blue"
        },
        {
          "x": 11,
          "y": 4,
          "color": "red"
        },
        {
          "x": 3,
          "y": 7,
          "color": "green"
        }
      ],
      "switches": [
        {
          "x": 7,
          "y": 1,
          "color": "purple"
        },
        {
          "x": 9,
          "y": 5,
          "color": "blue"
        }
      ],
      "gates": [
        {
          "x": 9,
          "y": 2,
          "color": "purple"
        },
        {
          "x": 7,
          "y": 7,
          "color": "blue"
        }
      ],
      "potions": [],
      "enemies": []
    },
    "mapNote": "Keys and doors share a color and letter. Switches open matching gates.",
    "goals": [
      "Collect all 5 coins.",
      "Open the blue door with a blue key.",
      "Open the red door with a red key.",
      "Open the green door with a green key.",
      "Turn on the purple switch to open the purple gate.",
      "Turn on the blue switch to open the blue gate.",
      "Finish on the green exit marked E."
    ],
    "revision": 2
  },
  {
    "id": "2-1",
    "week": 2,
    "stage": 1,
    "title": "Two store rooms",
    "topic": "Variables",
    "teach": "A variable gives a value a name. Save your directions as variables and reuse them. Pick up a key with hero.collect(). Stand next to its door and use hero.unlock(direction).",
    "example": "east = \"right\"\nhero.move(east)\n# Next to a locked door:\nhero.unlock(\"down\")",
    "objective": "Collect all 5 coins and reach the exit. Find the keys in the side rooms and open 1 locked door.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\neast = \"right\"\nwest = \"left\"\n# Give up and down names too. Then plan your route.\n",
    "world": {
      "width": 10,
      "height": 6,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          5,
          0
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          8,
          2
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        3
      ],
      "coins": [
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          8,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ]
      ],
      "keys": [
        [
          5,
          0
        ]
      ],
      "doors": [
        [
          8,
          2
        ]
      ],
      "potions": [],
      "enemies": []
    },
    "mapNote": "10 \u00d7 6 map \u00b7 20 steps on the full supply route"
  },
  {
    "id": "2-2",
    "week": 2,
    "stage": 2,
    "title": "Find the brass key",
    "topic": "Variables",
    "teach": "A variable gives a value a name. Save your directions as variables and reuse them. Pick up a key with hero.collect(). Stand next to its door and use hero.unlock(direction).",
    "example": "east = \"right\"\nhero.move(east)\n# Next to a locked door:\nhero.unlock(\"down\")",
    "objective": "Collect all 5 coins and reach the exit. Find the keys in the side rooms and open 1 locked door.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\neast = \"right\"\nwest = \"left\"\n# Give up and down names too. Then plan your route.\n",
    "world": {
      "width": 11,
      "height": 6,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          5,
          0
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          9,
          2
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          4,
          4
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        3
      ],
      "coins": [
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          9,
          1
        ],
        [
          4,
          4
        ],
        [
          4,
          3
        ]
      ],
      "keys": [
        [
          5,
          0
        ]
      ],
      "doors": [
        [
          9,
          2
        ]
      ],
      "potions": [],
      "enemies": []
    },
    "mapNote": "11 \u00d7 6 map \u00b7 22 steps on the full supply route"
  },
  {
    "id": "2-3",
    "week": 2,
    "stage": 3,
    "title": "The locked courtyard",
    "topic": "Variables",
    "teach": "A variable gives a value a name. Save your directions as variables and reuse them. Pick up a key with hero.collect(). Stand next to its door and use hero.unlock(direction).",
    "example": "east = \"right\"\nhero.move(east)\n# Next to a locked door:\nhero.unlock(\"down\")",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 1 locked door.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\neast = \"right\"\nwest = \"left\"\n# Give up and down names too. Then plan your route.\n",
    "world": {
      "width": 12,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          10,
          2
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        10,
        5
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          10,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          5
        ]
      ],
      "keys": [
        [
          6,
          0
        ]
      ],
      "doors": [
        [
          10,
          2
        ]
      ],
      "potions": [],
      "enemies": []
    },
    "mapNote": "12 \u00d7 8 map \u00b7 37 steps on the full supply route"
  },
  {
    "id": "2-4",
    "week": 2,
    "stage": 4,
    "title": "The west wing",
    "topic": "Variables",
    "teach": "A variable gives a value a name. Save your directions as variables and reuse them. Pick up a key with hero.collect(). Stand next to its door and use hero.unlock(direction).",
    "example": "east = \"right\"\nhero.move(east)\n# Next to a locked door:\nhero.unlock(\"down\")",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 1 locked door.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\neast = \"right\"\nwest = \"left\"\n# Give up and down names too. Then plan your route.\n",
    "world": {
      "width": 11,
      "height": 8,
      "path": [
        [
          9,
          1
        ],
        [
          8,
          1
        ],
        [
          7,
          1
        ],
        [
          6,
          1
        ],
        [
          5,
          1
        ],
        [
          5,
          0
        ],
        [
          4,
          1
        ],
        [
          3,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          7,
          3
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          9,
          4
        ],
        [
          9,
          5
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          6,
          5
        ],
        [
          5,
          5
        ],
        [
          5,
          4
        ],
        [
          4,
          5
        ],
        [
          3,
          5
        ],
        [
          2,
          5
        ],
        [
          1,
          5
        ]
      ],
      "start": [
        9,
        1
      ],
      "exit": [
        1,
        5
      ],
      "coins": [
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          1,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          9,
          3
        ],
        [
          5,
          4
        ],
        [
          5,
          5
        ]
      ],
      "keys": [
        [
          5,
          0
        ]
      ],
      "doors": [
        [
          1,
          2
        ]
      ],
      "potions": [],
      "enemies": []
    },
    "mapNote": "11 \u00d7 8 map \u00b7 34 steps on the full supply route"
  },
  {
    "id": "2-5",
    "week": 2,
    "stage": 5,
    "title": "The return route",
    "topic": "Variables",
    "teach": "A variable gives a value a name. Save your directions as variables and reuse them. Pick up a key with hero.collect(). Stand next to its door and use hero.unlock(direction).",
    "example": "east = \"right\"\nhero.move(east)\n# Next to a locked door:\nhero.unlock(\"down\")",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 1 locked door.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\neast = \"right\"\nwest = \"left\"\n# Give up and down names too. Then plan your route.\n",
    "world": {
      "width": 12,
      "height": 8,
      "path": [
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          6,
          7
        ],
        [
          7,
          6
        ],
        [
          8,
          6
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          10,
          5
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          8,
          2
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ]
      ],
      "start": [
        1,
        6
      ],
      "exit": [
        10,
        2
      ],
      "coins": [
        [
          6,
          7
        ],
        [
          6,
          6
        ],
        [
          10,
          6
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          1,
          4
        ],
        [
          6,
          2
        ]
      ],
      "keys": [
        [
          6,
          7
        ]
      ],
      "doors": [
        [
          10,
          5
        ]
      ],
      "potions": [],
      "enemies": []
    },
    "mapNote": "12 \u00d7 8 map \u00b7 37 steps on the full supply route"
  },
  {
    "id": "2-6",
    "week": 2,
    "stage": 6,
    "title": "Put it to the test",
    "topic": "Variables",
    "teach": "A variable gives a value a name. Save your directions as variables and reuse them. Pick up a key with hero.collect(). Stand next to its door and use hero.unlock(direction).",
    "example": "east = \"right\"\nhero.move(east)\n# Next to a locked door:\nhero.unlock(\"down\")",
    "objective": "Collect all 11 coins and reach the exit. Find the keys in the side rooms and open 1 locked door.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\neast = \"right\"\nwest = \"left\"\n# Give up and down names too. Then plan your route.\n",
    "world": {
      "width": 13,
      "height": 10,
      "path": [
        [
          11,
          8
        ],
        [
          10,
          8
        ],
        [
          9,
          8
        ],
        [
          8,
          8
        ],
        [
          7,
          8
        ],
        [
          6,
          8
        ],
        [
          6,
          9
        ],
        [
          5,
          8
        ],
        [
          4,
          8
        ],
        [
          3,
          8
        ],
        [
          2,
          8
        ],
        [
          1,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          7,
          6
        ],
        [
          7,
          5
        ],
        [
          8,
          6
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          11,
          5
        ],
        [
          11,
          4
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          1
        ],
        [
          8,
          2
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ]
      ],
      "start": [
        11,
        8
      ],
      "exit": [
        11,
        2
      ],
      "coins": [
        [
          6,
          9
        ],
        [
          6,
          8
        ],
        [
          1,
          8
        ],
        [
          7,
          5
        ],
        [
          7,
          6
        ],
        [
          11,
          6
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          1,
          4
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          6,
          9
        ]
      ],
      "doors": [
        [
          1,
          7
        ]
      ],
      "potions": [],
      "enemies": []
    },
    "mapNote": "13 \u00d7 10 map \u00b7 54 steps on the full supply route"
  },
  {
    "id": "3-1",
    "week": 3,
    "stage": 1,
    "title": "Three guards",
    "topic": "Numbers",
    "teach": "Work out your attack strength with numbers. Each hit can do 1, 2, or 3 damage. A guard that survives a hit takes 1 health from you. Pick enough strong hits to finish the fight.",
    "example": "strength = 1 + 2\nhero.attack(\"right\", strength)",
    "objective": "Collect all 5 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 2 guards. Keep an eye on your health.",
    "hint": "Read the number below each guard. A guard with 6 health needs two hits at strength 3. Get the key before going through the door.",
    "starter": "from hero_game import hero\n\nbase = 2\nbonus = 1\nstrength = base + bonus\n# Use strength when you reach a guard.\n",
    "world": {
      "width": 11,
      "height": 6,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          9,
          2
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        3
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          9,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ]
      ],
      "keys": [
        [
          6,
          0
        ]
      ],
      "doors": [
        [
          9,
          2
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 8,
          "y": 1,
          "health": 3
        },
        {
          "x": 2,
          "y": 3,
          "health": 6
        }
      ]
    },
    "mapNote": "11 \u00d7 6 map \u00b7 22 steps on the full supply route"
  },
  {
    "id": "3-2",
    "week": 3,
    "stage": 2,
    "title": "Choose your hits",
    "topic": "Numbers",
    "teach": "Work out your attack strength with numbers. Each hit can do 1, 2, or 3 damage. A guard that survives a hit takes 1 health from you. Pick enough strong hits to finish the fight.",
    "example": "strength = 1 + 2\nhero.attack(\"right\", strength)",
    "objective": "Collect all 5 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 2 guards. Keep an eye on your health.",
    "hint": "Read the number below each guard. A guard with 6 health needs two hits at strength 3. Get the key before going through the door.",
    "starter": "from hero_game import hero\n\nbase = 2\nbonus = 1\nstrength = base + bonus\n# Use strength when you reach a guard.\n",
    "world": {
      "width": 12,
      "height": 6,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          5,
          0
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          10,
          2
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        3
      ],
      "coins": [
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          10,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ]
      ],
      "keys": [
        [
          5,
          0
        ]
      ],
      "doors": [
        [
          10,
          2
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 9,
          "y": 1,
          "health": 3
        },
        {
          "x": 2,
          "y": 3,
          "health": 6
        }
      ]
    },
    "mapNote": "12 \u00d7 6 map \u00b7 24 steps on the full supply route"
  },
  {
    "id": "3-3",
    "week": 3,
    "stage": 3,
    "title": "Guard the bridge",
    "topic": "Numbers",
    "teach": "Work out your attack strength with numbers. Each hit can do 1, 2, or 3 damage. A guard that survives a hit takes 1 health from you. Pick enough strong hits to finish the fight.",
    "example": "strength = 1 + 2\nhero.attack(\"right\", strength)",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Read the number below each guard. A guard with 6 health needs two hits at strength 3. Get the key before going through the door.",
    "starter": "from hero_game import hero\n\nbase = 2\nbonus = 1\nstrength = base + bonus\n# Use strength when you reach a guard.\n",
    "world": {
      "width": 13,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          7,
          0
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          11,
          2
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          7,
          4
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        11,
        5
      ],
      "coins": [
        [
          7,
          0
        ],
        [
          7,
          1
        ],
        [
          11,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          1,
          3
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ]
      ],
      "keys": [
        [
          7,
          0
        ]
      ],
      "doors": [
        [
          11,
          2
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 10,
          "y": 1,
          "health": 3
        },
        {
          "x": 2,
          "y": 3,
          "health": 6
        },
        {
          "x": 10,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "13 \u00d7 8 map \u00b7 40 steps on the full supply route"
  },
  {
    "id": "3-4",
    "week": 3,
    "stage": 4,
    "title": "The west wing",
    "topic": "Numbers",
    "teach": "Work out your attack strength with numbers. Each hit can do 1, 2, or 3 damage. A guard that survives a hit takes 1 health from you. Pick enough strong hits to finish the fight.",
    "example": "strength = 1 + 2\nhero.attack(\"right\", strength)",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Read the number below each guard. A guard with 6 health needs two hits at strength 3. Get the key before going through the door.",
    "starter": "from hero_game import hero\n\nbase = 2\nbonus = 1\nstrength = base + bonus\n# Use strength when you reach a guard.\n",
    "world": {
      "width": 12,
      "height": 8,
      "path": [
        [
          10,
          1
        ],
        [
          9,
          1
        ],
        [
          8,
          1
        ],
        [
          7,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          5,
          1
        ],
        [
          4,
          1
        ],
        [
          3,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          7,
          3
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          10,
          4
        ],
        [
          10,
          5
        ],
        [
          9,
          5
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          6,
          5
        ],
        [
          5,
          5
        ],
        [
          4,
          5
        ],
        [
          3,
          5
        ],
        [
          2,
          5
        ],
        [
          1,
          5
        ]
      ],
      "start": [
        10,
        1
      ],
      "exit": [
        1,
        5
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          1,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          10,
          3
        ],
        [
          6,
          5
        ]
      ],
      "keys": [
        [
          6,
          0
        ]
      ],
      "doors": [
        [
          1,
          2
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 2,
          "y": 1,
          "health": 3
        },
        {
          "x": 9,
          "y": 3,
          "health": 6
        },
        {
          "x": 2,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "12 \u00d7 8 map \u00b7 37 steps on the full supply route"
  },
  {
    "id": "3-5",
    "week": 3,
    "stage": 5,
    "title": "The return route",
    "topic": "Numbers",
    "teach": "Work out your attack strength with numbers. Each hit can do 1, 2, or 3 damage. A guard that survives a hit takes 1 health from you. Pick enough strong hits to finish the fight.",
    "example": "strength = 1 + 2\nhero.attack(\"right\", strength)",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Read the number below each guard. A guard with 6 health needs two hits at strength 3. Get the key before going through the door.",
    "starter": "from hero_game import hero\n\nbase = 2\nbonus = 1\nstrength = base + bonus\n# Use strength when you reach a guard.\n",
    "world": {
      "width": 13,
      "height": 8,
      "path": [
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          7,
          6
        ],
        [
          7,
          7
        ],
        [
          8,
          6
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          11,
          5
        ],
        [
          11,
          4
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          8,
          2
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ]
      ],
      "start": [
        1,
        6
      ],
      "exit": [
        11,
        2
      ],
      "coins": [
        [
          7,
          7
        ],
        [
          7,
          6
        ],
        [
          11,
          6
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          1,
          4
        ],
        [
          7,
          3
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          7
        ]
      ],
      "doors": [
        [
          11,
          5
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 10,
          "y": 6,
          "health": 3
        },
        {
          "x": 2,
          "y": 4,
          "health": 6
        },
        {
          "x": 10,
          "y": 2,
          "health": 6
        }
      ]
    },
    "mapNote": "13 \u00d7 8 map \u00b7 40 steps on the full supply route"
  },
  {
    "id": "3-6",
    "week": 3,
    "stage": 6,
    "title": "Put it to the test",
    "topic": "Numbers",
    "teach": "Work out your attack strength with numbers. Each hit can do 1, 2, or 3 damage. A guard that survives a hit takes 1 health from you. Pick enough strong hits to finish the fight.",
    "example": "strength = 1 + 2\nhero.attack(\"right\", strength)",
    "objective": "Collect all 10 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Read the number below each guard. A guard with 6 health needs two hits at strength 3. Get the key before going through the door.",
    "starter": "from hero_game import hero\n\nbase = 2\nbonus = 1\nstrength = base + bonus\n# Use strength when you reach a guard.\n",
    "world": {
      "width": 14,
      "height": 10,
      "path": [
        [
          12,
          8
        ],
        [
          11,
          8
        ],
        [
          10,
          8
        ],
        [
          9,
          8
        ],
        [
          8,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          9
        ],
        [
          6,
          8
        ],
        [
          5,
          8
        ],
        [
          4,
          8
        ],
        [
          3,
          8
        ],
        [
          2,
          8
        ],
        [
          1,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          7,
          6
        ],
        [
          7,
          5
        ],
        [
          8,
          6
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          12,
          6
        ],
        [
          12,
          5
        ],
        [
          12,
          4
        ],
        [
          11,
          4
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          1
        ],
        [
          8,
          2
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ],
        [
          12,
          2
        ]
      ],
      "start": [
        12,
        8
      ],
      "exit": [
        12,
        2
      ],
      "coins": [
        [
          7,
          9
        ],
        [
          7,
          8
        ],
        [
          1,
          8
        ],
        [
          7,
          5
        ],
        [
          7,
          6
        ],
        [
          12,
          6
        ],
        [
          7,
          4
        ],
        [
          1,
          4
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          9
        ]
      ],
      "doors": [
        [
          1,
          7
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 2,
          "y": 8,
          "health": 3
        },
        {
          "x": 11,
          "y": 6,
          "health": 6
        },
        {
          "x": 2,
          "y": 4,
          "health": 6
        },
        {
          "x": 11,
          "y": 2,
          "health": 6
        }
      ]
    },
    "mapNote": "14 \u00d7 10 map \u00b7 58 steps on the full supply route"
  },
  {
    "id": "4-1",
    "week": 4,
    "stage": 1,
    "title": "Check each corner",
    "topic": "Conditionals",
    "teach": "Use if to decide what to do. Check for a guard or a door before moving. Check for coins, keys, and potions after moving. Some guards need two hits.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nif hero.door_at(\"right\"):\n    hero.unlock(\"right\")",
    "objective": "Collect all 5 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 2 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\n# Move through the map. Check each tile before you enter it.\n",
    "world": {
      "width": 11,
      "height": 6,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          9,
          2
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          3,
          2
        ],
        [
          7,
          2
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        3
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          9,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ]
      ],
      "keys": [
        [
          6,
          0
        ]
      ],
      "doors": [
        [
          9,
          2
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 8,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 6
        }
      ]
    },
    "mapNote": "11 \u00d7 6 map \u00b7 22 steps on the full supply route"
  },
  {
    "id": "4-2",
    "week": 4,
    "stage": 2,
    "title": "Two locked doors",
    "topic": "Conditionals",
    "teach": "Use if to decide what to do. Check for a guard or a door before moving. Check for coins, keys, and potions after moving. Some guards need two hits.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nif hero.door_at(\"right\"):\n    hero.unlock(\"right\")",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\n# Move through the map. Check each tile before you enter it.\n",
    "world": {
      "width": 12,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          5,
          0
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          10,
          2
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          3,
          2
        ],
        [
          8,
          2
        ],
        [
          3,
          4
        ],
        [
          8,
          4
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        10,
        5
      ],
      "coins": [
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          10,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          1,
          3
        ],
        [
          5,
          5
        ]
      ],
      "keys": [
        [
          5,
          0
        ],
        [
          5,
          4
        ]
      ],
      "doors": [
        [
          10,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 9,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 6
        },
        {
          "x": 9,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "12 \u00d7 8 map \u00b7 37 steps on the full supply route"
  },
  {
    "id": "4-3",
    "week": 4,
    "stage": 3,
    "title": "The split path",
    "topic": "Conditionals",
    "teach": "Use if to decide what to do. Check for a guard or a door before moving. Check for coins, keys, and potions after moving. Some guards need two hits.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nif hero.door_at(\"right\"):\n    hero.unlock(\"right\")",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\n# Move through the map. Check each tile before you enter it.\n",
    "world": {
      "width": 13,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          7,
          0
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          11,
          2
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          7,
          4
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          3,
          2
        ],
        [
          9,
          2
        ],
        [
          3,
          4
        ],
        [
          9,
          4
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        11,
        5
      ],
      "coins": [
        [
          7,
          0
        ],
        [
          7,
          1
        ],
        [
          11,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          1,
          3
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ]
      ],
      "keys": [
        [
          7,
          0
        ],
        [
          6,
          4
        ]
      ],
      "doors": [
        [
          11,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 10,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 6
        },
        {
          "x": 10,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "13 \u00d7 8 map \u00b7 40 steps on the full supply route"
  },
  {
    "id": "4-4",
    "week": 4,
    "stage": 4,
    "title": "The west wing",
    "topic": "Conditionals",
    "teach": "Use if to decide what to do. Check for a guard or a door before moving. Check for coins, keys, and potions after moving. Some guards need two hits.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nif hero.door_at(\"right\"):\n    hero.unlock(\"right\")",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\n# Move through the map. Check each tile before you enter it.\n",
    "world": {
      "width": 12,
      "height": 8,
      "path": [
        [
          10,
          1
        ],
        [
          9,
          1
        ],
        [
          8,
          1
        ],
        [
          7,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          5,
          1
        ],
        [
          4,
          1
        ],
        [
          3,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          7,
          3
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          10,
          4
        ],
        [
          10,
          5
        ],
        [
          9,
          5
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          6,
          5
        ],
        [
          5,
          5
        ],
        [
          4,
          5
        ],
        [
          3,
          5
        ],
        [
          2,
          5
        ],
        [
          1,
          5
        ],
        [
          8,
          2
        ],
        [
          3,
          2
        ],
        [
          8,
          4
        ],
        [
          3,
          4
        ]
      ],
      "start": [
        10,
        1
      ],
      "exit": [
        1,
        5
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          1,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          10,
          3
        ],
        [
          6,
          5
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          6,
          4
        ]
      ],
      "doors": [
        [
          1,
          2
        ],
        [
          10,
          4
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 2,
          "y": 1,
          "health": 6
        },
        {
          "x": 9,
          "y": 3,
          "health": 6
        },
        {
          "x": 2,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "12 \u00d7 8 map \u00b7 37 steps on the full supply route"
  },
  {
    "id": "4-5",
    "week": 4,
    "stage": 5,
    "title": "The return route",
    "topic": "Conditionals",
    "teach": "Use if to decide what to do. Check for a guard or a door before moving. Check for coins, keys, and potions after moving. Some guards need two hits.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nif hero.door_at(\"right\"):\n    hero.unlock(\"right\")",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\n# Move through the map. Check each tile before you enter it.\n",
    "world": {
      "width": 13,
      "height": 8,
      "path": [
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          7,
          6
        ],
        [
          7,
          7
        ],
        [
          8,
          6
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          11,
          5
        ],
        [
          11,
          4
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          8,
          2
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ],
        [
          3,
          5
        ],
        [
          9,
          5
        ],
        [
          3,
          3
        ],
        [
          9,
          3
        ]
      ],
      "start": [
        1,
        6
      ],
      "exit": [
        11,
        2
      ],
      "coins": [
        [
          7,
          7
        ],
        [
          7,
          6
        ],
        [
          11,
          6
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          1,
          4
        ],
        [
          7,
          3
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          7
        ],
        [
          6,
          3
        ]
      ],
      "doors": [
        [
          11,
          5
        ],
        [
          1,
          3
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 10,
          "y": 6,
          "health": 6
        },
        {
          "x": 2,
          "y": 4,
          "health": 6
        },
        {
          "x": 10,
          "y": 2,
          "health": 6
        }
      ]
    },
    "mapNote": "13 \u00d7 8 map \u00b7 40 steps on the full supply route"
  },
  {
    "id": "4-6",
    "week": 4,
    "stage": 6,
    "title": "Put it to the test",
    "topic": "Conditionals",
    "teach": "Use if to decide what to do. Check for a guard or a door before moving. Check for coins, keys, and potions after moving. Some guards need two hits.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nif hero.door_at(\"right\"):\n    hero.unlock(\"right\")",
    "objective": "Collect all 10 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\n# Move through the map. Check each tile before you enter it.\n",
    "world": {
      "width": 14,
      "height": 10,
      "path": [
        [
          12,
          8
        ],
        [
          11,
          8
        ],
        [
          10,
          8
        ],
        [
          9,
          8
        ],
        [
          8,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          9
        ],
        [
          6,
          8
        ],
        [
          5,
          8
        ],
        [
          4,
          8
        ],
        [
          3,
          8
        ],
        [
          2,
          8
        ],
        [
          1,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          7,
          6
        ],
        [
          7,
          5
        ],
        [
          8,
          6
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          12,
          6
        ],
        [
          12,
          5
        ],
        [
          12,
          4
        ],
        [
          11,
          4
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          1
        ],
        [
          8,
          2
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ],
        [
          12,
          2
        ],
        [
          10,
          7
        ],
        [
          3,
          7
        ],
        [
          10,
          5
        ],
        [
          3,
          5
        ],
        [
          10,
          3
        ],
        [
          3,
          3
        ]
      ],
      "start": [
        12,
        8
      ],
      "exit": [
        12,
        2
      ],
      "coins": [
        [
          7,
          9
        ],
        [
          7,
          8
        ],
        [
          1,
          8
        ],
        [
          7,
          5
        ],
        [
          7,
          6
        ],
        [
          12,
          6
        ],
        [
          7,
          4
        ],
        [
          1,
          4
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          9
        ],
        [
          7,
          5
        ]
      ],
      "doors": [
        [
          1,
          7
        ],
        [
          12,
          5
        ]
      ],
      "potions": [],
      "enemies": [
        {
          "x": 2,
          "y": 8,
          "health": 6
        },
        {
          "x": 11,
          "y": 6,
          "health": 6
        },
        {
          "x": 2,
          "y": 4,
          "health": 6
        },
        {
          "x": 11,
          "y": 2,
          "health": 6
        }
      ]
    },
    "mapNote": "14 \u00d7 10 map \u00b7 58 steps on the full supply route"
  },
  {
    "id": "5-1",
    "week": 5,
    "stage": 1,
    "title": "Patrol the halls",
    "topic": "Loops",
    "teach": "Use a for loop to repeat a known number of moves. Use a while loop when you need to keep going until something changes. Collect a potion in a side room, then call hero.heal() when you need health.",
    "example": "while hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nhero.move(\"right\")",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Break each hall into short stretches. Stop the movement loop at a side room or a guard. Check your health before starting the next fight.",
    "starter": "from hero_game import hero\n\n# Use for loops in the halls.\n# Use while loops when a guard needs more than one hit.\n",
    "world": {
      "width": 11,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          9,
          2
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          3,
          2
        ],
        [
          7,
          2
        ],
        [
          3,
          4
        ],
        [
          7,
          4
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        9,
        5
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          9,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ]
      ],
      "keys": [
        [
          6,
          0
        ]
      ],
      "doors": [
        [
          9,
          2
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ]
      ],
      "enemies": [
        {
          "x": 8,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 8,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "11 \u00d7 8 map \u00b7 34 steps on the full supply route"
  },
  {
    "id": "5-2",
    "week": 5,
    "stage": 2,
    "title": "The supply run",
    "topic": "Loops",
    "teach": "Use a for loop to repeat a known number of moves. Use a while loop when you need to keep going until something changes. Collect a potion in a side room, then call hero.heal() when you need health.",
    "example": "while hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nhero.move(\"right\")",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Break each hall into short stretches. Stop the movement loop at a side room or a guard. Check your health before starting the next fight.",
    "starter": "from hero_game import hero\n\n# Use for loops in the halls.\n# Use while loops when a guard needs more than one hit.\n",
    "world": {
      "width": 12,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          5,
          0
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          10,
          2
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          3,
          2
        ],
        [
          8,
          2
        ],
        [
          3,
          4
        ],
        [
          8,
          4
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        10,
        5
      ],
      "coins": [
        [
          5,
          0
        ],
        [
          5,
          1
        ],
        [
          10,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          1,
          3
        ],
        [
          5,
          5
        ]
      ],
      "keys": [
        [
          5,
          0
        ],
        [
          5,
          4
        ]
      ],
      "doors": [
        [
          10,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          5,
          0
        ],
        [
          5,
          4
        ],
        [
          5,
          4
        ]
      ],
      "enemies": [
        {
          "x": 9,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 9,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "12 \u00d7 8 map \u00b7 37 steps on the full supply route"
  },
  {
    "id": "5-3",
    "week": 5,
    "stage": 3,
    "title": "Clear the barracks",
    "topic": "Loops",
    "teach": "Use a for loop to repeat a known number of moves. Use a while loop when you need to keep going until something changes. Collect a potion in a side room, then call hero.heal() when you need health.",
    "example": "while hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nhero.move(\"right\")",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Break each hall into short stretches. Stop the movement loop at a side room or a guard. Check your health before starting the next fight.",
    "starter": "from hero_game import hero\n\n# Use for loops in the halls.\n# Use while loops when a guard needs more than one hit.\n",
    "world": {
      "width": 13,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          7,
          0
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          11,
          2
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          7,
          4
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          3,
          2
        ],
        [
          9,
          2
        ],
        [
          3,
          4
        ],
        [
          9,
          4
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        11,
        5
      ],
      "coins": [
        [
          7,
          0
        ],
        [
          7,
          1
        ],
        [
          11,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          1,
          3
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ]
      ],
      "keys": [
        [
          7,
          0
        ],
        [
          6,
          4
        ]
      ],
      "doors": [
        [
          11,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          7,
          0
        ],
        [
          6,
          4
        ],
        [
          7,
          4
        ]
      ],
      "enemies": [
        {
          "x": 10,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 10,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "13 \u00d7 8 map \u00b7 40 steps on the full supply route"
  },
  {
    "id": "5-4",
    "week": 5,
    "stage": 4,
    "title": "The west wing",
    "topic": "Loops",
    "teach": "Use a for loop to repeat a known number of moves. Use a while loop when you need to keep going until something changes. Collect a potion in a side room, then call hero.heal() when you need health.",
    "example": "while hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nhero.move(\"right\")",
    "objective": "Collect all 10 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Break each hall into short stretches. Stop the movement loop at a side room or a guard. Check your health before starting the next fight.",
    "starter": "from hero_game import hero\n\n# Use for loops in the halls.\n# Use while loops when a guard needs more than one hit.\n",
    "world": {
      "width": 12,
      "height": 10,
      "path": [
        [
          10,
          1
        ],
        [
          9,
          1
        ],
        [
          8,
          1
        ],
        [
          7,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          5,
          1
        ],
        [
          4,
          1
        ],
        [
          3,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          7,
          3
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          10,
          4
        ],
        [
          10,
          5
        ],
        [
          9,
          5
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          6,
          5
        ],
        [
          5,
          5
        ],
        [
          4,
          5
        ],
        [
          3,
          5
        ],
        [
          2,
          5
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          1,
          7
        ],
        [
          2,
          7
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          5,
          7
        ],
        [
          6,
          7
        ],
        [
          6,
          8
        ],
        [
          7,
          7
        ],
        [
          8,
          7
        ],
        [
          9,
          7
        ],
        [
          10,
          7
        ],
        [
          8,
          2
        ],
        [
          3,
          2
        ],
        [
          8,
          4
        ],
        [
          3,
          4
        ],
        [
          8,
          6
        ],
        [
          3,
          6
        ]
      ],
      "start": [
        10,
        1
      ],
      "exit": [
        10,
        7
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          1,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          10,
          3
        ],
        [
          6,
          5
        ],
        [
          1,
          5
        ],
        [
          6,
          8
        ],
        [
          6,
          7
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          6,
          4
        ]
      ],
      "doors": [
        [
          1,
          2
        ],
        [
          10,
          4
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          6,
          4
        ],
        [
          6,
          4
        ],
        [
          6,
          8
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 1,
          "health": 6
        },
        {
          "x": 9,
          "y": 3,
          "health": 9
        },
        {
          "x": 2,
          "y": 5,
          "health": 6
        },
        {
          "x": 9,
          "y": 7,
          "health": 9
        }
      ]
    },
    "mapNote": "12 \u00d7 10 map \u00b7 50 steps on the full supply route"
  },
  {
    "id": "5-5",
    "week": 5,
    "stage": 5,
    "title": "The return route",
    "topic": "Loops",
    "teach": "Use a for loop to repeat a known number of moves. Use a while loop when you need to keep going until something changes. Collect a potion in a side room, then call hero.heal() when you need health.",
    "example": "while hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nhero.move(\"right\")",
    "objective": "Collect all 11 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Break each hall into short stretches. Stop the movement loop at a side room or a guard. Check your health before starting the next fight.",
    "starter": "from hero_game import hero\n\n# Use for loops in the halls.\n# Use while loops when a guard needs more than one hit.\n",
    "world": {
      "width": 13,
      "height": 10,
      "path": [
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          6,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          9
        ],
        [
          8,
          8
        ],
        [
          9,
          8
        ],
        [
          10,
          8
        ],
        [
          11,
          8
        ],
        [
          11,
          7
        ],
        [
          11,
          6
        ],
        [
          10,
          6
        ],
        [
          9,
          6
        ],
        [
          8,
          6
        ],
        [
          7,
          6
        ],
        [
          6,
          6
        ],
        [
          6,
          5
        ],
        [
          5,
          6
        ],
        [
          4,
          6
        ],
        [
          3,
          6
        ],
        [
          2,
          6
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ],
        [
          8,
          4
        ],
        [
          9,
          4
        ],
        [
          10,
          4
        ],
        [
          11,
          4
        ],
        [
          11,
          3
        ],
        [
          11,
          2
        ],
        [
          10,
          2
        ],
        [
          9,
          2
        ],
        [
          8,
          2
        ],
        [
          7,
          2
        ],
        [
          6,
          2
        ],
        [
          6,
          1
        ],
        [
          5,
          2
        ],
        [
          4,
          2
        ],
        [
          3,
          2
        ],
        [
          2,
          2
        ],
        [
          1,
          2
        ],
        [
          3,
          7
        ],
        [
          9,
          7
        ],
        [
          3,
          5
        ],
        [
          9,
          5
        ],
        [
          3,
          3
        ],
        [
          9,
          3
        ]
      ],
      "start": [
        1,
        8
      ],
      "exit": [
        1,
        2
      ],
      "coins": [
        [
          7,
          9
        ],
        [
          7,
          8
        ],
        [
          11,
          8
        ],
        [
          6,
          5
        ],
        [
          6,
          6
        ],
        [
          1,
          6
        ],
        [
          7,
          5
        ],
        [
          7,
          4
        ],
        [
          11,
          4
        ],
        [
          6,
          1
        ],
        [
          6,
          2
        ]
      ],
      "keys": [
        [
          7,
          9
        ],
        [
          6,
          5
        ]
      ],
      "doors": [
        [
          11,
          7
        ],
        [
          1,
          5
        ]
      ],
      "potions": [
        [
          7,
          9
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          6,
          1
        ]
      ],
      "enemies": [
        {
          "x": 10,
          "y": 8,
          "health": 6
        },
        {
          "x": 2,
          "y": 6,
          "health": 9
        },
        {
          "x": 10,
          "y": 4,
          "health": 6
        },
        {
          "x": 2,
          "y": 2,
          "health": 9
        }
      ]
    },
    "mapNote": "13 \u00d7 10 map \u00b7 54 steps on the full supply route"
  },
  {
    "id": "5-6",
    "week": 5,
    "stage": 6,
    "title": "Put it to the test",
    "topic": "Loops",
    "teach": "Use a for loop to repeat a known number of moves. Use a while loop when you need to keep going until something changes. Collect a potion in a side room, then call hero.heal() when you need health.",
    "example": "while hero.enemy_at(\"right\"):\n    hero.attack(\"right\", 3)\nhero.move(\"right\")",
    "objective": "Collect all 12 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 5 guards. Keep an eye on your health.",
    "hint": "Break each hall into short stretches. Stop the movement loop at a side room or a guard. Check your health before starting the next fight.",
    "starter": "from hero_game import hero\n\n# Use for loops in the halls.\n# Use while loops when a guard needs more than one hit.\n",
    "world": {
      "width": 14,
      "height": 12,
      "path": [
        [
          12,
          10
        ],
        [
          11,
          10
        ],
        [
          10,
          10
        ],
        [
          9,
          10
        ],
        [
          8,
          10
        ],
        [
          7,
          10
        ],
        [
          7,
          11
        ],
        [
          6,
          10
        ],
        [
          5,
          10
        ],
        [
          4,
          10
        ],
        [
          3,
          10
        ],
        [
          2,
          10
        ],
        [
          1,
          10
        ],
        [
          1,
          9
        ],
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          6,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ],
        [
          8,
          8
        ],
        [
          9,
          8
        ],
        [
          10,
          8
        ],
        [
          11,
          8
        ],
        [
          12,
          8
        ],
        [
          12,
          7
        ],
        [
          12,
          6
        ],
        [
          11,
          6
        ],
        [
          10,
          6
        ],
        [
          9,
          6
        ],
        [
          8,
          6
        ],
        [
          7,
          6
        ],
        [
          6,
          6
        ],
        [
          5,
          6
        ],
        [
          4,
          6
        ],
        [
          3,
          6
        ],
        [
          2,
          6
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          8,
          4
        ],
        [
          9,
          4
        ],
        [
          10,
          4
        ],
        [
          11,
          4
        ],
        [
          12,
          4
        ],
        [
          12,
          3
        ],
        [
          12,
          2
        ],
        [
          11,
          2
        ],
        [
          10,
          2
        ],
        [
          9,
          2
        ],
        [
          8,
          2
        ],
        [
          7,
          2
        ],
        [
          6,
          2
        ],
        [
          5,
          2
        ],
        [
          4,
          2
        ],
        [
          3,
          2
        ],
        [
          2,
          2
        ],
        [
          1,
          2
        ],
        [
          10,
          9
        ],
        [
          3,
          9
        ],
        [
          10,
          7
        ],
        [
          3,
          7
        ],
        [
          10,
          5
        ],
        [
          3,
          5
        ],
        [
          10,
          3
        ],
        [
          3,
          3
        ]
      ],
      "start": [
        12,
        10
      ],
      "exit": [
        1,
        2
      ],
      "coins": [
        [
          7,
          11
        ],
        [
          7,
          10
        ],
        [
          1,
          10
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          12,
          8
        ],
        [
          7,
          6
        ],
        [
          1,
          6
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          12,
          4
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          11
        ],
        [
          7,
          7
        ]
      ],
      "doors": [
        [
          1,
          9
        ],
        [
          12,
          7
        ]
      ],
      "potions": [
        [
          7,
          11
        ],
        [
          7,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          3
        ],
        [
          7,
          3
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 10,
          "health": 6
        },
        {
          "x": 11,
          "y": 8,
          "health": 9
        },
        {
          "x": 2,
          "y": 6,
          "health": 6
        },
        {
          "x": 11,
          "y": 4,
          "health": 9
        },
        {
          "x": 2,
          "y": 2,
          "health": 12
        }
      ]
    },
    "mapNote": "14 \u00d7 12 map \u00b7 73 steps on the full supply route"
  },
  {
    "id": "6-1",
    "week": 6,
    "stage": 1,
    "title": "Build a travel kit",
    "topic": "Functions",
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero.",
    "example": "def walk_three():\n    for step in range(3):\n        hero.move(\"right\")\n\nwalk_three()",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Test your function on the first few tiles. Then reuse it for the halls and side rooms. A function can call another function.",
    "starter": "from hero_game import hero\n\ndef travel(direction, steps):\n    # Check, fight, move, and collect inside a loop.\n    pass\n\n# Call travel for each part of your route.\n",
    "world": {
      "width": 12,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          10,
          2
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          3,
          2
        ],
        [
          8,
          2
        ],
        [
          3,
          4
        ],
        [
          8,
          4
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        10,
        5
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          10,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          5
        ]
      ],
      "keys": [
        [
          6,
          0
        ]
      ],
      "doors": [
        [
          10,
          2
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          6,
          4
        ],
        [
          6,
          4
        ]
      ],
      "enemies": [
        {
          "x": 9,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 9,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "12 \u00d7 8 map \u00b7 37 steps on the full supply route"
  },
  {
    "id": "6-2",
    "week": 6,
    "stage": 2,
    "title": "Search each room",
    "topic": "Functions",
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero.",
    "example": "def walk_three():\n    for step in range(3):\n        hero.move(\"right\")\n\nwalk_three()",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Test your function on the first few tiles. Then reuse it for the halls and side rooms. A function can call another function.",
    "starter": "from hero_game import hero\n\ndef travel(direction, steps):\n    # Check, fight, move, and collect inside a loop.\n    pass\n\n# Call travel for each part of your route.\n",
    "world": {
      "width": 13,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          11,
          2
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          3,
          2
        ],
        [
          9,
          2
        ],
        [
          3,
          4
        ],
        [
          9,
          4
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        11,
        5
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          11,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          5,
          4
        ]
      ],
      "doors": [
        [
          11,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ]
      ],
      "enemies": [
        {
          "x": 10,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 10,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "13 \u00d7 8 map \u00b7 40 steps on the full supply route"
  },
  {
    "id": "6-3",
    "week": 6,
    "stage": 3,
    "title": "The watchtower",
    "topic": "Functions",
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero.",
    "example": "def walk_three():\n    for step in range(3):\n        hero.move(\"right\")\n\nwalk_three()",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Test your function on the first few tiles. Then reuse it for the halls and side rooms. A function can call another function.",
    "starter": "from hero_game import hero\n\ndef travel(direction, steps):\n    # Check, fight, move, and collect inside a loop.\n    pass\n\n# Call travel for each part of your route.\n",
    "world": {
      "width": 14,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          7,
          0
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          12,
          1
        ],
        [
          12,
          2
        ],
        [
          12,
          3
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          12,
          5
        ],
        [
          3,
          2
        ],
        [
          10,
          2
        ],
        [
          3,
          4
        ],
        [
          10,
          4
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        12,
        5
      ],
      "coins": [
        [
          7,
          0
        ],
        [
          7,
          1
        ],
        [
          12,
          1
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          1,
          3
        ],
        [
          7,
          5
        ]
      ],
      "keys": [
        [
          7,
          0
        ],
        [
          7,
          4
        ]
      ],
      "doors": [
        [
          12,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          7,
          0
        ],
        [
          7,
          4
        ],
        [
          7,
          4
        ]
      ],
      "enemies": [
        {
          "x": 11,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 11,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "14 \u00d7 8 map \u00b7 43 steps on the full supply route"
  },
  {
    "id": "6-4",
    "week": 6,
    "stage": 4,
    "title": "The west wing",
    "topic": "Functions",
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero.",
    "example": "def walk_three():\n    for step in range(3):\n        hero.move(\"right\")\n\nwalk_three()",
    "objective": "Collect all 11 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Test your function on the first few tiles. Then reuse it for the halls and side rooms. A function can call another function.",
    "starter": "from hero_game import hero\n\ndef travel(direction, steps):\n    # Check, fight, move, and collect inside a loop.\n    pass\n\n# Call travel for each part of your route.\n",
    "world": {
      "width": 13,
      "height": 10,
      "path": [
        [
          11,
          1
        ],
        [
          10,
          1
        ],
        [
          9,
          1
        ],
        [
          8,
          1
        ],
        [
          7,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          5,
          1
        ],
        [
          4,
          1
        ],
        [
          3,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          10,
          5
        ],
        [
          9,
          5
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          5,
          5
        ],
        [
          4,
          5
        ],
        [
          3,
          5
        ],
        [
          2,
          5
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          1,
          7
        ],
        [
          2,
          7
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          5,
          7
        ],
        [
          6,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          8,
          7
        ],
        [
          9,
          7
        ],
        [
          10,
          7
        ],
        [
          11,
          7
        ],
        [
          9,
          2
        ],
        [
          3,
          2
        ],
        [
          9,
          4
        ],
        [
          3,
          4
        ],
        [
          9,
          6
        ],
        [
          3,
          6
        ]
      ],
      "start": [
        11,
        1
      ],
      "exit": [
        11,
        7
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          1,
          1
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          11,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          1,
          5
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          7,
          4
        ]
      ],
      "doors": [
        [
          1,
          2
        ],
        [
          11,
          4
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          8
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 1,
          "health": 6
        },
        {
          "x": 10,
          "y": 3,
          "health": 9
        },
        {
          "x": 2,
          "y": 5,
          "health": 6
        },
        {
          "x": 10,
          "y": 7,
          "health": 9
        }
      ]
    },
    "mapNote": "13 \u00d7 10 map \u00b7 54 steps on the full supply route"
  },
  {
    "id": "6-5",
    "week": 6,
    "stage": 5,
    "title": "The return route",
    "topic": "Functions",
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero.",
    "example": "def walk_three():\n    for step in range(3):\n        hero.move(\"right\")\n\nwalk_three()",
    "objective": "Collect all 10 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Test your function on the first few tiles. Then reuse it for the halls and side rooms. A function can call another function.",
    "starter": "from hero_game import hero\n\ndef travel(direction, steps):\n    # Check, fight, move, and collect inside a loop.\n    pass\n\n# Call travel for each part of your route.\n",
    "world": {
      "width": 14,
      "height": 10,
      "path": [
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          6,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          9
        ],
        [
          8,
          8
        ],
        [
          9,
          8
        ],
        [
          10,
          8
        ],
        [
          11,
          8
        ],
        [
          12,
          8
        ],
        [
          12,
          7
        ],
        [
          12,
          6
        ],
        [
          11,
          6
        ],
        [
          10,
          6
        ],
        [
          9,
          6
        ],
        [
          8,
          6
        ],
        [
          7,
          6
        ],
        [
          7,
          5
        ],
        [
          6,
          6
        ],
        [
          5,
          6
        ],
        [
          4,
          6
        ],
        [
          3,
          6
        ],
        [
          2,
          6
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          4
        ],
        [
          8,
          4
        ],
        [
          9,
          4
        ],
        [
          10,
          4
        ],
        [
          11,
          4
        ],
        [
          12,
          4
        ],
        [
          12,
          3
        ],
        [
          12,
          2
        ],
        [
          11,
          2
        ],
        [
          10,
          2
        ],
        [
          9,
          2
        ],
        [
          8,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          1
        ],
        [
          6,
          2
        ],
        [
          5,
          2
        ],
        [
          4,
          2
        ],
        [
          3,
          2
        ],
        [
          2,
          2
        ],
        [
          1,
          2
        ],
        [
          3,
          7
        ],
        [
          10,
          7
        ],
        [
          3,
          5
        ],
        [
          10,
          5
        ],
        [
          3,
          3
        ],
        [
          10,
          3
        ]
      ],
      "start": [
        1,
        8
      ],
      "exit": [
        1,
        2
      ],
      "coins": [
        [
          7,
          9
        ],
        [
          7,
          8
        ],
        [
          12,
          8
        ],
        [
          7,
          5
        ],
        [
          7,
          6
        ],
        [
          1,
          6
        ],
        [
          7,
          4
        ],
        [
          12,
          4
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          9
        ],
        [
          7,
          5
        ]
      ],
      "doors": [
        [
          12,
          7
        ],
        [
          1,
          5
        ]
      ],
      "potions": [
        [
          7,
          9
        ],
        [
          7,
          5
        ],
        [
          7,
          5
        ],
        [
          7,
          1
        ]
      ],
      "enemies": [
        {
          "x": 11,
          "y": 8,
          "health": 6
        },
        {
          "x": 2,
          "y": 6,
          "health": 9
        },
        {
          "x": 11,
          "y": 4,
          "health": 6
        },
        {
          "x": 2,
          "y": 2,
          "health": 9
        }
      ]
    },
    "mapNote": "14 \u00d7 10 map \u00b7 58 steps on the full supply route"
  },
  {
    "id": "6-6",
    "week": 6,
    "stage": 6,
    "title": "Put it to the test",
    "topic": "Functions",
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero.",
    "example": "def walk_three():\n    for step in range(3):\n        hero.move(\"right\")\n\nwalk_three()",
    "objective": "Collect all 14 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 5 guards. Keep an eye on your health.",
    "hint": "Test your function on the first few tiles. Then reuse it for the halls and side rooms. A function can call another function.",
    "starter": "from hero_game import hero\n\ndef travel(direction, steps):\n    # Check, fight, move, and collect inside a loop.\n    pass\n\n# Call travel for each part of your route.\n",
    "world": {
      "width": 15,
      "height": 12,
      "path": [
        [
          13,
          10
        ],
        [
          12,
          10
        ],
        [
          11,
          10
        ],
        [
          10,
          10
        ],
        [
          9,
          10
        ],
        [
          8,
          10
        ],
        [
          7,
          10
        ],
        [
          7,
          11
        ],
        [
          6,
          10
        ],
        [
          5,
          10
        ],
        [
          4,
          10
        ],
        [
          3,
          10
        ],
        [
          2,
          10
        ],
        [
          1,
          10
        ],
        [
          1,
          9
        ],
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          6,
          8
        ],
        [
          7,
          8
        ],
        [
          8,
          8
        ],
        [
          8,
          7
        ],
        [
          9,
          8
        ],
        [
          10,
          8
        ],
        [
          11,
          8
        ],
        [
          12,
          8
        ],
        [
          13,
          8
        ],
        [
          13,
          7
        ],
        [
          13,
          6
        ],
        [
          12,
          6
        ],
        [
          11,
          6
        ],
        [
          10,
          6
        ],
        [
          9,
          6
        ],
        [
          8,
          6
        ],
        [
          7,
          6
        ],
        [
          7,
          7
        ],
        [
          6,
          6
        ],
        [
          5,
          6
        ],
        [
          4,
          6
        ],
        [
          3,
          6
        ],
        [
          2,
          6
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          4
        ],
        [
          8,
          4
        ],
        [
          8,
          3
        ],
        [
          9,
          4
        ],
        [
          10,
          4
        ],
        [
          11,
          4
        ],
        [
          12,
          4
        ],
        [
          13,
          4
        ],
        [
          13,
          3
        ],
        [
          13,
          2
        ],
        [
          12,
          2
        ],
        [
          11,
          2
        ],
        [
          10,
          2
        ],
        [
          9,
          2
        ],
        [
          8,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          6,
          2
        ],
        [
          5,
          2
        ],
        [
          4,
          2
        ],
        [
          3,
          2
        ],
        [
          2,
          2
        ],
        [
          1,
          2
        ],
        [
          11,
          9
        ],
        [
          3,
          9
        ],
        [
          11,
          7
        ],
        [
          3,
          7
        ],
        [
          11,
          5
        ],
        [
          3,
          5
        ],
        [
          11,
          3
        ],
        [
          3,
          3
        ]
      ],
      "start": [
        13,
        10
      ],
      "exit": [
        1,
        2
      ],
      "coins": [
        [
          7,
          11
        ],
        [
          7,
          10
        ],
        [
          1,
          10
        ],
        [
          8,
          7
        ],
        [
          8,
          8
        ],
        [
          13,
          8
        ],
        [
          7,
          7
        ],
        [
          7,
          6
        ],
        [
          1,
          6
        ],
        [
          8,
          3
        ],
        [
          8,
          4
        ],
        [
          13,
          4
        ],
        [
          7,
          3
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          11
        ],
        [
          8,
          7
        ]
      ],
      "doors": [
        [
          1,
          9
        ],
        [
          13,
          7
        ]
      ],
      "potions": [
        [
          7,
          11
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 10,
          "health": 6
        },
        {
          "x": 12,
          "y": 8,
          "health": 9
        },
        {
          "x": 2,
          "y": 6,
          "health": 6
        },
        {
          "x": 12,
          "y": 4,
          "health": 9
        },
        {
          "x": 2,
          "y": 2,
          "health": 12
        }
      ]
    },
    "mapNote": "15 \u00d7 12 map \u00b7 78 steps on the full supply route"
  },
  {
    "id": "7-1",
    "week": 7,
    "stage": 1,
    "title": "Write the route",
    "topic": "Lists",
    "teach": "Store your route in a list so you can change the plan without rewriting how the hero moves. Use a function to handle one step. Then loop through the directions in your list.",
    "example": "route = [\"right\", \"down\"]\nfor direction in route:\n    hero.move(direction)",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\nroute = []\n# Add each direction to your list.\n# Loop through the list to follow your plan.\n",
    "world": {
      "width": 12,
      "height": 8,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          10,
          2
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          3,
          2
        ],
        [
          8,
          2
        ],
        [
          3,
          4
        ],
        [
          8,
          4
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        10,
        5
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          10,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          5
        ]
      ],
      "keys": [
        [
          6,
          0
        ]
      ],
      "doors": [
        [
          10,
          2
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          6,
          4
        ],
        [
          6,
          4
        ]
      ],
      "enemies": [
        {
          "x": 9,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 9,
          "y": 5,
          "health": 6
        }
      ]
    },
    "mapNote": "12 \u00d7 8 map \u00b7 37 steps on the full supply route"
  },
  {
    "id": "7-2",
    "week": 7,
    "stage": 2,
    "title": "Change the plan",
    "topic": "Lists",
    "teach": "Store your route in a list so you can change the plan without rewriting how the hero moves. Use a function to handle one step. Then loop through the directions in your list.",
    "example": "route = [\"right\", \"down\"]\nfor direction in route:\n    hero.move(direction)",
    "objective": "Collect all 11 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\nroute = []\n# Add each direction to your list.\n# Loop through the list to follow your plan.\n",
    "world": {
      "width": 13,
      "height": 10,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          11,
          2
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ],
        [
          10,
          7
        ],
        [
          9,
          7
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          6,
          7
        ],
        [
          5,
          7
        ],
        [
          5,
          8
        ],
        [
          4,
          7
        ],
        [
          3,
          7
        ],
        [
          2,
          7
        ],
        [
          1,
          7
        ],
        [
          3,
          2
        ],
        [
          9,
          2
        ],
        [
          3,
          4
        ],
        [
          9,
          4
        ],
        [
          3,
          6
        ],
        [
          9,
          6
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        7
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          11,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          11,
          5
        ],
        [
          5,
          8
        ],
        [
          5,
          7
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          5,
          4
        ]
      ],
      "doors": [
        [
          11,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          5,
          8
        ]
      ],
      "enemies": [
        {
          "x": 10,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 10,
          "y": 5,
          "health": 6
        },
        {
          "x": 2,
          "y": 7,
          "health": 9
        }
      ]
    },
    "mapNote": "13 \u00d7 10 map \u00b7 54 steps on the full supply route"
  },
  {
    "id": "7-3",
    "week": 7,
    "stage": 3,
    "title": "The winding tunnels",
    "topic": "Lists",
    "teach": "Store your route in a list so you can change the plan without rewriting how the hero moves. Use a function to handle one step. Then loop through the directions in your list.",
    "example": "route = [\"right\", \"down\"]\nfor direction in route:\n    hero.move(direction)",
    "objective": "Collect all 10 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\nroute = []\n# Add each direction to your list.\n# Loop through the list to follow your plan.\n",
    "world": {
      "width": 14,
      "height": 10,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          7,
          0
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          12,
          1
        ],
        [
          12,
          2
        ],
        [
          12,
          3
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          12,
          5
        ],
        [
          12,
          6
        ],
        [
          12,
          7
        ],
        [
          11,
          7
        ],
        [
          10,
          7
        ],
        [
          9,
          7
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          6,
          7
        ],
        [
          5,
          7
        ],
        [
          4,
          7
        ],
        [
          3,
          7
        ],
        [
          2,
          7
        ],
        [
          1,
          7
        ],
        [
          3,
          2
        ],
        [
          10,
          2
        ],
        [
          3,
          4
        ],
        [
          10,
          4
        ],
        [
          3,
          6
        ],
        [
          10,
          6
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        7
      ],
      "coins": [
        [
          7,
          0
        ],
        [
          7,
          1
        ],
        [
          12,
          1
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          1,
          3
        ],
        [
          7,
          5
        ],
        [
          12,
          5
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ]
      ],
      "keys": [
        [
          7,
          0
        ],
        [
          7,
          4
        ]
      ],
      "doors": [
        [
          12,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          7,
          0
        ],
        [
          7,
          4
        ],
        [
          7,
          4
        ],
        [
          7,
          8
        ]
      ],
      "enemies": [
        {
          "x": 11,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 11,
          "y": 5,
          "health": 6
        },
        {
          "x": 2,
          "y": 7,
          "health": 9
        }
      ]
    },
    "mapNote": "14 \u00d7 10 map \u00b7 58 steps on the full supply route"
  },
  {
    "id": "7-4",
    "week": 7,
    "stage": 4,
    "title": "The west wing",
    "topic": "Lists",
    "teach": "Store your route in a list so you can change the plan without rewriting how the hero moves. Use a function to handle one step. Then loop through the directions in your list.",
    "example": "route = [\"right\", \"down\"]\nfor direction in route:\n    hero.move(direction)",
    "objective": "Collect all 11 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\nroute = []\n# Add each direction to your list.\n# Loop through the list to follow your plan.\n",
    "world": {
      "width": 13,
      "height": 10,
      "path": [
        [
          11,
          1
        ],
        [
          10,
          1
        ],
        [
          9,
          1
        ],
        [
          8,
          1
        ],
        [
          7,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          5,
          1
        ],
        [
          4,
          1
        ],
        [
          3,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          10,
          5
        ],
        [
          9,
          5
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          5,
          5
        ],
        [
          4,
          5
        ],
        [
          3,
          5
        ],
        [
          2,
          5
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          1,
          7
        ],
        [
          2,
          7
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          5,
          7
        ],
        [
          6,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          8,
          7
        ],
        [
          9,
          7
        ],
        [
          10,
          7
        ],
        [
          11,
          7
        ],
        [
          9,
          2
        ],
        [
          3,
          2
        ],
        [
          9,
          4
        ],
        [
          3,
          4
        ],
        [
          9,
          6
        ],
        [
          3,
          6
        ]
      ],
      "start": [
        11,
        1
      ],
      "exit": [
        11,
        7
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          1,
          1
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          11,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          1,
          5
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          7,
          4
        ]
      ],
      "doors": [
        [
          1,
          2
        ],
        [
          11,
          4
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          8
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 1,
          "health": 6
        },
        {
          "x": 10,
          "y": 3,
          "health": 9
        },
        {
          "x": 2,
          "y": 5,
          "health": 6
        },
        {
          "x": 10,
          "y": 7,
          "health": 9
        }
      ]
    },
    "mapNote": "13 \u00d7 10 map \u00b7 54 steps on the full supply route"
  },
  {
    "id": "7-5",
    "week": 7,
    "stage": 5,
    "title": "The return route",
    "topic": "Lists",
    "teach": "Store your route in a list so you can change the plan without rewriting how the hero moves. Use a function to handle one step. Then loop through the directions in your list.",
    "example": "route = [\"right\", \"down\"]\nfor direction in route:\n    hero.move(direction)",
    "objective": "Collect all 10 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\nroute = []\n# Add each direction to your list.\n# Loop through the list to follow your plan.\n",
    "world": {
      "width": 14,
      "height": 10,
      "path": [
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          6,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          9
        ],
        [
          8,
          8
        ],
        [
          9,
          8
        ],
        [
          10,
          8
        ],
        [
          11,
          8
        ],
        [
          12,
          8
        ],
        [
          12,
          7
        ],
        [
          12,
          6
        ],
        [
          11,
          6
        ],
        [
          10,
          6
        ],
        [
          9,
          6
        ],
        [
          8,
          6
        ],
        [
          7,
          6
        ],
        [
          7,
          5
        ],
        [
          6,
          6
        ],
        [
          5,
          6
        ],
        [
          4,
          6
        ],
        [
          3,
          6
        ],
        [
          2,
          6
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          4
        ],
        [
          8,
          4
        ],
        [
          9,
          4
        ],
        [
          10,
          4
        ],
        [
          11,
          4
        ],
        [
          12,
          4
        ],
        [
          12,
          3
        ],
        [
          12,
          2
        ],
        [
          11,
          2
        ],
        [
          10,
          2
        ],
        [
          9,
          2
        ],
        [
          8,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          1
        ],
        [
          6,
          2
        ],
        [
          5,
          2
        ],
        [
          4,
          2
        ],
        [
          3,
          2
        ],
        [
          2,
          2
        ],
        [
          1,
          2
        ],
        [
          3,
          7
        ],
        [
          10,
          7
        ],
        [
          3,
          5
        ],
        [
          10,
          5
        ],
        [
          3,
          3
        ],
        [
          10,
          3
        ]
      ],
      "start": [
        1,
        8
      ],
      "exit": [
        1,
        2
      ],
      "coins": [
        [
          7,
          9
        ],
        [
          7,
          8
        ],
        [
          12,
          8
        ],
        [
          7,
          5
        ],
        [
          7,
          6
        ],
        [
          1,
          6
        ],
        [
          7,
          4
        ],
        [
          12,
          4
        ],
        [
          7,
          1
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          9
        ],
        [
          7,
          5
        ]
      ],
      "doors": [
        [
          12,
          7
        ],
        [
          1,
          5
        ]
      ],
      "potions": [
        [
          7,
          9
        ],
        [
          7,
          5
        ],
        [
          7,
          5
        ],
        [
          7,
          1
        ]
      ],
      "enemies": [
        {
          "x": 11,
          "y": 8,
          "health": 6
        },
        {
          "x": 2,
          "y": 6,
          "health": 9
        },
        {
          "x": 11,
          "y": 4,
          "health": 6
        },
        {
          "x": 2,
          "y": 2,
          "health": 9
        }
      ]
    },
    "mapNote": "14 \u00d7 10 map \u00b7 58 steps on the full supply route"
  },
  {
    "id": "7-6",
    "week": 7,
    "stage": 6,
    "title": "Put it to the test",
    "topic": "Lists",
    "teach": "Store your route in a list so you can change the plan without rewriting how the hero moves. Use a function to handle one step. Then loop through the directions in your list.",
    "example": "route = [\"right\", \"down\"]\nfor direction in route:\n    hero.move(direction)",
    "objective": "Collect all 14 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 5 guards. Keep an eye on your health.",
    "hint": "Check the side rooms before leaving each hall. You will need to walk back to the main path.",
    "starter": "from hero_game import hero\n\nroute = []\n# Add each direction to your list.\n# Loop through the list to follow your plan.\n",
    "world": {
      "width": 15,
      "height": 12,
      "path": [
        [
          13,
          10
        ],
        [
          12,
          10
        ],
        [
          11,
          10
        ],
        [
          10,
          10
        ],
        [
          9,
          10
        ],
        [
          8,
          10
        ],
        [
          7,
          10
        ],
        [
          7,
          11
        ],
        [
          6,
          10
        ],
        [
          5,
          10
        ],
        [
          4,
          10
        ],
        [
          3,
          10
        ],
        [
          2,
          10
        ],
        [
          1,
          10
        ],
        [
          1,
          9
        ],
        [
          1,
          8
        ],
        [
          2,
          8
        ],
        [
          3,
          8
        ],
        [
          4,
          8
        ],
        [
          5,
          8
        ],
        [
          6,
          8
        ],
        [
          7,
          8
        ],
        [
          8,
          8
        ],
        [
          8,
          7
        ],
        [
          9,
          8
        ],
        [
          10,
          8
        ],
        [
          11,
          8
        ],
        [
          12,
          8
        ],
        [
          13,
          8
        ],
        [
          13,
          7
        ],
        [
          13,
          6
        ],
        [
          12,
          6
        ],
        [
          11,
          6
        ],
        [
          10,
          6
        ],
        [
          9,
          6
        ],
        [
          8,
          6
        ],
        [
          7,
          6
        ],
        [
          7,
          7
        ],
        [
          6,
          6
        ],
        [
          5,
          6
        ],
        [
          4,
          6
        ],
        [
          3,
          6
        ],
        [
          2,
          6
        ],
        [
          1,
          6
        ],
        [
          1,
          5
        ],
        [
          1,
          4
        ],
        [
          2,
          4
        ],
        [
          3,
          4
        ],
        [
          4,
          4
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          4
        ],
        [
          8,
          4
        ],
        [
          8,
          3
        ],
        [
          9,
          4
        ],
        [
          10,
          4
        ],
        [
          11,
          4
        ],
        [
          12,
          4
        ],
        [
          13,
          4
        ],
        [
          13,
          3
        ],
        [
          13,
          2
        ],
        [
          12,
          2
        ],
        [
          11,
          2
        ],
        [
          10,
          2
        ],
        [
          9,
          2
        ],
        [
          8,
          2
        ],
        [
          7,
          2
        ],
        [
          7,
          3
        ],
        [
          6,
          2
        ],
        [
          5,
          2
        ],
        [
          4,
          2
        ],
        [
          3,
          2
        ],
        [
          2,
          2
        ],
        [
          1,
          2
        ],
        [
          11,
          9
        ],
        [
          3,
          9
        ],
        [
          11,
          7
        ],
        [
          3,
          7
        ],
        [
          11,
          5
        ],
        [
          3,
          5
        ],
        [
          11,
          3
        ],
        [
          3,
          3
        ]
      ],
      "start": [
        13,
        10
      ],
      "exit": [
        1,
        2
      ],
      "coins": [
        [
          7,
          11
        ],
        [
          7,
          10
        ],
        [
          1,
          10
        ],
        [
          8,
          7
        ],
        [
          8,
          8
        ],
        [
          13,
          8
        ],
        [
          7,
          7
        ],
        [
          7,
          6
        ],
        [
          1,
          6
        ],
        [
          8,
          3
        ],
        [
          8,
          4
        ],
        [
          13,
          4
        ],
        [
          7,
          3
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          11
        ],
        [
          8,
          7
        ]
      ],
      "doors": [
        [
          1,
          9
        ],
        [
          13,
          7
        ]
      ],
      "potions": [
        [
          7,
          11
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 10,
          "health": 6
        },
        {
          "x": 12,
          "y": 8,
          "health": 9
        },
        {
          "x": 2,
          "y": 6,
          "health": 6
        },
        {
          "x": 12,
          "y": 4,
          "health": 9
        },
        {
          "x": 2,
          "y": 2,
          "health": 12
        }
      ]
    },
    "mapNote": "15 \u00d7 12 map \u00b7 78 steps on the full supply route"
  },
  {
    "id": "8-1",
    "week": 8,
    "stage": 1,
    "title": "The outer fort",
    "topic": "Combine your skills",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 10 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 6 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 12,
      "height": 10,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          10,
          2
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          10,
          6
        ],
        [
          10,
          7
        ],
        [
          9,
          7
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          6,
          7
        ],
        [
          6,
          8
        ],
        [
          5,
          7
        ],
        [
          4,
          7
        ],
        [
          3,
          7
        ],
        [
          2,
          7
        ],
        [
          1,
          7
        ],
        [
          3,
          2
        ],
        [
          8,
          2
        ],
        [
          3,
          4
        ],
        [
          8,
          4
        ],
        [
          3,
          6
        ],
        [
          8,
          6
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        7
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          10,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          5
        ],
        [
          10,
          5
        ],
        [
          6,
          8
        ],
        [
          6,
          7
        ]
      ],
      "keys": [
        [
          6,
          0
        ]
      ],
      "doors": [
        [
          10,
          2
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          6,
          4
        ],
        [
          6,
          4
        ],
        [
          6,
          8
        ]
      ],
      "enemies": [
        {
          "x": 9,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 7,
          "y": 3,
          "health": 6
        },
        {
          "x": 9,
          "y": 5,
          "health": 6
        },
        {
          "x": 2,
          "y": 7,
          "health": 9
        },
        {
          "x": 7,
          "y": 7,
          "health": 6
        }
      ]
    },
    "mapNote": "12 \u00d7 10 map \u00b7 50 steps on the full supply route"
  },
  {
    "id": "8-2",
    "week": 8,
    "stage": 2,
    "title": "The supply rooms",
    "topic": "Combine your skills",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 11 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 6 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 13,
      "height": 10,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          11,
          2
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ],
        [
          10,
          7
        ],
        [
          9,
          7
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          6,
          7
        ],
        [
          5,
          7
        ],
        [
          5,
          8
        ],
        [
          4,
          7
        ],
        [
          3,
          7
        ],
        [
          2,
          7
        ],
        [
          1,
          7
        ],
        [
          3,
          2
        ],
        [
          9,
          2
        ],
        [
          3,
          4
        ],
        [
          9,
          4
        ],
        [
          3,
          6
        ],
        [
          9,
          6
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        7
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          11,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          11,
          5
        ],
        [
          5,
          8
        ],
        [
          5,
          7
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          5,
          4
        ]
      ],
      "doors": [
        [
          11,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          5,
          8
        ]
      ],
      "enemies": [
        {
          "x": 10,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 8,
          "y": 3,
          "health": 6
        },
        {
          "x": 10,
          "y": 5,
          "health": 6
        },
        {
          "x": 2,
          "y": 7,
          "health": 9
        },
        {
          "x": 8,
          "y": 7,
          "health": 6
        }
      ]
    },
    "mapNote": "13 \u00d7 10 map \u00b7 54 steps on the full supply route"
  },
  {
    "id": "8-3",
    "week": 8,
    "stage": 3,
    "title": "Break through",
    "topic": "Combine your skills",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 12 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 7 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 14,
      "height": 12,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          7,
          0
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          12,
          1
        ],
        [
          12,
          2
        ],
        [
          12,
          3
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          12,
          5
        ],
        [
          12,
          6
        ],
        [
          12,
          7
        ],
        [
          11,
          7
        ],
        [
          10,
          7
        ],
        [
          9,
          7
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          6,
          7
        ],
        [
          5,
          7
        ],
        [
          4,
          7
        ],
        [
          3,
          7
        ],
        [
          2,
          7
        ],
        [
          1,
          7
        ],
        [
          1,
          8
        ],
        [
          1,
          9
        ],
        [
          2,
          9
        ],
        [
          3,
          9
        ],
        [
          4,
          9
        ],
        [
          5,
          9
        ],
        [
          6,
          9
        ],
        [
          7,
          9
        ],
        [
          8,
          9
        ],
        [
          9,
          9
        ],
        [
          10,
          9
        ],
        [
          11,
          9
        ],
        [
          12,
          9
        ],
        [
          3,
          2
        ],
        [
          10,
          2
        ],
        [
          3,
          4
        ],
        [
          10,
          4
        ],
        [
          3,
          6
        ],
        [
          10,
          6
        ],
        [
          3,
          8
        ],
        [
          10,
          8
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        12,
        9
      ],
      "coins": [
        [
          7,
          0
        ],
        [
          7,
          1
        ],
        [
          12,
          1
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          1,
          3
        ],
        [
          7,
          5
        ],
        [
          12,
          5
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ],
        [
          1,
          7
        ],
        [
          7,
          9
        ]
      ],
      "keys": [
        [
          7,
          0
        ],
        [
          7,
          4
        ]
      ],
      "doors": [
        [
          12,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          7,
          0
        ],
        [
          7,
          4
        ],
        [
          7,
          4
        ],
        [
          7,
          8
        ],
        [
          7,
          8
        ]
      ],
      "enemies": [
        {
          "x": 11,
          "y": 1,
          "health": 6
        },
        {
          "x": 2,
          "y": 3,
          "health": 9
        },
        {
          "x": 8,
          "y": 3,
          "health": 6
        },
        {
          "x": 11,
          "y": 5,
          "health": 6
        },
        {
          "x": 2,
          "y": 7,
          "health": 9
        },
        {
          "x": 8,
          "y": 7,
          "health": 6
        },
        {
          "x": 11,
          "y": 9,
          "health": 12
        }
      ]
    },
    "mapNote": "14 \u00d7 12 map \u00b7 73 steps on the full supply route"
  },
  {
    "id": "8-4",
    "week": 8,
    "stage": 4,
    "title": "The west wing",
    "topic": "Combine your skills",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 14 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 7 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 13,
      "height": 12,
      "path": [
        [
          11,
          1
        ],
        [
          10,
          1
        ],
        [
          9,
          1
        ],
        [
          8,
          1
        ],
        [
          7,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          5,
          1
        ],
        [
          4,
          1
        ],
        [
          3,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          10,
          5
        ],
        [
          9,
          5
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          5,
          5
        ],
        [
          4,
          5
        ],
        [
          3,
          5
        ],
        [
          2,
          5
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          1,
          7
        ],
        [
          2,
          7
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          5,
          7
        ],
        [
          6,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          8,
          7
        ],
        [
          9,
          7
        ],
        [
          10,
          7
        ],
        [
          11,
          7
        ],
        [
          11,
          8
        ],
        [
          11,
          9
        ],
        [
          10,
          9
        ],
        [
          9,
          9
        ],
        [
          8,
          9
        ],
        [
          7,
          9
        ],
        [
          6,
          9
        ],
        [
          6,
          8
        ],
        [
          5,
          9
        ],
        [
          4,
          9
        ],
        [
          3,
          9
        ],
        [
          2,
          9
        ],
        [
          1,
          9
        ],
        [
          9,
          2
        ],
        [
          3,
          2
        ],
        [
          9,
          4
        ],
        [
          3,
          4
        ],
        [
          9,
          6
        ],
        [
          3,
          6
        ],
        [
          9,
          8
        ],
        [
          3,
          8
        ]
      ],
      "start": [
        11,
        1
      ],
      "exit": [
        1,
        9
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          1,
          1
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          11,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          1,
          5
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ],
        [
          11,
          7
        ],
        [
          6,
          8
        ],
        [
          6,
          9
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          7,
          4
        ]
      ],
      "doors": [
        [
          1,
          2
        ],
        [
          11,
          4
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          8
        ],
        [
          6,
          8
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 1,
          "health": 6
        },
        {
          "x": 10,
          "y": 3,
          "health": 9
        },
        {
          "x": 4,
          "y": 3,
          "health": 6
        },
        {
          "x": 2,
          "y": 5,
          "health": 6
        },
        {
          "x": 10,
          "y": 7,
          "health": 9
        },
        {
          "x": 4,
          "y": 7,
          "health": 6
        },
        {
          "x": 2,
          "y": 9,
          "health": 12
        }
      ]
    },
    "mapNote": "13 \u00d7 12 map \u00b7 68 steps on the full supply route"
  },
  {
    "id": "8-5",
    "week": 8,
    "stage": 5,
    "title": "The return route",
    "topic": "Combine your skills",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 12 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 7 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 14,
      "height": 12,
      "path": [
        [
          1,
          10
        ],
        [
          2,
          10
        ],
        [
          3,
          10
        ],
        [
          4,
          10
        ],
        [
          5,
          10
        ],
        [
          6,
          10
        ],
        [
          7,
          10
        ],
        [
          7,
          11
        ],
        [
          8,
          10
        ],
        [
          9,
          10
        ],
        [
          10,
          10
        ],
        [
          11,
          10
        ],
        [
          12,
          10
        ],
        [
          12,
          9
        ],
        [
          12,
          8
        ],
        [
          11,
          8
        ],
        [
          10,
          8
        ],
        [
          9,
          8
        ],
        [
          8,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ],
        [
          6,
          8
        ],
        [
          5,
          8
        ],
        [
          4,
          8
        ],
        [
          3,
          8
        ],
        [
          2,
          8
        ],
        [
          1,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          7,
          6
        ],
        [
          8,
          6
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          12,
          6
        ],
        [
          12,
          5
        ],
        [
          12,
          4
        ],
        [
          11,
          4
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          8,
          2
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ],
        [
          12,
          2
        ],
        [
          3,
          9
        ],
        [
          10,
          9
        ],
        [
          3,
          7
        ],
        [
          10,
          7
        ],
        [
          3,
          5
        ],
        [
          10,
          5
        ],
        [
          3,
          3
        ],
        [
          10,
          3
        ]
      ],
      "start": [
        1,
        10
      ],
      "exit": [
        12,
        2
      ],
      "coins": [
        [
          7,
          11
        ],
        [
          7,
          10
        ],
        [
          12,
          10
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          1,
          8
        ],
        [
          7,
          6
        ],
        [
          12,
          6
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          1,
          4
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          11
        ],
        [
          7,
          7
        ]
      ],
      "doors": [
        [
          12,
          9
        ],
        [
          1,
          7
        ]
      ],
      "potions": [
        [
          7,
          11
        ],
        [
          7,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          3
        ],
        [
          7,
          3
        ]
      ],
      "enemies": [
        {
          "x": 11,
          "y": 10,
          "health": 6
        },
        {
          "x": 2,
          "y": 8,
          "health": 9
        },
        {
          "x": 8,
          "y": 8,
          "health": 6
        },
        {
          "x": 11,
          "y": 6,
          "health": 6
        },
        {
          "x": 2,
          "y": 4,
          "health": 9
        },
        {
          "x": 8,
          "y": 4,
          "health": 6
        },
        {
          "x": 11,
          "y": 2,
          "health": 12
        }
      ]
    },
    "mapNote": "14 \u00d7 12 map \u00b7 73 steps on the full supply route"
  },
  {
    "id": "8-6",
    "week": 8,
    "stage": 6,
    "title": "Put it to the test",
    "topic": "Combine your skills",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 17 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 8 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 15,
      "height": 14,
      "path": [
        [
          13,
          12
        ],
        [
          12,
          12
        ],
        [
          11,
          12
        ],
        [
          10,
          12
        ],
        [
          9,
          12
        ],
        [
          8,
          12
        ],
        [
          7,
          12
        ],
        [
          7,
          13
        ],
        [
          6,
          12
        ],
        [
          5,
          12
        ],
        [
          4,
          12
        ],
        [
          3,
          12
        ],
        [
          2,
          12
        ],
        [
          1,
          12
        ],
        [
          1,
          11
        ],
        [
          1,
          10
        ],
        [
          2,
          10
        ],
        [
          3,
          10
        ],
        [
          4,
          10
        ],
        [
          5,
          10
        ],
        [
          6,
          10
        ],
        [
          7,
          10
        ],
        [
          8,
          10
        ],
        [
          8,
          9
        ],
        [
          9,
          10
        ],
        [
          10,
          10
        ],
        [
          11,
          10
        ],
        [
          12,
          10
        ],
        [
          13,
          10
        ],
        [
          13,
          9
        ],
        [
          13,
          8
        ],
        [
          12,
          8
        ],
        [
          11,
          8
        ],
        [
          10,
          8
        ],
        [
          9,
          8
        ],
        [
          8,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          9
        ],
        [
          6,
          8
        ],
        [
          5,
          8
        ],
        [
          4,
          8
        ],
        [
          3,
          8
        ],
        [
          2,
          8
        ],
        [
          1,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          7,
          6
        ],
        [
          8,
          6
        ],
        [
          8,
          5
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          12,
          6
        ],
        [
          13,
          6
        ],
        [
          13,
          5
        ],
        [
          13,
          4
        ],
        [
          12,
          4
        ],
        [
          11,
          4
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ],
        [
          6,
          4
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          8,
          2
        ],
        [
          8,
          1
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ],
        [
          12,
          2
        ],
        [
          13,
          2
        ],
        [
          11,
          11
        ],
        [
          3,
          11
        ],
        [
          11,
          9
        ],
        [
          3,
          9
        ],
        [
          11,
          7
        ],
        [
          3,
          7
        ],
        [
          11,
          5
        ],
        [
          3,
          5
        ],
        [
          11,
          3
        ],
        [
          3,
          3
        ]
      ],
      "start": [
        13,
        12
      ],
      "exit": [
        13,
        2
      ],
      "coins": [
        [
          7,
          13
        ],
        [
          7,
          12
        ],
        [
          1,
          12
        ],
        [
          8,
          9
        ],
        [
          8,
          10
        ],
        [
          13,
          10
        ],
        [
          7,
          9
        ],
        [
          7,
          8
        ],
        [
          1,
          8
        ],
        [
          8,
          5
        ],
        [
          8,
          6
        ],
        [
          13,
          6
        ],
        [
          7,
          5
        ],
        [
          7,
          4
        ],
        [
          1,
          4
        ],
        [
          8,
          1
        ],
        [
          8,
          2
        ]
      ],
      "keys": [
        [
          7,
          13
        ],
        [
          8,
          9
        ]
      ],
      "doors": [
        [
          1,
          11
        ],
        [
          13,
          9
        ]
      ],
      "potions": [
        [
          7,
          13
        ],
        [
          8,
          9
        ],
        [
          7,
          9
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          1
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 12,
          "health": 6
        },
        {
          "x": 12,
          "y": 10,
          "health": 9
        },
        {
          "x": 5,
          "y": 10,
          "health": 6
        },
        {
          "x": 2,
          "y": 8,
          "health": 6
        },
        {
          "x": 12,
          "y": 6,
          "health": 9
        },
        {
          "x": 5,
          "y": 6,
          "health": 6
        },
        {
          "x": 2,
          "y": 4,
          "health": 12
        },
        {
          "x": 12,
          "y": 2,
          "health": 12
        }
      ]
    },
    "mapNote": "15 \u00d7 14 map \u00b7 94 steps on the full supply route"
  },
  {
    "id": "9-1",
    "week": 9,
    "stage": 1,
    "title": "The lower keep",
    "topic": "Final challenge",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 10 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 6 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 12,
      "height": 10,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          10,
          2
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          10,
          6
        ],
        [
          10,
          7
        ],
        [
          9,
          7
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          6,
          7
        ],
        [
          6,
          8
        ],
        [
          5,
          7
        ],
        [
          4,
          7
        ],
        [
          3,
          7
        ],
        [
          2,
          7
        ],
        [
          1,
          7
        ],
        [
          3,
          2
        ],
        [
          8,
          2
        ],
        [
          3,
          4
        ],
        [
          8,
          4
        ],
        [
          3,
          6
        ],
        [
          8,
          6
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        7
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          10,
          1
        ],
        [
          6,
          4
        ],
        [
          6,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          5
        ],
        [
          10,
          5
        ],
        [
          6,
          8
        ],
        [
          6,
          7
        ]
      ],
      "keys": [
        [
          6,
          0
        ]
      ],
      "doors": [
        [
          10,
          2
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          6,
          4
        ],
        [
          6,
          4
        ],
        [
          6,
          8
        ]
      ],
      "enemies": [
        {
          "x": 9,
          "y": 1,
          "health": 9
        },
        {
          "x": 2,
          "y": 3,
          "health": 12
        },
        {
          "x": 7,
          "y": 3,
          "health": 6
        },
        {
          "x": 9,
          "y": 5,
          "health": 9
        },
        {
          "x": 2,
          "y": 7,
          "health": 12
        },
        {
          "x": 7,
          "y": 7,
          "health": 6
        }
      ]
    },
    "mapNote": "12 \u00d7 10 map \u00b7 50 steps on the full supply route"
  },
  {
    "id": "9-2",
    "week": 9,
    "stage": 2,
    "title": "The last patrol",
    "topic": "Final challenge",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 11 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 6 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 13,
      "height": 10,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          7,
          1
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          11,
          2
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          5,
          4
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          11,
          6
        ],
        [
          11,
          7
        ],
        [
          10,
          7
        ],
        [
          9,
          7
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          6,
          7
        ],
        [
          5,
          7
        ],
        [
          5,
          8
        ],
        [
          4,
          7
        ],
        [
          3,
          7
        ],
        [
          2,
          7
        ],
        [
          1,
          7
        ],
        [
          3,
          2
        ],
        [
          9,
          2
        ],
        [
          3,
          4
        ],
        [
          9,
          4
        ],
        [
          3,
          6
        ],
        [
          9,
          6
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        1,
        7
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          11,
          1
        ],
        [
          5,
          4
        ],
        [
          5,
          3
        ],
        [
          1,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          11,
          5
        ],
        [
          5,
          8
        ],
        [
          5,
          7
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          5,
          4
        ]
      ],
      "doors": [
        [
          11,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          5,
          4
        ],
        [
          6,
          4
        ],
        [
          5,
          8
        ]
      ],
      "enemies": [
        {
          "x": 10,
          "y": 1,
          "health": 9
        },
        {
          "x": 2,
          "y": 3,
          "health": 12
        },
        {
          "x": 8,
          "y": 3,
          "health": 6
        },
        {
          "x": 10,
          "y": 5,
          "health": 9
        },
        {
          "x": 2,
          "y": 7,
          "health": 12
        },
        {
          "x": 8,
          "y": 7,
          "health": 6
        }
      ]
    },
    "mapNote": "13 \u00d7 10 map \u00b7 54 steps on the full supply route"
  },
  {
    "id": "9-3",
    "week": 9,
    "stage": 3,
    "title": "The whole castle",
    "topic": "Final challenge",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 12 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 7 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 14,
      "height": 12,
      "path": [
        [
          1,
          1
        ],
        [
          2,
          1
        ],
        [
          3,
          1
        ],
        [
          4,
          1
        ],
        [
          5,
          1
        ],
        [
          6,
          1
        ],
        [
          7,
          1
        ],
        [
          7,
          0
        ],
        [
          8,
          1
        ],
        [
          9,
          1
        ],
        [
          10,
          1
        ],
        [
          11,
          1
        ],
        [
          12,
          1
        ],
        [
          12,
          2
        ],
        [
          12,
          3
        ],
        [
          11,
          3
        ],
        [
          10,
          3
        ],
        [
          9,
          3
        ],
        [
          8,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          6,
          3
        ],
        [
          5,
          3
        ],
        [
          4,
          3
        ],
        [
          3,
          3
        ],
        [
          2,
          3
        ],
        [
          1,
          3
        ],
        [
          1,
          4
        ],
        [
          1,
          5
        ],
        [
          2,
          5
        ],
        [
          3,
          5
        ],
        [
          4,
          5
        ],
        [
          5,
          5
        ],
        [
          6,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          5
        ],
        [
          9,
          5
        ],
        [
          10,
          5
        ],
        [
          11,
          5
        ],
        [
          12,
          5
        ],
        [
          12,
          6
        ],
        [
          12,
          7
        ],
        [
          11,
          7
        ],
        [
          10,
          7
        ],
        [
          9,
          7
        ],
        [
          8,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          6,
          7
        ],
        [
          5,
          7
        ],
        [
          4,
          7
        ],
        [
          3,
          7
        ],
        [
          2,
          7
        ],
        [
          1,
          7
        ],
        [
          1,
          8
        ],
        [
          1,
          9
        ],
        [
          2,
          9
        ],
        [
          3,
          9
        ],
        [
          4,
          9
        ],
        [
          5,
          9
        ],
        [
          6,
          9
        ],
        [
          7,
          9
        ],
        [
          8,
          9
        ],
        [
          9,
          9
        ],
        [
          10,
          9
        ],
        [
          11,
          9
        ],
        [
          12,
          9
        ],
        [
          3,
          2
        ],
        [
          10,
          2
        ],
        [
          3,
          4
        ],
        [
          10,
          4
        ],
        [
          3,
          6
        ],
        [
          10,
          6
        ],
        [
          3,
          8
        ],
        [
          10,
          8
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        12,
        9
      ],
      "coins": [
        [
          7,
          0
        ],
        [
          7,
          1
        ],
        [
          12,
          1
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          1,
          3
        ],
        [
          7,
          5
        ],
        [
          12,
          5
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ],
        [
          1,
          7
        ],
        [
          7,
          9
        ]
      ],
      "keys": [
        [
          7,
          0
        ],
        [
          7,
          4
        ]
      ],
      "doors": [
        [
          12,
          2
        ],
        [
          1,
          4
        ]
      ],
      "potions": [
        [
          7,
          0
        ],
        [
          7,
          4
        ],
        [
          7,
          4
        ],
        [
          7,
          8
        ],
        [
          7,
          8
        ]
      ],
      "enemies": [
        {
          "x": 11,
          "y": 1,
          "health": 9
        },
        {
          "x": 2,
          "y": 3,
          "health": 12
        },
        {
          "x": 8,
          "y": 3,
          "health": 6
        },
        {
          "x": 11,
          "y": 5,
          "health": 9
        },
        {
          "x": 2,
          "y": 7,
          "health": 12
        },
        {
          "x": 8,
          "y": 7,
          "health": 6
        },
        {
          "x": 11,
          "y": 9,
          "health": 12
        }
      ]
    },
    "mapNote": "14 \u00d7 12 map \u00b7 73 steps on the full supply route"
  },
  {
    "id": "9-4",
    "week": 9,
    "stage": 4,
    "title": "The west wing",
    "topic": "Final challenge",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 14 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 7 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 13,
      "height": 12,
      "path": [
        [
          11,
          1
        ],
        [
          10,
          1
        ],
        [
          9,
          1
        ],
        [
          8,
          1
        ],
        [
          7,
          1
        ],
        [
          6,
          1
        ],
        [
          6,
          0
        ],
        [
          5,
          1
        ],
        [
          4,
          1
        ],
        [
          3,
          1
        ],
        [
          2,
          1
        ],
        [
          1,
          1
        ],
        [
          1,
          2
        ],
        [
          1,
          3
        ],
        [
          2,
          3
        ],
        [
          3,
          3
        ],
        [
          4,
          3
        ],
        [
          5,
          3
        ],
        [
          6,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          8,
          3
        ],
        [
          9,
          3
        ],
        [
          10,
          3
        ],
        [
          11,
          3
        ],
        [
          11,
          4
        ],
        [
          11,
          5
        ],
        [
          10,
          5
        ],
        [
          9,
          5
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          6,
          5
        ],
        [
          6,
          4
        ],
        [
          5,
          5
        ],
        [
          4,
          5
        ],
        [
          3,
          5
        ],
        [
          2,
          5
        ],
        [
          1,
          5
        ],
        [
          1,
          6
        ],
        [
          1,
          7
        ],
        [
          2,
          7
        ],
        [
          3,
          7
        ],
        [
          4,
          7
        ],
        [
          5,
          7
        ],
        [
          6,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          8,
          7
        ],
        [
          9,
          7
        ],
        [
          10,
          7
        ],
        [
          11,
          7
        ],
        [
          11,
          8
        ],
        [
          11,
          9
        ],
        [
          10,
          9
        ],
        [
          9,
          9
        ],
        [
          8,
          9
        ],
        [
          7,
          9
        ],
        [
          6,
          9
        ],
        [
          6,
          8
        ],
        [
          5,
          9
        ],
        [
          4,
          9
        ],
        [
          3,
          9
        ],
        [
          2,
          9
        ],
        [
          1,
          9
        ],
        [
          9,
          2
        ],
        [
          3,
          2
        ],
        [
          9,
          4
        ],
        [
          3,
          4
        ],
        [
          9,
          6
        ],
        [
          3,
          6
        ],
        [
          9,
          8
        ],
        [
          3,
          8
        ]
      ],
      "start": [
        11,
        1
      ],
      "exit": [
        1,
        9
      ],
      "coins": [
        [
          6,
          0
        ],
        [
          6,
          1
        ],
        [
          1,
          1
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          11,
          3
        ],
        [
          6,
          4
        ],
        [
          6,
          5
        ],
        [
          1,
          5
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ],
        [
          11,
          7
        ],
        [
          6,
          8
        ],
        [
          6,
          9
        ]
      ],
      "keys": [
        [
          6,
          0
        ],
        [
          7,
          4
        ]
      ],
      "doors": [
        [
          1,
          2
        ],
        [
          11,
          4
        ]
      ],
      "potions": [
        [
          6,
          0
        ],
        [
          7,
          4
        ],
        [
          6,
          4
        ],
        [
          7,
          8
        ],
        [
          6,
          8
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 1,
          "health": 9
        },
        {
          "x": 10,
          "y": 3,
          "health": 12
        },
        {
          "x": 4,
          "y": 3,
          "health": 6
        },
        {
          "x": 2,
          "y": 5,
          "health": 9
        },
        {
          "x": 10,
          "y": 7,
          "health": 12
        },
        {
          "x": 4,
          "y": 7,
          "health": 6
        },
        {
          "x": 2,
          "y": 9,
          "health": 12
        }
      ]
    },
    "mapNote": "13 \u00d7 12 map \u00b7 68 steps on the full supply route"
  },
  {
    "id": "9-5",
    "week": 9,
    "stage": 5,
    "title": "The return route",
    "topic": "Final challenge",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 12 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 7 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 14,
      "height": 12,
      "path": [
        [
          1,
          10
        ],
        [
          2,
          10
        ],
        [
          3,
          10
        ],
        [
          4,
          10
        ],
        [
          5,
          10
        ],
        [
          6,
          10
        ],
        [
          7,
          10
        ],
        [
          7,
          11
        ],
        [
          8,
          10
        ],
        [
          9,
          10
        ],
        [
          10,
          10
        ],
        [
          11,
          10
        ],
        [
          12,
          10
        ],
        [
          12,
          9
        ],
        [
          12,
          8
        ],
        [
          11,
          8
        ],
        [
          10,
          8
        ],
        [
          9,
          8
        ],
        [
          8,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          7
        ],
        [
          6,
          8
        ],
        [
          5,
          8
        ],
        [
          4,
          8
        ],
        [
          3,
          8
        ],
        [
          2,
          8
        ],
        [
          1,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          7,
          6
        ],
        [
          8,
          6
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          12,
          6
        ],
        [
          12,
          5
        ],
        [
          12,
          4
        ],
        [
          11,
          4
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          7,
          3
        ],
        [
          6,
          4
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          8,
          2
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ],
        [
          12,
          2
        ],
        [
          3,
          9
        ],
        [
          10,
          9
        ],
        [
          3,
          7
        ],
        [
          10,
          7
        ],
        [
          3,
          5
        ],
        [
          10,
          5
        ],
        [
          3,
          3
        ],
        [
          10,
          3
        ]
      ],
      "start": [
        1,
        10
      ],
      "exit": [
        12,
        2
      ],
      "coins": [
        [
          7,
          11
        ],
        [
          7,
          10
        ],
        [
          12,
          10
        ],
        [
          7,
          7
        ],
        [
          7,
          8
        ],
        [
          1,
          8
        ],
        [
          7,
          6
        ],
        [
          12,
          6
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ],
        [
          1,
          4
        ],
        [
          7,
          2
        ]
      ],
      "keys": [
        [
          7,
          11
        ],
        [
          7,
          7
        ]
      ],
      "doors": [
        [
          12,
          9
        ],
        [
          1,
          7
        ]
      ],
      "potions": [
        [
          7,
          11
        ],
        [
          7,
          7
        ],
        [
          7,
          7
        ],
        [
          7,
          3
        ],
        [
          7,
          3
        ]
      ],
      "enemies": [
        {
          "x": 11,
          "y": 10,
          "health": 9
        },
        {
          "x": 2,
          "y": 8,
          "health": 12
        },
        {
          "x": 8,
          "y": 8,
          "health": 6
        },
        {
          "x": 11,
          "y": 6,
          "health": 9
        },
        {
          "x": 2,
          "y": 4,
          "health": 12
        },
        {
          "x": 8,
          "y": 4,
          "health": 6
        },
        {
          "x": 11,
          "y": 2,
          "health": 12
        }
      ]
    },
    "mapNote": "14 \u00d7 12 map \u00b7 73 steps on the full supply route"
  },
  {
    "id": "9-6",
    "week": 9,
    "stage": 6,
    "title": "Put it to the test",
    "topic": "Final challenge",
    "teach": "Plan the route before you write the whole program. Gather keys and potions, clear each hall, and check that you have every coin. Use variables, conditions, loops, functions, and a list to keep your code easy to change.",
    "example": "",
    "objective": "Collect all 17 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 8 guards. Keep an eye on your health.",
    "hint": "Write a helper for one safe step. It can open a door, fight a guard, move, collect supplies, and heal. Test one hall at a time.",
    "starter": "from hero_game import hero\n\n# Plan a route that visits every supply room.\n# Build and test your helper functions first.\n",
    "world": {
      "width": 15,
      "height": 14,
      "path": [
        [
          13,
          12
        ],
        [
          12,
          12
        ],
        [
          11,
          12
        ],
        [
          10,
          12
        ],
        [
          9,
          12
        ],
        [
          8,
          12
        ],
        [
          7,
          12
        ],
        [
          7,
          13
        ],
        [
          6,
          12
        ],
        [
          5,
          12
        ],
        [
          4,
          12
        ],
        [
          3,
          12
        ],
        [
          2,
          12
        ],
        [
          1,
          12
        ],
        [
          1,
          11
        ],
        [
          1,
          10
        ],
        [
          2,
          10
        ],
        [
          3,
          10
        ],
        [
          4,
          10
        ],
        [
          5,
          10
        ],
        [
          6,
          10
        ],
        [
          7,
          10
        ],
        [
          8,
          10
        ],
        [
          8,
          9
        ],
        [
          9,
          10
        ],
        [
          10,
          10
        ],
        [
          11,
          10
        ],
        [
          12,
          10
        ],
        [
          13,
          10
        ],
        [
          13,
          9
        ],
        [
          13,
          8
        ],
        [
          12,
          8
        ],
        [
          11,
          8
        ],
        [
          10,
          8
        ],
        [
          9,
          8
        ],
        [
          8,
          8
        ],
        [
          7,
          8
        ],
        [
          7,
          9
        ],
        [
          6,
          8
        ],
        [
          5,
          8
        ],
        [
          4,
          8
        ],
        [
          3,
          8
        ],
        [
          2,
          8
        ],
        [
          1,
          8
        ],
        [
          1,
          7
        ],
        [
          1,
          6
        ],
        [
          2,
          6
        ],
        [
          3,
          6
        ],
        [
          4,
          6
        ],
        [
          5,
          6
        ],
        [
          6,
          6
        ],
        [
          7,
          6
        ],
        [
          8,
          6
        ],
        [
          8,
          5
        ],
        [
          9,
          6
        ],
        [
          10,
          6
        ],
        [
          11,
          6
        ],
        [
          12,
          6
        ],
        [
          13,
          6
        ],
        [
          13,
          5
        ],
        [
          13,
          4
        ],
        [
          12,
          4
        ],
        [
          11,
          4
        ],
        [
          10,
          4
        ],
        [
          9,
          4
        ],
        [
          8,
          4
        ],
        [
          7,
          4
        ],
        [
          7,
          5
        ],
        [
          6,
          4
        ],
        [
          5,
          4
        ],
        [
          4,
          4
        ],
        [
          3,
          4
        ],
        [
          2,
          4
        ],
        [
          1,
          4
        ],
        [
          1,
          3
        ],
        [
          1,
          2
        ],
        [
          2,
          2
        ],
        [
          3,
          2
        ],
        [
          4,
          2
        ],
        [
          5,
          2
        ],
        [
          6,
          2
        ],
        [
          7,
          2
        ],
        [
          8,
          2
        ],
        [
          8,
          1
        ],
        [
          9,
          2
        ],
        [
          10,
          2
        ],
        [
          11,
          2
        ],
        [
          12,
          2
        ],
        [
          13,
          2
        ],
        [
          11,
          11
        ],
        [
          3,
          11
        ],
        [
          11,
          9
        ],
        [
          3,
          9
        ],
        [
          11,
          7
        ],
        [
          3,
          7
        ],
        [
          11,
          5
        ],
        [
          3,
          5
        ],
        [
          11,
          3
        ],
        [
          3,
          3
        ]
      ],
      "start": [
        13,
        12
      ],
      "exit": [
        13,
        2
      ],
      "coins": [
        [
          7,
          13
        ],
        [
          7,
          12
        ],
        [
          1,
          12
        ],
        [
          8,
          9
        ],
        [
          8,
          10
        ],
        [
          13,
          10
        ],
        [
          7,
          9
        ],
        [
          7,
          8
        ],
        [
          1,
          8
        ],
        [
          8,
          5
        ],
        [
          8,
          6
        ],
        [
          13,
          6
        ],
        [
          7,
          5
        ],
        [
          7,
          4
        ],
        [
          1,
          4
        ],
        [
          8,
          1
        ],
        [
          8,
          2
        ]
      ],
      "keys": [
        [
          7,
          13
        ],
        [
          8,
          9
        ]
      ],
      "doors": [
        [
          1,
          11
        ],
        [
          13,
          9
        ]
      ],
      "potions": [
        [
          7,
          13
        ],
        [
          8,
          9
        ],
        [
          7,
          9
        ],
        [
          8,
          5
        ],
        [
          7,
          5
        ],
        [
          8,
          1
        ]
      ],
      "enemies": [
        {
          "x": 2,
          "y": 12,
          "health": 9
        },
        {
          "x": 12,
          "y": 10,
          "health": 12
        },
        {
          "x": 5,
          "y": 10,
          "health": 6
        },
        {
          "x": 2,
          "y": 8,
          "health": 9
        },
        {
          "x": 12,
          "y": 6,
          "health": 12
        },
        {
          "x": 5,
          "y": 6,
          "health": 6
        },
        {
          "x": 2,
          "y": 4,
          "health": 12
        },
        {
          "x": 12,
          "y": 2,
          "health": 12
        }
      ]
    },
    "mapNote": "15 \u00d7 14 map \u00b7 94 steps on the full supply route"
  }
];
