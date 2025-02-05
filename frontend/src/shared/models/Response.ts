import { z } from 'zod';

export const ResponseObjectZodSchema = z.object({
  status: z.number(),
  message: z.string(),
  payload: z.unknown(),
});

export type ResponseObject = z.infer<typeof ResponseObjectZodSchema>;
