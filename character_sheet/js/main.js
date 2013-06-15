$(function() {
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
}

// Activate knockout.js
ko.applyBindings(new AppViewModel());
});
