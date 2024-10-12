import { Router } from 'express';
import { getStores, getStore } from '../controllers/storeController';

const router = Router();

router.get('/', getStores); // Obtener todos los almacenes
router.get('/:id', getStore); // Obtener un almacén por su ID

export default router;
