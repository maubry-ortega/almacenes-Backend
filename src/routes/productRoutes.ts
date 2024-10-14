import { Router } from 'express';
import { getProductsByStore } from '../controllers/productController';

const routerProduct = Router();

routerProduct.get('/api/stores/:storeId/products', getProductsByStore);

export default routerProduct;
