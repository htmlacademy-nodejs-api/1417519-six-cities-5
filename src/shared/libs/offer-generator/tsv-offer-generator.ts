import dayjs from 'dayjs';
import { OfferGenerator } from './offer-generation.interface.js';
import { MockServerData } from '../../types/mock-server-data.type.js';
import { generateRandomValue, getRandomItem,getRandomItems } from '../../helpers/common.js';


const MIN_PRICE = 500;
const MAX_PRICE = 2000;

const FIRST_WEEK_DAY = 1;
const LAST_WEEK_DAY = 7;

export class TSVOfferGenerator implements OfferGenerator{
  constructor(private readonly mockData: MockServerData){}

  public generate():string {
    const title = getRandomItem<string>(this.mockData.titles);
    const description = getRandomItem<string>(this.mockData.descriptions);
    const city = getRandomItem<string>(this.mockData.cities);
    const previewImage = getRandomItems<string>(this.mockData.previewImages).join(';');
    const photosHouses = getRandomItems<string>(this.mockData.images).join(';');
    const isPremium = Boolean(Math.random() < 0.5);
    const isFavorite = Boolean(Math.random() < 0.5);
    const rating = generateRandomValue(1,5);
    const houseType = getRandomItem<string>(this.mockData.houseType);
    const numberRooms = generateRandomValue(1,8);
    const numberGuests = generateRandomValue(1,10);
    const rentPrice = generateRandomValue(MIN_PRICE,MAX_PRICE);
    const listAmenities = getRandomItems<string>(this.mockData.listAmenities).join(';');
    const userName = getRandomItem<string>(this.mockData.names);
    const email = getRandomItem<string>(this.mockData.emails);
    const avatar = getRandomItem<string>(this.mockData.avatars);
    const password = getRandomItem<string>(this.mockData.passwords);
    const userType = getRandomItem<string>(this.mockData.userTypes);
    const [latitude,longitude] = getRandomItem<string>(this.mockData.locations).split(' ');
    const date = dayjs()
      .subtract(generateRandomValue(FIRST_WEEK_DAY, LAST_WEEK_DAY), 'day')
      .toISOString();


    return [
      title,description,date,city,previewImage,photosHouses,isPremium,
      isFavorite,rating,houseType,numberRooms,numberGuests,rentPrice,listAmenities,
      userName,email,avatar,password,userType,latitude,longitude
    ].join('\t');
  }
}
