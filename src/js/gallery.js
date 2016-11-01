'use strict';

define(function(){
  function Gallery(pictures, activePicture){
    this.pictures = pictures;
    this.activePicture = activePicture;

    this.galleryOverlay = document.querySelector('.gallery-overlay');
    this.galleryOverlayClose = document.querySelector('.gallery-overlay-close');
    this.galleryOverlayImage = document.querySelector('.gallery-overlay-image');
  }

  Gallery.prototype.setPictures = function(pictures){
    this.pictures = pictures;
  }

  Gallery.prototype.show = function(num){

    this.galleryOverlay.classList.remove('invisible');

    this.galleryOverlayImage.onclick = function(){
      this.setActivePicture(num);
    }

    this.galleryOverlayClose.onclick = function(){
      this.hide();
    }
  }

  Gallery.prototype.hide = function(){
    this.galleryOverlay.classList.add('invisible');
    this.galleryOverlayImage.onclick = null;
    this.galleryOverlayClose.onclick = null;
  }
  Gallery.prototype.setPictures = function(num) {
    this.activePicture = num;
    this.galleryOverlayImage.src =
  }

  return new Gallery();
});
