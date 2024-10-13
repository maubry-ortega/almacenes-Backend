import pool from '../config/db';
import { RowDataPacket } from 'mysql2';

interface Product extends RowDataPacket {
  id: number;
  name: string;
  price: number;
  store_id: number;
}

export const getProductsByStoreId = async (storeId: number): Promise<Product[]> => {
  const [rows] = await pool.query<Product[]>('SELECT * FROM products WHERE store_id = ?', [storeId]);
  return rows;
};
