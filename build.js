//build.js: Configuration file for optimizing the render function. 
/*
	render.js's context is the Snip object.
*/ 
({
    paths: {
	"sTemplate": "lib/template.min",
	"underscore": "lib/underscore.min",
	"file": "lib/file.min",
	"rsvp": "lib/rsvp.min",
	"promise": "lib/promise.min",
	"fs": "empty:", //node module
	"validate": "lib/validate.min"
    },
    exclude: [ "underscore", "file", "rsvp", "fs", "validate" ],
    name: "render",
    out: "render.min.js"
})
