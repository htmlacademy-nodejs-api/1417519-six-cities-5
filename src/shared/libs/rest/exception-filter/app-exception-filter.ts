import { inject, injectable } from 'inversify';
import { Component } from '../../../types/component.enum.js';
import { Logger } from '../../logger/index.js';
import { ExceptionFilter } from './exception-filter.index.js';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

@injectable()
export class AppExceptionFilter implements ExceptionFilter {
  constructor(
    @inject(Component.Logger) private readonly logger: Logger
  ){
    this.logger.info('Reg AppExceptionFilter');
  }

  public catch(error:Error, _req:Request, res: Response, _next: NextFunction): void {
    this.logger.error(error.message, error);
    res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json({error: error.message});
  }
}
