import { Request, Response, NextFunction } from 'express';
import admin from '../config/firebase';

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // 1. Grab the Authorization header — it should look like: "Bearer <token>"
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({ message: 'Missing or malformed Authorization header' });
        return;
    }

    // 2. Pull out just the token part (everything after "Bearer ")
    const token = authHeader.split('Bearer ')[1];

    try {
        // 3. Ask Firebase to verify the token — if it's fake or expired, this throws
        const decodedToken = await admin.auth().verifyIdToken(token);

        // 4. Attach the decoded user info to the request so routes can use it
        //    e.g. req.user.uid, req.user.email
        req.user = decodedToken;

        // 5. Token is valid — let the request continue to the route handler
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid or expired token' });
    }
};

export default authMiddleware;

