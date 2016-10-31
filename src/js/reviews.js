'use strict';

define(['./review.js', './load.js'], function(addDataInTemplate, load) {
  var PIC_URL = 'http://localhost:1507/api/pictures';

  var picturesContainer = document.querySelector('.pictures');

  var renderPictures = function(pictures) {
    pictures.forEach(function(pic) {
      picturesContainer.appendChild(addDataInTemplate(pic));
    });
  };
  load(PIC_URL, renderPictures);
});
