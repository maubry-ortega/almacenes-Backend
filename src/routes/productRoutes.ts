// productRoutes.ts
import { Router, RequestHandler } from 'express';
import { getProductsByStore } from '../controllers/productController';

const routerProduct = Router();

const getProductsHandler: RequestHandler<{ storeId: string }> = getProductsByStore;

routerProduct.get('/stores/:storeId/products', getProductsHandler);

export default routerProduct;
