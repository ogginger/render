//render.js: Functional Logic.
//Context: Snip Object.


define([
	"file",
	"promise",
	"sTemplate"
], function(
	file,
	promise,
	sTemplate
) {

  return function( Input ) {
	var xSnip = this;
	return promise(function( resolve ) {
		xSnip.snip( Input.TemplateType ).then(function( Template ) {
			file.create({
				"Name": Input.FileName,
				"Body": sTemplate({
					"Template": Template,
					"Options": Input.Options
				})
			}).finally(function() {
				resolve();
			});
		});
		
	});
  };
});
