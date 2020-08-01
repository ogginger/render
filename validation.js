define(["file"], function( file ) {
    return [function( Input ) {
        if (Boolean( Input.TemplateType ) == false ) {
            throw { message: "Error: The input TemplateType was not defined." };
        } else if (Boolean( Input.FileName ) == false ) {
            throw { message: "Error: The input FileName was not defined." };
        }
    }];
});