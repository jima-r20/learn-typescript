import faker from 'faker';

class User {
  name: string;
  location: {
    lat: number; // 緯度
    lng: number; // 軽度
  };

  constructor() {}
}
