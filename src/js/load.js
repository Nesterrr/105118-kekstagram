'use strict';

define(function() {
  var load = function(url, pageParamObj, callback){
    var xhr = new XMLHttpRequest();

    xhr.onload = function(evt) {
      var loadedData = JSON.parse(evt.target.response);
      callback(loadedData);
    };
    xhr.open('GET', url + '?' + 'from=' + pageParamObj.from + '&to=' + pageParamObj.to + '&filter=' + pageParamObj.filter);
    xhr.send();
  };
  return load;
});
