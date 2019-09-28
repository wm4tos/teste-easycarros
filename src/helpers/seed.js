const User = require('../modules/users/model');
const Partner = require('../modules/partners/model');

const usersMock = require('../lib/users.json');
const partnersMock = require('../lib/partners.json');

const seedUsers = force => new Promise(async (resolve) => {
  if (force) await User.deleteMany();

  const users = await User.find();

  if (users.length) return resolve(false);

  await User.insertMany(usersMock);

  return resolve(true);
});

const seedPartners = force => new Promise(async (resolve) => {
  if (force) await Partner.deleteMany();

  const partners = await Partner.find();

  if (partners.length) return resolve(false);

  await Partner.insertMany(partnersMock);

  return resolve(true);
});

module.exports = async (force) => {
  const u = await seedUsers(force);
  const p = await seedPartners(force);

  if (u && p) return process.stdout.write('Database seeded! :)\n');
  return null;
};
