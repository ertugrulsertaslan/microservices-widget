import express from "express";
import { getCurrencyData } from "../controllers/currencyController.js";

const router = express.Router();

router.get("/", getCurrencyData);

export { router as currencyRoutes };
