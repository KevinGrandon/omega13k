$.assign($, {
  getElementById: (id) => $.document.getElementById(id),
  createElement: (type) => $.document.createElement(type),
  appendChild: (p, c) => p.appendChild(c) && p,
  removeChild: (p, c) => p.removeChild(c) && p,
  remove: (c) => $.removeChild(c.parentNode, c) && c,
  write: (el, txt = '') => {el.innerHTML = txt; return el},

  _canvas: null,
  getCanvas: () => {
      let val = $._canvas;
      if (!val) {
          $._canvas = val = $.getElementById('f');
      }
      return val;
  },
});
