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
                { name: "Awareness" },
                { name: "Sense Motive" },
                { name: "Dodge" },
                { name: "Focus" }
            ]
        },
        {
            name: "Athletics",
            skills: [
                { name: "Climb" },
                { name: "Jump" },
                { name: "Contort" },
                { name: "Swim" },
                { name: "Balance" },
                { name: "Acrobatics" }
            ]
        },
        {
            name: "Armour",
            skills: [
                { name: "Light Armour" },
                { name: "Medium Armour" },
                { name: "Heavy Armour" }
            ]
        },
        {
            name: "Martial Arts",
            skills: [
                { name: "Soft Fall" },
                { name: "Sweeping Throw" },
                { name: "Punches" },
                { name: "Kicks" },
                { name: "Locking Grip" }
            ]
        },
        {
            name: "Subterfuge, Social",
            skills: [
                { name: "Bluff" },
                { name: "Diplomacy" },
                { name: "Intimidate" },
                { name: "Seduce" },
                { name: "Disguise" }
            ]
        },
        {
            name: "Subterfuge, Mechanical",
            skills: [
                { name: "Forgery" },
                { name: "Open Lock" },
                { name: "Disable Trap" },
                { name: "Sneak" }
            ]
        },
        {
            name: "Craft, Mechanical",
            skills: [
                { name: "Locksmith" },
                { name: "Clockmaker" },
                { name: "Trapmaking" }
            ]
        },
        {
            name: "Craft, Construction",
            skills: [
                { name: "Carpentry" },
                { name: "Masonry" }
            ]
        },
        {
            name: "Medicine",
            skills: [
                { name: "Treat Wounds" },
                { name: "Herbalism" }
            ]
        },
        {
            name: "Perform",
            skills: [
                { name: "Music [instrument]" },
                { name: "Oratory" },
                { name: "Theatre" },
                { name: "Buffoonery" }
            ]
        },
        {
            name: "Academics",
            skills: [
                { name: "Knowledge (Religion)" },
                { name: "Knowledge (History)" },
                { name: "Knowledge (Anatomy)" },
                { name: "Knowledge (Magic)" }
            ]
        },
        {
            name: "Blades",
            skills: [
                { name: "Knife" },
                { name: "Short Sword" },
                { name: "Long Sword" },
                { name: "Greatsword" },
                { name: "Rapier" },
                { name: "Axe" },
                { name: "Greataxe" }
            ]
        },
        {
            name: "Blunt",
            skills: [
                { name: "Club" },
                { name: "Greatclub" },
                { name: "Flail" },
                { name: "Baton" },
                { name: "Sap" },
                { name: "Axe" },
                { name: "Greataxe" }
            ]
        },
        {
            name: "Bows",
            skills: [
                { name: "Footbow" },
                { name: "Longbow" },
                { name: "Shortbow" },
                { name: "Crossbow" }
            ]
        },
        {
            name: "Thrown",
            skills: [
                { name: "Knife" },
                { name: "Sling" },
                { name: "Spear" },
                { name: "Darts" },
                { name: "Shuriken" },
                { name: "Boomerang" },
                { name: "Bolas" }
            ]
        },
        {
            name: "Polearms",
            skills: [
                { name: "Halberd" },
                { name: "Spear" },
                { name: "Lance" },
                { name: "Quarterstaff" },
                { name: "Three-part Staff" }
            ]
        },
        {
            name: "Flexible Weapons",
            skills: [
                { name: "Rope Dart" },
                { name: "Chain" },
                { name: "Whip" }
            ]
        },
        {
            name: "Animal Husbandry",
            skills: [
                { name: "Handle Animal" },
                { name: "Ride" },
                { name: "Animal Empathy" }
            ]
        }
    ]
};

var attributesMapping = {
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
}

// Activate knockout.js
var viewModel = ko.mapping.fromJS(AppViewModel, attributesMapping);
ko.applyBindings(viewModel);

