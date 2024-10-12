import pool from '../config/db';

export const getAllStores = async (): Promise<any[]> => {
    const [rows]: [any[], any] = await pool.query('SELECT * FROM stores');
    return rows;
};

export const getStoreById = async (id: number): Promise<any | null> => {
    const [rows]: [any[], any] = await pool.query('SELECT * FROM stores WHERE id = ?', [id]);
    return rows[0];
};