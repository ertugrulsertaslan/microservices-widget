import express from "express";
import { newsRoutes } from "./routes/newsRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5003;

app.use(express.json());

app.use("/api/news", newsRoutes);

app.listen(PORT, () => {
  console.log(`News Service running on port ${PORT}`);
});
