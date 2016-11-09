'use strict';

define(['./review.js', './load.js', './gallery'], function(Picture, load, gallery) {
  var PIC_URL = 'http://localhost:1507/api/pictures';

  var picturesContainer = document.querySelector('.pictures');

  var renderPictures = function(pictures) {
    gallery.setPictures(pictures);
    pictures.forEach(function(pic, i) {
      var picElem = new Picture();
      picElem.setData(pic);
      picturesContainer.appendChild(picElem.addDataInTemplate());
      picElem.addEvntHandl(i);
    });
  };
  load(PIC_URL, renderPictures);
});
