import faker from 'faker';

export class User {
  name: string;
  location: {
    lat: number; // 緯度
    lng: number; // 軽度
  };

  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}
