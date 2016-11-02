'use strict';

define(['./review.js', './load.js', './gallery'], function(addDataInTemplate, load) {
  var PIC_URL = 'http://localhost:1507/api/pictures';

  var picturesContainer = document.querySelector('.pictures');

  var renderPictures = function(pictures) {
    x.setPictures(pictures);

    pictures.forEach(function(pic, i) {
      picturesContainer.appendChild(addDataInTemplate(pic, i));
      pic.onclick = function() {
        x.show(i);
      }
    });
  };
  load(PIC_URL, renderPictures);
});
