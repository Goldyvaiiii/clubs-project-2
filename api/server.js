import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import eventRoute from "./routes/event.route.js";
import userRoute from "./routes/user.route.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // React dev server
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/events", eventRoute);
app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.json({ message: "API is running" });
});

app.use((err, req, res, next) => {
  console.error("Error middleware:", err);
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  res.status(status).json({ message });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on ${process.env.PORT}`);
});
