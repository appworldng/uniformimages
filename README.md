# uniformimages
A simple & practical jQuery script to help you maintain uniform width & height across a group of images on your website.

### Usage
The "**unim**" class is ideal for use on images you want to appear as uniform (same width & height). Very useful for most websites, especially when you can't control what the user may or may not upload to his/her site.

### Requirements
jQuery.js

#### Image Styling
The **data-img** attribute is used to attach the second image of your choice you would want swapped. Once this is done, simply add your **swim** class to the image element and you're good to go (**make sure jQuery script is included, it requires it to work properly**). Here's a sample below...
```
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link href="uniformimages.css" rel="stylesheet" type="text/css"/>
  <script src="uniformimages.js" type="text/javascript"></script>
</head>

<body>
  <img src="image1.jpg" class="unim"/>
</body>
</html>
```

### Contributions
Anyone and everyone is welcome to contribute. 
