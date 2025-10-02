// import type { NextFunction, Request, Response } from "express";
// import jwt from "jsonwebtoken";

// export function authMiddleware = (
//     req: Request, 
//     res: Response,
//     next: NextFunction
// ) => {
//     const authHeader= req.headers.authorization;
//     if(!authHeader) return res.status(401).json({ message: "Unauthorized" });

//     const token = authHeader.split(" ")[1];
//     if(!token) return res.status(401).json({ message: "Unauthorized" });

//     try {
//         const secret = process.env.JWT_SECRET || "fallbackSecret";
//         const decoded = jwt.verify(token, secret);
//         req.body = decoded;
//         next();
//     } catch (error) {
//         return res.status(401).json({ message: "Invalid token" });
//     }
// }