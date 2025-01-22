import { ResponseObject } from "../../shared/DTO/response";
import { SignUp } from "./model";
import AuthRepository from "./repository";

export default class Service {
  private repository;

  constructor() {
    this.repository = new AuthRepository();
  }

  public createNewAccount: (
    payload: SignUp,
  ) => Promise<ResponseObject<string>> = async (payload) => {
    const {
      status,
      message,
      payload: id,
    } = await this.repository.insertAccount(payload);
    return new ResponseObject(status, message, id);
  };
}
