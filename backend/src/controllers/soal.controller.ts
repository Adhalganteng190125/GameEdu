import type { NextFunction, Request, Response } from "express";
import * as soalService from "../services/soal.service";

export async function getAll(req: Request, res: Response, next: NextFunction) {
  try {
    const soal = await soalService.listSoal();
    res.json({ data: soal });
  } catch (error) {
    next(error);
  }
}

export async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    const soal = await soalService.getSoal(req.params.id);
    res.json({ data: soal });
  } catch (error) {
    next(error);
  }
}

export async function createOne(req: Request, res: Response, next: NextFunction) {
  try {
    const soal = await soalService.createSoal(req.body);
    res.status(201).json({ data: soal });
  } catch (error) {
    next(error);
  }
}

export async function review(req: Request, res: Response, next: NextFunction) {
  try {
    const sudahDireview = Boolean(req.body?.sudahDireview ?? true);
    const soal = await soalService.reviewSoal(req.params.id, sudahDireview);
    res.json({ data: soal });
  } catch (error) {
    next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    await soalService.deleteSoal(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
}
