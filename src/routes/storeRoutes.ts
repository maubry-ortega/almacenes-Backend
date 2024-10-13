import express from 'express';
import { getStores, getStore } from '../controllers/storeController';

const routerStores = express.Router();

routerStores.get('/', getStores);
routerStores.get('/:id', getStore);

export default routerStores;
