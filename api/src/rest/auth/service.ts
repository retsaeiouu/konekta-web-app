import { Account } from '../../shared/models/Account';
import { ResponseObject } from '../../shared/DTO/response';
import parsePayload from '../../shared/utilities/zodSchemaParser';
import { SignUp, SignUpZodSchema } from './models';
import AuthRepository from './repository';

export default class Service {
  private repository;

  constructor(repository: AuthRepository) {
    this.repository = repository;
  }

  // calls insert method and returns the created account id
  public handleCreateAccount = async (
    payload: unknown
  ): Promise<ResponseObject<string>> => {
    // validates the request payload against the expected schema and throws if its invalid
    const parsedPayload: SignUp = parsePayload(payload, SignUpZodSchema);
    const {
      status,
      message,
      payload: { id },
    }: ResponseObject<Account> = await this.repository.insertAccount(
      parsedPayload
    );
    return new ResponseObject<string>(status, message, id);
  };
}
