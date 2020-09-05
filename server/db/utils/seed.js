if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('../config');

const User = require('../models/user'),
  Question = require('../models/question'),
  Answer = require('../models/answer'),
  faker = require('faker');

const userIdArray = [];
const questionIdArray = [];
const answerIdArray = [];
const handler = (determinant) => () => {
  if (Math.random() > (determinant || Math.random())) return true;
};

const createRandomArray = (arr, determinant) => {
  return arr.filter(handler(determinant));
};

const seedDb = async () => {
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Question.countDocuments({}, function (err, count) {
    console.log('Number of questions:', count);
  });
  await Answer.countDocuments({}, function (err, count) {
    console.log('Number of answers:', count);
  });

  await User.deleteMany({});
  await Question.deleteMany({});
  await Answer.deleteMany({});
  console.log('Seeding database...');
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  await Question.countDocuments({}, function (err, count) {
    console.log('Number of questions:', count);
  });
  await Answer.countDocuments({}, function (err, count) {
    console.log('Number of answers:', count);
  });

  /**
   * CREATE USERS - 35
   */

  const usersPromises = [...Array(35).keys()].map(async (_, idx) => {
    const user = new User({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      name: faker.name.findName(),
      avatar: faker.image.avatar(),
      bio: faker.lorem.sentences(2)
    });
    userIdArray.push(user._id);
    await user.save();
    return user;
  });
  const resolvedUsers = await Promise.all(usersPromises);
  await User.countDocuments({}, function (err, count) {
    console.log('Number of users:', count);
  });
  console.log('Example of a User:', resolvedUsers[0]);

  /**
   * CREATE QUESTIONS - 80
   */

  const questionPromises = [...Array(80).keys()].map(async () => {
    const question = new Question({
      text: faker.lorem.sentences(3),
      image: `${faker.image.nature()}?random=${Math.round(
        Math.random() * 10e12
      )}`,
      author: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    questionIdArray.push(question._id);

    await question.save();
    return question;
  });
  const resolvedQuestions = await Promise.all(questionPromises);
  await Question.countDocuments({}, function (err, count) {
    console.log('Number of questions:', count);
  });
  console.log('Example of a Question:', resolvedQuestions[0]);

  /**
   * CREATE ANSWERS - 200
   */

  const answerPromises = [...Array(200).keys()].map(async () => {
    const answer = new Answer({
      text: faker.lorem.sentences(2),
      question:
        questionIdArray[Math.floor(Math.random() * questionIdArray.length)],
      author: userIdArray[Math.floor(Math.random() * userIdArray.length)]
    });
    answerIdArray.push(answer._id);

    await answer.save();
    return answer;
  });
  const resolvedAnswers = await Promise.all(answerPromises);
  await Answer.countDocuments({}, function (err, count) {
    console.log('Number of answers:', count);
  });
  console.log('Example of an Answer:', resolvedAnswers[0]);
};
seedDb();

/**
 * Populate Questions
 */

// const populateQuestionPromises = questionPromises.map(async (question) => {
//   question.answers = createRandomArray(answerIdArray).slice(
//     0,
//     Math.round(Math.random * 10)
//   );
//   // await question.save();
//   return question;
// });

// const populatedQuestions = await Promise.all(populateQuestionPromises);

// console.log('Example of a populated Question:', populatedQuestions[0]);
// = async () => {
//   for (question in resolvedQuestions) {
// let x = 1;
// question.answers = createRandomArray(answerIdArray).slice(
//   0,
//   Math.round(Math.random * 10)
// );
//     x++;
//     console.log(`question ${x} populated.`);
//   }
//   console.log(
//     'nested answers of random question',
//     resolvedQuestions[0].answers
//   );
// };
// populateQuestions();

/**
 * First, create all users/questions/answers with only required fields populated. -- DONE
 *
 * Then, populate users with questions, answers, upvotes, downvotes (etc.)
 * 
 * const populaterUserFields = async () => {
    const userFieldPromises = resolvedUsers.map(async (user) => {
      user.questions = createRandomArray(questionIdArray);

      await user.save();
      return user;
    });
    const populatedUsers = await Promise.all(userFieldPromises);
    console.log('Populated User:', populatedUsers[0]);
  };
  populater
 * Associate question to user, answer to question, and user (different that original) to question
 */
