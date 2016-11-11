'use strict';

module.exports = function(list, filterID) {
  var result = list;
  switch(filterID) {
    case 'filter-popular': {
      result.sort(function(a, b){
        return b.likes - a.likes;
      });
      break;
    }
    case 'filter-new': {
      result.sort(function(a, b){
        return b.created - a.created;
      });

      break;
    }
    case 'filter-discussed':
      result.sort(function(a, b){
      return b.comments - a.comments;
      });
      break;
  }
  return result;
};
