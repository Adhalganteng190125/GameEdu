import { Router } from "express";
import { checkDbConnection } from "../config/db";

export const healthRouter = Router();

healthRouter.get("/", async (_req, res) => {
  const dbConnected = await checkDbConnection();
  res.json({
    status: "ok",
    service: "gameedu-backend",
    database: dbConnected ? "connected" : "disconnected",
    time: new Date().toISOString(),
  });
});
