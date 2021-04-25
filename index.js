import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import helmet from "helmet";
import morgan from "morgan";

import connectDB from "./src/config/dbConfig.js";
import { errorHandler, notFound } from "./src/middlewares/errorMiddlewares.js";
import userRoute from "./src/routes/userRoute";

dotenv.config();
// connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(helmet());
process.env.NODE_ENV === "DEVELOPMENT" && app.use(morgan("dev"));

app.use("/", (req, res) => res.send("hello world"));
app.use("/api/v1/users", userRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(
    `server has started in ${process.env.NODE_ENV} mode on PORT:${PORT}`.bgBlue
      .black
  )
);
