import express from 'express';
import pokemonRoutes from './routes/pokemonRoutes';
import healthRoutes from "./routes/healthRoutes";

const app = express();

app.use('/api/pokemon', pokemonRoutes);
app.use('/api/health', healthRoutes);

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});