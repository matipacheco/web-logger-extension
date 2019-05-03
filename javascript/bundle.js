(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const constants = require("../utils/constants");

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    let breakLine = "---------------------------" + "\n";
    let timeStamp = new Date().toLocaleString()   + "\n";
    let method    = "METHOD: "  + details.method  + "\n";
    let type      = "TYPE: "    + details.type    + "\n";
    let url       = "URL: "     + details.url     + "\n";
    alert(constants.apiURL);
    //alert(breakLine + timeStamp + method + type + url);
  },
  {
    urls: [
      "<all_urls>"
    ]
  },
  []
);
},{"../utils/constants":2}],2:[function(require,module,exports){
module.exports.apiURL = "https://web-logger-extension-api.herokuapp.com/";
},{}]},{},[1]);
