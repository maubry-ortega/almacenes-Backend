import pool from '../config/db';

// Función para obtener todos los almacenes
export const getAllStores = async () => {
    const [rows]: any = await pool.query('SELECT * FROM stores');
    return rows;
};

// Función para obtener un almacén por su ID y los productos asociados
export const getStoreById = async (id: number) => {
    const [storeRows]: any = await pool.query('SELECT * FROM stores WHERE id = ?', [id]);

    if (storeRows.length === 0) {
        return null;
    }

    const [productRows]: any = await pool.query('SELECT * FROM products WHERE store_id = ?', [id]);

    const storeWithProducts = {
        id: storeRows[0].id,
        nombre: storeRows[0].nombre,
        productos: productRows,
    };

    return storeWithProducts;
};