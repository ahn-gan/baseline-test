'use strict';

function collectSameElements(collectionA, objectB) {
    var aLength = collectionA.length;
    var bArray = objectB["value"];
    var bLength = bArray.length;
    var resultArray = [];
    for (var i = 0; i < aLength; i++) {
      for (var j = 0; j < bLength; j++) {
        if(collectionA[i] == bArray[j]) {
          resultArray.push(collectionA[i]);
          break;
        }
      }
    }
    return resultArray;
}
