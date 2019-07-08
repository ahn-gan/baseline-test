'use strict';

function collectSameElements(collectionA, collectionB) {
  var aLength = collectionA.length;
  var bLength = collectionB.length;
  var resultArray = [];
  for (var i = 0; i < aLength; i++) {
    for (var j = 0; j < bLength; j++) {
      if(collectionA[i] == collectionB[j]) {
        resultArray.push(collectionA[i]);
        break;
      }
    }
  }
  return resultArray;
}
