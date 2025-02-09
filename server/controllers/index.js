const { router } = require("../../routing");

module.exports.mainCtrl = (req, res) => {
  let content = router(req.url);

  res.end(content);
};
