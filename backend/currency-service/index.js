import express from "express";
import { currencyRoutes } from "./routes/currencyRoutes.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5001;

app.use(express.json());

app.use("/api/currency", currencyRoutes);

app.listen(PORT, () => {
  console.log(`Currency Service running on port ${PORT}`);
});
