
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
    rating,
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
    user: {userName,email,avatar,password,userType},
    locations: {latitude: Number.parseFloat(latitude), longitude: Number.parseFloat(longitude)},
  };
}
