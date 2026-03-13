import express from "express";
import morgan from "morgan";
import userRoute from "./routes/user/user.route.js";
const app = express();

app.use(morgan("dev"));

app.use("/", userRoute);

export default app;
