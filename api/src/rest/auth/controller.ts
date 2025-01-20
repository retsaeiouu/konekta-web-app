import AuthService from "./service";
import { RequestHandler } from "express";
import { ResponseObject } from "../../shared/DTO/response";
import parsePayload from "../../shared/utilities/zodSchemaParser";
import { SignUpZodSchema } from "./model";

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
    const { status, message } =
      await this.service.createNewAccount(parsedPayload);

    response.status(200).json(new ResponseObject(status, message, null));
    return;
  };
}
