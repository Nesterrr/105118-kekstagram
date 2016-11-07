'use strict';

define(['./load'], function() {
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

    var galleryNum = num;
    this.galleryOverlayImage.onclick = function() {
      if(galleryNum === num) {
        galleryNum++;
        num++;
        self.setActivePicture(galleryNum);
      }
      if(num === self.pictures.length) {
        galleryNum = 0;
        num = 0;
        self.setActivePicture(galleryNum);
      }
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
    this.pictures.forEach(function(item, i) {
      if(i === num) {
        self.galleryOverlayImage.setAttribute('src', item.url);
        document.querySelector('.likes-count').innerHTML = item.likes;
        document.querySelector('.comments-count').innerHTML = item.comments;
      }
    });
  };

  return new Gallery();
});
