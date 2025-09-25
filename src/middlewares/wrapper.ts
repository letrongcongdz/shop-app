import type { Request, Response, NextFunction } from "express";

export const asyncHandler = (fn: Function) => 
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
  
export const sendResponse = (res: Response, data: any, message = "Success") => {
  return res.status(200).json({ success: true, message, data });
};

export const sendError = (
  res: Response,
  error: any,
  statusCode: number = 500
) => {
  return res.status(statusCode).json({
    success: false,
    message: error?.message || "Internal Server Error",
  });
};