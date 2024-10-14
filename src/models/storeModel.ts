import pool from '../config/db';
import { OkPacket, RowDataPacket } from 'mysql2';

interface Store extends RowDataPacket {
  id?: number;
  name: string;
}

interface newStore {
  name: string;
}

export const getAllStores = async (): Promise<Store[]> => {
  const [rows] = await pool.query<Store[]>('SELECT * FROM stores');
  return rows;
};

export const getStoreById = async (id: number): Promise<Store | null> => {
  const [rows] = await pool.query<Store[]>('SELECT * FROM stores WHERE id = ?', [id]);
  return rows[0] || null;
};

export const createStore = async (store: newStore): Promise<Store> => {
  const { name } = store;

  const [ result ] = await pool.query<OkPacket>(
    'INSERT INTO stores (nombre) VALUES (?)',
    [name]
  );

  const newStoreId = result.insertId;

  const [rows] = await pool.query<Store[]>(
    'SELECT * FROM stores WHERE id = ?', [newStoreId]
  );

  return rows[0];
}