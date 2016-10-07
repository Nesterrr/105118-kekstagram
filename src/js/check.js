'use strict'

function getMessage(a,b) {
  var message;
  var lastCheck = [];
  
  if (typeof a === "boolean") {
    if (a == true) {
      message = "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
      lastCheck[0] = message;
    }
    else {
      message = "Переданное GIF-изображение не анимировано";
      lastCheck[1] = message;
    }
  }

  if (typeof a === "number") {
    message = "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " атрибутов";
    lastCheck[2] = message;
  }

  if (Array.isArray(a) && !Array.isArray(b)) {	
    var amountOfRedPoints = 0;

    for(var i = 0; i < a.length; i++) {
      amountOfRedPoints += a[i];
    }
    message = "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
    lastCheck[3] = message;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    var artifactsSquare = 0;

    for (var i = 0; i < a.length; i++) {
      artifactsSquare += a[i] * b[i];
    }
    message = "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей";
    lastCheck[4] = message;
  }

  if(message !== lastCheck[0] && message !== lastCheck[1] && message !== lastCheck[2] && message !== lastCheck[3] && message !== lastCheck[4]) {
  	message = "Переданы некорректные данные";
  }
  
  return message;
}
