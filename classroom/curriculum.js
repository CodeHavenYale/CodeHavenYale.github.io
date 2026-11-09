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
    "title": "Pick up. Index. Carry. Drop."
  },
  {
    "number": 6,
    "topic": "Review",
    "title": "The grand expedition"
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
    "title": "Your first index",
    "teach": "Your inventory is a Python list. It starts empty. Collecting an item adds it to the end, and the hotbar shows its position. The first item has index 0. Use square brackets to choose an item, then equip it to put it in your hand. A key disappears from the list when you use it.",
    "objective": "Pick up the red key, select it from your list, and carry it to the red door.",
    "goals": [
      "Collect the red key.",
      "Use the first item in your inventory to open the red door.",
      "Finish on the green exit marked E."
    ],
    "hint": "The small number above a hotbar slot is its index. The first index is 0, not 1. Your editor starts empty; hero is already available. Open the command reference if you need the syntax.",
    "world": {
      "width": 9,
      "height": 7,
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
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        7,
        3
      ],
      "coins": [],
      "enemies": [],
      "potions": [],
      "keys": [
        [
          2,
          3
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
          "x": 2,
          "y": 3,
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
      "items": [],
      "deliveries": [],
      "requires_hotbar": true,
      "inventory_mode": true
    },
    "id": "5-inventory-1",
    "week": 5,
    "stage": 1,
    "topic": "Lists",
    "starter": "",
    "example": "",
    "mapNote": "Your editor and inventory start empty. Collect \u2192 select by index \u2192 carry \u2192 use or drop. Outlined colored squares are delivery pads; E is the exit."
  },
  {
    "title": "Choose it, carry it, drop it",
    "teach": "Items stay in pickup order. With two items, index 0 is the first and index 1 is the second. Equipping selects an item without removing it. Walking carries everything in your inventory. Dropping places the held item on your current tile and removes it from the list.",
    "objective": "Collect both gems and carry each one to its matching outlined pad.",
    "goals": [
      "Drop the blue gem on the blue pad.",
      "Drop the red gem on the red pad.",
      "Finish on the green exit marked E."
    ],
    "hint": "Check the hotbar before choosing an index. Stand on a pad and drop the gem you are holding. A delivered gem must stay on its pad.",
    "world": {
      "width": 10,
      "height": 7,
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
          2
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
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        8,
        3
      ],
      "coins": [],
      "enemies": [],
      "potions": [],
      "keys": [],
      "doors": [],
      "key_colors": [],
      "door_colors": [],
      "items": [
        {
          "x": 2,
          "y": 3,
          "item": "red gem"
        },
        {
          "x": 4,
          "y": 3,
          "item": "blue gem"
        }
      ],
      "deliveries": [
        {
          "x": 6,
          "y": 2,
          "item": "blue gem"
        },
        {
          "x": 6,
          "y": 4,
          "item": "red gem"
        }
      ],
      "requires_hotbar": true,
      "inventory_mode": true
    },
    "id": "5-inventory-2",
    "week": 5,
    "stage": 2,
    "topic": "Lists",
    "starter": "",
    "example": "",
    "mapNote": "Your editor and inventory start empty. Collect \u2192 select by index \u2192 carry \u2192 use or drop. Outlined colored squares are delivery pads; E is the exit."
  },
  {
    "title": "Watch the indexes shift",
    "teach": "A list closes the gap when an item is removed. If you use the item at index 0, the next item becomes index 0. Keys are real inventory items: choose the matching color, use it once, then check the list again before selecting the next key.",
    "objective": "Two keys, two doors. Choose the key for each door using its current list index.",
    "goals": [
      "Collect both keys.",
      "Open the blue door and the red door with matching held keys.",
      "Finish on the green exit marked E."
    ],
    "hint": "After you use the first key, the second key moves into its place. Check the hotbar again; a slot number is a position, not a permanent item label.",
    "world": {
      "width": 10,
      "height": 7,
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
          8,
          3
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        8,
        3
      ],
      "coins": [],
      "enemies": [],
      "potions": [],
      "keys": [
        [
          2,
          3
        ],
        [
          3,
          3
        ]
      ],
      "doors": [
        [
          5,
          3
        ],
        [
          7,
          3
        ]
      ],
      "key_colors": [
        {
          "x": 2,
          "y": 3,
          "color": "red"
        },
        {
          "x": 3,
          "y": 3,
          "color": "blue"
        }
      ],
      "door_colors": [
        {
          "x": 5,
          "y": 3,
          "color": "red"
        },
        {
          "x": 7,
          "y": 3,
          "color": "blue"
        }
      ],
      "items": [],
      "deliveries": [],
      "requires_hotbar": true,
      "inventory_mode": true
    },
    "id": "5-inventory-3",
    "week": 5,
    "stage": 3,
    "topic": "Lists",
    "starter": "",
    "example": "",
    "mapNote": "Your editor and inventory start empty. Collect \u2192 select by index \u2192 carry \u2192 use or drop. Outlined colored squares are delivery pads; E is the exit."
  },
  {
    "title": "Drop it. Pick it up again.",
    "teach": "Dropping removes an item from your list, but it stays on the map. Collecting it again adds it to the end. You can change the order of your inventory by putting an item down and picking it back up. Read the current list after each change.",
    "objective": "Finish with two gems in this order: blue first, red second.",
    "goals": [
      "Carry the blue gem at index 0 and the red gem at index 1.",
      "Finish on the green exit marked E with both gems in your inventory."
    ],
    "hint": "If red is first, think about what happens to blue when you drop red. Where will red go when you pick it up again?",
    "world": {
      "width": 10,
      "height": 7,
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
          8,
          3
        ]
      ],
      "start": [
        1,
        3
      ],
      "exit": [
        8,
        3
      ],
      "coins": [],
      "enemies": [],
      "potions": [],
      "keys": [],
      "doors": [],
      "key_colors": [],
      "door_colors": [],
      "items": [
        {
          "x": 2,
          "y": 3,
          "item": "red gem"
        },
        {
          "x": 3,
          "y": 3,
          "item": "blue gem"
        }
      ],
      "deliveries": [],
      "requires_hotbar": true,
      "inventory_mode": true,
      "inventory_goal": [
        "blue gem",
        "red gem"
      ]
    },
    "id": "5-inventory-4",
    "week": 5,
    "stage": 4,
    "topic": "Lists",
    "starter": "",
    "example": "",
    "mapNote": "Your editor and inventory start empty. Collect \u2192 select by index \u2192 carry \u2192 use or drop. Outlined colored squares are delivery pads; E is the exit."
  },
  {
    "title": "Make room for the key",
    "teach": "The hotbar holds five items, at indexes 0 through 4. The length of a list is its item count, so a full inventory has length 5 but no index 5. A temporary drop can free a slot. Remember where you left an item and collect it again when there is room.",
    "objective": "Get five gems through the locked door and deliver them to their matching pads.",
    "goals": [
      "Open the gold door with its key.",
      "Drop all five gems on their matching colored pads.",
      "Finish on the green exit marked E."
    ],
    "hint": "You cannot carry five gems and a key at the same time. Using the key frees a slot. You choose which item to leave behind and when to return for it.",
    "world": {
      "width": 13,
      "height": 7,
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
        3
      ],
      "exit": [
        11,
        3
      ],
      "coins": [],
      "enemies": [],
      "potions": [],
      "keys": [
        [
          7,
          3
        ]
      ],
      "doors": [
        [
          8,
          3
        ]
      ],
      "key_colors": [
        {
          "x": 7,
          "y": 3,
          "color": "gold"
        }
      ],
      "door_colors": [
        {
          "x": 8,
          "y": 3,
          "color": "gold"
        }
      ],
      "items": [
        {
          "x": 2,
          "y": 3,
          "item": "red gem"
        },
        {
          "x": 3,
          "y": 3,
          "item": "blue gem"
        },
        {
          "x": 4,
          "y": 3,
          "item": "green gem"
        },
        {
          "x": 5,
          "y": 3,
          "item": "purple gem"
        },
        {
          "x": 6,
          "y": 3,
          "item": "gold gem"
        }
      ],
      "deliveries": [
        {
          "x": 7,
          "y": 5,
          "item": "red gem"
        },
        {
          "x": 8,
          "y": 5,
          "item": "blue gem"
        },
        {
          "x": 9,
          "y": 5,
          "item": "green gem"
        },
        {
          "x": 10,
          "y": 5,
          "item": "purple gem"
        },
        {
          "x": 11,
          "y": 5,
          "item": "gold gem"
        }
      ],
      "requires_hotbar": true,
      "inventory_mode": true
    },
    "id": "5-inventory-5",
    "week": 5,
    "stage": 5,
    "topic": "Lists",
    "starter": "",
    "example": "",
    "mapNote": "Your editor and inventory start empty. Collect \u2192 select by index \u2192 carry \u2192 use or drop. Outlined colored squares are delivery pads; E is the exit."
  },
  {
    "title": "The inventory expedition",
    "teach": "Put it together: collect tools, select items by index, carry gems, and drop them on their pads. A sword stays in the list after an attack. A matching key or a potion is used up, so later indexes shift. Check your current inventory before every selection.",
    "objective": "Bring both gems through the guarded rooms and deliver them. Manage the changing list yourself.",
    "goals": [
      "Open both colored doors with matching held keys.",
      "Defeat the guard using the collected sword.",
      "Drop the blue and red gems on their matching pads.",
      "Finish alive on the green exit marked E."
    ],
    "hint": "You can inspect the list or its length in the output. Select a new item after using or dropping the held one. The sword is reusable; a potion restores health only after you have taken damage.",
    "world": {
      "width": 13,
      "height": 7,
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
          3
        ],
        [
          4,
          1
        ],
        [
          4,
          2
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
          6,
          5
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
          2
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
      "coins": [],
      "enemies": [
        {
          "x": 7,
          "y": 3,
          "health": 9
        }
      ],
      "potions": [
        [
          3,
          3
        ]
      ],
      "keys": [
        [
          4,
          3
        ],
        [
          6,
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
          "x": 4,
          "y": 3,
          "color": "red"
        },
        {
          "x": 6,
          "y": 5,
          "color": "blue"
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
      "items": [
        {
          "x": 2,
          "y": 3,
          "item": "sword"
        },
        {
          "x": 4,
          "y": 1,
          "item": "blue gem"
        },
        {
          "x": 8,
          "y": 3,
          "item": "red gem"
        }
      ],
      "deliveries": [
        {
          "x": 10,
          "y": 2,
          "item": "blue gem"
        },
        {
          "x": 10,
          "y": 4,
          "item": "red gem"
        }
      ],
      "requires_hotbar": true,
      "inventory_mode": true
    },
    "id": "5-inventory-6",
    "week": 5,
    "stage": 6,
    "topic": "Lists",
    "starter": "",
    "example": "",
    "mapNote": "Your editor and inventory start empty. Collect \u2192 select by index \u2192 carry \u2192 use or drop. Outlined colored squares are delivery pads; E is the exit."
  },
  {
    "id": "6-review-1",
    "week": 6,
    "stage": 1,
    "topic": "Review",
    "title": "The grand expedition",
    "teach": "Bring together Weeks 1\u20135: plan sequences before opening gates; save A, B and C in separate variables and reuse them; check guards and health with conditionals; repeat alcoves, battles and staircases with for and while loops; select, carry and deliver real items using list indexes. Guard health and sign codes change each run. No new Python topics are needed.",
    "example": "",
    "starter": "",
    "objective": "One enormous 49 \u00d7 33 map. Nine connected districts. One program that finishes the entire expedition.",
    "hint": "Read the whole map before coding. Follow the districts across the top, back across the middle, then across the bottom. Save each sign before leaving its side passage. Keep the sword; make room before picking up a key. Used and dropped items shift later indexes. Check hero.enemy_at(direction) before attacking again. The same code must work when guard health and sign values change.",
    "mapNote": "Use Whole map to plan; Follow hero for readable detail. Arrow buttons explore without moving your hero. Signs A\u2013C supply door codes: I & IV use A, II & VI use B, III & V use C. Colored S switches open matching bars.",
    "goals": [
      "Collect all 35 coins, including the side treasuries.",
      "Read three signs and open all six code doors using the saved values.",
      "Open six colored key doors and activate all three switches.",
      "Defeat all six guards and survive; each starts with 3, 6 or 9 health.",
      "Deliver red, blue and green gems to their matching pads. Manage the five inventory slots.",
      "Reach the exit in district 9. Review sequences, variables, conditionals, loops and lists."
    ],
    "world": {
      "width": 49,
      "height": 33,
      "start": [
        1,
        5
      ],
      "exit": [
        47,
        27
      ],
      "path": [
        [
          1,
          5
        ],
        [
          1,
          16
        ],
        [
          1,
          17
        ],
        [
          1,
          18
        ],
        [
          1,
          19
        ],
        [
          1,
          20
        ],
        [
          1,
          21
        ],
        [
          1,
          22
        ],
        [
          1,
          23
        ],
        [
          1,
          24
        ],
        [
          1,
          25
        ],
        [
          1,
          26
        ],
        [
          1,
          27
        ],
        [
          2,
          5
        ],
        [
          2,
          16
        ],
        [
          2,
          27
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
          3,
          16
        ],
        [
          3,
          23
        ],
        [
          3,
          24
        ],
        [
          3,
          25
        ],
        [
          3,
          26
        ],
        [
          3,
          27
        ],
        [
          4,
          5
        ],
        [
          4,
          16
        ],
        [
          4,
          27
        ],
        [
          5,
          5
        ],
        [
          5,
          16
        ],
        [
          5,
          27
        ],
        [
          6,
          1
        ],
        [
          6,
          2
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
          6,
          5
        ],
        [
          6,
          12
        ],
        [
          6,
          13
        ],
        [
          6,
          14
        ],
        [
          6,
          15
        ],
        [
          6,
          16
        ],
        [
          6,
          27
        ],
        [
          6,
          28
        ],
        [
          6,
          29
        ],
        [
          6,
          30
        ],
        [
          6,
          31
        ],
        [
          7,
          5
        ],
        [
          7,
          16
        ],
        [
          7,
          27
        ],
        [
          8,
          5
        ],
        [
          8,
          16
        ],
        [
          8,
          27
        ],
        [
          9,
          5
        ],
        [
          9,
          16
        ],
        [
          9,
          27
        ],
        [
          10,
          5
        ],
        [
          10,
          12
        ],
        [
          10,
          13
        ],
        [
          10,
          14
        ],
        [
          10,
          15
        ],
        [
          10,
          16
        ],
        [
          10,
          27
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
          11,
          8
        ],
        [
          11,
          9
        ],
        [
          11,
          16
        ],
        [
          11,
          27
        ],
        [
          12,
          5
        ],
        [
          12,
          16
        ],
        [
          12,
          27
        ],
        [
          13,
          5
        ],
        [
          13,
          16
        ],
        [
          13,
          23
        ],
        [
          13,
          24
        ],
        [
          13,
          25
        ],
        [
          13,
          26
        ],
        [
          13,
          27
        ],
        [
          14,
          5
        ],
        [
          14,
          12
        ],
        [
          14,
          13
        ],
        [
          14,
          14
        ],
        [
          14,
          15
        ],
        [
          14,
          16
        ],
        [
          14,
          27
        ],
        [
          15,
          5
        ],
        [
          15,
          16
        ],
        [
          15,
          27
        ],
        [
          16,
          5
        ],
        [
          16,
          16
        ],
        [
          16,
          27
        ],
        [
          17,
          5
        ],
        [
          17,
          16
        ],
        [
          17,
          27
        ],
        [
          17,
          28
        ],
        [
          17,
          29
        ],
        [
          17,
          30
        ],
        [
          17,
          31
        ],
        [
          18,
          5
        ],
        [
          18,
          16
        ],
        [
          18,
          27
        ],
        [
          19,
          1
        ],
        [
          19,
          2
        ],
        [
          19,
          3
        ],
        [
          19,
          4
        ],
        [
          19,
          5
        ],
        [
          19,
          16
        ],
        [
          19,
          23
        ],
        [
          19,
          24
        ],
        [
          19,
          25
        ],
        [
          19,
          26
        ],
        [
          19,
          27
        ],
        [
          20,
          5
        ],
        [
          20,
          16
        ],
        [
          20,
          17
        ],
        [
          20,
          18
        ],
        [
          20,
          19
        ],
        [
          20,
          20
        ],
        [
          20,
          23
        ],
        [
          21,
          5
        ],
        [
          21,
          16
        ],
        [
          21,
          23
        ],
        [
          21,
          24
        ],
        [
          21,
          25
        ],
        [
          21,
          26
        ],
        [
          21,
          27
        ],
        [
          22,
          1
        ],
        [
          22,
          2
        ],
        [
          22,
          3
        ],
        [
          22,
          4
        ],
        [
          22,
          5
        ],
        [
          22,
          16
        ],
        [
          22,
          27
        ],
        [
          23,
          5
        ],
        [
          23,
          12
        ],
        [
          23,
          13
        ],
        [
          23,
          14
        ],
        [
          23,
          15
        ],
        [
          23,
          16
        ],
        [
          23,
          23
        ],
        [
          23,
          24
        ],
        [
          23,
          25
        ],
        [
          23,
          26
        ],
        [
          23,
          27
        ],
        [
          24,
          5
        ],
        [
          24,
          16
        ],
        [
          24,
          23
        ],
        [
          25,
          1
        ],
        [
          25,
          2
        ],
        [
          25,
          3
        ],
        [
          25,
          4
        ],
        [
          25,
          5
        ],
        [
          25,
          16
        ],
        [
          25,
          23
        ],
        [
          25,
          24
        ],
        [
          25,
          25
        ],
        [
          25,
          26
        ],
        [
          25,
          27
        ],
        [
          26,
          5
        ],
        [
          26,
          16
        ],
        [
          26,
          17
        ],
        [
          26,
          18
        ],
        [
          26,
          19
        ],
        [
          26,
          20
        ],
        [
          26,
          27
        ],
        [
          27,
          5
        ],
        [
          27,
          16
        ],
        [
          27,
          23
        ],
        [
          27,
          24
        ],
        [
          27,
          25
        ],
        [
          27,
          26
        ],
        [
          27,
          27
        ],
        [
          28,
          1
        ],
        [
          28,
          2
        ],
        [
          28,
          3
        ],
        [
          28,
          4
        ],
        [
          28,
          5
        ],
        [
          28,
          16
        ],
        [
          28,
          23
        ],
        [
          29,
          5
        ],
        [
          29,
          12
        ],
        [
          29,
          13
        ],
        [
          29,
          14
        ],
        [
          29,
          15
        ],
        [
          29,
          16
        ],
        [
          29,
          23
        ],
        [
          29,
          24
        ],
        [
          29,
          25
        ],
        [
          29,
          26
        ],
        [
          29,
          27
        ],
        [
          29,
          28
        ],
        [
          29,
          29
        ],
        [
          29,
          30
        ],
        [
          29,
          31
        ],
        [
          30,
          5
        ],
        [
          30,
          16
        ],
        [
          30,
          27
        ],
        [
          31,
          1
        ],
        [
          31,
          2
        ],
        [
          31,
          3
        ],
        [
          31,
          4
        ],
        [
          31,
          5
        ],
        [
          31,
          16
        ],
        [
          31,
          27
        ],
        [
          32,
          5
        ],
        [
          32,
          16
        ],
        [
          32,
          27
        ],
        [
          33,
          5
        ],
        [
          33,
          16
        ],
        [
          33,
          27
        ],
        [
          34,
          5
        ],
        [
          34,
          16
        ],
        [
          34,
          27
        ],
        [
          35,
          5
        ],
        [
          35,
          16
        ],
        [
          35,
          27
        ],
        [
          36,
          5
        ],
        [
          36,
          12
        ],
        [
          36,
          16
        ],
        [
          36,
          17
        ],
        [
          36,
          18
        ],
        [
          36,
          19
        ],
        [
          36,
          20
        ],
        [
          36,
          23
        ],
        [
          36,
          27
        ],
        [
          37,
          5
        ],
        [
          37,
          12
        ],
        [
          37,
          16
        ],
        [
          37,
          23
        ],
        [
          37,
          27
        ],
        [
          38,
          5
        ],
        [
          38,
          12
        ],
        [
          38,
          16
        ],
        [
          38,
          23
        ],
        [
          38,
          27
        ],
        [
          39,
          5
        ],
        [
          39,
          12
        ],
        [
          39,
          16
        ],
        [
          39,
          23
        ],
        [
          39,
          27
        ],
        [
          40,
          5
        ],
        [
          40,
          12
        ],
        [
          40,
          16
        ],
        [
          40,
          23
        ],
        [
          40,
          27
        ],
        [
          41,
          1
        ],
        [
          41,
          5
        ],
        [
          41,
          12
        ],
        [
          41,
          16
        ],
        [
          41,
          23
        ],
        [
          41,
          27
        ],
        [
          42,
          1
        ],
        [
          42,
          5
        ],
        [
          42,
          12
        ],
        [
          42,
          13
        ],
        [
          42,
          14
        ],
        [
          42,
          15
        ],
        [
          42,
          16
        ],
        [
          42,
          23
        ],
        [
          42,
          24
        ],
        [
          42,
          25
        ],
        [
          42,
          26
        ],
        [
          42,
          27
        ],
        [
          43,
          1
        ],
        [
          43,
          5
        ],
        [
          43,
          16
        ],
        [
          43,
          27
        ],
        [
          44,
          1
        ],
        [
          44,
          5
        ],
        [
          44,
          16
        ],
        [
          44,
          27
        ],
        [
          45,
          1
        ],
        [
          45,
          5
        ],
        [
          45,
          16
        ],
        [
          45,
          17
        ],
        [
          45,
          18
        ],
        [
          45,
          19
        ],
        [
          45,
          20
        ],
        [
          45,
          27
        ],
        [
          46,
          1
        ],
        [
          46,
          5
        ],
        [
          46,
          16
        ],
        [
          46,
          27
        ],
        [
          47,
          1
        ],
        [
          47,
          2
        ],
        [
          47,
          3
        ],
        [
          47,
          4
        ],
        [
          47,
          5
        ],
        [
          47,
          6
        ],
        [
          47,
          7
        ],
        [
          47,
          8
        ],
        [
          47,
          9
        ],
        [
          47,
          10
        ],
        [
          47,
          11
        ],
        [
          47,
          12
        ],
        [
          47,
          13
        ],
        [
          47,
          14
        ],
        [
          47,
          15
        ],
        [
          47,
          16
        ],
        [
          47,
          27
        ]
      ],
      "coins": [
        [
          3,
          1
        ],
        [
          6,
          1
        ],
        [
          11,
          9
        ],
        [
          15,
          5
        ],
        [
          19,
          1
        ],
        [
          22,
          1
        ],
        [
          25,
          1
        ],
        [
          28,
          1
        ],
        [
          31,
          1
        ],
        [
          37,
          5
        ],
        [
          41,
          5
        ],
        [
          45,
          5
        ],
        [
          41,
          1
        ],
        [
          45,
          20
        ],
        [
          36,
          12
        ],
        [
          36,
          20
        ],
        [
          29,
          12
        ],
        [
          26,
          20
        ],
        [
          23,
          12
        ],
        [
          20,
          20
        ],
        [
          11,
          16
        ],
        [
          7,
          16
        ],
        [
          3,
          16
        ],
        [
          3,
          23
        ],
        [
          6,
          31
        ],
        [
          13,
          23
        ],
        [
          17,
          31
        ],
        [
          19,
          23
        ],
        [
          21,
          27
        ],
        [
          23,
          23
        ],
        [
          25,
          27
        ],
        [
          27,
          23
        ],
        [
          29,
          27
        ],
        [
          36,
          23
        ],
        [
          46,
          27
        ]
      ],
      "keys": [
        [
          3,
          1
        ],
        [
          45,
          20
        ],
        [
          14,
          12
        ],
        [
          10,
          12
        ],
        [
          6,
          12
        ],
        [
          17,
          31
        ]
      ],
      "doors": [
        [
          8,
          5
        ],
        [
          39,
          16
        ],
        [
          13,
          16
        ],
        [
          9,
          16
        ],
        [
          5,
          16
        ],
        [
          39,
          27
        ]
      ],
      "potions": [
        [
          33,
          5
        ],
        [
          20,
          20
        ],
        [
          15,
          27
        ],
        [
          36,
          23
        ]
      ],
      "enemies": [
        {
          "x": 36,
          "y": 5,
          "health": 9
        },
        {
          "x": 40,
          "y": 5,
          "health": 9
        },
        {
          "x": 44,
          "y": 5,
          "health": 9
        },
        {
          "x": 11,
          "y": 27,
          "health": 9
        },
        {
          "x": 36,
          "y": 27,
          "health": 9
        },
        {
          "x": 45,
          "y": 27,
          "health": 9
        }
      ],
      "key_colors": [
        {
          "x": 3,
          "y": 1,
          "color": "red"
        },
        {
          "x": 45,
          "y": 20,
          "color": "blue"
        },
        {
          "x": 14,
          "y": 12,
          "color": "gold"
        },
        {
          "x": 10,
          "y": 12,
          "color": "gold"
        },
        {
          "x": 6,
          "y": 12,
          "color": "gold"
        },
        {
          "x": 17,
          "y": 31,
          "color": "gold"
        }
      ],
      "door_colors": [
        {
          "x": 8,
          "y": 5,
          "color": "red"
        },
        {
          "x": 39,
          "y": 16,
          "color": "blue"
        },
        {
          "x": 13,
          "y": 16,
          "color": "gold"
        },
        {
          "x": 9,
          "y": 16,
          "color": "gold"
        },
        {
          "x": 5,
          "y": 16,
          "color": "gold"
        },
        {
          "x": 39,
          "y": 27,
          "color": "gold"
        }
      ],
      "switches": [
        {
          "x": 11,
          "y": 9,
          "color": "red"
        },
        {
          "x": 36,
          "y": 20,
          "color": "green"
        },
        {
          "x": 13,
          "y": 23,
          "color": "purple"
        }
      ],
      "gates": [
        {
          "x": 14,
          "y": 5,
          "color": "red"
        },
        {
          "x": 1,
          "y": 16,
          "color": "green"
        },
        {
          "x": 41,
          "y": 27,
          "color": "purple"
        }
      ],
      "number_clues": [
        {
          "x": 6,
          "y": 1,
          "label": "A"
        },
        {
          "x": 31,
          "y": 1,
          "label": "B"
        },
        {
          "x": 36,
          "y": 12,
          "label": "C"
        }
      ],
      "code_doors": [
        {
          "x": 30,
          "y": 5,
          "label": "I",
          "formula": "A",
          "terms": [
            {
              "clue": "A"
            }
          ]
        },
        {
          "x": 34,
          "y": 16,
          "label": "II",
          "formula": "B",
          "terms": [
            {
              "clue": "B"
            }
          ]
        },
        {
          "x": 18,
          "y": 16,
          "label": "III",
          "formula": "C",
          "terms": [
            {
              "clue": "C"
            }
          ]
        },
        {
          "x": 9,
          "y": 27,
          "label": "IV",
          "formula": "A",
          "terms": [
            {
              "clue": "A"
            }
          ]
        },
        {
          "x": 30,
          "y": 27,
          "label": "V",
          "formula": "C",
          "terms": [
            {
              "clue": "C"
            }
          ]
        },
        {
          "x": 43,
          "y": 27,
          "label": "VI",
          "formula": "B",
          "terms": [
            {
              "clue": "B"
            }
          ]
        }
      ],
      "items": [
        {
          "x": 2,
          "y": 5,
          "item": "sword"
        },
        {
          "x": 29,
          "y": 12,
          "item": "red gem"
        },
        {
          "x": 26,
          "y": 20,
          "item": "blue gem"
        },
        {
          "x": 23,
          "y": 12,
          "item": "green gem"
        }
      ],
      "deliveries": [
        {
          "x": 3,
          "y": 23,
          "item": "red gem"
        },
        {
          "x": 6,
          "y": 31,
          "item": "blue gem"
        },
        {
          "x": 29,
          "y": 31,
          "item": "green gem"
        }
      ],
      "regions": [
        {
          "name": "1. Supply courtyard",
          "x": 1,
          "y": 1,
          "width": 15,
          "height": 9
        },
        {
          "name": "2. Coin cloister",
          "x": 17,
          "y": 1,
          "width": 15,
          "height": 9
        },
        {
          "name": "3. Guard walk",
          "x": 33,
          "y": 1,
          "width": 15,
          "height": 9
        },
        {
          "name": "4. Blue archives",
          "x": 33,
          "y": 12,
          "width": 15,
          "height": 9
        },
        {
          "name": "5. Gem depot",
          "x": 17,
          "y": 12,
          "width": 15,
          "height": 9
        },
        {
          "name": "6. Three lock passage",
          "x": 1,
          "y": 12,
          "width": 15,
          "height": 9
        },
        {
          "name": "7. Relay gardens",
          "x": 1,
          "y": 23,
          "width": 15,
          "height": 9
        },
        {
          "name": "8. Vault stairs",
          "x": 17,
          "y": 23,
          "width": 15,
          "height": 9
        },
        {
          "name": "9. The citadel",
          "x": 33,
          "y": 23,
          "width": 15,
          "height": 9
        }
      ],
      "requires_hotbar": true,
      "inventory_mode": true,
      "large_map": true,
      "max_turns": 1800,
      "enemy_health_choices": [
        3,
        6,
        9
      ]
    }
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
