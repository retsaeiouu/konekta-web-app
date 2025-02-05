import { Account } from '../../shared/models/Account';
import { ResponseObject } from '../../shared/DTO/response';
import { prismaClient } from '../../shared/prismaInit';
import { SignUp } from './models';

export default class Repository {
  private db;

  constructor(db: typeof prismaClient) {
    this.db = db;
  }

  // inserts and returns the new account
  public insertAccount = async (
    payload: SignUp
  ): Promise<ResponseObject<Account>> => {
    const createdAccount: Account = await this.db.account.create({
      data: payload,
    });
    return new ResponseObject<Account>(
      201,
      'Account created successfully.',
      createdAccount
    );
  };
}
