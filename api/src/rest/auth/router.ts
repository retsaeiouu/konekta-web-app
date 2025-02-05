import express, { Request, Response } from 'express';
import AuthController from './controller';
import AuthService from './service';
import AuthRepository from './repository';
import { prismaClient } from '../../shared/prismaInit';

const repository = new AuthRepository(prismaClient);
const service = new AuthService(repository);
const controller = new AuthController(service);

const router = express.Router();

// TODO: sign-up, sign-in, sign-out
// TODO: write tests with jest, supertest

router.post(
  '/sign-up',
  // used arrow function to not lose 'this' context of controller
  async (request: Request, response: Response): Promise<void> =>
    controller.handleSignUp(request, response)
);

export default router;
