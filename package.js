Package.describe({
    name: "rzymek:randomcolor",
    version: "0.1.1_1",
    summary: "Random Color (v0.1.1), lib for generating attractive random colors, from David Merfield",
    git:"https://github.com/rzymek/meteor-random-color.git"
});

Package.on_use(function (api) {
    api.add_files('lib/js/randomColor.js');
});
