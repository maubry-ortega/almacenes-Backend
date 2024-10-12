import { Request, Response } from 'express';
import { fetchStores, fetchStoreById } from '../services/api';

export const getStores = async (req: Request, res: Response) => {
  try {
    const stores = await fetchStores();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los almacenes' });
  }
};

export const getStoreById = async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const store = await fetchStoreById(id);
    if (store) {
      res.json(store);
    } else {
      res.status(404).json({ error: 'Almacén no encontrado' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener el almacén' });
  }
};