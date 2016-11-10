'use strict';

module.exports = function(list, filterID) {
  var aa = list;
  var result = list;/*
  switch(filterID) {
    case 'filter-popular':
      var BubbleSort = function(aa) {
        var n = aa.length;
        for (var i = 0; i < n-1; i++)
        {
          for (var j = 0; j < n-1-i; j++)
          {
            if (aa[j+1].likes > aa[j].likes)
            {
              var t = aa[j+1].likes; aa[j+1].likes = aa[j].likes; aa[j].likes = t;
            }
          }
        }
        console.log(aa);
        return aa;
      }
      result = BubbleSort(list);
      break;
    case 'filter-new':
      break;
    case 'filter-discussed':
      break;
  }
 // list = aa;*/
  return result;
};
