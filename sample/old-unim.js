$(document).ready(function() {
    $('.unim').each(function(index, element) {
        //Get variables...
        var dynamicDiv = '';
        var height = $(this).attr("height");
        var source = $(this).attr("src");
        var style = $(this).attr("data-style");

        //Add Image URL
        dynamicDiv = '<div style="background-image: url('+source+');';

        //Conditionals...
        if(parseInt(height) > 0) {
            dynamicDiv += ' height: '+height+'px;" class="unim unim-height"';
        } else {
            dynamicDiv += '" class="unim"'; 
        }

        //Close dynamicDiv Tag
        dynamicDiv += '></div>';

        //ReplaceWith dynamicDivTag
        $(this).replaceWith(dynamicDiv);
    });
})