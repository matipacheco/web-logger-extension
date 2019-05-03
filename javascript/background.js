const constants = require("../utils/constants");

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    let breakLine = "---------------------------" + "\n";
    let timeStamp = new Date().toLocaleString()   + "\n";
    let method    = "METHOD: "  + details.method  + "\n";
    let type      = "TYPE: "    + details.type    + "\n";
    let url       = "URL: "     + details.url     + "\n";
    alert(breakLine + timeStamp + method + type + url);
  },
  {
    urls: [
      "<all_urls>"
    ]
  },
  []
);