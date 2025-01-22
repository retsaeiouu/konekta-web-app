import dotenv from "dotenv";
dotenv.config({ path: `../.env.${process.env.NODE_ENV}` });

import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});
