import { Router } from 'express';
import { getStores, getStore } from '../controllers/storeController';

const router = Router();
router.get('/', getStores);
router.get('/:id', getStore);

export default router;