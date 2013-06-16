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
    characterAttributes: [
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
    ]
};

var attributesMapping = {
    "attributes": {
        "create": function(options) {
            return new AttributesModel(options.data);
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

// Activate knockout.js
var viewModel = ko.mapping.fromJS(AppViewModel, attributesMapping);
ko.applyBindings(viewModel);

