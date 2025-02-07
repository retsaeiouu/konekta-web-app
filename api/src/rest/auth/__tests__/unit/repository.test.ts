import { describe, expect, jest, beforeEach, test } from '@jest/globals';
import AuthRepository from '../../repository';
import { type prismaClient } from '../../../../shared/prismaInit';
import { SignUp } from '../../models';
import { Account } from '../../../../shared/models/Account';
import { ResponseObject } from '../../../../shared/DTO/response';

// mocks prisma instance
const mockDB = {
  account: {
    create: jest.fn(),
  },
} as unknown as prismaClient;

describe('for inserting accounts', () => {
  let repository: AuthRepository;

  const mockAccount: SignUp = {
    username: 'user123',
    password: 'userpassword',
    name: 'user',
    surname: 'usersurname',
  };

  const mockCreatedAccount: Account = {
    id: '123',
    createdAt: new Date(),
    ...mockAccount,
  };

  beforeEach(() => {
    repository = new AuthRepository(mockDB);
  });

  test('should insert account', () => {
    (
      mockDB.account.create as unknown as jest.Mock<
        ({ data }: { data: SignUp }) => Promise<Account>
      >
    ).mockResolvedValue(mockCreatedAccount); // mocks the returned promise of original db

    // expects to return the expected schema and values
    expect(repository.insertAccount(mockAccount)).resolves.toEqual(
      new ResponseObject<Account>(
        201,
        'Account created successfully.',
        mockCreatedAccount
      )
    );

    expect(
      (
        mockDB.account.create as unknown as jest.Mock<
          ({ data }: { data: SignUp }) => Promise<Account>
        >
      ).mock.calls
    ).toHaveLength(1); // expected number of calls

    expect(
      (
        mockDB.account.create as unknown as jest.Mock<
          ({ data }: { data: SignUp }) => Promise<Account>
        >
      ).mock.calls[0][0] // first call and first argument
    ).toEqual({ data: mockAccount }); // expected argument
  });
});
