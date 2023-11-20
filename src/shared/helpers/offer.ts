import { CitiesName, Comforts, HouseType, UserRole } from './enum.js';
const decimalSystem = 10;

export function createOffer(offerData:string){
  const [
    title,
    description,
    date,
    city,
    previewImage,
    photosHouses,
    isPremium,
    isFavorite,
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
    city:CitiesName[city as keyof typeof CitiesName],
    previewImage:previewImage.split(';')
      .map((image) => image),
    photosHouses:photosHouses.split(';')
      .map((image) => image),
    isPremium:isPremium === 'true' ,
    isFavorite: isFavorite === 'true',
    houseType: HouseType[houseType as keyof typeof HouseType],
    numberRooms:Number.parseInt(numberRooms, decimalSystem),
    numberGuests:Number.parseInt(numberGuests, decimalSystem),
    rentPrice:Number.parseInt(rentPrice, decimalSystem),
    listAmenities: listAmenities.split(';').map((comfort) => Comforts[comfort as keyof typeof Comforts]),
    user: {
      userName:userName,
      email: email,
      avatar: avatar,
      password: password,
      userType:UserRole[userType as keyof typeof UserRole]},
    locations: {latitude: Number.parseFloat(latitude), longitude: Number.parseFloat(longitude)},
  };
}
