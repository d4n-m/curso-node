import express from 'express';
import moviesRouter from './api/routes/moviesRouter.js'
import errorRouter from './api/routes/errorRouter.js'
import clientErrorHandler from './middlewares/errorHandler.js';
import userRouter from './api/routes/userRouter.js';


const app = express();

app.use(express.json());
app.use('/users', userRouter);
app.use('/movies', moviesRouter);
app.use('*', errorRouter);
app.use(clientErrorHandler);

export default app;