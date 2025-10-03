import type { NextFunction, Response, Request } from "express";
import type { JwtPayload } from "jsonwebtoken";
import  jwt  from "jsonwebtoken";

interface AuthRequest extends Request {
  user?: JwtPayload | string;
}

export const authMiddleware = (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return res.status(401).json({ message: "Unauthorized - No token" });
  }

  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized - Invalid format" });
  }

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "fallbackSecret"
    ) as JwtPayload;

    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: "Forbidden - Invalid/Expired token" });
  }
};

export const authorizeRoles = (...roles: string[]) => {
  return (req: AuthRequest, res: Response, next: NextFunction) => {
    if (!req.user || typeof req.user === "string") {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const roleName = req.user.role?.name;

    if (!roleName || !roles.includes(roleName)) {
      return res
        .status(403)
        .json({ message: "Forbidden - Not enough permissions" });
    }

    next();
  };
};
