'use strict';

define(['./review.js', './load.js', './gallery'], function(Picture, load, gallery) {
  var PIC_URL = 'http://localhost:1507/api/pictures';

  var PAGE_SIZE = 12;

  var GAP = 100;

  var footer = document.querySelector('.footer');

  var pageNumber = 0;

  var filterID = 'filter-popular';

  var picturesContainer = document.querySelector('.pictures');

  var filters = document.querySelector('.filters');

  filters.addEventListener('change', function(event) {
    var target = event.target;

    while(picturesContainer.firstChild) {
      picturesContainer.removeChild(picturesContainer.firstChild);
    }
    pageNumber = 0;

    loadPics(target.id, pageNumber);
    filterID = target.id;
    wndSize();
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
  var THROTTLE_TIMEOUT = 100;

  var throttle = function(fn, delay) {
    return function() {
      if(Date.now() - lastCall >= delay) {
        if (footer.getBoundingClientRect().bottom - window.innerHeight <= GAP) {
          fn(filterID, ++pageNumber);
        }
      }
      lastCall = Date.now();
    };
  };

  var loadPics = function(filter, currentPageNumber) {
    load(PIC_URL, {from: currentPageNumber * PAGE_SIZE, to: currentPageNumber * PAGE_SIZE + PAGE_SIZE, filter: filter}, renderPictures);
  };
  loadPics(filterID, 0);

  var throttledScroll = throttle(loadPics, THROTTLE_TIMEOUT);

  window.addEventListener('scroll', throttledScroll);

  var wndSize = function() {
    if(footer.getBoundingClientRect().bottom < window.innerHeight) {
      loadPics(filterID, ++pageNumber);
    }
  };
  wndSize();
});
