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
    return nodeClone;
};
