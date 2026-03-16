import express from 'express';
import healthRoutes from "./routes/healthRoutes";
import exerciseRoutes from './routes/exerciseRoutes';

const app = express();

app.use('/api/health', healthRoutes);
app.use('/api/exercises', exerciseRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
