// Source: http://stackoverflow.com/a/1830844
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function statBonus(statValue) {
    if(!isNumber(statValue)) {
        return null;
    }
    switch(+statValue) { // cast to number
        case 0:
            return "–";
            break;
        case 1:
            return -5;
            break;
        case 2:
            return -3;
            break;
        case 3:
            return 0;
            break;
        case 4:
            return 1;
            break;
        case 5:
            return 3;
            break;
        case 6:
            return 5;
            break;
        case 7:
            return 9;
            break;
        case 8:
            return 15;
            break;
        case 9:
            return 21;
            break;
        default:
            return null;
    }
}

function skillCost(skillRank) {
    if(!isNumber(skillRank) || skillRank < 0) {
        return null;
    }
    return (+skillRank * (+skillRank+1)) / 2;
}

var AppViewModel = {
    attribute_groups: [
        {
            name: "Physical",
            attributes: [
                { name: "Strength" },
                { name: "Endurance" },
                { name: "Agility" },
                { name: "Speed" }
            ]
        },
        {
            name: "Mental",
            attributes: [
                { name: "Willpower" },
                { name: "Insight" },
                { name: "Reasoning" },
                { name: "Perception" }
            ]
        },
        {
            name: "Social",
            attributes: [
                { name: "Presence" },
                { name: "Composure" },
                { name: "Manipulation" },
                { name: "Beauty" }
            ]
        }
    ],
    skill_groups: [
        {
            name: "Uncategorized",
            skills: [
                {
                    name: "Awareness",
                    primary_attributes: [
                        "Perception",
                        "Composure"
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Sense Motive",
                    primary_attributes: [
                        "Insight",
                        "Perception"
                    ],
                    secondary_attributes: [
                        "Reasoning",
                        "Composure"
                    ]
                },
                {
                    name: "Dodge",
                    primary_attributes: [
                        "Agility",
                        "Insight",
                        "Speed",
                        "Perception"
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Focus",
                    primary_attributes: [
                        "Willpower",
                        "Composure"
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Athletics",
            skills: [
                {
                    name: "Climb",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Jump",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Contort",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Swim",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Balance",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Acrobatics",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Armour",
            skills: [
                {
                    name: "Light Armour",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Medium Armour",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Heavy Armour",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Martial Arts",
            skills: [
                {
                    name: "Soft Fall",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Sweeping Throw",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Punches",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Kicks",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Locking Grip",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Subterfuge, Social",
            skills: [
                {
                    name: "Bluff",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Diplomacy",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Intimidate",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Seduce",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Disguise",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Subterfuge, Mechanical",
            skills: [
                {
                    name: "Forgery",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Open Lock",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Disable Trap",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Sneak",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Craft, Mechanical",
            skills: [
                {
                    name: "Locksmith",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Clockmaker",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Trapmaking",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Craft, Construction",
            skills: [
                {
                    name: "Carpentry",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Masonry",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Medicine",
            skills: [
                {
                    name: "Treat Wounds",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Herbalism",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Perform",
            skills: [
                {
                    name: "Music [instrument]",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Oratory",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Theatre",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Buffoonery",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Academics",
            skills: [
                {
                    name: "Knowledge (Religion)",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Knowledge (History)",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Knowledge (Anatomy)",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Knowledge (Magic)",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Blades",
            skills: [
                {
                    name: "Knife",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Short Sword",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Long Sword",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Greatsword",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Rapier",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Axe",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Greataxe",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Blunt",
            skills: [
                {
                    name: "Club",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Greatclub",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Flail",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Baton",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Sap",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Axe",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Greataxe",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Bows",
            skills: [
                {
                    name: "Footbow",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Longbow",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Shortbow",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Crossbow",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Thrown",
            skills: [
                {
                    name: "Knife",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Sling",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Spear",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Darts",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Shuriken",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Boomerang",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Bolas",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Polearms",
            skills: [
                {
                    name: "Halberd",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Spear",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Lance",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Quarterstaff",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Three-part Staff",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Flexible Weapons",
            skills: [
                {
                    name: "Rope Dart",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Chain",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Whip",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        },
        {
            name: "Animal Husbandry",
            skills: [
                {
                    name: "Handle Animal",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Ride",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                },
                {
                    name: "Animal Empathy",
                    primary_attributes: [
                    ],
                    secondary_attributes: [
                    ]
                }
            ]
        }
    ]
};

var mapping = {
    "attributes": {
        "create": function(options) {
            return new AttributesModel(options.data);
        }
    },
    "skills": {
        "create": function(options) {
            return new SkillsModel(options.data);
        }
    }
};

function AttributesModel(data) {
    ko.mapping.fromJS(data, {}, this);
    this.score = ko.observable();
    this.bonus = ko.computed(function() {
        return statBonus(this.score());
    }, this);
}

function SkillsModel(data) {
    ko.mapping.fromJS(data, {}, this);
    this.rank = ko.observable();
    this.cost = ko.computed(function() {
        return skillCost(this.rank());
    }, this);
}

// Activate knockout.js
var viewModel = ko.mapping.fromJS(AppViewModel, mapping);
ko.applyBindings(viewModel);

