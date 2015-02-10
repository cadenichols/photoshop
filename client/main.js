'use strict';

$(document).ready(init);

function init() {
  $('#add-color').click(addSelectedColor);
  $('#add-random-colors').click(addRandomColor);
}

function addSelectedColor() {
  var color = $('#color').val();
  addColorBox(color);
}

function addRandomColor() {
  var qty = $('#quantity').val() * 1;
  for (var i = 0; i < qty; i++) {
    addColorBox(rgbString(rnd(), rnd(), rnd()));
  }
}

function addColorBox(color) {
  var $box = $('<div>');
  $box.css('background-color', color);
  $box.addClass('box');
  $('#colors').append($box);
}

function rgbString(r, g, b) {
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function rnd() {
  return Math.floor(Math.random() * 256);
}
