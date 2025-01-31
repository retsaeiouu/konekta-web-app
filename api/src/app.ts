import express from 'express';
import apiRouter from './rest/router';
import { errorHandler } from './shared/errorHandler';
import cors from 'cors';

const app = express();

app.use(
  cors({
    origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

// request body json parser
app.use(express.json());

// route for rest api endpoints
app.use('/api', apiRouter);

// error handler
app.use(errorHandler);

export default app;
