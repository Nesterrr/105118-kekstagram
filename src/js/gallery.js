'use strict';

define(function() {
  function Gallery(pictures, activePictureNum) {
    this.pictures = pictures;
    this.activePicture = activePictureNum;

    this.galleryOverlay = document.querySelector('.gallery-overlay');
    this.galleryOverlayClose = document.querySelector('.gallery-overlay-close');
    this.galleryOverlayImage = document.querySelector('.gallery-overlay-image');
  }

  Gallery.prototype.setPictures = function(pictures) {
    this.pictures = pictures;
  };

  Gallery.prototype.show = function(num) {
    var self = this;

    this.galleryOverlay.classList.remove('invisible');
    this.setActivePicture(num);

    this.galleryOverlayClose.onclick = function() {
      self.hide();
    };

    this.galleryOverlayImage.onclick = function() {
      num++;
      if(num === self.pictures.length) {
        num = 0;
      }
      self.setActivePicture(num);
    };
  };

  Gallery.prototype.hide = function() {
    this.galleryOverlay.classList.add('invisible');
    this.galleryOverlayImage.onclick = null;
    this.galleryOverlayClose.onclick = null;
  };

  Gallery.prototype.setActivePicture = function(num) {
    this.activePicture = num;
    var self = this;

    self.galleryOverlayImage.setAttribute('src', this.pictures[num].url);
    document.querySelector('.likes-count').innerHTML = this.pictures[num].likes;
    document.querySelector('.comments-count').innerHTML = this.pictures[num].comments;
  };
  return new Gallery();
});
