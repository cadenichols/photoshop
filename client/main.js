'use strict';

$(document).ready(init);

function init() {
  $('#add-color').click(addSelectedColor);
  $('#add-random-colors').click(addRandomColor);
  $('#start').click(clickStart);
  $('#stop').click(clickStop);
  $('#add-canvas').click(clickAddCanvas);
  $('#colors').on('click', '.box', clickBox);
  $('#canvas').on('mouseenter', '.tiny', enterTiny);

}

var colors = [];
var timer;
var index = 0;

function enterTiny() {
  var color = $('#selected').css('background-color');
  $(this).css('background-color', color);
}

function clickAddCanvas() {
  var size = $('#canvas-size').val() * 1;
  for (var i = 0; i < size; i++) {
    var $tiny = $('<div>');
    $tiny.addClass('tiny');
    $('#canvas').append($tiny);
  }
}

function clickBox() {
  var color = $(this).css('background-color');
  $('#selected').css('background-color', color);
}

function clickStart() {
  fillColorArray();
  clickStop();
  timer = setInterval(looping, 200);
}

function looping() {
  if (index === colors.length) {
    index = 0;
    fillColorArray();
  }
  $('body').css('background-color', colors[index]);
  index++;
}

function clickStop() {
  clearInterval(timer);
}

function fillColorArray() {
  colors = $('.box').toArray().map(function(element) {
    return $(element).css('background-color');
  });
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
