import * as Mongoose from 'mongoose';
import { inject, injectable } from 'inversify';
import { DatabaseClient } from './database-client.interface.js';
import { Component } from '../../types/index.js';
import { Logger } from '../logger/index.js';
import { setTimeout } from 'node:timers/promises';
import { RetryMongoConnecting } from '../../helpers/enum.js';

@injectable()
export class MongoDatabaseClient implements DatabaseClient {
  private mongoose!: typeof Mongoose;
  private isConnected: boolean;

  constructor(
    @inject(Component.Logger) private readonly logger: Logger
  ){
    this.isConnected = false;
  }

  public isConnectedToDatabase(){
    return this.isConnected;
  }

  public async connect(uri: string): Promise<void> {
    if(this.isConnectedToDatabase()){
      throw new Error('Mongo client already connected');
    }
    this.logger.info('Try to connect to MongeDB');

    let attemp = 0;
    while(attemp < RetryMongoConnecting.Count){
      try{
        this.mongoose = await Mongoose.connect(uri);
        this.isConnected = true;
        this.logger.info('Database connection established.');
        return;
      }catch(error){
        attemp++;
        this.logger.error(`Failed to connect to the database. Attempt ${attemp}`,error as Error);
        await setTimeout(RetryMongoConnecting.Timeout);
      }
    }

    throw new Error(`Unable to establish database connection after ${RetryMongoConnecting.Count}`);
  }

  public async disconnect(): Promise<void> {
    if(!this.isConnectedToDatabase()){
      throw new Error('Not connected to the database');
    }

    await this.mongoose.disconnect?.();
    this.isConnected = false;
    this.logger.info('Database connection closed');
  }
}
