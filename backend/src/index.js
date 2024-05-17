const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");
const PORT = 8080;
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../uploads")));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("연결완료");
  })
  .catch((err) => {
    console.log(err);
  });

// app.get("/", (req, res, next) => {
//   setImmediate(() => {
//     next(new Error("it is an error"));
//   });
// });

app.get("/", (req, res) => {
  res.send("안뇽안뇽");
});

app.use("/users", require("./routes/users"));
app.use("/products", require("./routes/products"));

app.use((error, req, res, next) => {
  res.status(err.status || 500);
  res.send(error.message || "서버에서 에러가 발생함");
});

app.listen(PORT, () => {
  console.log(`${PORT}에서 실행`);
});
