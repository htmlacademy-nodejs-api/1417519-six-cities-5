export const Component = {
  RestApplication: Symbol.for('RestApplication'),
  Logger: Symbol.for('Logger'),
  Config: Symbol.for('Config'),
  DatabaseClient: Symbol.for('DatabaseClient'),
  UserService: Symbol.for('UserService'),
  UserModel: Symbol.for('UserModel'),
  OfferService: Symbol.for('OfferService'),
  OfferModel: Symbol.for('OfferModel'),
  CommentService: Symbol.for('CommentService'),
  CommentModel: Symbol.for('CommentModel'),
  FavoriteService: Symbol.for('FavoriteService'),
  FavoriteController:Symbol.for('FavoriteController'),
  FavoriteModel: Symbol.for('FavoriteModel'),
  OfferController: Symbol.for('OfferController'),
  ExceptionFilter: Symbol.for('ExceptionFilter'),
  UserController: Symbol.for('UserController'),
  CommentController: Symbol.for('CommentController'),
} as const;
