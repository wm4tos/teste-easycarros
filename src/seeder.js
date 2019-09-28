const mongoose = require('mongoose');
const User = require('./modules/users/model');
const Partner = require('./modules/partners/model');

const usersMock = require('./lib/users.json');
const partnersMock = require('./lib/partners.json');

process.env.MONGODB_URI = 'mongodb://localhost';
const { MONGODB_URI, MONGODB_DATABASE } = require('./config');

const forceSeed = () => process.argv[2] === 'force';

const seedUsers = () => new Promise(async (resolve) => {
  if (forceSeed()) await User.deleteMany();

  const users = await User.find();

  if (users.length) return resolve(false);

  for (let i = 0; i < usersMock.length; i += 1) {
    const user = new User(usersMock[i]);

    user.save();
  }

  return resolve(true);
});

const seedPartners = () => new Promise(async (resolve) => {
  if (forceSeed()) await Partner.deleteMany();

  const partners = await Partner.find();

  if (partners.length) return resolve(false);

  for (let i = 0; i < partnersMock.length; i += 1) {
    const parner = new Partner(partnersMock[i]);

    parner.save();
  }

  return resolve(true);
});

const seed = async (db) => {
  await seedUsers();
  await seedPartners();

  db.close();
  process.exit();
};

mongoose.connect(`${MONGODB_URI}/${MONGODB_DATABASE}`, { useNewUrlParser: true, useUnifiedTopology: true }, (err, db) => {
  if (err) throw err;

  seed(db);
});
