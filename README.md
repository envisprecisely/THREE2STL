# A THREE.js to STL exporter
Pretty straightforward: you pass in a geometry and get an ASCII STL dump in return.
You will need [THREE.js](https://github.com/mrdoob/three.js), of course.

## Usage
```javascript
var myStlString = stlFromGeometry( myGeometry )
```

## Options
`useObjectPosition`
(boolean) This will add the position of your geometry to the vertices, effectively offsetting it in the STL file. This is useful when you plan to combine multiple geometries.

`download`
(boolean) Force the browser to download the STL file.

```javascript
var myStlString = stlFromGeometry( myGeometry, {download:true, useObjectPosition:true} )
```

## Notes
If you have quads (Face4) in your model, the exporter will do some super basic triangulation. It's probably better to do this by hand first than to rely on that algorithm.
