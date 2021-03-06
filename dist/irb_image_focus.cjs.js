'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

var links = function links(selector, props) {
  var defs = {
    bgColor: '#d4d4d4',
    inputFile: 'irb_image_focus',
    inputPos: 'irb_image_focus_size',
    accept: ['png', 'jpg', 'jpeg'],
    minSize: {
      width: 300,
      height: 300
    },
    loading: {
      svg: '<svg width="80px" height="80px" viewBox="0 0 80 80" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="picture" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><rect id="ViewBox" x="-1" y="4" width="80" height="80"></rect><path d="M25.6666667,28.691358 C25.6666667,24.8730931 22.5713514,21.7777778 18.7530864,21.7777778 C14.9348215,21.7777778 11.8395062,24.8730931 11.8395062,28.691358 C11.8395062,32.509623 14.9348215,35.6049383 18.7530864,35.6049383 C22.5713514,35.6049383 25.6666667,32.509623 25.6666667,28.691358 L25.6666667,28.691358 Z M15.0658436,28.691358 C15.0658436,26.6549501 16.7166785,25.0041152 18.7530864,25.0041152 C20.7894944,25.0041152 22.4403292,26.6549501 22.4403292,28.691358 C22.4403292,30.727766 20.7894944,32.3786008 18.7530864,32.3786008 C16.7166785,32.3786008 15.0658436,30.727766 15.0658436,28.691358 L15.0658436,28.691358 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path><path d="M37.221566,50.0118607 L28.3622083,41.2738065 C27.4983379,40.426819 26.103155,40.426819 25.2392847,41.2738065 L11.8395062,54.6648746 L11.8395062,60.8470479 L26.8782659,46.0142009 L34.1650876,53.0920248 L25.8594397,61.2839506 L31.9502481,61.2839506 L50.6656413,42.8248111 L65.1728395,57.0678395 L65.1728395,50.9075112 L52.3046225,38.2154875 C51.4407521,37.3685001 50.0455692,37.3685001 49.1816989,38.2154875 L37.221566,50.0118607 Z" id="Path" fill="#000000" fill-rule="nonzero"></path><path d="M70.6049383,33.3777778 L70.6049383,70.6666667 L8.38271605,70.6666667 L8.38271605,17.3333333 L49.4938272,17.3333333 C49.4996441,15.8305556 49.7089536,14.3354876 50.1160494,12.8888889 L8.38271605,12.8888889 C5.92811716,12.8888889 3.9382716,14.8787344 3.9382716,17.3333333 L3.9382716,70.6666667 C3.9382716,73.1212656 5.92811716,75.1111111 8.38271605,75.1111111 L70.6049383,75.1111111 C73.0595372,75.1111111 75.0493827,73.1212656 75.0493827,70.6666667 L75.0493827,31.4222222 C73.6720646,32.2889669 72.1744796,32.9479043 70.6049383,33.3777778 Z" id="Path" fill="#000000" fill-rule="nonzero"></path><circle id="Oval" fill="#000000" fill-rule="nonzero" cx="65.6666667" cy="17.3333333" r="11.3580247"></circle><polygon id="Path" points="-1 4 79 4 79 84 -1 84"></polygon></g></svg>',
      width: 80,
      height: 80
    },
    close: {
      svg: '<svg width="40px" height="40px" viewBox="0 0 40 40" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="close" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="ant-design:close-square-filled"><rect id="ViewBox" x="0" y="0" width="40" height="40"></rect><path d="M34.375,4.375 L5.625,4.375 C4.93359375,4.375 4.375,4.93359375 4.375,5.625 L4.375,34.375 C4.375,35.0664062 4.93359375,35.625 5.625,35.625 L34.375,35.625 C35.0664062,35.625 35.625,35.0664062 35.625,34.375 L35.625,5.625 C35.625,4.93359375 35.0664062,4.375 34.375,4.375 Z M26.4101562,25.6992188 C26.5820312,25.9023438 26.4375,26.2109375 26.171875,26.2109375 L23.8710938,26.2109375 C23.6875,26.2109375 23.5117188,26.1289062 23.390625,25.9882812 L20,21.9453125 L16.609375,25.9882812 C16.4921875,26.1289062 16.3164062,26.2109375 16.1289062,26.2109375 L13.828125,26.2109375 C13.5625,26.2109375 13.4179688,25.9023438 13.5898437,25.6992188 L18.3671875,20 L13.5898437,14.3007813 C13.5112207,14.2083243 13.4936637,14.0785376 13.5448959,13.9685143 C13.5961281,13.858491 13.7067602,13.7883954 13.828125,13.7890578 L16.1289062,13.7890578 C16.3125,13.7890578 16.4882812,13.8710938 16.609375,14.0117188 L20,18.0546875 L23.390625,14.0117188 C23.5078125,13.8710938 23.6835937,13.7890578 23.8710937,13.7890578 L26.171875,13.7890578 C26.4375,13.7890578 26.5820312,14.0976562 26.4101562,14.3007813 L21.6328125,20 L26.4101562,25.6992188 L26.4101562,25.6992188 Z" id="Shape" fill="#000000" fill-rule="nonzero"></path></g></g></svg>',
      width: 40,
      height: 40
    },
    focus: {
      width: 100,
      height: 100,
      border: 'solid 2px black',
      borderColor: '#00000066'
    }
  };
  props = _typeof(props) === 'object' ? _objectSpread2(_objectSpread2({}, defs), props) : defs;

  var inPercent = function inPercent(v, t) {
    return v / t * 100;
  };

  var inNumber = function inNumber(p, t) {
    return (p > 100 ? 100 : p) / 100 * t;
  };

  var insideContainment = function insideContainment(x, y, c) {
    return !(x < c.x || x > c.x + c.width || y < c.y || y > c.y + c.height);
  };

  document.querySelectorAll(selector).forEach(function (w) {
    var pos = {
      x: 50,
      y: 50
    };
    var isDown = false;
    w.innerHTML = '';
    w.innerText = '';
    w.style.position = 'relative';
    w.style.height = w.clientWidth + 'px';
    w.style.display = 'flex';
    w.style.alignItems = 'center';
    w.style.justifyContent = 'center';
    w.style.backgroundSize = 'contain';
    w.style.backgroundColor = props.bgColor;
    var img = w.getBoundingClientRect();

    var updatePosition = function updatePosition(e) {
      if (!isDown) {
        return;
      }

      var x = Math.round(inPercent(e.clientX - img.x, img.width));
      var y = Math.round(inPercent(e.clientY - img.y, img.height));
      pos.x = x <= 0 ? 0 : x >= 100 ? 100 : x;
      pos.y = y <= 0 ? 0 : y >= 100 ? 100 : y;
    };

    var inputPos = document.createElement('input');
    inputPos.type = 'text';
    inputPos.name = props.inputPos;
    ['opacity', 'width', 'height', 'padding', 'margin'].map(function (k) {
      return inputPos.style[k] = 0;
    });
    w.appendChild(inputPos);
    var focus = document.createElement('div');
    focus.style.width = props.focus.width + 'px';
    focus.style.height = props.focus.height + 'px';
    focus.style.border = props.focus.border;
    focus.style.backgroundColor = props.focus.borderColor;
    focus.style.display = 'none';
    focus.style.cursor = 'pointer';
    focus.style.position = 'absolute';

    var updateDot = function updateDot() {
      if (!isDown) {
        return;
      }

      focus.style.left = inNumber(pos.x, img.width) - focus.offsetWidth / 2 + 'px';
      focus.style.top = inNumber(pos.y, img.height) - focus.offsetHeight / 2 + 'px';
    };

    var handleDotMove = function handleDotMove(e) {
      if (!isDown) {
        return;
      }

      if (!insideContainment(e.clientX, e.clientY, w.getBoundingClientRect())) {
        return;
      }

      updatePosition(e);
      updateDot();
    };

    focus.addEventListener('mousedown', function (e) {
      img = w.getBoundingClientRect();

      if (!insideContainment(e.clientX, e.clientY, img)) {
        return;
      }

      isDown = true;
      updatePosition(e);
      updateDot();
    }, true);
    /*
    w.addEventListener('mousedown', (e) => {
        e.stopPropagation();
        isDown = true;
        const x =  Math.round(inPercent(e.offsetX, e.target.clientWidth));
        const y = Math.round(inPercent(e.offsetY, e.target.clientHeight));
        pos.x = x <= 0 ? 0 : (x >= 100 ? 100 : x);
        pos.y = y <= 0 ? 0 : (y >= 100 ? 100 : y);
        updateDot()
    }, true);
    */

    focus.addEventListener('mouseup', function (e) {
      isDown = false;
      inputPos.value = pos.x + 'x' + pos.y;
    }, true);
    document.addEventListener('mouseup', function (e) {
      isDown = false;
      inputPos.value = pos.x + 'x' + pos.y;
    }, true);
    focus.addEventListener('mousemove', handleDotMove, true);
    w.appendChild(focus);
    var loadingBtn = document.createElement('div');
    loadingBtn.innerHTML = props.loading.svg;
    loadingBtn.style.width = props.loading.width + 'px';
    loadingBtn.style.height = props.loading.height + 'px';
    loadingBtn.style.cursor = 'pointer';

    loadingBtn.onclick = function () {
      input.click();
    };

    w.appendChild(loadingBtn);
    var closeBtn = document.createElement('div');
    closeBtn.innerHTML = props.close.svg;
    closeBtn.style.width = props.close.width + 'px';
    closeBtn.style.height = props.close.height + 'px';
    closeBtn.style.cursor = 'pointer';
    closeBtn.style.display = 'none';
    closeBtn.style.position = 'absolute';
    closeBtn.style.right = '0px';
    closeBtn.style.top = '0px';

    closeBtn.onclick = function () {
      w.style.backgroundImage = null;
      loadingBtn.style.display = 'block';
      closeBtn.style.display = 'none';
      focus.style.display = 'none';
      w.style.height = w.clientWidth + 'px';
      input.value = '';
      pos = {
        x: 50,
        y: 50
      };
      focus.style.left = w.clientWidth / 2 - props.focus.width / 2 + 'px';
      focus.style.top = w.clientHeight / 2 - props.focus.height / 2 + 'px';
    };

    w.appendChild(closeBtn);
    var input = document.createElement('input');
    input.type = 'file';
    input.name = props.inputFile;
    input.accept = props.accept.map(function (e) {
      return 'image/' + e;
    }).join(', ');
    ['opacity', 'width', 'height', 'padding', 'margin'].map(function (k) {
      return input.style[k] = 0;
    });

    input.onchange = function (e) {
      if (e.target.files && e.target.files[0]) {
        var _URL = window.URL || window.webkitURL;

        var img2 = new Image();

        var objectUrl = _URL.createObjectURL(e.target.files[0]);

        img2.onload = function (e) {
          var height = parseInt(w.clientWidth * (img2.height / img2.width) + '');
          w.style.height = height + 'px';
          img = w.getBoundingClientRect();
          pos = {
            x: 50,
            y: 50
          };
          focus.style.left = w.clientWidth / 2 - props.focus.width / 2 + 'px';
          focus.style.top = height / 2 - props.focus.height / 2 + 'px';
        };

        img2.src = objectUrl;
        var reader = new FileReader();

        reader.onload = function (e) {
          w.style.backgroundImage = 'url(' + e.target.result + ')';
          loadingBtn.style.display = 'none';
          closeBtn.style.display = 'block';
          focus.style.display = 'block';
        };

        reader.readAsDataURL(e.target.files[0]);
      }
    };

    w.appendChild(input);
  });
};

var link = links;

exports.link = link;
