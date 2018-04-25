# uniformimages
A simple & practical jQuery script to help you maintain uniform width & height across a group of images on your website.

### Usage
The "**unim**" class is ideal for use on images you want to appear as uniform (same width & height). Very useful for most websites, especially when you can't control what the user may or may not upload to his/her site.

### Requirements
jQuery.js

#### Image Styling
The **unim, unim-square, unim-circle, unim-landscape, unim-portrait** classes provide a wide variety of styling for you to choose from. By default the images take a 100% of their parent's width when the **unim** class is applied. Here's a sample below...
```
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="uniformimages.css" rel="stylesheet" type="text/css"/>
  <script src="uniformimages.js" type="text/javascript"></script>
</head>

<body>
  <section style="padding: 3em 0;">
      <div class="container-fluid">
          <div class="row">
              <div class="col-sm-3">
                  <a href="product1.html">
                      <img src="image1.jpg" class="unim"/>
                  </a>
              </div>
          </div>
      </div>
  </section>
</body>
</html>
```

#### Other Unim Classes
The **unim-square, unim-circle, unim-landscape, unim-portrait** help you acheive certain geometric shapes with ease. Here's a sample below...
```
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="uniformimages.css" rel="stylesheet" type="text/css"/>
  <script src="uniformimages.js" type="text/javascript"></script>
</head>

<body>
  <section style="padding: 3em 0;">
      <div class="container-fluid">
          <div class="row">
              <div class="col-sm-3">
                  <a href="product1.html">
                      <img src="image1.jpg" class="unim-square"/>
                  </a>
              </div>
              <div class="col-sm-3">
                  <a href="product2.html">
                      <img src="image2.jpg" class="unim-circle"/>
                  </a>
              </div>
              <div class="col-sm-3">
                  <a href="product3.html">
                      <img src="image3.jpg" class="unim-portrait"/>
                  </a>
              </div>
              <div class="col-sm-3">
                  <a href="product4.html">
                      <img src="image4.jpg" class="unim-landscape"/>
                  </a>
              </div>
          </div>
      </div>
  </section>
</body>
</html>
```

#### Custom Height
You can also assign a custom height to the image if you so desire, (**however this only applies to the unim class, when used with other "unim classes like unim-squre, unim-circle and so on..." the custom height is overridden to acheive the geometric shapes**). Here's a sample below...
```
<!DOCTYPE html>
<html>
<head>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet"/>
  <link href="uniformimages.css" rel="stylesheet" type="text/css"/>
  <script src="uniformimages.js" type="text/javascript"></script>
</head>

<body>
  <section style="padding: 3em 0;">
      <div class="container-fluid">
          <div class="row">
              <div class="col-sm-3">
                  <a href="product1.html">
                      <img src="image1.jpg" class="unim" height="450"/>
                  </a>
              </div>
          </div>
      </div>
  </section>
</body>
</html>
```

### Contributions
Anyone and everyone is welcome to contribute. 
