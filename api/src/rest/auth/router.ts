import express from "express";
import AuthController from "./controller";

const controller = new AuthController();

const router = express.Router();

// TODO: sign-up, sign-in, sign-out
// TODO: cookie-based jwt auth implementation

router.post("/sign-up", controller.handleSignUp);

export default router;
