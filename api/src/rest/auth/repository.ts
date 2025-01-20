import { prismaClient } from "../../shared/prismaInit";
import { SignUp } from "./model";

export default class Repository {
  private db;

  constructor() {
    this.db = prismaClient;
  }

  public insertAccount = async (payload: SignUp) => {
    await this.db.account.create({ data: { ...payload } });
    return;
  };
}
