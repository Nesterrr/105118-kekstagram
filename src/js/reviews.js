'use strict';

define(['./review.js', './load.js', './gallery'], function( picture, load, gallery) {
  var PIC_URL = 'http://localhost:1507/api/pictures';

  var picturesContainer = document.querySelector('.pictures');

  var renderPictures = function(pictures) {
    gallery.setPictures(pictures);
    pictures.forEach(function(pic, i) {
      picture.setData(pic);
      picturesContainer.appendChild(picture.addDataInTemplate());
      picture.addEvntHandl(i);
    });
  };
  load(PIC_URL, renderPictures);
});
