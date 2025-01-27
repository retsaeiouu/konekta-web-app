import { ResponseObject } from '../../shared/DTO/response';
import { prismaClient } from '../../shared/prismaInit';
import { SignUp } from './model';

export default class Repository {
  private db;

  constructor() {
    this.db = prismaClient;
  }

  public insertAccount: (payload: SignUp) => Promise<ResponseObject<string>> =
    async (payload) => {
      const account = await this.db.account.create({ data: payload });
      return new ResponseObject(
        201,
        'Account created successfully.',
        account.id
      );
    };
}
