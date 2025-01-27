import AuthService from './service';
import { RequestHandler } from 'express';
import { ResponseObject } from '../../shared/DTO/response';
import parsePayload from '../../shared/utilities/zodSchemaParser';
import { SignUpZodSchema } from './model';
import { generateToken } from '../../shared/utilities/JWT';

export default class Controller {
  private service;

  constructor() {
    this.service = new AuthService();
  }

  public handleSignUp: RequestHandler = async (request, response) => {
    const payload = request.body;
    // validates the request payload against the expected schema and throws if its invalid
    const parsedPayload = parsePayload(payload, SignUpZodSchema);

    // creates a new account
    const {
      status,
      message,
      payload: id,
    } = await this.service.createNewAccount(parsedPayload);

    // generates a token and use id as the payload
    const token = await generateToken({ id });

    // serializes the token in the cookie header
    response.cookie('access_token', token, {
      httpOnly: process.env.NODE_ENV === 'prod',
      sameSite: true,
      secure: process.env.NODE_ENV === 'prod',
    });

    response.status(status).json(new ResponseObject(status, message, null));
    return;
  };
}
