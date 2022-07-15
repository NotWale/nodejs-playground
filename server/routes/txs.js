import express from "express";
import { getAddress } from "../controllers/txs.js";

const router = express.Router();

router.post("/", getAddress);

export default router;
