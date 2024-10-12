import { Request, Response } from 'express';
import { getAllStores, getStoreById } from '../models/storeModel';

// Obtener todos los almacenes
export const getStores = async (req: Request, res: Response) => {
    try {
        const stores = await getAllStores();
        res.json(stores);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los almacenes' });
    }
};

// Obtener un almacén por su ID
export const getStore = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const store = await getStoreById(parseInt(id));
        if (store) {
            res.json(store);
        } else {
            res.status(404).json({ error: 'Almacén no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el almacén' });
    }
};