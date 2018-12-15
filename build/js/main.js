"use strict";

var anchors = document.querySelectorAll('a[href*="#"]');
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var anchor = _step.value;
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      var blockID = anchor.getAttribute('href');
      document.querySelector('' + blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    });
  };

  for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var navLink = document.getElementById('main-nav').querySelectorAll('a');
navLink.forEach(function (element, index) {
  element.addEventListener('click', function () {
    var nav = document.getElementById('main-nav');

    if (nav.classList.contains('nav-modal')) {
      document.getElementById('burger').firstChild.classList.remove('burger-active');
      nav.classList.remove('nav-modal');
      nav.classList.add('main-nav');
    }
  });
});
document.querySelector('.burger-wraper').addEventListener('click', function () {
  toggleNav();
});

function toggleNav() {
  document.getElementById('burger').firstChild.classList.toggle('burger-active');
  document.getElementById('main-nav').classList.toggle('nav-modal');
  document.getElementById('main-nav').classList.toggle('main-nav');
}