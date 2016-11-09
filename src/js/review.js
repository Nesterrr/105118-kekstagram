'use strict';

define(['./gallery'], function(gallery) {

  var IMG_SIZE = 182;
  var template = document.querySelector('#picture-template');
  var templateContainer = 'content' in template ? template.content : template;
  var picElement = templateContainer.querySelector('.picture');

  function Picture(data, element) {
    this.data = data;
    this.element = element;
  }

  Picture.prototype.remove = function(i) {
    this.element.removeEventListener('onclick', function(event) {
      event.preventDefault();
      gallery.show(i);
    });
  };

  Picture.prototype.setData = function(data) {
    this.data = data;
  };

  Picture.prototype.addDataInTemplate = function() {
    this.element = picElement.cloneNode(true);

    this.element.querySelector('.picture-comments').textContent = this.data.comments;

    this.element.querySelector('.picture-likes').textContent = this.data.likes;

    var img = new Image();
    var self = this.element;

    img.onload = function(evt) {
      var nodeImg = self.querySelector('img');
      nodeImg.src = evt.target.src;
      nodeImg.width = IMG_SIZE;
      nodeImg.heigth = IMG_SIZE;
    };
    img.onerror = function() {
      self.classList.add('picture-load-failure');
    };
    img.src = this.data.url;
    return this.element;
  };

  Picture.prototype.addEvntHandl = function(i) {
    this.element.onclick = function(event) {
      event.preventDefault();
      gallery.show(i);
    };
  };
  return Picture;
});

