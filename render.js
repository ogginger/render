//render.js: Functional Logic.
//Context: Snip Object.


define([
	"file",
	"promise",
	"sTemplate",
	"validate",
	"validation"
], function(
	file,
	promise,
	sTemplate,
	validate,
	validation
) {

  return function( Input ) {
	var xSnip = this;
	validate({
		Validation: validation,
		Data: Input
	});
	
	return promise(function( resolve, reject ) {
		xSnip.snip( Input.TemplateType ).then(function( Template ) {
			console.log("A");
			file.create({
				"Name": Input.FileName,
				"Body": sTemplate({
					"Template": Template,
					"Options": Input.Options
				})
			}).then(function() {
				console.log("D");
				resolve();
			}).catch(function( error ) {
				console.log( "B" );
				reject( error );
			});
		}).catch(function( error ) {
			console.log("C");
			reject( error );
		});
	});
  };
});
