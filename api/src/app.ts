import express from 'express';
import apiRouter from './rest/router';
import { errorHandler } from './shared/errorHandler';

const app = express();

// request body json parser
app.use(express.json());

// route for rest api endpoints
app.use('/api', apiRouter);

// error handler
app.use(errorHandler);

export default app;
