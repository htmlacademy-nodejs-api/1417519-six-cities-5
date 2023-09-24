import { FileReader } from './file-reader.interface.js';
import { readFileSync } from 'node:fs';
import { Offer } from '../../types/index.js';

export class TSVFileReader implements FileReader {
  private rawData = '';

  constructor(
    private readonly filename: string
  ) {}

  public read(): void {
    this.rawData = readFileSync(this.filename, { encoding: 'utf-8' });
  }

  public toArray(): Offer[] {
    if (!this.rawData) {
      throw new Error('File was not read');
    }

    return this.rawData
      .split('\n')
      .filter((row) => row.trim().length > 0)
      .map((line) => line.split('\t'))
      .map(([title,description,date,city,previewImage,photosHouses,isPremium,isFavorite,rating,houseType,numberRooms,numberGuests,rentPrice,listAmenities,userName,email,avatar,password,userType,latitude,longitude]) => ({
        title,
        description,
        date: new Date(date),
        city,
        previewImage,
        photosHouses:photosHouses.split(';')
          .map((image) => image),
        isPremium:isPremium === 'true' ,
        isFavorite: isFavorite === 'true',
        rating: Number.parseFloat(rating),
        houseType,
        numberRooms:Number.parseInt(numberRooms, 10),
        numberGuests:Number.parseInt(numberGuests, 10),
        rentPrice:Number.parseInt(rentPrice, 10),
        listAmenities: listAmenities.split(';')
          .map((amenitie) => amenitie),
        user: { userName,email,avatar,password,userType},
        coordinates: {latitude: Number.parseFloat(latitude), longitude: Number.parseFloat(longitude)},
      }));
  }
}
