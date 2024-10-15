import { Request, Response, NextFunction } from 'express';
import pool from '../config/db';
import { RowDataPacket } from 'mysql2';

interface Product extends RowDataPacket {
  id: number;
  name: string;
  description: string;
  img: string;
  store_id: number;
}

// Controlador para obtener productos por ID de almacén
export const getProductsByStore = async (
  req: Request<{ storeId: string }>,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { storeId } = req.params;

  try {
    const [products] = await pool.query<Product[]>(
      'SELECT * FROM products WHERE store_id = ?',
      [Number(storeId)]
    );

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