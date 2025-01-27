import { z } from 'zod';
import { ErrorObject } from '../DTO/error';

// https://zod.dev/?id=inferring-the-inferred-type
const parsePayload = <T extends z.ZodTypeAny>(
  payload: unknown,
  zodSchema: T
) => {
  const result = zodSchema.safeParse(payload);

  if (!result.success) throw new ErrorObject(400, 'Invalid payload structure.');

  return result.data as z.infer<T>;
};

export default parsePayload;
