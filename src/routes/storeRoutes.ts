import { Router } from 'express';
import { getStores, getStore } from '../controllers/storeController';

const routerStores = Router();

routerStores.get('/', getStores); // Ruta para obtener todos los almacenes
routerStores.get('/:id', getStore); // Ruta para obtener un almacén por su ID

export default routerStores;
