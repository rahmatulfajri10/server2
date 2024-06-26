const express = require("express");
const router = express();
const upload = require("../../middlewares/multer");
const { create } = require("./controller");

router.post(
  "/foto",
  upload.uploadMiddleware.fields([
    { name: "kamera", maxCount: 1 },
    { name: "screen", maxCount: 1 },
  ]),
  create
);

module.exports = router;
