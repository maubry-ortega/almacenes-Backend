import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import storeRoutes from './routes/storeRoutes';
import productRoutes from './routes/productRoutes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173', methods: ['GET', 'POST', 'PUT', 'DELETE'], credentials: true }));
app.use(express.json());

app.use('/api/stores', storeRoutes);
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
