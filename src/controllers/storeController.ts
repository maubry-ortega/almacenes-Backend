import { Request, Response } from 'express';
import { getAllStores, getStoreById } from '../models/storeModel';
import { createStore } from '../models/storeModel';

// Controlador para obtener todos los almacenes
export const getStoresC = async (req: Request, res: Response): Promise<void> => {
  try {
    const stores = await getAllStores();
    res.json(stores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los almacenes' });
  }
};

// Controlador para obtener un almacén por ID
export const getStoreC = async (req: Request, res: Response): Promise<void> => {
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

//controlasor para crear un almacén
export const createStoreC = async (req: Request, res: Response): Promise<void> => {
  const {  name } = req.body;

  if( !name ){
    res.status(400).json({ error: "Faltan datos oblicatorios" });
    return;
  }

  try {
    const newStore = await createStore({ name });
    res.status(201).json({ message: "Almacén creado", newStore });
  } catch ( error ) {
    res.status(500).json({ error: "Error al crear el almacén" });
  }
}