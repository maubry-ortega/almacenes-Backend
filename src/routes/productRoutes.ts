import { Router } from 'express';
import { getProductsByStore } from '../controllers/productController';

const routerProduct = Router();

routerProduct.get('/api/products/:storeId', getProductsByStore);

export default routerProduct;
