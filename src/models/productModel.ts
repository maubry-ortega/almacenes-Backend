import pool from '../config/db';

export const getProductsByStoreId = async (storeId: number): Promise<any[]> => {
    // Aquí se realiza la consulta a la base de datos
    const [rows]: [any[], any] = await pool.query('SELECT * FROM products WHERE store_id = ?', [storeId]);
    return rows; // Devolvemos solo el array de resultados
};
