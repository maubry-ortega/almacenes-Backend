import { Router } from 'express';
import {
  getAllProductsC,
  getProductByIdC,
  createProductC,
  updateProductC,
  deleteProductC,
  getProductsByStoreC,
  getProductByStoreAndIdC
} from '../controllers/productController';

const routerProduct = Router();

// Rutas CRUD
routerProduct.get('/products', getAllProductsC);
routerProduct.get('/products/:id', getProductByIdC);
routerProduct.post('/products', createProductC);
routerProduct.put('/products/:id', updateProductC);
routerProduct.delete('/products/:id', deleteProductC);

// Ruta para obtener productos por tienda
routerProduct.get('/stores/:storeId/products', getProductsByStoreC);

// Nueva ruta para obtener un producto por tienda y productoId
routerProduct.get('/stores/:storeId/products/:productId', getProductByStoreAndIdC);

export default routerProduct;
