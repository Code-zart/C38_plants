if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../config');

const User = require('../models/user'),
  Question = require('../models/question'),
  Answer = require('../models/answer'),
  faker = require('faker'),
  mongoose = require('mongoose');

const dbReset = async () => {
  const collections = Object.keys(mongoose.connection.collections);
  console.log(collections);
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName];
    await collection.deleteMany();
  }

  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Task.countDocuments({}, function (err, count) {
    console.log('Number of tasks:', count);
  });
  const userIdArray = [];

  for (let i = 0; i < 100; i++) {
    const user = new User({
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      admin: Boolean(Math.round(Math.random())),
      email: faker.internet.email(),
      password: faker.internet.password()
    });
    await user.generateAuthToken();
    userIdArray.push(user._id);
  }
  for (let i = 0; i < 100; i++) {
    const task = new Task({
      description: faker.lorem.paragraph(),
      completed: Boolean(Math.round(Math.random())),
      dueDate: faker.date.future(),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    await task.save();
  }

  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Task.countDocuments({}, function (err, count) {
    console.log('Number of tasks:', count);
  });
};

dbReset();
