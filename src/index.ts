import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import routerStores from './routes/storeRoutes';
import routerProduct from './routes/productRoutes';

// Cargar variables de entorno
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Configuración de CORS
app.use(cors({
  origin: 'http://localhost:5173', // Actualiza la URL del frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
}));

app.use(express.json());

// Rutas
app.use('/api/stores', routerStores);
app.use('/api/products', routerProduct);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
