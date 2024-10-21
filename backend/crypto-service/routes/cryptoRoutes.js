import express from "express";
import { getCryptoData } from "../controllers/cryptoController.js";

const router = express.Router();

router.get("/", getCryptoData);

export { router as cryptoRoutes };
