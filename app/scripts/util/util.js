'use strict';


module.exports = {
  debounce: (function () {
    var timeout;
    return function debounce(delay, fun) {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(function () {
        fun();
        timeout = null;
      }, delay);
    }
  })()
};