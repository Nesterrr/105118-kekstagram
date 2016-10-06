'use strict'

var message;

function getMessage(a,b) {
  if (typeof(a) == "boolean") {
    if (a == true) {
      message = "Переданное GIF-изображение анимировано и содержит " + b + " кадров";
    }
    else {
      message = "Переданное GIF-изображение не анимировано";
    }
  }

  if (typeof(a) == "number") {
    message = "Переданное SVG-изображение содержит " + a + " объектов и " + b * 4 + " атрибутов";
  }

  if (Array.isArray(a)) {
    var i = 0;
    var amountOfRedPoints = 0;

    while (i < a.length) {
      amountOfRedPoints += a[i];
      i++;
    }
    message = "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    var artifactsSquare = 0;

    for (var i = 0; i < a.length; i++) {
      artifactsSquare += a[i] * b[i];
    }
    message = "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей";
  }

  return message;
}

getMessage();
