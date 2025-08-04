import { Router, Request, Response } from 'express'
import { authenticateJWT, type JwtPayload, type AuthenticatedRequest } from './authMiddleware'
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 as uuid } from 'uuid';

interface User {
    id: string;
    username: string;
    password: string; // hashed
}

const router = Router();
const users: User[] = [
    //here is connection to the DB or something else
];

router.get('/', (req: Request, res: Response) => {
    res.send('Hello, JWT Authentication!');
});

router.post('/login', (req: Request, res: Response) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }

    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);

    if (!user || !bcrypt.compareSync(password, user.password)) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    // Create access token (short-lived)
    const accessToken = jwt.sign(
        { id: user.id, username: user.username },
        secret,
        { expiresIn: '5m' } // short expiry
    );

    // Create refresh token (long-lived)
    const refreshToken = jwt.sign(
        { id: user.id, username: user.username },
        secret,
        { expiresIn: '7d' } // longer expiry
    );

    res.cookie('token', accessToken, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 5 * 60 * 1000 // 5 minutes
    });

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });
    res.status(200).json({ message: 'Login successful' });
});

router.post('/register', (req: Request, res: Response) => {
    const { username, password } = req.body;
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }
    // Check if the username is already taken
    const existingUser = users.find((user) => user.username === username);
    if (existingUser) {
        return res.status(409).json({ message: 'Username already exists' });
    }

    // Hash the password before storing it
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create a new user
    const id: string = uuid();
    const newUser: User = { id, username, password: hashedPassword };
    users.push(newUser);
    console.log(`${id} - ${username} - ${hashedPassword}`);

    // Generate a JWT for the new user
    const token = jwt.sign({ id: newUser.id, username: newUser.username }, secret, {
        expiresIn: '1h', // Token expires in 1 hour
    });

    // Set the JWT as an HTTP cookie
    res.cookie('token', token, { httpOnly: true });
    res.status(201).json({ message: 'User registered successfully' });
});

router.post('/refresh', (req: Request, res: Response) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not defined');
    }

    const refreshToken = req.cookies?.refreshToken;

    if (!refreshToken) {
        return res.status(401).json({ message: 'Refresh token not found' });
    }

    try {
        const decoded = jwt.verify(refreshToken, secret) as JwtPayload;

        const newAccessToken = jwt.sign(
            { id: decoded.id, username: decoded.username },
            secret,
            { expiresIn: '5m' }
        );

        res.cookie('token', newAccessToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
        });

        res.status(200).json({ message: 'Access token refreshed' });
    } catch (err) {
        return res.status(403).json({ message: 'Invalid refresh token' });
    }
});

router.post('/logout', (req: Request, res: Response) => {
    // Clear the JWT cookie
    res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
});

router.get('/profile', authenticateJWT, (req: AuthenticatedRequest, res: Response) => {
    // Access the authenticated user's information via req.user
    res.json({ message: `Welcome, ${req.user?.username}!` });
});


export default router;