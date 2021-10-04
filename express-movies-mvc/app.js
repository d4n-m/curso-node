import express from 'express';
import moviesRoutes from './api/routes/moviesRoutes.js'

const app = express();

app.use(express.json());

app.use('/movies', moviesRoutes);


export default app;