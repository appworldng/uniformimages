$(document).ready(function() {
    $('.unim').each(function(index, element) {   
        var width = $(this).data("width");
        var height = $(this).attr("height");
        $(this).parent().children('img').wrapAll('<div class="unim-container"></div>');
    });
})