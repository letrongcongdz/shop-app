import type { Request, Response, NextFunction } from "express";

export function validateCategory(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;

  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return res.status(400).json({
      success: false,
      message: "Invalid request: 'name' is required and must be a string",
    });
  }

  next();
}
