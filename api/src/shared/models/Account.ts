import { z } from "zod";

export const AccountZodSchema = z.object({
  // https://zod.dev/?id=preprocess
  // since json don't support date format, this method will parse it into Date object first
  // and just returns if its already date
  createdAt: z.preprocess((value) => {
    if (typeof value === "string") return new Date(value);
    return value;
  }, z.date()),
  id: z.string(),
  username: z.string(),
  password: z.string(),
  name: z.string(),
  surname: z.optional(z.string()),
});

export type Account = z.infer<typeof AccountZodSchema>;
