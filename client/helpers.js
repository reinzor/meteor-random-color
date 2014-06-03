var callRandomColor = function (options) {
    var optionsHash = (options || {}).hash || {};
    return randomColor(optionsHash);
};

/*
 Register handlebars helper
 */
if (Meteor.isClient) {
    if (UI) {
        UI.registerHelper('randomColor', callRandomColor);
    } else if (Handlebars) {
        Handlebars.registerHelper('randomColor', callRandomColor);
    }
}