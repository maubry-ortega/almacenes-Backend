import { Router } from 'express';
import { getProducts } from '../controllers/productController';

const router = Router();
router.get('/:storeId', getProducts);

export default router;