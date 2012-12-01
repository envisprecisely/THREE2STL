# A THREE.js to STL exporter
Pretty straightforward: you pass in a geometry and get an ASCII STL dump in return.

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

## Limitations and Todo
Right now the export only works on geometries that are triangulated. If you have `Face4` faces in your geometry, the exporter will not work.
