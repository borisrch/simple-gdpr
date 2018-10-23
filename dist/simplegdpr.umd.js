!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.SimpleGDPR=e()}(this,function(){"use strict";function t(t){this.active=!0;var e=this,s={title:"Cookies & Privacy Policy",message:function(){var t=document.createElement("span");t.innerText="We use browser cookies to personalize content and Ads, to provide social media features and analyse traffic. To use our site, you must agree to our ";var e=document.createElement("a");e.innerText="Privacy Policy.",e.className="sgdpr-policy";var s=document.createElement("span");return s.appendChild(t),s.appendChild(e),s}.call(this),link:null,icons:!0,theme:"light",animation:"fade",float:"bottom-right",callback:function(){e.close()},openOnInit:!0,id:{button:null,box:null}};this.opts=function(){for(var t=1;t<arguments.length;t++)for(var e in arguments[t])arguments[t].hasOwnProperty(e)&&(arguments[0][e]=arguments[t][e]);return arguments[0]}({},s,t),function(){var t=document.createElement("div");t.className="sgdpr-box",null!==this.opts.id.box&&"string"==typeof this.opts.id.box?t.id=this.opts.id.box:t.id="sgdpr-box";!1===this.opts.openOnInit&&(t.style.display="none");var e=document.createElement("div");e.id="sgdpr-title-container";var s=document.createElement("div");s.className="sgdpr-title",s.innerText=this.opts.title;var o=document.createElement("div");if(o.className="sgdpr-message","string"==typeof this.opts.message)o.innerText=this.opts.message,null!==this.opts.link&&console.warn("SimpleGDPR: Link will not work when message property is passed as a String.");else if(this.opts.message instanceof HTMLElement&&(o.appendChild(this.opts.message),null!==this.opts.link))if("string"==typeof this.opts.link||"function"==typeof this.opts.link){var n=o.getElementsByTagName("a");if(0<n.length)for(var i=0;i<n.length;i++)n[i].classList.contains("sgdpr-policy")&&("string"==typeof this.opts.link?n[i].href=this.opts.link:"function"==typeof this.opts.link&&n[i].addEventListener("click",this.opts.link))}else console.warn("SimpleGDPR: You can only pass Strings or Functions into the link property.");var d=document.createElement("button");d.className="sgdpr-button",null!==this.opts.id.button&&"string"==typeof this.opts.id.button?d.id=this.opts.id.button:d.id="sgdpr-button";var a=document.createElement("div");a.className="sgdpr-text",a.innerText="Agree";var l=document.createElement("div");if(l.className="sgdpr-yes-mobile",this.opts.icons){var r=document.createElement("div");r.className="sgdpr-info-icon",r.id="sgdpr-info-icon","dark"==this.opts.theme&&r.classList.add("sgdpr-info-icon-dark"),e.appendChild(r)}if(e.appendChild(s),d.appendChild(a),d.appendChild(l),t.appendChild(e),t.appendChild(o),t.appendChild(d),function(t,e,s,o,n){var i=this.opts.theme.toLowerCase();switch(this.opts.float.toLowerCase(),this.opts.icons&&(e.style.paddingLeft="5px",n.style.paddingRight="5px"),i){case"light":t.classList.add("sgdpr-box-light"),o.classList.add("sgdpr-button-light");break;case"modern":t.classList.add("sgdpr-box-modern"),o.classList.add("sgdpr-button-modern");break;case"dark":t.classList.add("sgdpr-box-dark"),o.classList.add("sgdpr-button-dark");break;case"material":t.classList.add("sgdpr-box-material"),o.classList.add("sgdpr-button-material"),e.classList.add("sgdpr-title-material")}}.call(this,t,s,o,d,a),c.call(this,t,this.opts.float),this.opts.icons){var p=document.createElement("div");p.className="sgdpr-yes-icon",d.appendChild(p)}d.addEventListener("click",this.opts.callback)}.call(this)}function c(t,e){"bottom-right"===e?(t.classList.add("sgdpr-bottom-right"),document.body.prepend(t)):"bottom-left"===e?(t.classList.add("sgdpr-bottom-left"),document.body.prepend(t)):"top-right"===e?(t.classList.add("sgdpr-top-right"),document.body.prepend(t)):"top-left"===e?(t.classList.add("sgdpr-top-left"),document.body.prepend(t)):document.addEventListener("DOMContentLoaded",function(){try{document.getElementById(e).appendChild(t)}catch(t){console.error("Element with id "+e+" not found. "+e,t.message)}})}return t.prototype.isActive=function(){return this.active},t.prototype.close=function(){var t;t=null!==this.opts.id.box&&"string"==typeof this.opts.id.box?document.getElementById(this.opts.id.box):document.getElementById("sgdpr-box"),"slide"===this.opts.animation?(t.classList.add("sgdpr-slideout"),setTimeout(function(){t.style.display="none",t.classList.remove("sgdpr-slideout")},500)):"fade"!==this.opts.animation&&!0!==this.opts.animation||(t.classList.add("sgdpr-fadeout"),setTimeout(function(){t.style.display="none",t.classList.remove("sgdpr-fadeout")},500)),this.active=!1},t.prototype.open=function(){var t;(t=null!==this.opts.id.box&&"string"==typeof this.opts.id.box?document.getElementById(this.opts.id.box):document.getElementById("sgdpr-box")).style.display="","slide"===this.opts.animation?(t.classList.add("sgdpr-slidein"),setTimeout(function(){t.classList.remove("sgdpr-slidein")},500)):"fade"!==this.opts.animation&&!0!==this.opts.animation||(t.classList.add("sgdpr-fadein"),setTimeout(function(){t.classList.remove("sgdpr-fadein")},500)),this.active=!0},t.prototype.destroy=function(){var t=document.getElementById("sgdpr-box");t.parentElement.removeChild(t)},t.prototype.setContent=function(t){for(var e=document.getElementById("sgdpr-box");e.firstChild;)e.removeChild(e.firstChild);t instanceof HTMLElement?e.appendChild(t):console.warn("SimpleGDPR: setContent can only take HTMLElement objects.")},t.prototype.setCallback=function(t){var e=document.getElementById("sgdpr-button");null!==e?"function"==typeof t?(e.removeEventListener("click",this.opts.callback),e.addEventListener("click",t)):console.warn("setCallback() must receive a function."):console.warn("setCallback() button not found. This function will not work if setContent() was called.")},t.prototype.relocate=function(e){document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("sgdpr-box");t.classList.remove("sgdpr-bottom-right","sgdpr-bottom-left","sgdpr-top-right","sgdpr-top-left"),c.call(this,t,e)})},t.prototype.appendTo=function(e){document.addEventListener("DOMContentLoaded",function(){var t=document.getElementById("sgdpr-box");t.classList.remove("sgdpr-bottom-right","sgdpr-bottom-left","sgdpr-top-right","sgdpr-top-left"),document.getElementById(e).appendChild(t)})},t});
