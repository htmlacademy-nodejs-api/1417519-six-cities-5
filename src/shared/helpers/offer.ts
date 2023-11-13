import { HouseType } from './enum.js';

export function createOffer(offerData:string){
  const [
    title,
    description,
    date,
    city,
    previewImage,
    photosHouses,
    isPremium,
    houseType,
    numberRooms,
    numberGuests,
    rentPrice,
    listAmenities,
    userName,
    email,
    avatar,
    password,
    userType,
    latitude,
    longitude] = offerData.replace('\n', '').split('\t');

  return {
    title,
    description,
    date: new Date(date),
    city,
    previewImage:previewImage.split(';')
      .map((image) => image),
    photosHouses:photosHouses.split(';')
      .map((image) => image),
    isPremium:isPremium === 'true' ,
    houseType: HouseType[houseType as keyof typeof HouseType],
    numberRooms:Number.parseInt(numberRooms, 10),
    numberGuests:Number.parseInt(numberGuests, 10),
    rentPrice:Number.parseInt(rentPrice, 10),
    listAmenities: listAmenities.split(';')
      .map((amenitie) => amenitie),
    user: {userName,email,avatar,password,userType},
    locations: {latitude: Number.parseFloat(latitude), longitude: Number.parseFloat(longitude)},
  };
}
