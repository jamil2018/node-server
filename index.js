import express from "express";
import dotenv from "dotenv";
import colors from "colors";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use("/", (req, res) => res.send("hello world"));

app.listen(PORT, () =>
  console.log(
    `server has started in ${process.env.NODE_ENV} mode on PORT:${process.env.PORT}`
      .bgBlue.black
  )
);
