function stlFromGeometry( geometry, options ) {

	// calculate the faces and normals if they are not yet present
	geometry.computeFaceNormals()

	var addX = 0
	var addY = 0
	var addZ = 0
	var download = false

	if ( options ) {
		if ( options.useObjectPosition ) {
			addX = geometry.mesh.position.x
			addY = geometry.mesh.position.y
			addZ = geometry.mesh.position.z
		}

		if ( options.download ) {
			download = true
		}
	}

	var stl = ''
	stl += 'solid\n'
	
	for ( var i = 0; i < geometry.faces.length; i++ ) {
		var face = geometry.faces[i]
		var verts = [
			geometry.vertices[ face.a ],
			geometry.vertices[ face.b ],
			geometry.vertices[ face.c ]
		]
		stl += 'facet normal ' + face.normal.x + ' ' + face.normal.y + ' ' +  face.normal.z + '\n'
		stl += 'outer loop\n'
		for ( var j = 0; j < verts.length; j++ ) {
			var vert = verts[j]
			stl += 'vertex ' + vert.x+addX + ' ' + vert.y+addY + ' ' + vert.z+addZ + '\n'
		}
		stl += 'endloop\n'
		stl += 'endfacet\n'
	}

	stl += 'endsolid'

	if ( download ) {
		document.location = 'data:Application/octet-stream, ' + encodeURIComponent( stl )
	}

	return stl
}
