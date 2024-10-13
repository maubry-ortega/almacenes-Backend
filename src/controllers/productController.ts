import { Request, Response } from 'express';
import pool from '../config/db'; // Asegúrate de importar tu configuración de base de datos

// Función para obtener productos por ID de almacén
const getProductsByStore = async (req: Request, res: Response) => {
  const storeId = req.params.storeId;

  try {
    const [results] = await pool.query('SELECT * FROM products WHERE store_id = ?', [storeId]);
    
    // Aquí aseguramos que results es un array
    if (Array.isArray(results) && results.length > 0) {
      res.status(200).json(results);
    } else {
      res.status(404).json({ message: 'No se encontraron productos' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

export { getProductsByStore };
