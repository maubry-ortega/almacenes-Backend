import pool from '../config/db';
import { ResultSetHeader, RowDataPacket } from 'mysql2';

// Interfaz para los productos existentes
interface Product extends RowDataPacket {
  id?: number;
  name: string;
  price: number;
  description: string;
  img: string;
  store_id: number;
}

// Interfaz para crear nuevos productos
interface NewProduct {
  name: string;
  price: number;
  description: string;
  img: string;
  store_id: number;
}

// Obtener todos los productos
export const getAllProducts = async (): Promise<Product[]> => {
  const [rows] = await pool.query<Product[]>('SELECT * FROM products');
  return rows;
};

// Obtener un producto por ID
export const getProductById = async (id: number): Promise<Product | null> => {
  const [rows] = await pool.query<Product[]>('SELECT * FROM products WHERE id = ?', [id]);
  return rows[0] || null;
};

// Obtener productos por ID de tienda
export const getProductsByStoreId = async (storeId: number): Promise<Product[]> => {
  const [rows] = await pool.query<Product[]>(
    'SELECT * FROM products WHERE store_id = ?',
    [storeId]
  );
  return rows;
};

// Crear un producto
export const createProduct = async (product: NewProduct): Promise<Product> => {
  const { name, price, description, img, store_id } = product;

  const [result] = await pool.query<ResultSetHeader>(
    'INSERT INTO products (nombre, precio, descripcion, img, store_id) VALUES (?, ?, ?, ?, ?)',
    [name, price, description, img, store_id]
  );

  const newProductId = result.insertId;
  const [rows] = await pool.query<Product[]>('SELECT * FROM products WHERE id = ?', [newProductId]);

  return rows[0];
};

// Actualizar un producto
export const updateProduct = async (id: number, product: Partial<NewProduct>): Promise<Product | null> => {
  const { name, price, description, img, store_id } = product;

  await pool.query<ResultSetHeader>(
    'UPDATE products SET nombre = ?, precio = ?, descripcion = ?, img = ?, store_id = ? WHERE id = ?',
    [name, price, description, img, store_id, id]
  );

  const [rows] = await pool.query<Product[]>('SELECT * FROM products WHERE id = ?', [id]);
  return rows[0] || null;
};

// Eliminar un producto
export const deleteProduct = async (id: number): Promise<void> => {
  await pool.query('DELETE FROM products WHERE id = ?', [id]);
};