var testArray = [ "ground", "control", "to", "major", "Tom" ];
function testFn( elem ) {
  return elem.length;
}

function newMap( array, mappingFn ){
  retArray = []
  array.forEach( function( elem ) {
    retArray.push( mappingFn( elem ) );
  });

  return retArray;
}

console.log( newMap( testArray, testFn ) );