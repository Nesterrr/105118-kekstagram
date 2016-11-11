'use strict';

module.exports = function(list, filterID) {
  var result = list;

  var bubbleSort = function(picsArray, filterID) {
    var n = picsArray.length;
    for (var i = 0; i < n-1; i++)
    {
      for (var j = 0; j < n-1-i; j++)
      {
        if(filterID === 'filter-popular') {
          if (picsArray[j + 1].likes > picsArray[j].likes) {
            var t = picsArray[j + 1];
            picsArray[j + 1] = picsArray[j];
            picsArray[j] = t;
          }
        }
        if(filterID === 'filter-discussed') {
          if (picsArray[j + 1].comments > picsArray[j].comments) {
            var t = picsArray[j + 1];
            picsArray[j + 1] = picsArray[j];
            picsArray[j] = t;
          }
        }
        if(filterID === 'filter-new') {
          if (picsArray[j + 1].created > picsArray[j].created) {
            var t = picsArray[j + 1];
            picsArray[j + 1] = picsArray[j];
            picsArray[j] = t;
          }
        }

      }
    }
    return picsArray;
  }

  switch(filterID) {
    case 'filter-popular': {
      result = bubbleSort(list, filterID);
      break;
    }
    case 'filter-new': {
     result = bubbleSort(list, filterID);
      break;
    }
    case 'filter-discussed':
      result = bubbleSort(list, filterID);
      break;
  }
  return result;
};
