const WEEKS = [
  {
    "number": 1,
    "topic": "Sequences",
    "title": "First steps"
  },
  {
    "number": 2,
    "topic": "Variables & Numbers",
    "title": "Make numbers do the work"
  },
  {
    "number": 3,
    "topic": "Conditionals",
    "title": "Check the path"
  },
  {
    "number": 4,
    "topic": "Loops",
    "title": "Repeat a sequence"
  },
  {
    "number": 5,
    "topic": "Lists",
    "title": "Pack your hotbar"
  },
  {
    "number": 6,
    "topic": "Functions",
    "title": "Make your own move"
  },
  {
    "number": 7,
    "topic": "Combine your skills",
    "title": "The old fort"
  },
  {
    "number": 8,
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
    "id": "2-vars-1",
    "week": 2,
    "stage": 1,
    "title": "Remember one code",
    "topic": "Variables & Numbers",
    "teach": "A variable remembers a value. Write code = hero.read() while on sign A. After walking away, code still holds that reading. Pass it to hero.enter_code to open door I. Each sign has a different code, generated anew for each run. Move onto a sign to read it; stand beside a door to enter its code.",
    "example": "code = hero.read()\n# Walk beside the matching door.\nhero.enter_code(\"right\", code)",
    "objective": "Remember the sign codes and open every door. I uses A.",
    "hint": "Read A before continuing to the door. The variable keeps its number even after you leave the sign. Use code = hero.read() on a sign and hero.enter_code(\"right\", code) beside a matching door. Change the direction and variable name to fit your route. You can use hero.move(\"right\", 2) to walk two tiles; stop on signs and coins when you need to read or collect.",
    "starter": "from hero_game import hero\n\n# Walk onto a sign, then save its reading in a variable.\n# Use the saved variable when standing beside its matching door.\n",
    "world": {
      "width": 11,
      "height": 7,
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
          5
        ],
        [
          6,
          1
        ],
        [
          6,
          5
        ],
        [
          7,
          1
        ],
        [
          7,
          5
        ],
        [
          8,
          1
        ],
        [
          8,
          5
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
          4
        ],
        [
          9,
          5
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        5,
        5
      ],
      "coins": [
        [
          3,
          1
        ],
        [
          9,
          5
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": [],
      "number_clues": [
        {
          "x": 3,
          "y": 1,
          "label": "A"
        }
      ],
      "code_doors": [
        {
          "x": 6,
          "y": 1,
          "label": "I",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    "mapNote": "Cyan letters are signs. Purple Roman numerals are doors. Door codes: I uses A.",
    "goals": [
      "Read every sign and save its code.",
      "Open all code doors: I uses A.",
      "Collect all 2 coins and reach E."
    ]
  },
  {
    "id": "2-vars-2",
    "week": 2,
    "stage": 2,
    "title": "Use the same code again",
    "topic": "Variables & Numbers",
    "teach": "Reading a sign once is enough. Save A in one variable, then use that same variable for two doors. Opening a door does not use up or change the variable. Each sign has a different code, generated anew for each run. Move onto a sign to read it; stand beside a door to enter its code.",
    "example": "code = hero.read()\n# Walk beside the matching door.\nhero.enter_code(\"right\", code)",
    "objective": "Remember the sign codes and open every door. I uses A; II uses A.",
    "hint": "Keep A after opening I: you will need it again at II. Use code = hero.read() on a sign and hero.enter_code(\"right\", code) beside a matching door. Change the direction and variable name to fit your route. You can use hero.move(\"right\", 2) to walk two tiles; stop on signs and coins when you need to read or collect.",
    "starter": "from hero_game import hero\n\n# Walk onto a sign, then save its reading in a variable.\n# Use the saved variable when standing beside its matching door.\n",
    "world": {
      "width": 11,
      "height": 7,
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
          5
        ],
        [
          6,
          1
        ],
        [
          6,
          5
        ],
        [
          7,
          1
        ],
        [
          7,
          5
        ],
        [
          8,
          1
        ],
        [
          8,
          5
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
          4
        ],
        [
          9,
          5
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        5,
        5
      ],
      "coins": [
        [
          3,
          1
        ],
        [
          9,
          5
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": [],
      "number_clues": [
        {
          "x": 3,
          "y": 1,
          "label": "A"
        }
      ],
      "code_doors": [
        {
          "x": 6,
          "y": 1,
          "label": "I",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 9,
          "y": 3,
          "label": "II",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    "mapNote": "Cyan letters are signs. Purple Roman numerals are doors. Door codes: I uses A; II uses A.",
    "goals": [
      "Read every sign and save its code.",
      "Open all code doors: I uses A; II uses A.",
      "Collect all 2 coins and reach E."
    ]
  },
  {
    "id": "2-vars-3",
    "week": 2,
    "stage": 3,
    "title": "Keep two codes",
    "topic": "Variables & Numbers",
    "teach": "Different variables can remember different values at the same time. Save sign A as a and sign B as b. Reading B into b leaves a unchanged. The first door wants B; the next wants A. Each sign has a different code, generated anew for each run. Move onto a sign to read it; stand beside a door to enter its code.",
    "example": "a = hero.read()\n# At a different sign:\nb = hero.read()\n# Keep both a and b for their matching doors.",
    "objective": "Remember the sign codes and open every door. I uses B; II uses A.",
    "hint": "Use two different names. If you put both readings into code, the second assignment replaces the first. Use code = hero.read() on a sign and hero.enter_code(\"right\", code) beside a matching door. Change the direction and variable name to fit your route. You can use hero.move(\"right\", 2) to walk two tiles; stop on signs and coins when you need to read or collect.",
    "starter": "from hero_game import hero\n\n# Walk onto a sign, then save its reading in a variable.\n# Use the saved variable when standing beside its matching door.\n",
    "world": {
      "width": 11,
      "height": 7,
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
          5
        ],
        [
          6,
          1
        ],
        [
          6,
          5
        ],
        [
          7,
          1
        ],
        [
          7,
          5
        ],
        [
          8,
          1
        ],
        [
          8,
          5
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
          4
        ],
        [
          9,
          5
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        5,
        5
      ],
      "coins": [
        [
          3,
          1
        ],
        [
          5,
          1
        ],
        [
          9,
          5
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": [],
      "number_clues": [
        {
          "x": 3,
          "y": 1,
          "label": "A"
        },
        {
          "x": 5,
          "y": 1,
          "label": "B"
        }
      ],
      "code_doors": [
        {
          "x": 7,
          "y": 1,
          "label": "I",
          "formula": "B",
          "terms": [
            {
              "clue": "B",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 9,
          "y": 3,
          "label": "II",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    "mapNote": "Cyan letters are signs. Purple Roman numerals are doors. Door codes: I uses B; II uses A.",
    "goals": [
      "Read every sign and save its code.",
      "Open all code doors: I uses B; II uses A.",
      "Collect all 3 coins and reach E."
    ]
  },
  {
    "id": "2-vars-4",
    "week": 2,
    "stage": 4,
    "title": "Bring both codes back",
    "topic": "Variables & Numbers",
    "teach": "The signs are in side rooms. Bring both readings back to the main corridor in separate variables. Door I wants A, II wants B, and III wants A again. A variable is useful because you can carry information far from where you found it. Each sign has a different code, generated anew for each run. Move onto a sign to read it; stand beside a door to enter its code.",
    "example": "a = hero.read()\n# At sign B:\nb = hero.read()\n# At a door that wants A:\nhero.enter_code(\"left\", a)",
    "objective": "Remember the sign codes and open every door. I uses A; II uses B; III uses A.",
    "hint": "Visit both side rooms before leaving the top corridor. Do not overwrite a after opening the first door. Use code = hero.read() on a sign and hero.enter_code(\"right\", code) beside a matching door. Change the direction and variable name to fit your route. You can use hero.move(\"right\", 2) to walk two tiles; stop on signs and coins when you need to read or collect.",
    "starter": "from hero_game import hero\n\n# Walk onto a sign, then save its reading in a variable.\n# Use the saved variable when standing beside its matching door.\n",
    "world": {
      "width": 13,
      "height": 7,
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
          3,
          2
        ],
        [
          3,
          3
        ],
        [
          3,
          5
        ],
        [
          4,
          1
        ],
        [
          4,
          5
        ],
        [
          5,
          1
        ],
        [
          5,
          5
        ],
        [
          6,
          1
        ],
        [
          6,
          5
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
          5
        ],
        [
          8,
          1
        ],
        [
          8,
          5
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
          10,
          1
        ],
        [
          10,
          5
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
          11,
          4
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
        3,
        5
      ],
      "coins": [
        [
          3,
          3
        ],
        [
          7,
          3
        ],
        [
          11,
          5
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": [],
      "number_clues": [
        {
          "x": 3,
          "y": 3,
          "label": "A"
        },
        {
          "x": 7,
          "y": 3,
          "label": "B"
        }
      ],
      "code_doors": [
        {
          "x": 9,
          "y": 1,
          "label": "I",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 11,
          "y": 3,
          "label": "II",
          "formula": "B",
          "terms": [
            {
              "clue": "B",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 8,
          "y": 5,
          "label": "III",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    "mapNote": "Cyan letters are signs. Purple Roman numerals are doors. Door codes: I uses A; II uses B; III uses A.",
    "goals": [
      "Read every sign and save its code.",
      "Open all code doors: I uses A; II uses B; III uses A.",
      "Collect all 3 coins and reach E."
    ]
  },
  {
    "id": "2-vars-5",
    "week": 2,
    "stage": 5,
    "title": "Three codes, four doors",
    "topic": "Variables & Numbers",
    "teach": "Keep three readings at once using a, b, and c. Doors do not have to use codes in the order you read them. Plan which variable each door needs, and keep all three until you reach the exit. Each sign has a different code, generated anew for each run. Move onto a sign to read it; stand beside a door to enter its code.",
    "example": "c = hero.read()\n# a and b still hold the earlier readings.\nhero.enter_code(\"down\", c)",
    "objective": "Remember the sign codes and open every door. I uses C; II uses A; III uses B; IV uses C.",
    "hint": "Read A, B, and C in their side rooms first. The doors ask for C, A, B, then C again. Use code = hero.read() on a sign and hero.enter_code(\"right\", code) beside a matching door. Change the direction and variable name to fit your route. You can use hero.move(\"right\", 2) to walk two tiles; stop on signs and coins when you need to read or collect.",
    "starter": "from hero_game import hero\n\n# Walk onto a sign, then save its reading in a variable.\n# Use the saved variable when standing beside its matching door.\n",
    "world": {
      "width": 15,
      "height": 11,
      "path": [
        [
          1,
          1
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
          1,
          8
        ],
        [
          1,
          9
        ],
        [
          2,
          1
        ],
        [
          2,
          5
        ],
        [
          2,
          9
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
          5
        ],
        [
          3,
          9
        ],
        [
          4,
          1
        ],
        [
          4,
          5
        ],
        [
          4,
          9
        ],
        [
          5,
          1
        ],
        [
          5,
          5
        ],
        [
          5,
          9
        ],
        [
          6,
          1
        ],
        [
          6,
          5
        ],
        [
          6,
          9
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
          5
        ],
        [
          7,
          9
        ],
        [
          8,
          1
        ],
        [
          8,
          5
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
          10,
          1
        ],
        [
          10,
          5
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
          11,
          5
        ],
        [
          12,
          1
        ],
        [
          12,
          5
        ],
        [
          13,
          1
        ],
        [
          13,
          2
        ],
        [
          13,
          3
        ],
        [
          13,
          4
        ],
        [
          13,
          5
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        7,
        9
      ],
      "coins": [
        [
          3,
          3
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
          1,
          5
        ],
        [
          7,
          9
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": [],
      "number_clues": [
        {
          "x": 3,
          "y": 3,
          "label": "A"
        },
        {
          "x": 7,
          "y": 3,
          "label": "B"
        },
        {
          "x": 11,
          "y": 3,
          "label": "C"
        }
      ],
      "code_doors": [
        {
          "x": 13,
          "y": 3,
          "label": "I",
          "formula": "C",
          "terms": [
            {
              "clue": "C",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 10,
          "y": 5,
          "label": "II",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 6,
          "y": 5,
          "label": "III",
          "formula": "B",
          "terms": [
            {
              "clue": "B",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 3,
          "y": 9,
          "label": "IV",
          "formula": "C",
          "terms": [
            {
              "clue": "C",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    "mapNote": "Cyan letters are signs. Purple Roman numerals are doors. Door codes: I uses C; II uses A; III uses B; IV uses C.",
    "goals": [
      "Read every sign and save its code.",
      "Open all code doors: I uses C; II uses A; III uses B; IV uses C.",
      "Collect all 5 coins and reach E."
    ]
  },
  {
    "id": "2-vars-6",
    "week": 2,
    "stage": 6,
    "title": "Five doors to remember",
    "topic": "Variables & Numbers",
    "teach": "Use three stored readings to open five doors. Some codes are reused after several other doors. Keep the original variables instead of replacing a with b or c. Saving a value once lets you use it whenever the route needs it. Each sign has a different code, generated anew for each run. Move onto a sign to read it; stand beside a door to enter its code.",
    "example": "hero.enter_code(\"left\", a)\n# Much later, a can open another matching door.\nhero.enter_code(\"down\", a)",
    "objective": "Remember the sign codes and open every door. I uses C; II uses A; III uses B; IV uses A; V uses C.",
    "hint": "Keep all three original readings. Follow the door mapping: C, A, B, A, C. Opening a door leaves its variable available. Use code = hero.read() on a sign and hero.enter_code(\"right\", code) beside a matching door. Change the direction and variable name to fit your route. You can use hero.move(\"right\", 2) to walk two tiles; stop on signs and coins when you need to read or collect.",
    "starter": "from hero_game import hero\n\n# Walk onto a sign, then save its reading in a variable.\n# Use the saved variable when standing beside its matching door.\n",
    "world": {
      "width": 15,
      "height": 11,
      "path": [
        [
          1,
          1
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
          1,
          8
        ],
        [
          1,
          9
        ],
        [
          2,
          1
        ],
        [
          2,
          5
        ],
        [
          2,
          9
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
          5
        ],
        [
          3,
          9
        ],
        [
          4,
          1
        ],
        [
          4,
          5
        ],
        [
          4,
          9
        ],
        [
          5,
          1
        ],
        [
          5,
          5
        ],
        [
          5,
          9
        ],
        [
          6,
          1
        ],
        [
          6,
          5
        ],
        [
          6,
          9
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
          5
        ],
        [
          7,
          9
        ],
        [
          8,
          1
        ],
        [
          8,
          5
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
          10,
          1
        ],
        [
          10,
          5
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
          11,
          5
        ],
        [
          12,
          1
        ],
        [
          12,
          5
        ],
        [
          13,
          1
        ],
        [
          13,
          2
        ],
        [
          13,
          3
        ],
        [
          13,
          4
        ],
        [
          13,
          5
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        7,
        9
      ],
      "coins": [
        [
          3,
          3
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
          1,
          5
        ],
        [
          7,
          9
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": [],
      "number_clues": [
        {
          "x": 3,
          "y": 3,
          "label": "A"
        },
        {
          "x": 7,
          "y": 3,
          "label": "B"
        },
        {
          "x": 11,
          "y": 3,
          "label": "C"
        }
      ],
      "code_doors": [
        {
          "x": 13,
          "y": 3,
          "label": "I",
          "formula": "C",
          "terms": [
            {
              "clue": "C",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 10,
          "y": 5,
          "label": "II",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 6,
          "y": 5,
          "label": "III",
          "formula": "B",
          "terms": [
            {
              "clue": "B",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 1,
          "y": 7,
          "label": "IV",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 4,
          "y": 9,
          "label": "V",
          "formula": "C",
          "terms": [
            {
              "clue": "C",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    "mapNote": "Cyan letters are signs. Purple Roman numerals are doors. Door codes: I uses C; II uses A; III uses B; IV uses A; V uses C.",
    "goals": [
      "Read every sign and save its code.",
      "Open all code doors: I uses C; II uses A; III uses B; IV uses A; V uses C.",
      "Collect all 5 coins and reach E."
    ]
  },
  {
    "id": "2-vars-7",
    "week": 2,
    "stage": 7,
    "title": "The four-code vault",
    "topic": "Variables & Numbers",
    "teach": "Remember four separate codes through six doors and a long winding route. A, B, and C are in the top side rooms. D is in the middle side room. Keep the earlier readings when you add d: the final doors still need codes you found near the start. Plan your side-room visits before writing the full route. Each sign has a different code, generated anew for each run. Move onto a sign to read it; stand beside a door to enter its code.",
    "example": "d = hero.read()\n# Keep a, b, and c unchanged.\n# Use each saved variable at its matching door.",
    "objective": "Remember the sign codes and open every door. I uses B; II uses A; III uses C; IV uses D; V uses B; VI uses A.",
    "hint": "Use a, b, c, and d as four independent memories. Do not miss D before leaving the middle corridor. The six doors ask for B, A, C, D, B, A: the first two readings must survive to the very end. Use code = hero.read() on a sign and hero.enter_code(\"right\", code) beside a matching door. Change the direction and variable name to fit your route. You can use hero.move(\"right\", 2) to walk two tiles; stop on signs and coins when you need to read or collect.",
    "starter": "from hero_game import hero\n\n# Walk onto a sign, then save its reading in a variable.\n# Use the saved variable when standing beside its matching door.\n",
    "world": {
      "width": 15,
      "height": 15,
      "path": [
        [
          1,
          1
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
          1,
          8
        ],
        [
          1,
          9
        ],
        [
          2,
          1
        ],
        [
          2,
          5
        ],
        [
          2,
          9
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
          5
        ],
        [
          3,
          9
        ],
        [
          3,
          13
        ],
        [
          4,
          1
        ],
        [
          4,
          5
        ],
        [
          4,
          9
        ],
        [
          4,
          13
        ],
        [
          5,
          1
        ],
        [
          5,
          5
        ],
        [
          5,
          9
        ],
        [
          5,
          13
        ],
        [
          6,
          1
        ],
        [
          6,
          5
        ],
        [
          6,
          9
        ],
        [
          6,
          13
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
          5
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
          7,
          9
        ],
        [
          7,
          13
        ],
        [
          8,
          1
        ],
        [
          8,
          5
        ],
        [
          8,
          9
        ],
        [
          8,
          13
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
          9,
          9
        ],
        [
          9,
          13
        ],
        [
          10,
          1
        ],
        [
          10,
          5
        ],
        [
          10,
          9
        ],
        [
          10,
          13
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
          11,
          5
        ],
        [
          11,
          9
        ],
        [
          11,
          13
        ],
        [
          12,
          1
        ],
        [
          12,
          5
        ],
        [
          12,
          9
        ],
        [
          12,
          13
        ],
        [
          13,
          1
        ],
        [
          13,
          2
        ],
        [
          13,
          3
        ],
        [
          13,
          4
        ],
        [
          13,
          5
        ],
        [
          13,
          9
        ],
        [
          13,
          10
        ],
        [
          13,
          11
        ],
        [
          13,
          12
        ],
        [
          13,
          13
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        3,
        13
      ],
      "coins": [
        [
          3,
          3
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
          7,
          7
        ],
        [
          1,
          5
        ],
        [
          7,
          9
        ],
        [
          13,
          13
        ],
        [
          3,
          13
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": [],
      "number_clues": [
        {
          "x": 3,
          "y": 3,
          "label": "A"
        },
        {
          "x": 7,
          "y": 3,
          "label": "B"
        },
        {
          "x": 11,
          "y": 3,
          "label": "C"
        },
        {
          "x": 7,
          "y": 7,
          "label": "D"
        }
      ],
      "code_doors": [
        {
          "x": 13,
          "y": 3,
          "label": "I",
          "formula": "B",
          "terms": [
            {
              "clue": "B",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 10,
          "y": 5,
          "label": "II",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 4,
          "y": 5,
          "label": "III",
          "formula": "C",
          "terms": [
            {
              "clue": "C",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 3,
          "y": 9,
          "label": "IV",
          "formula": "D",
          "terms": [
            {
              "clue": "D",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 10,
          "y": 9,
          "label": "V",
          "formula": "B",
          "terms": [
            {
              "clue": "B",
              "multiplier": 1
            }
          ]
        },
        {
          "x": 9,
          "y": 13,
          "label": "VI",
          "formula": "A",
          "terms": [
            {
              "clue": "A",
              "multiplier": 1
            }
          ]
        }
      ]
    },
    "mapNote": "Cyan letters are signs. Purple Roman numerals are doors. Door codes: I uses B; II uses A; III uses C; IV uses D; V uses B; VI uses A.",
    "goals": [
      "Read every sign and save its code.",
      "Open all code doors: I uses B; II uses A; III uses C; IV uses D; V uses B; VI uses A.",
      "Collect all 8 coins and reach E."
    ]
  },
  {
    "id": "4-1",
    "week": 3,
    "stage": 1,
    "title": "One hit or two?",
    "topic": "Conditionals",
    "teach": "Each guard has either 3 or 6 health, chosen anew each run. Each attack deals 3 damage. A fixed second attack fails when a guard has already fallen; moving on after one hit fails when it survives. Use if hero.enemy_at(direction) before each possible attack, then move when the tile is clear. Use if with hero.on_coin or hero.on_key before collecting supplies.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nif hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nhero.move(\"right\")",
    "objective": "Collect all 5 coins and reach the exit. Find the keys in the side rooms and open 1 locked door. Defeat all 2 guards. Keep an eye on your health.",
    "hint": "Guard health can change on every run. After the first hit, check hero.enemy_at again: 3-health guards are gone, but 6-health guards still block the path. Check side rooms for keys and coins before leaving each hall.",
    "starter": "from hero_game import hero\n\n# A guard may need one hit or two. Check before attacking again.\n",
    "world": {
      "enemy_health_choices": [
        3,
        6
      ],
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
    "week": 3,
    "stage": 2,
    "title": "Two locked doors",
    "topic": "Conditionals",
    "teach": "Each guard has either 3 or 6 health, chosen anew each run. Each attack deals 3 damage. A fixed second attack fails when a guard has already fallen; moving on after one hit fails when it survives. Use if hero.enemy_at(direction) before each possible attack, then move when the tile is clear. Use if with hero.on_coin or hero.on_key before collecting supplies.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nif hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nhero.move(\"right\")",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Guard health can change on every run. After the first hit, check hero.enemy_at again: 3-health guards are gone, but 6-health guards still block the path. Check side rooms for keys and coins before leaving each hall.",
    "starter": "from hero_game import hero\n\n# A guard may need one hit or two. Check before attacking again.\n",
    "world": {
      "enemy_health_choices": [
        3,
        6
      ],
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
    "week": 3,
    "stage": 3,
    "title": "The split path",
    "topic": "Conditionals",
    "teach": "Each guard has either 3 or 6 health, chosen anew each run. Each attack deals 3 damage. A fixed second attack fails when a guard has already fallen; moving on after one hit fails when it survives. Use if hero.enemy_at(direction) before each possible attack, then move when the tile is clear. Use if with hero.on_coin or hero.on_key before collecting supplies.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nif hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nhero.move(\"right\")",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Guard health can change on every run. After the first hit, check hero.enemy_at again: 3-health guards are gone, but 6-health guards still block the path. Check side rooms for keys and coins before leaving each hall.",
    "starter": "from hero_game import hero\n\n# A guard may need one hit or two. Check before attacking again.\n",
    "world": {
      "enemy_health_choices": [
        3,
        6
      ],
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
    "week": 3,
    "stage": 4,
    "title": "The west wing",
    "topic": "Conditionals",
    "teach": "Each guard has either 3 or 6 health, chosen anew each run. Each attack deals 3 damage. A fixed second attack fails when a guard has already fallen; moving on after one hit fails when it survives. Use if hero.enemy_at(direction) before each possible attack, then move when the tile is clear. Use if with hero.on_coin or hero.on_key before collecting supplies.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nif hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nhero.move(\"right\")",
    "objective": "Collect all 7 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Guard health can change on every run. After the first hit, check hero.enemy_at again: 3-health guards are gone, but 6-health guards still block the path. Check side rooms for keys and coins before leaving each hall.",
    "starter": "from hero_game import hero\n\n# A guard may need one hit or two. Check before attacking again.\n",
    "world": {
      "enemy_health_choices": [
        3,
        6
      ],
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
    "week": 3,
    "stage": 5,
    "title": "The return route",
    "topic": "Conditionals",
    "teach": "Each guard has either 3 or 6 health, chosen anew each run. Each attack deals 3 damage. A fixed second attack fails when a guard has already fallen; moving on after one hit fails when it survives. Use if hero.enemy_at(direction) before each possible attack, then move when the tile is clear. Use if with hero.on_coin or hero.on_key before collecting supplies.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nif hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nhero.move(\"right\")",
    "objective": "Collect all 8 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 3 guards. Keep an eye on your health.",
    "hint": "Guard health can change on every run. After the first hit, check hero.enemy_at again: 3-health guards are gone, but 6-health guards still block the path. Check side rooms for keys and coins before leaving each hall.",
    "starter": "from hero_game import hero\n\n# A guard may need one hit or two. Check before attacking again.\n",
    "world": {
      "enemy_health_choices": [
        3,
        6
      ],
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
    "week": 3,
    "stage": 6,
    "title": "Put it to the test",
    "topic": "Conditionals",
    "teach": "Each guard has either 3 or 6 health, chosen anew each run. Each attack deals 3 damage. A fixed second attack fails when a guard has already fallen; moving on after one hit fails when it survives. Use if hero.enemy_at(direction) before each possible attack, then move when the tile is clear. Use if with hero.on_coin or hero.on_key before collecting supplies.",
    "example": "if hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nif hero.enemy_at(\"right\"):\n    hero.attack(\"right\")\nhero.move(\"right\")",
    "objective": "Collect all 10 coins and reach the exit. Find the keys in the side rooms and open 2 locked doors. Defeat all 4 guards. Keep an eye on your health.",
    "hint": "Guard health can change on every run. After the first hit, check hero.enemy_at again: 3-health guards are gone, but 6-health guards still block the path. Check side rooms for keys and coins before leaving each hall.",
    "starter": "from hero_game import hero\n\n# A guard may need one hit or two. Check before attacking again.\n",
    "world": {
      "enemy_health_choices": [
        3,
        6
      ],
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
    "id": "4-loops-1",
    "week": 4,
    "stage": 1,
    "title": "Four coins, one sequence",
    "topic": "Loops",
    "teach": "A sequence is a group of actions in order. Here, one sequence is move right, then collect. A for loop repeats every indented line, in order. range(4) repeats the whole sequence four times. Keep both commands inside the loop so you collect after every move.",
    "example": "for repeat in range(2):\n    hero.move(\"right\")\n    hero.collect()\n# This example repeats the pair twice. How many pairs does this map need?",
    "objective": "Collect the four coins and reach the exit by repeating the same two actions.",
    "hint": "One repeat collects one coin. Use range(4), with move and collect indented by the same amount. Moving four times and then collecting only picks up the last coin.",
    "starter": "from hero_game import hero\n\n# Repeat this sequence four times: move right, collect.\n# Put both actions inside one for loop.\n",
    "goals": [
      "Collect the four coins and reach the exit by repeating the same two actions."
    ],
    "mapNote": "This route always has four coins. Count sequences, not just lines of code.",
    "world": {
      "width": 7,
      "height": 3,
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
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        5,
        1
      ],
      "coins": [
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
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": []
    }
  },
  {
    "id": "4-loops-2",
    "week": 4,
    "stage": 2,
    "title": "A trail that changes",
    "topic": "Loops",
    "teach": "The same move-and-collect sequence works on a short or long trail. This time its length is chosen again on every Run. A while loop checks its condition before each repeat. hero.can_move(\"right\") is True while a clear tile is ahead. Move and collect inside the loop; at the end of the trail the condition becomes False.",
    "example": "while hero.can_move(\"right\"):\n    hero.move(\"right\")\n    # Collect the coin after each move.",
    "objective": "Write one move-and-collect loop that works for every trail length.",
    "hint": "Keep both move and collect inside the while loop. Each move gets you closer to the wall, so the loop eventually stops. Run your unchanged code several times to try different widths.",
    "starter": "from hero_game import hero\n\n# Repeat move right, collect while the path continues.\n# The number of coins can change on every Run.\n",
    "goals": [
      "Write one move-and-collect loop that works for every trail length."
    ],
    "mapNote": "Run chooses a trail with 3 to 7 coins. The exit is on the last coin.",
    "world": {
      "width": 8,
      "height": 3,
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
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        6,
        1
      ],
      "coins": [
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
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": [],
      "variants": [
        {
          "width": 6,
          "height": 3,
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
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            4,
            1
          ],
          "coins": [
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
            ]
          ],
          "keys": [],
          "doors": [],
          "potions": [],
          "enemies": []
        },
        {
          "width": 7,
          "height": 3,
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
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            5,
            1
          ],
          "coins": [
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
            ]
          ],
          "keys": [],
          "doors": [],
          "potions": [],
          "enemies": []
        },
        {
          "width": 8,
          "height": 3,
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
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            6,
            1
          ],
          "coins": [
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
            ]
          ],
          "keys": [],
          "doors": [],
          "potions": [],
          "enemies": []
        },
        {
          "width": 9,
          "height": 3,
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
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            7,
            1
          ],
          "coins": [
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
            ]
          ],
          "keys": [],
          "doors": [],
          "potions": [],
          "enemies": []
        },
        {
          "width": 10,
          "height": 3,
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
              8,
              1
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            8,
            1
          ],
          "coins": [
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
              8,
              1
            ]
          ],
          "keys": [],
          "doors": [],
          "potions": [],
          "enemies": []
        }
      ]
    }
  },
  {
    "id": "4-loops-3",
    "week": 4,
    "stage": 3,
    "title": "Three staircase steps",
    "topic": "Loops",
    "teach": "A loop can repeat a longer sequence too. One stair is: move right twice, collect, move down once, collect. Repeat that whole sequence three times with for repeat in range(3). All five command lines belong inside the loop. Lines after the loop run only once.",
    "example": "for repeat in range(3):\n    hero.move(\"right\")\n    hero.move(\"right\")\n    # Collect, move down, and collect to finish one stair.",
    "objective": "Collect both coins on each of the three stairs and finish at the bottom.",
    "hint": "Plan one complete stair before repeating it. Each stair ends just below its corner coin, ready to move right onto the next stair. Two moves right and one move down make one repeat.",
    "starter": "from hero_game import hero\n\n# One stair: right, right, collect, down, collect.\n# Repeat the complete sequence three times with a for loop.\n",
    "goals": [
      "Collect both coins on each of the three stairs and finish at the bottom."
    ],
    "mapNote": "There are always three identical stairs, with two coins on each stair.",
    "world": {
      "width": 9,
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
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        7,
        4
      ],
      "coins": [
        [
          3,
          1
        ],
        [
          3,
          2
        ],
        [
          5,
          2
        ],
        [
          5,
          3
        ],
        [
          7,
          3
        ],
        [
          7,
          4
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": []
    }
  },
  {
    "id": "4-loops-4",
    "week": 4,
    "stage": 4,
    "title": "A staircase that grows",
    "topic": "Loops",
    "teach": "Reuse the complete staircase sequence from the last challenge, but let a condition decide when to stop. The staircase can have a different number of stairs on every Run. At the start of each stair, a clear tile lies to the right. After the final move down, there is a wall to the right. while hero.can_move(\"right\") checks again only after the whole indented sequence finishes.",
    "example": "while hero.can_move(\"right\"):\n    hero.move(\"right\")\n    hero.move(\"right\")\n    # Finish the whole stair before checking again.",
    "objective": "Use one repeated staircase sequence to collect every coin on any size staircase.",
    "hint": "Keep the same five actions from the three-stair challenge. Replace its fixed repetition count with a while condition. Do not stop at the corner: collect, move down, and collect before the next condition check.",
    "starter": "from hero_game import hero\n\n# Repeat one complete stair while a clear tile is to the right.\n# The number of stairs changes; the actions in each stair stay the same.\n",
    "goals": [
      "Use one repeated staircase sequence to collect every coin on any size staircase."
    ],
    "mapNote": "Run chooses 2 to 5 stairs, changing the width and height. Each stair still has the same shape.",
    "world": {
      "width": 11,
      "height": 7,
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
          4
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
        1
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
          3,
          2
        ],
        [
          5,
          2
        ],
        [
          5,
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
          9,
          4
        ],
        [
          9,
          5
        ]
      ],
      "keys": [],
      "doors": [],
      "potions": [],
      "enemies": [],
      "variants": [
        {
          "width": 7,
          "height": 5,
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
              5,
              3
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            5,
            3
          ],
          "coins": [
            [
              3,
              1
            ],
            [
              3,
              2
            ],
            [
              5,
              2
            ],
            [
              5,
              3
            ]
          ],
          "keys": [],
          "doors": [],
          "potions": [],
          "enemies": []
        },
        {
          "width": 9,
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
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            7,
            4
          ],
          "coins": [
            [
              3,
              1
            ],
            [
              3,
              2
            ],
            [
              5,
              2
            ],
            [
              5,
              3
            ],
            [
              7,
              3
            ],
            [
              7,
              4
            ]
          ],
          "keys": [],
          "doors": [],
          "potions": [],
          "enemies": []
        },
        {
          "width": 11,
          "height": 7,
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
              4
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
            1
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
              3,
              2
            ],
            [
              5,
              2
            ],
            [
              5,
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
              9,
              4
            ],
            [
              9,
              5
            ]
          ],
          "keys": [],
          "doors": [],
          "potions": [],
          "enemies": []
        },
        {
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
              4
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
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            11,
            6
          ],
          "coins": [
            [
              3,
              1
            ],
            [
              3,
              2
            ],
            [
              5,
              2
            ],
            [
              5,
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
              9,
              4
            ],
            [
              9,
              5
            ],
            [
              11,
              5
            ],
            [
              11,
              6
            ]
          ],
          "keys": [],
          "doors": [],
          "potions": [],
          "enemies": []
        }
      ]
    }
  },
  {
    "id": "4-loops-5",
    "week": 4,
    "stage": 5,
    "title": "Three matching doorways",
    "topic": "Loops",
    "teach": "Look for the repeated sequence in a bigger task. Each section has a key, a locked door, a coin, then a clear tile. One sequence is: move right and collect the key; unlock right and move through the door; move right and collect the coin; move right to the next section. A for loop repeats this whole sequence three times. Collect each key before unlocking its door.",
    "example": "for repeat in range(3):\n    hero.move(\"right\")\n    hero.collect()\n    hero.unlock(\"right\")\n    # Walk through, collect the coin, and reach the next section.",
    "objective": "Repeat one key-door-coin sequence to open all three doors and reach the exit.",
    "hint": "There are four right moves in one section. Collect after the first move for the key and after the third move for the coin. Unlock before the second move. The fourth move finishes a section, ready for the next repeat.",
    "starter": "from hero_game import hero\n\n# One section: key, door, coin, clear tile.\n# Write its complete action sequence inside a for loop with range(3).\n",
    "goals": [
      "Repeat one key-door-coin sequence to open all three doors and reach the exit."
    ],
    "mapNote": "There are always three identical sections. The exit is on the clear tile after the final coin.",
    "world": {
      "width": 15,
      "height": 3,
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
          13,
          1
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        13,
        1
      ],
      "coins": [
        [
          4,
          1
        ],
        [
          8,
          1
        ],
        [
          12,
          1
        ]
      ],
      "keys": [
        [
          2,
          1
        ],
        [
          6,
          1
        ],
        [
          10,
          1
        ]
      ],
      "doors": [
        [
          3,
          1
        ],
        [
          7,
          1
        ],
        [
          11,
          1
        ]
      ],
      "potions": [],
      "enemies": []
    }
  },
  {
    "id": "4-loops-6",
    "week": 4,
    "stage": 6,
    "title": "Doorways of any length",
    "topic": "Loops",
    "teach": "A useful loop keeps working when the map changes. Repeat the same key-door-coin sequence from the last challenge with while hero.can_move(\"right\"). Check at the start of a section, where the next tile holds its key. Unlock the door inside the sequence before walking through it. After the final section, the wall to the right ends the loop.",
    "example": "while hero.can_move(\"right\"):\n    hero.move(\"right\")\n    hero.collect()\n    hero.unlock(\"right\")\n    # Finish this section before the next condition check.",
    "objective": "Open every door, collect every coin, and reach the exit with code that handles any number of sections.",
    "hint": "Reuse all the actions from one section of the previous challenge. A locked door blocks can_move, so check the condition between complete sections, not between individual moves. Run the same code several times to try different widths.",
    "starter": "from hero_game import hero\n\n# Repeat the full key-door-coin sequence while another section is ahead.\n# Use the same code for every width.\n",
    "goals": [
      "Open every door, collect every coin, and reach the exit with code that handles any number of sections."
    ],
    "mapNote": "Run chooses 2 to 4 sections. Each section is four tiles long; only the number of sections changes.",
    "world": {
      "width": 15,
      "height": 3,
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
          13,
          1
        ]
      ],
      "start": [
        1,
        1
      ],
      "exit": [
        13,
        1
      ],
      "coins": [
        [
          4,
          1
        ],
        [
          8,
          1
        ],
        [
          12,
          1
        ]
      ],
      "keys": [
        [
          2,
          1
        ],
        [
          6,
          1
        ],
        [
          10,
          1
        ]
      ],
      "doors": [
        [
          3,
          1
        ],
        [
          7,
          1
        ],
        [
          11,
          1
        ]
      ],
      "potions": [],
      "enemies": [],
      "variants": [
        {
          "width": 11,
          "height": 3,
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
              8,
              1
            ],
            [
              9,
              1
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            9,
            1
          ],
          "coins": [
            [
              4,
              1
            ],
            [
              8,
              1
            ]
          ],
          "keys": [
            [
              2,
              1
            ],
            [
              6,
              1
            ]
          ],
          "doors": [
            [
              3,
              1
            ],
            [
              7,
              1
            ]
          ],
          "potions": [],
          "enemies": []
        },
        {
          "width": 15,
          "height": 3,
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
              13,
              1
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            13,
            1
          ],
          "coins": [
            [
              4,
              1
            ],
            [
              8,
              1
            ],
            [
              12,
              1
            ]
          ],
          "keys": [
            [
              2,
              1
            ],
            [
              6,
              1
            ],
            [
              10,
              1
            ]
          ],
          "doors": [
            [
              3,
              1
            ],
            [
              7,
              1
            ],
            [
              11,
              1
            ]
          ],
          "potions": [],
          "enemies": []
        },
        {
          "width": 19,
          "height": 3,
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
              13,
              1
            ],
            [
              14,
              1
            ],
            [
              15,
              1
            ],
            [
              16,
              1
            ],
            [
              17,
              1
            ]
          ],
          "start": [
            1,
            1
          ],
          "exit": [
            17,
            1
          ],
          "coins": [
            [
              4,
              1
            ],
            [
              8,
              1
            ],
            [
              12,
              1
            ],
            [
              16,
              1
            ]
          ],
          "keys": [
            [
              2,
              1
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
              14,
              1
            ]
          ],
          "doors": [
            [
              3,
              1
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
              15,
              1
            ]
          ],
          "potions": [],
          "enemies": []
        }
      ]
    }
  },
  {
    "id": "5-hotbar-1",
    "week": 5,
    "stage": 1,
    "title": "Pack your first hotbar",
    "topic": "Lists",
    "teach": "A Python list holds items in order. Your hotbar shows that order on screen. Load it with hero.set_hotbar(hotbar), then use hero.equip(index) to put an item in your hand. Indexes start at 0: the first slot is 0, the second is 1, and the third is 2. Hold a sword to attack, a key to unlock, and a potion to heal. Keys and potions still have to be collected on the map.",
    "example": "hotbar = [\"sword\", \"key\", \"potion\"]\nhero.set_hotbar(hotbar)\nhero.equip(0)  # Hold the sword in the first slot.",
    "objective": "Create a three-item hotbar in this order: sword, key, potion. Watch the supplied plan switch items as your hero travels.",
    "hint": "Fill hotbar with the three quoted item names. The supplied movement uses slot 0 for attacks, slot 1 for doors, and slot 2 for healing.",
    "starter": "from hero_game import hero\n\nhotbar = []\n# Pack sword, key, and potion in that order.\n\nhero.set_hotbar(hotbar)\n\n# Movement is supplied. Focus on packing and choosing your items.\nroute = [\n    \"right\", \"right\", \"right\", \"right\", \"right\", \"up\", \"down\", \"right\", \"right\", \"right\",\n    \"right\", \"down\", \"down\", \"left\", \"left\", \"left\", \"left\", \"down\", \"up\", \"left\",\n    \"left\", \"left\", \"left\", \"left\", \"down\", \"down\", \"right\", \"right\", \"right\", \"right\",\n    \"right\", \"up\", \"down\", \"right\", \"right\", \"right\", \"right\",\n]\n\nfor direction in route:\n    if hero.door_at(direction):\n        hero.equip(1)\n        hero.unlock(direction)\n    while hero.enemy_at(direction):\n        if hero.health <= 6 and hero.potions > 0:\n            hero.equip(2)\n            hero.heal()\n        hero.equip(0)\n        hero.attack(direction)\n    hero.move(direction)\n    if hero.on_coin or hero.on_key or hero.on_potion:\n        hero.collect()\n",
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
      ],
      "requires_hotbar": true
    },
    "mapNote": "The movement plan is supplied. Hotbar slots are numbered 0\u20134; the cyan outline shows your selected slot. Watch the item in your hero's hand. Keys and potions use the supplies collected on the map.",
    "goals": [
      "Hold the sword before attacking, the key before unlocking, and the potion before healing.",
      "Collect every coin, defeat every guard, open every door, and reach the exit."
    ]
  },
  {
    "id": "5-hotbar-2",
    "week": 5,
    "stage": 2,
    "title": "Choose the right slot",
    "topic": "Lists",
    "teach": "A list index tells you where an item is stored. hotbar[0] reads the first item, while hero.equip(0) holds it. Moving an item to another position changes its index. Read this hotbar and set the three slot variables so each action uses the right item.",
    "example": "hotbar = [\"key\", \"potion\", \"sword\"]\nprint(hotbar[2])  # sword\nhero.set_hotbar(hotbar)\nhero.equip(2)",
    "objective": "The hotbar has been rearranged. Set sword_slot, key_slot, and potion_slot to their correct zero-based indexes.",
    "hint": "In [\"potion\", \"sword\", \"key\"], potion is first. Count from 0, not 1. Replace each None with a number.",
    "starter": "from hero_game import hero\n\nhotbar = [\"potion\", \"sword\", \"key\"]\nsword_slot = None\nkey_slot = None\npotion_slot = None\n\nhero.set_hotbar(hotbar)\n\n# Movement is supplied. Focus on packing and choosing your items.\nroute = [\n    \"right\", \"right\", \"right\", \"right\", \"right\", \"up\", \"down\", \"right\", \"right\", \"right\",\n    \"right\", \"right\", \"down\", \"down\", \"left\", \"left\", \"left\", \"left\", \"left\", \"left\",\n    \"down\", \"up\", \"left\", \"left\", \"left\", \"left\", \"down\", \"down\", \"right\", \"right\",\n    \"right\", \"right\", \"right\", \"up\", \"down\", \"right\", \"right\", \"right\", \"right\", \"right\",\n    \"down\", \"down\", \"left\", \"left\", \"left\", \"left\", \"left\", \"left\", \"down\", \"up\",\n    \"left\", \"left\", \"left\", \"left\",\n]\n\nfor direction in route:\n    if hero.door_at(direction):\n        hero.equip(key_slot)\n        hero.unlock(direction)\n    while hero.enemy_at(direction):\n        if hero.health <= 6 and hero.potions > 0:\n            hero.equip(potion_slot)\n            hero.heal()\n        hero.equip(sword_slot)\n        hero.attack(direction)\n    hero.move(direction)\n    if hero.on_coin or hero.on_key or hero.on_potion:\n        hero.collect()\n",
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
      ],
      "requires_hotbar": true
    },
    "mapNote": "The movement plan is supplied. Hotbar slots are numbered 0\u20134; the cyan outline shows your selected slot. Watch the item in your hero's hand. Keys and potions use the supplies collected on the map.",
    "goals": [
      "Hold the sword before attacking, the key before unlocking, and the potion before healing.",
      "Collect every coin, defeat every guard, open every door, and reach the exit."
    ]
  },
  {
    "id": "5-hotbar-3",
    "week": 5,
    "stage": 3,
    "title": "Replace an item",
    "topic": "Lists",
    "teach": "Assigning to a list index replaces just that item. hotbar[1] = \"key\" puts a key in the second slot. This hotbar has two swords and no key. Repair the list before loading it. hero.set_hotbar copies the current list, so load it again after any later edits.",
    "example": "hotbar = [\"key\", \"key\", \"potion\"]\nhotbar[0] = \"sword\"\nhero.set_hotbar(hotbar)",
    "objective": "Replace the extra sword with a key. Keep the sword in slot 0 and the potion in slot 2.",
    "hint": "The extra sword is in the second slot. Use hotbar[index] = \"key\" before hero.set_hotbar(hotbar).",
    "starter": "from hero_game import hero\n\nhotbar = [\"sword\", \"sword\", \"potion\"]\n# Replace the extra sword here, using its index.\n\nhero.set_hotbar(hotbar)\n\n# Movement is supplied. Focus on packing and choosing your items.\nroute = [\n    \"right\", \"right\", \"right\", \"right\", \"right\", \"right\", \"up\", \"down\", \"right\", \"right\",\n    \"right\", \"right\", \"right\", \"down\", \"down\", \"left\", \"left\", \"left\", \"left\", \"left\",\n    \"down\", \"up\", \"left\", \"left\", \"left\", \"left\", \"left\", \"left\", \"down\", \"down\",\n    \"right\", \"right\", \"right\", \"right\", \"right\", \"right\", \"up\", \"down\", \"right\", \"right\",\n    \"right\", \"right\", \"right\", \"down\", \"down\", \"left\", \"left\", \"left\", \"left\", \"left\",\n    \"down\", \"up\", \"left\", \"left\", \"left\", \"left\", \"left\", \"left\",\n]\n\nfor direction in route:\n    if hero.door_at(direction):\n        hero.equip(1)\n        hero.unlock(direction)\n    while hero.enemy_at(direction):\n        if hero.health <= 6 and hero.potions > 0:\n            hero.equip(2)\n            hero.heal()\n        hero.equip(0)\n        hero.attack(direction)\n    hero.move(direction)\n    if hero.on_coin or hero.on_key or hero.on_potion:\n        hero.collect()\n",
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
      ],
      "requires_hotbar": true
    },
    "mapNote": "The movement plan is supplied. Hotbar slots are numbered 0\u20134; the cyan outline shows your selected slot. Watch the item in your hero's hand. Keys and potions use the supplies collected on the map.",
    "goals": [
      "Hold the sword before attacking, the key before unlocking, and the potion before healing.",
      "Collect every coin, defeat every guard, open every door, and reach the exit."
    ]
  },
  {
    "id": "5-hotbar-4",
    "week": 5,
    "stage": 4,
    "title": "Add a potion slot",
    "topic": "Lists",
    "teach": "append adds one item to the end of a list. A two-item list uses indexes 0 and 1; appending creates slot 2. Add the missing potion before loading your hotbar. The potion slot chooses what to hold; its x count shows how many collected potions you can use.",
    "example": "hotbar = [\"sword\"]\nhotbar.append(\"key\")\nprint(len(hotbar))  # 2 slots",
    "objective": "Use append to add a potion after the sword and key, so the supplied healing code can equip slot 2.",
    "hint": "Use hotbar.append(\"potion\") before loading the list. Adding a potion slot does not give you a free potion; collect supplies on the route.",
    "starter": "from hero_game import hero\n\nhotbar = [\"sword\", \"key\"]\n# Append the missing potion here.\n\nhero.set_hotbar(hotbar)\n\n# Movement is supplied. Focus on packing and choosing your items.\nroute = [\n    \"left\", \"left\", \"left\", \"left\", \"left\", \"up\", \"down\", \"left\", \"left\", \"left\",\n    \"left\", \"left\", \"down\", \"down\", \"right\", \"right\", \"right\", \"right\", \"right\", \"right\",\n    \"down\", \"up\", \"right\", \"right\", \"right\", \"right\", \"down\", \"down\", \"left\", \"left\",\n    \"left\", \"left\", \"left\", \"up\", \"down\", \"left\", \"left\", \"left\", \"left\", \"left\",\n    \"down\", \"down\", \"right\", \"right\", \"right\", \"right\", \"right\", \"right\", \"down\", \"up\",\n    \"right\", \"right\", \"right\", \"right\",\n]\n\nfor direction in route:\n    if hero.door_at(direction):\n        hero.equip(1)\n        hero.unlock(direction)\n    while hero.enemy_at(direction):\n        if hero.health <= 6 and hero.potions > 0:\n            hero.equip(2)\n            hero.heal()\n        hero.equip(0)\n        hero.attack(direction)\n    hero.move(direction)\n    if hero.on_coin or hero.on_key or hero.on_potion:\n        hero.collect()\n",
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
      ],
      "requires_hotbar": true
    },
    "mapNote": "The movement plan is supplied. Hotbar slots are numbered 0\u20134; the cyan outline shows your selected slot. Watch the item in your hero's hand. Keys and potions use the supplies collected on the map.",
    "goals": [
      "Hold the sword before attacking, the key before unlocking, and the potion before healing.",
      "Collect every coin, defeat every guard, open every door, and reach the exit."
    ]
  },
  {
    "id": "5-hotbar-5",
    "week": 5,
    "stage": 5,
    "title": "Fill and inspect the hotbar",
    "topic": "Lists",
    "teach": "extend adds every item from another list. len(hotbar) counts the filled slots. for slot in range(len(hotbar)) visits each valid index, so you can equip and inspect every item before setting off. A hotbar has room for at most five slots.",
    "example": "hotbar = [\"sword\"]\nsupplies = [\"key\", \"potion\"]\nhotbar.extend(supplies)\nhero.set_hotbar(hotbar)\nfor slot in range(len(hotbar)):\n    hero.equip(slot)",
    "objective": "Extend the sword-only hotbar with the supplies list. Watch the for loop equip each slot, then finish the route.",
    "hint": "Pass supplies to hotbar.extend before loading the hotbar. The preview loop uses indexes 0, 1, and 2 once the list is filled.",
    "starter": "from hero_game import hero\n\nhotbar = [\"sword\"]\nsupplies = [\"key\", \"potion\"]\n# Extend hotbar with supplies here.\n\nhero.set_hotbar(hotbar)\nfor slot in range(len(hotbar)):\n    hero.equip(slot)\n\n# Movement is supplied. Focus on packing and choosing your items.\nroute = [\n    \"right\", \"right\", \"right\", \"right\", \"right\", \"right\", \"down\", \"up\", \"right\", \"right\",\n    \"right\", \"right\", \"right\", \"up\", \"up\", \"left\", \"left\", \"left\", \"left\", \"left\",\n    \"up\", \"down\", \"left\", \"left\", \"left\", \"left\", \"left\", \"left\", \"up\", \"up\",\n    \"right\", \"right\", \"right\", \"right\", \"right\", \"right\", \"down\", \"up\", \"right\", \"right\",\n    \"right\", \"right\", \"right\", \"up\", \"up\", \"left\", \"left\", \"left\", \"left\", \"left\",\n    \"up\", \"down\", \"left\", \"left\", \"left\", \"left\", \"left\", \"left\",\n]\n\nfor direction in route:\n    if hero.door_at(direction):\n        hero.equip(1)\n        hero.unlock(direction)\n    while hero.enemy_at(direction):\n        if hero.health <= 6 and hero.potions > 0:\n            hero.equip(2)\n            hero.heal()\n        hero.equip(0)\n        hero.attack(direction)\n    hero.move(direction)\n    if hero.on_coin or hero.on_key or hero.on_potion:\n        hero.collect()\n",
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
      ],
      "requires_hotbar": true
    },
    "mapNote": "The movement plan is supplied. Hotbar slots are numbered 0\u20134; the cyan outline shows your selected slot. Watch the item in your hero's hand. Keys and potions use the supplies collected on the map.",
    "goals": [
      "Hold the sword before attacking, the key before unlocking, and the potion before healing.",
      "Collect every coin, defeat every guard, open every door, and reach the exit."
    ]
  },
  {
    "id": "5-hotbar-6",
    "week": 5,
    "stage": 6,
    "title": "Swap your loadout",
    "topic": "Lists",
    "teach": "A list can contain other lists. loadouts[section_index] chooses a complete hotbar for one hall. Each hotbar needs a sword, key, and potion, but their order can change. hotbar.index(\"sword\") finds the sword's current slot. The outer for loop changes loadouts, the inner for loop travels, and while keeps attacking until a guard is defeated.",
    "example": "loadouts = [\n    [\"sword\", \"key\", \"potion\"],\n    [\"potion\", \"sword\", \"key\"],\n]\nhotbar = loadouts[1]\nhero.set_hotbar(hotbar)\nhero.equip(hotbar.index(\"sword\"))",
    "objective": "Pack five hotbar lists, one for each hall. Include all three items in each list, and try changing their order between halls.",
    "hint": "Fill each inner [] with \"sword\", \"key\", and \"potion\". The supplied index lookups find the right slot even when you rearrange the items.",
    "starter": "from hero_game import hero\n\nloadouts = [\n    [],  # First hall\n    [],  # Second hall\n    [],  # Third hall\n    [],  # Fourth hall\n    [],  # Fifth hall\n]\n\n# Each supplied section is one hall and its side room.\nsections = [\n    [\"left\", \"left\", \"left\", \"left\", \"left\", \"left\", \"down\", \"up\", \"left\", \"left\", \"left\", \"left\", \"left\", \"left\", \"up\", \"up\"],\n    [\"right\", \"right\", \"right\", \"right\", \"right\", \"right\", \"right\", \"up\", \"down\", \"right\", \"right\", \"right\", \"right\", \"right\", \"up\", \"up\"],\n    [\"left\", \"left\", \"left\", \"left\", \"left\", \"left\", \"down\", \"up\", \"left\", \"left\", \"left\", \"left\", \"left\", \"left\", \"up\", \"up\"],\n    [\"right\", \"right\", \"right\", \"right\", \"right\", \"right\", \"right\", \"up\", \"down\", \"right\", \"right\", \"right\", \"right\", \"right\", \"up\", \"up\"],\n    [\"left\", \"left\", \"left\", \"left\", \"left\", \"left\", \"down\", \"up\", \"left\", \"left\", \"left\", \"left\", \"left\", \"left\"],\n]\n\nfor section_index in range(len(sections)):\n    hotbar = loadouts[section_index]\n    hero.set_hotbar(hotbar)\n    route = sections[section_index]\n    for direction in route:\n        if hero.door_at(direction):\n            hero.equip(hotbar.index(\"key\"))\n            hero.unlock(direction)\n        while hero.enemy_at(direction):\n            if hero.health <= 6 and hero.potions > 0:\n                hero.equip(hotbar.index(\"potion\"))\n                hero.heal()\n            hero.equip(hotbar.index(\"sword\"))\n            hero.attack(direction)\n        hero.move(direction)\n        if hero.on_coin or hero.on_key or hero.on_potion:\n            hero.collect()\n",
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
      ],
      "requires_hotbar": true
    },
    "mapNote": "The movement plan is supplied. Hotbar slots are numbered 0\u20134; the cyan outline shows your selected slot. Watch the item in your hero's hand. Keys and potions use the supplies collected on the map.",
    "goals": [
      "Hold the sword before attacking, the key before unlocking, and the potion before healing.",
      "Collect every coin, defeat every guard, open every door, and reach the exit."
    ]
  },
  {
    "id": "6-1",
    "week": 6,
    "stage": 1,
    "title": "Build a travel kit",
    "topic": "Functions",
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero. Keep a for loop inside travel for each step and a while loop for each guard. Use your Week 5 route lists to plan the calls.",
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
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero. Keep a for loop inside travel for each step and a while loop for each guard. Use your Week 5 route lists to plan the calls.",
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
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero. Keep a for loop inside travel for each step and a while loop for each guard. Use your Week 5 route lists to plan the calls.",
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
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero. Keep a for loop inside travel for each step and a while loop for each guard. Use your Week 5 route lists to plan the calls.",
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
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero. Keep a for loop inside travel for each step and a while loop for each guard. Use your Week 5 route lists to plan the calls.",
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
    "teach": "Make a travel function that takes a direction and a number of steps. It should deal with guards and doors as it goes. A second function can collect supplies and heal your hero. Keep a for loop inside travel for each step and a while loop for each guard. Use your Week 5 route lists to plan the calls.",
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
    "id": "8-1",
    "week": 7,
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
    "week": 7,
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
    "week": 7,
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
    "week": 7,
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
    "week": 7,
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
    "week": 7,
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
    "week": 8,
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
    "week": 8,
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
    "week": 8,
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
    "week": 8,
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
    "week": 8,
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
    "week": 8,
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
