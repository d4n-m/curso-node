import express from 'express';
import moviesRoutes from './api/routes/moviesRoutes.js'
import errorRoutes from './api/routes/errorRoutes.js'
import clientErrorHandler from './middlewares/errorHandler.js';

const app = express();

app.use(express.json());

app.use('/movies', moviesRoutes);

app.use('*', errorRoutes);

app.use(clientErrorHandler);

export default app;