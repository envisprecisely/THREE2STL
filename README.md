# A THREE.js to STL exporter
Pretty straightforward: you pass in a geometry and get an ASCII STL dump in return.

## Usage
```javascript
var myStlString = stlFromGeometry( myGeometry )
```

## Options
Currently there is just one option and that is `useObjectPosition`. This will add the position of your geometry to the vertices, effectively offsetting it in the STL file.

```javascript
var myStlString = stlFromGeometry( myGeometry, {useObjectPosition:true} )
```

## Limitations and Todo
Right now the export only works on geometries that are triangulated. If you have `Face4` faces in your geometry, the exporter will not work.
