import express from 'express';
import AuthController from './controller';

const controller = new AuthController();

const router = express.Router();

// TODO: sign-up, sign-in, sign-out
// TODO: write tests with jest, supertest

router.post('/sign-up', controller.handleSignUp);

export default router;
