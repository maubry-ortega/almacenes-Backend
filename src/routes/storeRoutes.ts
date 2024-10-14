import express from 'express';
import { getStoresC, getStoreC, createStoreC } from '../controllers/storeController';

const routerStores = express.Router();

routerStores.get('/', getStoresC);
routerStores.get('/:id', getStoreC);
routerStores.post('/', createStoreC)

export default routerStores;
