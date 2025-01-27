import { z } from 'zod';
import { AccountZodSchema } from '../../shared/models/Account';

export const SignUpZodSchema = AccountZodSchema.omit({
  id: true,
  createdAt: true,
});

export type SignUp = z.infer<typeof SignUpZodSchema>;
