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
  const resolvedQuestions = [];
  const createRandomArray = (arr) => {
    return arr.reduce((acc, val) => {
      if (Math.random() > 0.5) {
        acc = [...acc, val];
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
   * CREATE USERS - 12
   */
  const usersPromises = [...Array(12).keys()].map(async (_, idx) => {
    const user = new User({
      username: `user${idx}`,
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      bio: faker.lorem.sentences(2),
      darkmode: false
    });
    userIdArray.push(user._id);
    await user.save();
    return user;
  });
  const resolvedUsers = await Promise.all(usersPromises);
  /**
   * CREATE QUESTIONS - 25
   */
  for (_ of Array(25).keys()) {
    const user =
      resolvedUsers[Math.floor(Math.random() * resolvedUsers.length)];
    const question = new Question({
      text: faker.lorem.sentences(3),
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      upvotes: createRandomArray(userIdArray),
      downvotes: createRandomArray(userIdArray)
    });
    questionIdArray.push(question._id);
    resolvedQuestions.push(question);
    await question.save();
    user.questions = [...user.questions, question._id];

    await user.save();
  }
  /**
   * CREATE ANSWERS - 70
   */
  for (_ of Array(70).keys()) {
    const question =
      resolvedQuestions[Math.floor(Math.random() * resolvedQuestions.length)];
    const user =
      resolvedUsers[Math.floor(Math.random() * resolvedUsers.length)];
    const answer = new Answer({
      text: faker.lorem.sentences(3),
      question: question._id,
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      upvotes: createRandomArray(userIdArray),
      downvotes: createRandomArray(userIdArray)
    });
    answerIdArray.push(answer._id);
    await answer.save();
    question.answers = [...question.answers, answer._id];
    user.answers = [...user.answers, answer._id];

    await Promise.all([question.save(), user.save()]);
  }

  // UPDATE ALL USERS W/ RANDOM VALUES FOR:
  // Question Upvotes

  // Question Downvotes

  // Answer Upvotes

  // Answer Downvotes

  // Users following

  // User followers

  logDbInfo();
};
seedDb();
