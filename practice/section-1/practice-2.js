'use strict';

function collectSameElements(collectionA, collectionB) {
    var aLength = collectionA.length;
    // 子数组个数
    var bLength = collectionB.length;
    var resultArray = [];
    for (var i = 0; i < aLength; i++) {
      for (var j = 0; j < bLength; j++) {
        for (var k = 0; k < collectionB[j].length; k++) {
          if(collectionA[i] == collectionB[j][k]) {
            resultArray.push(collectionA[i]);
            break;
          }
        }
      }
    }
    return resultArray;
}
