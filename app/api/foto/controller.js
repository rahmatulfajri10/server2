const { StatusCodes } = require("http-status-codes");

const create = async (req, res, next) => {
  try {
    res.status(StatusCodes.ACCEPTED).json({
      status: "success",
      data: {
        kamera: req.files.kamera[0].filename,
        screen: req.files.screen[0].filename,
      },
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  create,
};
