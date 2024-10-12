import express from 'express';
import { getStores, getStoreById } from '../controllers/storeController';

const router = express.Router();

router.get('/stores', getStores); // Obtener todos los almacenes
router.get('/stores/:id', getStoreById); // Obtener un almacén específico

export default router;
