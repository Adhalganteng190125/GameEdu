import express from "express";
import cors from "cors";
import { env } from "./config/env";
import { healthRouter } from "./routes/health.routes";
import { soalRouter } from "./routes/soal.routes";
import { errorHandler, notFoundHandler } from "./middlewares/error.middleware";

export const app = express();

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());

app.use("/api/health", healthRouter);
app.use("/api/soal", soalRouter);

app.use(notFoundHandler);
app.use(errorHandler);
