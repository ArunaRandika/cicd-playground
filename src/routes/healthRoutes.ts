import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json({
        status: 'ok',
        uptime: Math.floor(process.uptime()) + 's',
        timestamp: new Date().toISOString(),
    });
});

export default router;