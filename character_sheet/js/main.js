// Source: http://stackoverflow.com/a/1830844
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function statBonus(statValue) {
    if(!isNumber(statValue)) {
        return false;
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
            return false;
    }
}

var AppViewModel = {
    characterAttributes: [
        {
            name: "Physical",
            attributes: [
                {
                    name: "Strength",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                },
                {
                    name: "Endurance",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                },
                {
                    name: "Agility",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                },
                {
                    name: "Speed",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                }
            ]
        },
        {
            name: "Mental",
            attributes: [
                {
                    name: "Willpower",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                },
                {
                    name: "Insight",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                },
                {
                    name: "Reasoning",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                },
                {
                    name: "Perception",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                }
            ]
        },
        {
            name: "Social",
            attributes: [
                {
                    name: "Presence",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                },
                {
                    name: "Composure",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                },
                {
                    name: "Manipulation",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                },
                {
                    name: "Beauty",
                    score: null,
                    bonus: ko.computed(function() {
                        return statBonus(this.score)
                    }, this)
                }
            ]
        }
    ]
};

// Activate knockout.js
var viewModel = ko.mapping.fromJS(AppViewModel);
ko.applyBindings(viewModel);

