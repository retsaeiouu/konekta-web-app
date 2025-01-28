import { z } from 'zod';
import { AccountZodSchema } from '../../../shared/models/Account';
import {
  inputWithSpaceRegex,
  inputWithSymbolRegex,
} from '../../../shared/models/Input';

export const SignUpZodSchema = AccountZodSchema.omit({
  id: true,
  createdAt: true,
}).extend({
  username: z
    .string()
    .min(3, 'Username is too short.')
    .max(18, 'Username is too long.')
    .regex(
      inputWithSymbolRegex,
      'Username must not contain spaces or invalid symbols.'
    )
    .trim(),
  password: z
    .string()
    .min(8, 'Password is too short.')
    .max(50, 'Password can only contain 50 characters.')
    .regex(
      inputWithSymbolRegex,
      'Password must not contain spaces or invalid symbols.'
    )
    .trim(),
  name: z
    .string()
    .min(1, 'Name is too short.')
    .max(35, 'Name is too long')
    .regex(inputWithSpaceRegex, 'Please provide a valid name.'),
  surname: z
    .string()
    .min(1, 'Surname is too short.')
    .max(35, 'Surname is too long.')
    .regex(inputWithSpaceRegex, 'Please provide a valid surname.')
    .optional(),
});

export type SignUp = z.infer<typeof SignUpZodSchema>;
