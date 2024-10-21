import express from "express";
import { sportsRoutes } from "./routes/sportsRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use("/api/sports", sportsRoutes);

app.listen(PORT, () => {
  console.log(`Sports Service running on port ${PORT}`);
});
