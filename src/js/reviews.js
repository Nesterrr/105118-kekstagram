'use strict';

define(['./review.js', './load.js', './gallery'], function(addDataInTemplate, load, gallery) {
  var PIC_URL = 'http://localhost:1507/api/pictures';

  var picturesContainer = document.querySelector('.pictures');

  var renderPictures = function(pictures) {
    gallery.setPictures(pictures);
    pictures.forEach(function(pic, i) {
      picturesContainer.appendChild(addDataInTemplate(pic, i));
    });
  };
  load(PIC_URL, renderPictures);
});
