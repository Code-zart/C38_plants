const faker = require('faker'),
  join = require('path'),
  User = require('../models/user'),
  Question = require('../models/question'),
  Answer = require('../models/answer');

const seedDb = async () => {
  console.log('Seeding database...');

  await User.deleteMany({});
  await Question.deleteMany({});
  await Answer.deleteMany({});

  /**
   * CREATE USERS - 3
   */

  const usersPromises = [...Array(3).keys()].map((index, i) => {
    const user = new User({
      provider: `email`,
      username: `user${index}`,
      email: `email${index}@email.com`,
      password: `123456789`,
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      bio: faker.lorem.sentences(3)
    });

    user.registerUser(user, () => {});
    return user;
  });

  await Promise.all(
    usersPromises.map(async (user) => {
      await user.save();
    })
  );
};

module.exports = seedDb;
