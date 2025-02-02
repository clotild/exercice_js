const https = require("https");

https.get(
  "https://raw.githubusercontent.com/torvalds/linux/refs/heads/master/MAINTAINERS",
  (res) => {
    res.on("data", (data) => {
      console.log(data + "");
    });
  }
);
