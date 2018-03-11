# ColorPickerV2
- This is a side project of mine. The first version, which can be found [here](https://github.com/MosesHimself/ColorPicker) was originally a final project for my web development class.
- I had decided to refactor that code and it became an entirely new project. Honestly I'd say CSS layouts are the hardest part because I know the least about that.

## Features
- This web app delves into the world of color. I named it Chromata because of the Latin word chroma and I'm learning about automata in my theory of computation class. 
- Using the javascript sliders to manipulate 3 values, corresponding to red, green, and blue, one can make any color that can be displayed by a computer screen.
- With 3 values, ranging from 0-255, 255^3 = 16,581,375 different colors can be made. A random button will randomize the three values, giving a color that is rather unique (1 in 16 million). 
- One could imgine these three values as three dimensions in Euclidean space, each ranging from 0-255. This would result in a cube with height, width, and length of 255 and a point within these bounds being an instance of a color. ![color cube](https://github.com/MosesHimself/ColorPickerV2/blob/master/color-cube.png)
- I have written three functions that will graph a ring of points, in this case colors, when given an input of x. ![color cube](https://github.com/MosesHimself/ColorPickerV2/blob/master/colorCube.png)
- In javascript, those three functions look like this:
```javascript
  var x = Math.round(127 * Math.cos(i  + (3.14159 * 2))) + 128;
  var y = Math.round(127 * Math.sin(i + (3.14159 * 2))) + 128;
  var z = Math.round(127 * Math.cos(i + 3.14159)) + 128;
```
- They look like so graphed out: ![colorWaves](https://github.com/MosesHimself/ColorPickerV2/blob/master/sineWaves.png)

