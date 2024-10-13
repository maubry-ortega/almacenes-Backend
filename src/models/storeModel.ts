import pool from '../config/db';
import { RowDataPacket } from 'mysql2';

interface Store extends RowDataPacket {
  id: number;
  name: string;
  location: string;
}

export const getAllStores = async (): Promise<Store[]> => {
  const [rows] = await pool.query<Store[]>('SELECT * FROM stores');
  return rows;
};

export const getStoreById = async (id: number): Promise<Store | null> => {
  const [rows] = await pool.query<Store[]>('SELECT * FROM stores WHERE id = ?', [id]);
  return rows[0] || null;
};
