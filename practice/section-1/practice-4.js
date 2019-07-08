'use strict';

function collectSameElements(collectionA, objectB) {
    var aLength = collectionA.length;
    var bArray = objectB["value"];
    var bLength = bArray.length;
    var resultArray = [];
    debugger
    for (var i = 0; i < aLength; i++) {
      for (var j = 0; j < bLength; j++) {
        if(collectionA[i].key == bArray[j]) {
          resultArray.push(collectionA[i].key);
          break;
        }
      }
    }
    return resultArray;
}
