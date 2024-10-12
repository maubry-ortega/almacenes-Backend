import pool from '../config/db';

export const getAllStores = async () => {
    const [rows] = await pool.query('SELECT * FROM stores');
    return rows;
};

export const getStoreById = async (id: number) => {
    const [rows] = await pool.query('SELECT * FROM stores WHERE id = ?', [id]);
    return rows;
};
