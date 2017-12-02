# imgpixels
A small library to make pixels like square from an image into number of img tags 

## [DEMO](http://sadimahmud.com)

### Info
Use small width and height, with larger squares, as <img> tags are created based on the sizes, larger square size, lesser img tags and will maintain proper performance 

### Install 
```
  npm: npm install imgpixels --save
  git: just manually download imgpixels.min.js
```

### Usage 
```
  npm: import ImgPixels from 'imgpixels'
  script: just add imgpixels.min.js to the body
```

### Call
```
  new ImgPixels(options).makePixels()
```

### Options

|    Option        | Default                      | Comment             |
 ----------------- | ---------------------------- | ------------------
| widthMul         | 18  |  Width of the image, it should be multiplication of the square width |
| heightMul        | 25  | Height of the image, it should be multiplication of the square width |
| src          | ' ' | Source of the image |
|sqrWidth | 30 | Pixel square width
|parentContainerId | "dataImage"| A container is needed to be set, ID to be provied in the options" |
|function | empty | Call back function for settings animations or other stuffs |

### License
MIT
