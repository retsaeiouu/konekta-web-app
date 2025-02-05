import AuthService from './service';
import { Request, Response } from 'express';
import { ResponseObject } from '../../shared/DTO/response';
import { generateToken } from '../../shared/utilities/JWT';

export default class Controller {
  private service;

  constructor(service: AuthService) {
    this.service = service;
  }

  public handleSignUp = async (
    request: Request,
    response: Response
  ): Promise<void> => {
    const payload: unknown = request.body;

    // creates a new account
    const {
      status,
      message,
      payload: id,
    }: ResponseObject<string> = await this.service.handleCreateAccount(payload);

    // generates a token and use id as the payload
    const token: string = await generateToken({ id });

    // serializes the token in the cookie header
    response.cookie('access_token', token, {
      httpOnly: process.env.NODE_ENV === 'production',
      sameSite: true,
      secure: process.env.NODE_ENV === 'production',
    });

    response
      .status(status)
      .json(new ResponseObject<null>(status, message, null));
    return;
  };
}
