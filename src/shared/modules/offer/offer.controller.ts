import { inject, injectable } from 'inversify';
import { BaseController, HttpMethod } from '../../libs/rest/index.js';
import { Component } from '../../types/component.enum.js';
import { Logger } from '../../libs/logger/logger.interface.js';
import { Request, Response } from 'express';
import { DefaultOfferService } from './default-offer.service.js';

@injectable()
export class OfferController extends BaseController{
  constructor(
    @inject(Component.Logger) protected readonly logger: Logger,
    @inject(Component.OfferService) private readonly offerService: DefaultOfferService,
  ){
    super(logger);

    this.logger.info('Register router for OfferController...');

    this.addRoute({path:'/', method: HttpMethod.Get, handler: this.find });
    this.addRoute({path: '/', method:HttpMethod.Post, handler: this.create});
  }

  public async find(_req: Request, res: Response): Promise<void> {
    const categories = await this.offerService.find();
    this.ok(res, categories);
  }

  public create(_req: Request, _res: Response): void {

  }
}
