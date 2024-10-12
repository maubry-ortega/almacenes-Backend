import pool from '../config/db';

export const getProductsByStoreId = async (storeId: number): Promise<any[]> => {
    const [rows]: [any[], any] = await pool.query('SELECT * FROM products WHERE store_id = ?', [storeId]);
    return rows;
};
