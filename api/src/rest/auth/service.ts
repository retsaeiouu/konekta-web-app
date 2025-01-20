import { ResponseObject } from "../../shared/DTO/response";
import { SignUp } from "./model";
import AuthRepository from "./repository";

export default class Service {
  private repository;

  constructor() {
    this.repository = new AuthRepository();
  }

  public createNewAccount = async (payload: SignUp) => {
    await this.repository.insertAccount(payload);
    return new ResponseObject(201, "Account created.", null);
  };
}
