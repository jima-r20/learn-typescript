import { User } from './models/User';

const collection = User.buildUderCollection();

collection.on('change', () => {
  console.log(collection);
});

collection.fetch();
