import express from 'express';
import cors from 'cors';
import storeRoutes from './routes/storeRoutes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use('/api', storeRoutes); // Definimos la base de las rutas

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});