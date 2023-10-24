import { DocumentType } from "@typegoose/typegoose";
import { FavoriteDto } from "./dto/favorite.dto.js";

export interface FavoriteService {
  findByUserId(userId:string): Promise<DocumentType<FavoriteEntity>[]>;
  createOrDelete(dto: FavoriteDto): Promise<DocumentType<FavoriteEntity> | null>;
}
