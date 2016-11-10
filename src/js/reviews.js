'use strict';

define(['./review.js', './load.js', './gallery'], function(Picture, load, gallery) {
  var PIC_URL = 'http://localhost:1507/api/pictures';

  var PAGE_SIZE = 12;

  var GAP = 100;

  var footer = document.querySelector('.footer');

  var pageNumber = 0;

  var filterID = null;

  var picturesContainer = document.querySelector('.pictures');

  var filters = document.querySelector('.filters');

  filters.addEventListener('change', function(event){
    var target = event.target;

    while(picturesContainer.firstChild) {
      picturesContainer.removeChild(picturesContainer.firstChild);
    }
    pageNumber = 0;

    loadPics(target.id, pageNumber);
  }, true);

  var renderPictures = function(pictures) {
    gallery.setPictures(pictures);

    pictures.forEach(function(pic, i) {
      var picElem = new Picture();

      picElem.setData(pic);
      picturesContainer.appendChild(picElem.addDataInTemplate());
      picElem.addEvntHandl(i);
    });
  };

  var lastCall = Date.now();
  var TROTTL_TIMEOUT = 100;

  window.addEventListener('scroll', function() {
    if(Date.now() - lastCall >= TROTTL_TIMEOUT) {
      if (footer.getBoundingClientRect().bottom - window.innerHeight <= GAP) {
        loadPics(filterID, ++pageNumber);
      }
    }
    lastCall = Date.now();
  });

  var loadPics = function(filterID, currentPageNumber) {
    load(PIC_URL, {from: currentPageNumber * PAGE_SIZE, to: currentPageNumber * PAGE_SIZE + PAGE_SIZE, filter: filterID}, renderPictures);
  }
  loadPics(filterID, 0);
});
