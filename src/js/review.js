'use strict';

define(['./gallery'], function(gallery) {
  var IMG_SIZE = 182;
  var template = document.querySelector('#picture-template');
  var templateContainer = 'content' in template ? template.content : template;
  var picElement = templateContainer.querySelector('.picture');

  var addDataInTemplate = function(pic, i) {
    var nodeClone = picElement.cloneNode(true);

    nodeClone.querySelector('.picture-comments').textContent = pic.comments;

    nodeClone.querySelector('.picture-likes').textContent = pic.likes;
    var img = new Image();

    img.onload = function(evt) {
      var nodeImg = nodeClone.querySelector('img');
      nodeImg.src = evt.target.src;
      nodeImg.width = IMG_SIZE;
      nodeImg.heigth = IMG_SIZE;
    };
    img.onerror = function() {
      nodeClone.classList.add('picture-load-failure');
    };
    img.src = pic.url;

    nodeClone.querySelector('img').onclick = function(event) {
      event.preventDefault();
      gallery.show(i);
    };
    return nodeClone;
  };
  return addDataInTemplate;
});

