import { Request, Response } from 'express';
import { getProductsByStoreId } from '../models/productModel';

export const getProducts = async (req: Request, res: Response) => {
    const { storeId } = req.params;
    try {
        const products = await getProductsByStoreId(parseInt(storeId));

        if (Array.isArray(products) && products.length > 0) {
            res.json(products);
        } else {
            res.status(404).json({ error: 'No se encontraron productos para este almacén' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
};
