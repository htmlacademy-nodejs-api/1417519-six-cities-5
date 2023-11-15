import { Request } from 'express';
import { RequestBody,RequestParams } from '../libs/rest/index.js';
import { FavoriteDto } from '../modules/favorite/index.js';

export type CreateFavoriteRequest = Request<RequestParams, RequestBody, FavoriteDto>;

export type DeleteFavoriteRequest = Request<RequestParams, RequestBody, FavoriteDto>;
