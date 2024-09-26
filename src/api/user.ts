import { Router } from 'express';
import { DB } from '../db';
import { user } from '../db/schema';
import { eq } from 'drizzle-orm';

const router = Router();

router.get('/', async (req, res) => {
  const userData = await DB.select().from(user).where(eq(user.id, 1));
  res.status(200).json(userData);
});

export default router;
