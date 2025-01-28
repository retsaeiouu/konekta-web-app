import express from 'express';
import apiRouter from './rest/router';
import { errorHandler } from './shared/errorHandler';
import cors from 'cors';
import { prismaClient } from './shared/prismaInit';

const app = express();

app.use(
  cors({
    origin: [
      'http://app:5173',
      'http://localhost:5173',
      'http://127.0.0.1:5173',
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  })
);

// request body json parser
app.use(express.json());

// WARN: remove this later
// NOTE: this is for checking accounts only since i can't find a way to run prisma studio as it is inside the container
app.get('/', async (req, res) => {
  const accounts = await prismaClient.account.findMany();
  res.json({ accounts: accounts });
});

// route for rest api endpoints
app.use('/api', apiRouter);

// error handler
app.use(errorHandler);

export default app;
