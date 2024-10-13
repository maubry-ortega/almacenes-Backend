import { Request, Response } from 'express';
import { getAllStores, getStoreById } from '../models/storeModel';

// Controlador para obtener todos los almacenes
export const getStores = async (req: Request, res: Response): Promise<void> => {
  try {
    const stores = await getAllStores();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los almacenes' });
  }
};

// Controlador para obtener un almacén por ID
export const getStore = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;

  try {
    const store = await getStoreById(parseInt(id, 10));

    if (!store) {
      res.status(404).json({ error: 'Almacén no encontrado' });
    } else {
      res.json(store);
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el almacén' });
  }
};