import { Request, Response, NextFunction } from 'express';
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductsByStoreId
} from '../models/productModel';
import pool from '../config/db';
import { RowDataPacket } from 'mysql2';

// Obtener todos los productos
export const getAllProductsC = async (_req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    next(error);
  }
};

// Obtener un producto por ID
export const getProductByIdC = async (req: Request<{ id: string }>, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;

  try {
    const product = await getProductById(Number(id));

    if (!product) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }

    res.json(product);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    next(error);
  }
};

// Obtener productos por ID de tienda
export const getProductsByStoreC = async (req: Request<{ storeId: string }>, res: Response, next: NextFunction): Promise<void> => {
  const { storeId } = req.params;

  try {
    const products = await getProductsByStoreId(Number(storeId));

    if (products.length === 0) {
      res.status(404).json({ error: 'No se encontraron productos para este almacén.' });
      return;
    }

    res.json(products);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    next(error);
  }
};

// Crear un nuevo producto
export const createProductC = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name, price, description, img, store_id } = req.body;

  try {
    const newProduct = await createProduct({ name, price, description, img, store_id });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error('Error al crear el producto:', error);
    next(error);
  }
};

// Actualizar un producto
export const updateProductC = async (req: Request<{ id: string }>, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;
  const productData = req.body;

  try {
    const updatedProduct = await updateProduct(Number(id), productData);

    if (!updatedProduct) {
      res.status(404).json({ error: 'Producto no encontrado' });
      return;
    }

    res.json(updatedProduct);
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    next(error);
  }
};

// Eliminar un producto
export const deleteProductC = async (req: Request<{ id: string }>, res: Response, next: NextFunction): Promise<void> => {
  const { id } = req.params;

  try {
    await deleteProduct(Number(id));
    res.status(204).send();
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    next(error);
  }
};

// Obtener un producto por tienda y productId
export const getProductByStoreAndIdC = async (
  req: Request<{ storeId: string, productId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { storeId, productId } = req.params;

  try {
    // Asegúrate de que el tipo de resultado es un array de productos
    const [rows] = await pool.query<RowDataPacket[]>(
      'SELECT * FROM products WHERE store_id = ? AND id = ?',
      [Number(storeId), Number(productId)]
    );

    // Verifica si rows tiene elementos
    if (rows.length === 0) {
      res.status(404).json({ error: 'Producto no encontrado en esta tienda.' });
      return;
    }

    // Enviar el primer resultado
    res.json(rows[0]);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    next(error);
  }
};