import { Router } from 'express';
import { getProducts } from '../controllers/productController';

const routerProduct = Router();

routerProduct.get('/:storeId', getProducts);

export default routerProduct;
