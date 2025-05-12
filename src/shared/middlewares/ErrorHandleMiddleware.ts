import AppError from '@shared/errors/AppErrors';
import { Request, Response, NextFunction } from 'express';

class ErrorHandleMiddleware {
  public static handleError(error: Error, _request: Request, response: Response, _next: NextFunction) {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({ type: 'error', message: error.message });
    }
    return response.status(500).json({ type: 'error', message: 'Internal server error' });
  }
}

export default ErrorHandleMiddleware;
