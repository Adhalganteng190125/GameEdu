import { Router } from "express";
import * as soalController from "../controllers/soal.controller";

export const soalRouter = Router();

soalRouter.get("/", soalController.getAll);
soalRouter.get("/:id", soalController.getOne);
soalRouter.post("/", soalController.createOne);
soalRouter.patch("/:id/review", soalController.review);
soalRouter.delete("/:id", soalController.remove);
