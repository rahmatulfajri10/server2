const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const fotoRouter = require("./app/api/foto/route");
const errorHandlerMiddleware = require("./app/middlewares/handler-error");

app.use(logger("dev"));
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome To API " });
});

app.use("/v1", fotoRouter);
app.use(errorHandlerMiddleware);

module.exports = app;
app.use(express.urlencoded({ extended: false }));
