# uniformimages
A simple & practical jQuery script to help you maintain uniform width & height across a group of images on your website.

## NPM
You can install directly via NPM to your project folder.
```
npm install uniformimages
```

## CDN
The CDN is updated after the release is made public. Always, check the GitHub page for the latest release.
<ul>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.css">
      https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.css
    </a>
  </li>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.js">
      https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.js
    </a>
  </li>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.min.css">
      https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.min.css
    </a>
  </li>
  <li>
    <a href="https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.min.js">
      https://cdn.jsdelivr.net/gh/chigozieorunta/uniformimages/uniformimages.min.js
    </a>
  </li>
</ul> 

### Usage
The "**unim**" class is ideal for use on images that should appear uniform (same width & height). Very useful for most websites, especially when you can't control the kind of image the user may or may not upload to his/her site.

### Requirements
jQuery.js

#### Image Styling
The **unim, unim-square, unim-circle, unim-landscape, unim-portrait, unim-diamond** classes provide a wide variety of styling for you to choose from. By default the images take a 100% of their parent's width when the **unim** class is applied. Here's a sample below...
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
  <section>
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
The **unim-square, unim-circle, unim-landscape, unim-portrait, unim-diamond** help you acheive certain geometric shapes with ease. Here's a sample below...
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
  <section>
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

#### Unim-Diamond (Latest Addition)
The **unim-diamond** tilts your image into a diamond like position. Here's a sample below...
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
  <section>
      <div class="container-fluid">
          <div class="row">
              <div class="col-sm-4">
                  <a href="product1.html">
                      <img src="image1.jpg" class="unim-diamond"/>
                  </a>
              </div>
              <div class="col-sm-4">
                  <a href="product2.html">
                      <img src="image2.jpg" class="unim-diamond"/>
                  </a>
              </div>
              <div class="col-sm-4">
                  <a href="product3.html">
                      <img src="image3.jpg" class="unim-diamond"/>
                  </a>
              </div>
          </div>
      </div>
  </section>
</body>
</html>
```

#### Custom Height
You can also assign a custom height to the image if you so desire, (**however this only applies to the unim class, when used with other "unim classes like unim-square, unim-circle and so on..." the custom height is overridden to acheive the geometric shapes**). Here's a sample below...
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
  <section>
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

#### No Image
In the absence of an image, uniformimages displays a placeholder containing an empty ash background with an icon in the middle.

### Contributions
Anyone and everyone is welcome to contribute. 
