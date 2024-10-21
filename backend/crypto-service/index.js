import express from "express";
import { cryptoRoutes } from "./routes/cryptoRoutes.js";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT || 5002;

app.use(express.json());

app.use("/api/crypto", cryptoRoutes);

app.listen(PORT, () => {
  console.log(`Crypto Service running on port ${PORT}`);
});
