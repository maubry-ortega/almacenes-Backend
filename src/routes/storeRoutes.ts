import express from 'express';
import { getStoresC, getStoreC, createStoreC, updateStoreC } from '../controllers/storeController';

const routerStores = express.Router();

routerStores.get('/', getStoresC);
routerStores.get('/:id', getStoreC);
routerStores.post('/', createStoreC);
routerStores.put('/:id', updateStoreC);

export default routerStores;