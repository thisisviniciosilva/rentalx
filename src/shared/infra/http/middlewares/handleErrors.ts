import { NextFunction, Request, Response } from "express";

import AppError from "@shared/errors/AppError";

export default function handleErrors(
  error: Error,
  request: Request,
  response: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: NextFunction
): Response {
  if (error instanceof AppError) {
    const { message, statusCode } = error;

    return response.status(statusCode).json({ error: message });
  }

  return response.status(500).json({
    status: "error",
    error: `Internal server error - ${error.message}`,
  });
}
