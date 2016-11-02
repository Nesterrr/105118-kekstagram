'use strict';

define(['./load'], function(){

  function Gallery(pictures, activePictureNum){
    var self = this;

    this.pictures = pictures;
    this.activePicture = activePictureNum;

    this.galleryOverlay = document.querySelector('.gallery-overlay');
    this.galleryOverlayClose = document.querySelector('.gallery-overlay-close');
    this.galleryOverlayImage = document.querySelector('.gallery-overlay-image');
    //console.log('Gallery');
  }

  Gallery.prototype.setPictures = function(pictures){
    this.pictures = pictures;
   // console.log('set');
  };

  Gallery.prototype.show = function(num){
    this.galleryOverlay.classList.remove('invisible');
    //this.setActivePicture(num);
    /*
    this.galleryOverlayImage.onclick = function(){
      self.setActivePicture(num);
    }*/

    this.galleryOverlayClose.onclick = function(){
      console.log('aaa');
      //self.hide();
    }
    console.log('show');

  }

  Gallery.prototype.hide = function(){

    self.galleryOverlay.classList.add('invisible');
    //self.galleryOverlayImage.onclick = null;
   // self.galleryOverlayClose.onclick = null;
  }
  Gallery.prototype.setActivePicture = function(num) {
    //console.log('setActivePicture');

    self.activePicture = num;
    self.galleryOverlayImage.src = self.pictures;

    self.galleryOverlay.querySelector('.likes-count').textContent = self.pictures.like-count.textContent;
    self.galleryOverlay.querySelector('.comments-count').textContent = self.pictures.comments-count.textContent;
  }

  return  x = new Gallery();
});
