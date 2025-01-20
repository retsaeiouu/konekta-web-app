import { ErrorRequestHandler } from "express";
import { ErrorObject } from "./DTO/error";
import { ResponseObject } from "./DTO/response";
import { Prisma } from "@prisma/client";

// https://expressjs.com/en/guide/error-handling.html
export const errorHandler: ErrorRequestHandler = (
  error,
  _request,
  response,
  next,
) => {
  if (response.headersSent) {
    next(error);
    return;
  }

  // https://www.prisma.io/docs/orm/prisma-client/debugging-and-troubleshooting/handling-exceptions-and-errors
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    // if an existing value is inserted in a unique column
    if (error.code === "P2002") {
      // if an existing username is inserted
      if ((error.meta as { target?: string[] }).target?.at(0) === "username") {
        response
          .status(400)
          .json(new ResponseObject(400, "Username already exists.", null));
        return;
      }
    }
  }

  if (error instanceof ErrorObject) {
    response
      .status(error.status)
      .json(new ResponseObject(error.status, error.message, null));
    return;
  }

  // unhandled or unexpected error
  console.error(error);
  response
    .status(500)
    .json(new ResponseObject(500, "Unexpected server error.", null));
  return;
};
