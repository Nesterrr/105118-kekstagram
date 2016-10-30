'use strict';

define([
  'load',
  'review'
], function(load, review) {
  load(PIC_URL, function(pictures) {
    pictures.forEach(function(pic) {
      picturesContainer.appendChild(addDataInTemplate(pic));
    });
  });
});
