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
  const createRandomList = (arr) => {
    arr.reduce((acc, val) => {
      if (Math.random() > 0.5) {
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
   * CREATE USERS - 12
   */
  const usersPromises = [...Array(12).keys()].map(async (_, idx) => {
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
      upvotes: createRandomList(userIdArray),
      downvotes: createRandomList(userIdArray)
    });
    questionIdArray.push(question._id);
    resolvedQuestions.push(question);
    await question.save();
    user.questions = [...user.questions, question._id];
    await user.save();
  }
  /**
   * CREATE ANSWERS - 60
   */
  for (_ of Array(60).keys()) {
    const question =
      resolvedQuestions[Math.floor(Math.random() * resolvedQuestions.length)];
    const user =
      resolvedUsers[Math.floor(Math.random() * resolvedUsers.length)];
    const answer = new Answer({
      text: faker.lorem.sentences(3),
      question: question._id,
      owner: userIdArray[Math.floor(Math.random() * userIdArray.length)],
      upvotes: createRandomList(userIdArray),
      downvotes: createRandomList(userIdArray)
    });
    answerIdArray.push(answer._id);
    await answer.save();
    question.answers = [...question.answers, answer._id];
    user.answers = [...user.answers, answer._id];
    await Promise.all([question.save(), user.save()]);
  }
  logDbInfo();
};
seedDb();
