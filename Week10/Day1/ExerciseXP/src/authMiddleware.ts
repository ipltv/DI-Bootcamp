import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface JwtPayload {
    id: string;
    username: string;
}

export interface AuthenticatedRequest extends Request {
    user?: JwtPayload;
}

export function authenticateJWT(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    const token = req.cookies?.token;

    try {
        const decoded = jwt.verify(token, secret) as JwtPayload;
        req.user = decoded;
        next();
    } catch (err) {
        return res.status(403).json({ message: 'Token verification failed' });
    }
}

export default authenticateJWT;