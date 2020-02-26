/**
 * uniformimages - v1.0.3 - 2020-02-26
 * https://github.com/chigozieorunta/uniformimages
 *
 * Copyright (c) 2018 Chigozie Orunta
 * Licensed MIT <https://github.com/chigozieorunta/uniformimages/blob/master/LICENSE>
**/

window.addEventListener("load", function() {
    //Get All Images...
    var images = document.querySelectorAll(".unim, .unim-square, .unim-circle, .unim-portrait, .unim-landscape, .unim-diamond");
    for(let i=0; i<images.length; i++) {
        images[i].addEventListener("load", function() {
            this.style.display = "none";
            
            var source = this.getAttribute("src");
            var height = this.getAttribute("height");
            var className = this.getAttribute("class");

            //Create new image
            var image = document.createElement("div");
            image.style.height = height+'px';
            image.addClass(className);

            //Create Placeholder
            var placeholder = document.createElement("div");
            placeholder.addClass("unim-placeholder");

            //Create Placeholder Child
            var placeholder_child = document.createElement("div");
            
            //Create Placeholder Icon
            var placeholder_icon = document.createElement("div");
            placeholder_icon.addClass("unim-icon");

            //Create Image
            var final_image = document.createElement("div");
            final_image.addClass("unim-img");
            final_image.style.backgroundImage = "url("+source+")";

            //Append Placeholder Descendants
            placeholder_child.appendChild(placeholder_icon);
            placeholder.appendChild(placeholder_child);

            //Append Placeholder & Image
            image.appendChild(placeholder);
            image.appendChild(final_image);

            //Attach to original image
            images[i].parentNode.insertBefore(image, images[i].nextSibling);
        })
    }
})