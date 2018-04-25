$(document).ready(function() {
    $('.unim').each(function(index, element) {
        //Get variables...
        var dynamicDiv = '';
        var source = $(this).attr("src");
        var height = $(this).attr("height");
        var divClass = $(this).attr("class");

        //Conditionals...
        if(parseInt(height) > 0) {
            dynamicDiv = '<div class="'+divClass+' unim-height" style="height: '+height+'px;">';
        } else {
            dynamicDiv = '<div class="'+divClass+'">'; 
        }

        //Add Image URL
        dynamicDiv += '<div class="unim-placeholder">';
        dynamicDiv += '<div>';
        dynamicDiv += '<div class="unim-icon"></div>';
        dynamicDiv += '</div>';
        dynamicDiv += '</div>';
        dynamicDiv += '<div class="unim-img" style="background-image: url('+source+');"></div>';
        dynamicDiv += '</div>';

        //ReplaceWith dynamicDivTag
        $(this).replaceWith(dynamicDiv);
    });
})