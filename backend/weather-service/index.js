import express from "express";
import { weatherRoutes } from "./routes/weatherRoutes.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.use("/api/weather", weatherRoutes);

app.listen(PORT, () => {
  console.log(`Weather Service running on port ${PORT}`);
});
