import type { NextFunction, Request, Response } from "express";

export class AppError extends Error {
  statusCode: number;

  constructor(message: string, statusCode = 400) {
    super(message);
    this.statusCode = statusCode;
  }
}

export function notFoundHandler(req: Request, res: Response) {
  res.status(404).json({
    error: "NOT_FOUND",
    message: `Rute ${req.method} ${req.originalUrl} tidak ditemukan`,
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function errorHandler(err: unknown, req: Request, res: Response, next: NextFunction) {
  if (err instanceof AppError) {
    return res.status(err.statusCode).json({ error: "BAD_REQUEST", message: err.message });
  }

  console.error("[error]", err);
  return res.status(500).json({
    error: "INTERNAL_SERVER_ERROR",
    message: "Terjadi kesalahan pada server",
  });
}
