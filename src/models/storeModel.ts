import { RowDataPacket } from 'mysql2/promise';
import { connection } from '../services/db';

// Función para obtener todos los almacenes
export const fetchStores = async () => {
  // Asegúrate de que la función devuelva un array de RowDataPacket
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM stores');
  return rows;
};

// Función para obtener un almacén por su ID
export const fetchStoreById = async (id: number) => {
  const [rows] = await connection.execute<RowDataPacket[]>('SELECT * FROM stores WHERE id = ?', [id]);
  return rows.length > 0 ? rows[0] : null;
};