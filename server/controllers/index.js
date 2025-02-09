const path = require("path");
const fs = require("fs");

const headHtml = getHtmlContent("head.html");
const footHtml = getHtmlContent("foot.html");

function getHtmlContent(view, rootDir = "views") {
  return fs.readFileSync(path.resolve(rootDir, view));
}

module.exports.mainCtrl = (req, res) => {
  let content;

  switch (req.url) {
    case "/home":
      content = headHtml + getHtmlContent("home.html") + footHtml;
      break;
    case "/contact":
      content = headHtml + getHtmlContent("contact.html") + footHtml;
      break;
    case "/favicon.ico":
      content = getHtmlContent("favicon.ico", "");
      break;
    case "/style.css":
      content = getHtmlContent("style.css");
      break;
    default:
      return res.end();
  }

  res.end(content);
};
