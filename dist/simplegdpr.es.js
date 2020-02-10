function SimpleGDPR (options) {
  this.active = true;
  var self = this;
  var defaultGroup = buildDefaultMessage.call(this);
  var defaults = {
    title: 'Cookies & Privacy Policy',
    message: defaultGroup,
    link: null,
    buttonText: 'Agree',
    icons: true,
    theme: 'light',
    animation: 'fade',
    float: 'bottom-right',
    callback: function () {
      self.close();
    },
    openOnInit: true,
    id: {
      button: null,
      box: null,
    },
  };
  this.opts = extend({}, defaults, options);
  build.call(this);
}

SimpleGDPR.prototype.isActive = function () {
  return this.active;
};

SimpleGDPR.prototype.close = function () {
  
  var b;

  if (this.opts.id.box !== null && typeof this.opts.id.box === 'string') {
    b = document.getElementById(this.opts.id.box);
  } else {
    b = document.getElementById('sgdpr-box');
  }

  if (this.opts.animation === 'slide') {
    b.classList.add('sgdpr-slideout');
    setTimeout(function () {
      b.style.display = 'none';
      b.classList.remove('sgdpr-slideout');
    }, 500);
  } else if (this.opts.animation === 'fade' || this.opts.animation === true) {
    b.classList.add('sgdpr-fadeout');
    setTimeout(function () {
      b.style.display = 'none';
      b.classList.remove('sgdpr-fadeout');
    }, 500);
  }
  this.active = false;
};

SimpleGDPR.prototype.open = function () {

  var b;

  if (this.opts.id.box !== null && typeof this.opts.id.box === 'string') {
    b = document.getElementById(this.opts.id.box);
  } else {
    b = document.getElementById('sgdpr-box');
  }

  b.style.display = '';

  if (this.opts.animation === 'slide') {
    b.classList.add('sgdpr-slidein');
    setTimeout(function () {
      b.classList.remove('sgdpr-slidein');
    }, 500);
  } else if (this.opts.animation === 'fade' || this.opts.animation === true) {
    b.classList.add('sgdpr-fadein');
    setTimeout(function () {
      b.classList.remove('sgdpr-fadein');
    }, 500);
  }
  this.active = true;
};

SimpleGDPR.prototype.destroy = function () {
  var b = document.getElementById('sgdpr-box');
  b.parentElement.removeChild(b);
};

SimpleGDPR.prototype.setContent = function (el) {
  var b = document.getElementById('sgdpr-box');
  while (b.firstChild) {
    b.removeChild(b.firstChild);
  }
  if (el instanceof HTMLElement) {
    b.appendChild(el);
  } else {
    console.warn('SimpleGDPR: setContent can only take HTMLElement objects.');
  }
};

SimpleGDPR.prototype.setCallback = function (f) {
  var b = document.getElementById('sgdpr-button');
  if (b !== null) {
    if (typeof f === 'function') {
      b.removeEventListener('click', this.opts.callback);
      b.addEventListener('click', f);
    } else {
      console.warn('setCallback() must receive a function.');
    }
  } else {
    console.warn('setCallback() button not found. This function will not work if setContent() was called.');
  }
};

SimpleGDPR.prototype.relocate = function (f) {
  document.addEventListener("DOMContentLoaded", function () {
    var box = document.getElementById('sgdpr-box');
    box.classList.remove('sgdpr-bottom-right', 'sgdpr-bottom-left', 'sgdpr-top-right', 'sgdpr-top-left');
    floatHandler.call(this, box, f);
  });
};

SimpleGDPR.prototype.appendTo = function (el) {
  document.addEventListener("DOMContentLoaded", function () {
    var box = document.getElementById('sgdpr-box');
    box.classList.remove('sgdpr-bottom-right', 'sgdpr-bottom-left', 'sgdpr-top-right', 'sgdpr-top-left');
    var parent = document.getElementById(el);
    parent.appendChild(box);
  });
};

function buildDefaultMessage() {
  var message = document.createElement('span');
  message.innerText = 'We use browser cookies to personalize content and Ads, to provide social media features and analyse traffic. To use our site, you must agree to our ';
  var policy = document.createElement('a');
  policy.innerText = 'Privacy Policy.';
  policy.className = 'sgdpr-policy';
  var group = document.createElement('span');
  group.appendChild(message);
  group.appendChild(policy);
  return group;
}

function build() {
  var box = document.createElement('div');
  box.className = 'sgdpr-box';

  if (this.opts.id.box !== null && typeof this.opts.id.box === 'string') {
    box.id = this.opts.id.box;
  } else {
    box.id = 'sgdpr-box';
  }

  if (this.opts.openOnInit === false) {
    box.style.display = 'none';
  }

  var up = document.createElement('div');
  up.id = 'sgdpr-title-container';

  var title = document.createElement('div');
  title.className = 'sgdpr-title';
  title.innerText = this.opts.title;

  var msg = document.createElement('div');
  msg.className = 'sgdpr-message';

  if (typeof this.opts.message === 'string') {
    msg.innerText = this.opts.message;
    if (this.opts.link !== null) {
      console.warn('SimpleGDPR: Link will not work when message property is passed as a String.');
    }

  } else if (this.opts.message instanceof HTMLElement) {
    msg.appendChild(this.opts.message);
    if (this.opts.link !== null) {
      if (typeof this.opts.link === 'string' || typeof this.opts.link === 'function') {
        // Look for anchor elements with sgdpr-policy in class.
        var els = msg.getElementsByTagName('a');
        if (els.length > 0) {
          for (var i = 0; i < els.length; i++) {
            if (els[i].classList.contains('sgdpr-policy')) {
              if (typeof this.opts.link === 'string') {
                els[i].href = this.opts.link;
              } else if (typeof this.opts.link === 'function') {
                els[i].addEventListener('click', this.opts.link);
              }
            }
          }
        }
      } else {
        console.warn('SimpleGDPR: You can only pass Strings or Functions into the link property.');
      }
    }
  }

  var button = document.createElement('button');
  button.className = 'sgdpr-button';

  if (this.opts.id.button !== null && typeof this.opts.id.button === 'string') {
    button.id = this.opts.id.button;
  } else {
    button.id = 'sgdpr-button';
  }

  // add option
  var text = document.createElement('div');
  text.className = 'sgdpr-text';
  text.innerText = this.opts.buttonText;

  var mob = document.createElement('div');
  mob.className = 'sgdpr-yes-mobile';

  if (this.opts.icons) {
    var info = document.createElement('div');
    info.className = 'sgdpr-info-icon';
    info.id = 'sgdpr-info-icon';
    if (this.opts.theme == 'dark') {
      info.classList.add('sgdpr-info-icon-dark');
    }
    up.appendChild(info);
  }

  up.appendChild(title);
  button.appendChild(text);
  button.appendChild(mob);
  box.appendChild(up);
  box.appendChild(msg);
  box.appendChild(button);

  styleHandler.call(this, box, title, msg, button, text);
  floatHandler.call(this, box, this.opts.float);

  if (this.opts.icons) {
    var yes = document.createElement('div');
    yes.className = 'sgdpr-yes-icon';
    button.appendChild(yes);
  }

  button.addEventListener('click', this.opts.callback);
}

function styleHandler(box, title, msg, button, text) {
  var theme = this.opts.theme.toLowerCase();
  var float = this.opts.float.toLowerCase();

  if (this.opts.icons) {
    title.style.paddingLeft = '5px';
    text.style.paddingRight = '5px';
  }
  switch (theme) {
    case 'light':
      box.classList.add('sgdpr-box-light');
      button.classList.add('sgdpr-button-light');
      break;

    case 'modern':
      box.classList.add('sgdpr-box-modern');
      button.classList.add('sgdpr-button-modern');
      break;

    case 'dark':
      box.classList.add('sgdpr-box-dark');
      button.classList.add('sgdpr-button-dark');
      break;

    case 'material':
      box.classList.add('sgdpr-box-material');
      button.classList.add('sgdpr-button-material');
      title.classList.add('sgdpr-title-material');
    default:
      break;
  }
}

function floatHandler(box, f) {

  // Add support for top-center, bottom-center, and center;
  if (f === 'bottom-right') {
    box.classList.add('sgdpr-bottom-right');
    document.body.prepend(box);
  } else if (f === 'bottom-left') {
    box.classList.add('sgdpr-bottom-left');
    document.body.prepend(box);
  } else if (f === 'top-right') {
    box.classList.add('sgdpr-top-right');
    document.body.prepend(box);
  } else if (f === 'top-left') {
    box.classList.add('sgdpr-top-left');
    document.body.prepend(box);
  } else {
    document.addEventListener("DOMContentLoaded", function () {
      try {
        var el = document.getElementById(f);
        el.appendChild(box);
      } catch (e) {
        console.error('Element with id ' + f + ' not found. ' + f, e.message);
      }
    });
  }
}

// Utility method to extend defaults with user options.
function extend() {
  for (var i = 1; i < arguments.length; i++) {
    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key)) {
        arguments[0][key] = arguments[i][key];
      }
    }
  }
  return arguments[0];
}

export default SimpleGDPR;
