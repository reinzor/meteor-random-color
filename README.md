random-color
======================

Random Color (v0.1.1), lib for generating attractive random colors, from David Merfield, https://github.com/davidmerfield/randomColor, packaged for Meteor.js.

For generating attractive random colors. See the results on [the original demo] of David Merfield(http://llllll.li/randomColor/).

[![Hello](http://llllll.li/randomColor/repobg.png)](http://llllll.li/randomColor)

To install
----------

```sh
$ mrt add random-color
```

Examples
------

```
// Returns a hex code for an attractive color
randomColor();

// Returns an array of ten green colors
randomColor({
   count: 10,
   hue: 'green'
});

// Returns a hex code for a light blue
randomColor({
   luminosity: 'light',
   hue: 'blue'
});

// Returns a hex code for a 'truly random' color
randomColor({
   luminosity: 'random',
   hue: 'random'
});

// Returns a bright color in RGB
randomColor({
   luminosity: 'bright',
   format: 'rgb' // e.g. 'rgb(225,200,20)'
});
```

UI Template Helpers
------

I added also a template helper. It can be called with all options available.

```
{{ randomColor hue='blue' }}
```