import { Router } from 'express';
import { getProductsByStore } from '../controllers/productController';

const routerProduct = Router();

// Ruta para obtener productos por ID de almacén
routerProduct.get('/api/products/:storeId', getProductsByStore); // Verifica que esta ruta esté definida

export default routerProduct;
