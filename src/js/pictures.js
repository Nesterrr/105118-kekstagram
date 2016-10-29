'use strict';

(function() {
  var cbName = 'cb';
  var PIC_URL = 'http://localhost:1507/api/pictures';

  var load = function(url, callback) {
    window[cbName] = function(data) {
      callback(data);
    };

    var script = document.createElement('script');
    script.src = url + '?callback=' + cbName;
    document.body.appendChild(script);
  };

  var IMG_SIZE = 182;

  // Находим .filters и прячем его
  var filters = document.querySelector('.filters');
  filters.classList.add('hidden');

  // Блок внутри которого будут добавлены картинки
  var picturesContainer = document.querySelector('.pictures');

  // Шаблон
  var template = document.querySelector('#picture-template');
  var templateContainer = 'content' in template ? template.content : template;

  var picElement = templateContainer.querySelector('.picture');

  // Функция напонения шаблона данными
  var addDataInTemplate = function(pic) {
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
    //console.log(img.src);
    return nodeClone;
  };

  // Функуция отрисовки шаблонов
  var renderPictures = function(pictures) {
    pictures.forEach(function(pic) {
      picturesContainer.appendChild(addDataInTemplate(pic));

    });
  };

  load(PIC_URL, renderPictures);
})();
