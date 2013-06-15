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

function AppViewModel() {
    this.statStrength = ko.observable();
    this.statEndurance = ko.observable();
    this.statAgility = ko.observable();
    this.statSpeed = ko.observable();

    this.statWillpower = ko.observable();
    this.statInsight = ko.observable();
    this.statReasoning = ko.observable();
    this.statPerception = ko.observable();

    this.statPresence = ko.observable();
    this.statComposure = ko.observable();
    this.statManipulation = ko.observable();
    this.statBeauty = ko.observable();

    this.statBonusStrength = ko.computed(function() {
        return statBonus(this.statStrength());
    }, this);
}

// Activate knockout.js
ko.applyBindings(new AppViewModel());
