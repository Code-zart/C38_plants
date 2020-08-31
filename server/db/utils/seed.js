if (process.env.NODE_ENV !== 'production') require('dotenv').config();

require('../config');

const User = require('../models/user'),
  Question = require('../models/question'),
  Answer = require('../models/answer'),
  faker = require('faker');

const seedDb = async () => {
  const logDbInfo = async () => {
    await User.countDocuments({}, function (err, count) {
      console.log('Number of users:', count);
    });
    await Question.countDocuments({}, function (err, count) {
      console.log('Number of questions:', count);
    });
    await Answer.countDocuments({}, function (err, count) {
      console.log('Number of answers:', count);
    });
  };

  const userIdArray = [];
  const questionIdArray = [];
  const answerIdArray = [];
  const createRandomList = (arr) => {
    arr.reduce((acc, val) => {
      if (Math.random > 0.5) {
        acc.push(val);
      }
      return acc;
    }, []);
  };

  console.log('Seeding database...');

  await User.deleteMany({});
  await Question.deleteMany({});
  await Answer.deleteMany({});

  logDbInfo();

  /**
   * CREATE USERS - 5
   */

  const usersPromises = [...Array(5).keys()].map((idx, i) => {
    const user = new User({
      provider: `email`,
      username: `user${idx}`,
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      bio: faker.lorem.sentences(3)
    });
    userIdArray.push(user._id);
    user.registerUser(user, () => {});
    return user;
  });

  await Promise.all(
    usersPromises.map(async (user) => {
      await user.save();
    })
  );

  /**
   * CREATE QUESTIONS - 10
   */
  const questionPromises = [...Array(10).keys()].map((idx, i) => {
    const question = new Question({
      text: faker.lorem.sentences(3),
      answers: createRandomList(answerIdArray).slice(
        Math.floor(Math.random * 4)
      ),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      upvotes: createRandomList(userIdArray),
      downvotes: createRandomList(userIdArray)
    });
    questionIdArray.push(question._id);
    return question;
  });

  await Promise.all(
    questionPromises.map(async (question) => {
      await question.save();
    })
  );

  /**
   * CREATE ANSWERS - 30
   */
  const answerPromises = [...Array(30).keys()].map((idx, i) => {
    const answer = new Answer({
      text: faker.lorem.sentences(3),
      question:
        questionIdArray[Math.floor(Math.random() * questionIdArray.length)],
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      upvotes: createRandomList(userIdArray),
      downvotes: createRandomList(userIdArray)
    });
    answerIdArray.push(answer._id);
    return answer;
  });

  await Promise.all(
    answerPromises.map(async (answer) => {
      await answer.save();
    })
  );

  logDbInfo();
};

seedDb();
