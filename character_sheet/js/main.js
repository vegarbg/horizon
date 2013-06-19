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
                        "Strength",
                        "Endurance"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Speed"
                    ]
                },
                {
                    name: "Jump",
                    primary_attributes: [
                        "Strength",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Endurance"
                    ]
                },
                {
                    name: "Contort",
                    primary_attributes: [
                        "Agility",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Endurance"
                    ]
                },
                {
                    name: "Swim",
                    primary_attributes: [
                        "Agility",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Endurance"
                    ]
                },
                {
                    name: "Balance",
                    primary_attributes: [
                        "Agility",
                        "Composure"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Endurance"
                    ]
                },
                {
                    name: "Acrobatics",
                    primary_attributes: [
                        "Agility",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Endurance"
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
                        "Agility",
                        "Speed"
                    ],
                    secondary_attributes: [
                        "Strength",
                        "Endurance"
                    ]
                },
                {
                    name: "Medium Armour",
                    primary_attributes: [
                        "Strength",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Endurance"
                    ]
                },
                {
                    name: "Heavy Armour",
                    primary_attributes: [
                        "Strength",
                        "Endurance"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Speed"
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
                        "Agility",
                        "Awareness"
                    ],
                    secondary_attributes: [
                        "Strength",
                        "Speed",
                        "Insight",
                        "Perception",
                        "Endurance"
                    ]
                },
                {
                    name: "Sweeping Throw",
                    primary_attributes: [
                        "Agility",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Insight",
                        "Perception",
                        "Endurance"
                    ]
                },
                {
                    name: "Punches",
                    primary_attributes: [
                        "Strength",
                        "Speed"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Insight",
                        "Perception",
                        "Endurance"
                    ]
                },
                {
                    name: "Kicks",
                    primary_attributes: [
                        "Strength",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Insight",
                        "Perception",
                        "Endurance"
                    ]
                },
                {
                    name: "Locking Grip",
                    primary_attributes: [
                        "Agility",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Insight",
                        "Perception",
                        "Endurance"
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
                        "Manipulation",
                        "Presence"
                    ],
                    secondary_attributes: [
                        "Insight",
                        "Composure",
                        "Beauty"
                    ]
                },
                {
                    name: "Diplomacy",
                    primary_attributes: [
                        "Insight",
                        "Composure"
                    ],
                    secondary_attributes: [
                        "Presence",
                        "Manipulation",
                        "Beauty"
                    ]
                },
                {
                    name: "Intimidate",
                    primary_attributes: [
                        "Presence",
                        "Manipulation"
                    ],
                    secondary_attributes: [
                        "Insight",
                        "Composure",
                        "Beauty"
                    ]
                },
                {
                    name: "Seduce",
                    primary_attributes: [
                        "Presence",
                        "Beauty"
                    ],
                    secondary_attributes: [
                        "Insight",
                        "Manipulation",
                        "Composure"
                    ]
                },
                {
                    name: "Disguise",
                    primary_attributes: [
                        "Presence",
                        "Insight"
                    ],
                    secondary_attributes: [
                        "Manipulation",
                        "Composure",
                        "Beauty"
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
                        "Perception",
                        "Insight"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Reasoning",
                        "Composure"
                    ]
                },
                {
                    name: "Open Lock",
                    primary_attributes: [
                        "Perception",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Reasoning",
                        "Composure"
                    ]
                },
                {
                    name: "Disable Trap",
                    primary_attributes: [
                        "Agility",
                        "Reasoning"
                    ],
                    secondary_attributes: [
                        "Perception",
                        "Composure"
                    ]
                },
                {
                    name: "Sneak",
                    primary_attributes: [
                        "Agility",
                        "Perception"
                    ],
                    secondary_attributes: [
                        "Reasoning",
                        "Composure"
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
                        "Agility",
                        "Reasoning"
                    ],
                    secondary_attributes: [
                        "Insight",
                        "Perception"
                    ]
                },
                {
                    name: "Clockmaker",
                    primary_attributes: [
                        "Agility",
                        "Perception"
                    ],
                    secondary_attributes: [
                        "Insight",
                        "Reasoning"
                    ]
                },
                {
                    name: "Trapmaking",
                    primary_attributes: [
                        "Reasoning",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Insight",
                        "Perception"
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
                        "Endurance",
                        "Reasoning"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Insight"
                    ]
                },
                {
                    name: "Masonry",
                    primary_attributes: [
                        "Endurance",
                        "Reasoning"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Insight"
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
                        "Insight",
                        "Composure"
                    ],
                    secondary_attributes: [
                        "Reasoning"
                    ]
                },
                {
                    name: "Herbalism",
                    primary_attributes: [
                        "Reasoning",
                        "Intuition"
                    ],
                    secondary_attributes: [
                        "Composure"
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
                        "Presence",
                        "Insight"
                    ],
                    secondary_attributes: [
                        "Manipulation",
                        "Agility",
                        "Composure",
                        "Beauty"
                    ]
                },
                {
                    name: "Oratory",
                    primary_attributes: [
                        "Presence",
                        "Composure"
                    ],
                    secondary_attributes: [
                        "Manipulation",
                        "Agility",
                        "Insight",
                        "Beauty"
                    ]
                },
                {
                    name: "Theatre",
                    primary_attributes: [
                        "Composure",
                        "Presence"
                    ],
                    secondary_attributes: [
                        "Manipulation",
                        "Agility",
                        "Insight",
                        "Beauty"
                    ]
                },
                {
                    name: "Buffoonery",
                    primary_attributes: [
                        "Agility",
                        "Presence"
                    ],
                    secondary_attributes: [
                        "Manipulation",
                        "Insight",
                        "Composure",
                        "Beauty"
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
                        "Intuition",
                        "Reasoning"
                    ],
                    secondary_attributes: [
                        "Perception"
                    ]
                },
                {
                    name: "Knowledge (History)",
                    primary_attributes: [
                        "Intuition",
                        "Reasoning"
                    ],
                    secondary_attributes: [
                        "Perception"
                    ]
                },
                {
                    name: "Knowledge (Anatomy)",
                    primary_attributes: [
                        "Intuition",
                        "Reasoning"
                    ],
                    secondary_attributes: [
                        "Perception"
                    ]
                },
                {
                    name: "Knowledge (Magic)",
                    primary_attributes: [
                        "Intuition",
                        "Reasoning"
                    ],
                    secondary_attributes: [
                        "Perception"
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
                        "Speed",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Strength",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Short Sword",
                    primary_attributes: [
                        "Speed",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Long Sword",
                    primary_attributes: [
                        "Strength",
                        "Speed"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Greatsword",
                    primary_attributes: [
                        "Strength",
                        "Endurance"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Speed",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Rapier",
                    primary_attributes: [
                        "Agility",
                        "Speed"
                    ],
                    secondary_attributes: [
                        "Strength",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Axe",
                    primary_attributes: [
                        "Strength",
                        "Speed"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Greataxe",
                    primary_attributes: [
                        "Strength",
                        "Endurance"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Speed",
                        "Perception",
                        "Insight"
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
                        "Strength",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Greatclub",
                    primary_attributes: [
                        "Strength",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Flail",
                    primary_attributes: [
                        "Agility",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Baton",
                    primary_attributes: [
                        "Agility",
                        "Speed"
                    ],
                    secondary_attributes: [
                        "Strength",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Sap",
                    primary_attributes: [
                        "Speed",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Strength",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Axe",
                    primary_attributes: [
                        "Strength",
                        "Speed"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Greataxe",
                    primary_attributes: [
                        "Strength",
                        "Endurance"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Agility",
                        "Perception",
                        "Insight"
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
                        "Strength",
                        "Perception"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Endurance",
                        "Insight"
                    ]
                },
                {
                    name: "Longbow",
                    primary_attributes: [
                        "Perception",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Endurance",
                        "Insight"
                    ]
                },
                {
                    name: "Shortbow",
                    primary_attributes: [
                        "Perception",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Strength",
                        "Endurance",
                        "Insight"
                    ]
                },
                {
                    name: "Crossbow",
                    primary_attributes: [
                        "Perception",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Strength",
                        "Endurance",
                        "Insight"
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
                        "Agility",
                        "Perception"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Strength",
                        "Speed",
                        "Perception",
                        "Endurance",
                        "Insight"
                    ]
                },
                {
                    name: "Sling",
                    primary_attributes: [
                        "Agility",
                        "Perception"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Strength",
                        "Speed",
                        "Perception",
                        "Endurance",
                        "Insight"
                    ]
                },
                {
                    name: "Spear",
                    primary_attributes: [
                        "Strength",
                        "Perception"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Speed",
                        "Endurance",
                        "Insight"
                    ]
                },
                {
                    name: "Darts",
                    primary_attributes: [
                        "Perception",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Speed",
                        "Endurance",
                        "Insight"
                    ]
                },
                {
                    name: "Shuriken",
                    primary_attributes: [
                        "Speed",
                        "Perception"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Strength",
                        "Endurance",
                        "Insight"
                    ]
                },
                {
                    name: "Boomerang",
                    primary_attributes: [
                        "Agility",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Perception",
                        "Endurance",
                        "Insight"
                    ]
                },
                {
                    name: "Bolas",
                    primary_attributes: [
                        "Perception",
                        "Insight"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Strength",
                        "Speed",
                        "Endurance"
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
                        "Strength",
                        "Endurance"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Perception",
                        "Insight",
                        "Speed"
                    ]
                },
                {
                    name: "Spear",
                    primary_attributes: [
                        "Agility",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Endurance",
                        "Perception",
                        "Insight",
                        "Speed"
                    ]
                },
                {
                    name: "Lance",
                    primary_attributes: [
                        "Endurance",
                        "Insight"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Strength",
                        "Perception",
                        "Speed"
                    ]
                },
                {
                    name: "Quarterstaff",
                    primary_attributes: [
                        "Speed",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Agility",
                        "Endurance",
                        "Perception",
                        "Insight"
                    ]
                },
                {
                    name: "Three-part Staff",
                    primary_attributes: [
                        "Agility",
                        "Speed"
                    ],
                    secondary_attributes: [
                        "Strength",
                        "Endurance",
                        "Perception",
                        "Insight"
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
                        "Agility",
                        "Perception"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Insight",
                        "Strength",
                        "Endurance"
                    ]
                },
                {
                    name: "Chain",
                    primary_attributes: [
                        "Agility",
                        "Strength"
                    ],
                    secondary_attributes: [
                        "Speed",
                        "Insight",
                        "Endurance",
                        "Perception"
                    ]
                },
                {
                    name: "Whip",
                    primary_attributes: [
                        "Agility",
                        "Speed"
                    ],
                    secondary_attributes: [
                        "Insight",
                        "Strength",
                        "Endurance",
                        "Perception"
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
                        "Insight",
                        "Manipulation"
                    ],
                    secondary_attributes: [
                        "Presence",
                        "Composure",
                        "Agility"
                    ]
                },
                {
                    name: "Ride",
                    primary_attributes: [
                        "Presence",
                        "Agility"
                    ],
                    secondary_attributes: [
                        "Insight",
                        "Composure",
                        "Manipulation"
                    ]
                },
                {
                    name: "Animal Empathy",
                    primary_attributes: [
                        "Insight",
                        "Composure"
                    ],
                    secondary_attributes: [
                        "Presence",
                        "Agility",
                        "Manipulation"
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

// Source: http://stackoverflow.com/a/10577599
viewModel.skill_group_rows = ko.computed(function() {
    var rows = [], current = [], x = viewModel.skill_groups();
    rows.push(current);
    for (var i = 0; i < x.length; i += 1) {
        current.push(x[i]);
        if (((i + 1) % 4) === 0) {
            current = [];
            rows.push(current);
        }
    }
    return rows;
}, this);

viewModel.skills_flattened = ko.computed(function() {
    var rows = [], current, x = viewModel.skill_groups();
    for (var i = 0; i < x.length; i++) {
        for (var j = 0; j < x[i].skills().length; j++) {
            current = {}
            current.name = x[i].name() + ": " + x[i].skills()[j].name();
            current.group = x[i].name();
            current.skill = x[i].skills()[j].name();
            current.bonus = x[i].skills()[j].rank() * 3;
            current.primary_attributes = x[i].skills()[j].primary_attributes();
            current.secondary_attributes = x[i].skills()[j].secondary_attributes();
            rows.push(current);
        }
    }
    return rows;
}, this);

viewModel.selected_skill = ko.observable();
viewModel.selected_attribute = ko.observable();

ko.applyBindings(viewModel);

