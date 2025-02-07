import { Account } from '../../shared/models/Account';
import { ResponseObject } from '../../shared/DTO/response';
import schemaValidator from '../../shared/utilities/zodSchemaParser';
import { SignUp, SignUpZodSchema } from './models';
import AuthRepository from './repository';

export default class Service {
  private repository;
  private validator;

  constructor(repository: AuthRepository, validator: typeof schemaValidator) {
    this.repository = repository;
    this.validator = validator;
  }

  // calls insert method and returns the created account id
  public handleCreateAccount = async (
    payload: unknown
  ): Promise<ResponseObject<string>> => {
    // validates the request payload against the expected schema and throws if its invalid
    const parsedPayload: SignUp = this.validator(payload, SignUpZodSchema);
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
