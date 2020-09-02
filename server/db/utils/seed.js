if (process.env.NODE_ENV !== 'production') require('dotenv').config();
require('../config');
const User = require('../models/user'),
  Question = require('../models/question'),
  Answer = require('../models/answer'),
  faker = require('faker');
const seedDb = async () => {
  // Function to print current collections count for Users/Questions/Answers
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

  // Define array and functions to be used to generate document fields
  const userIdArray = [];
  const questionIdArray = [];
  const answerIdArray = [];
  const resolvedQuestions = [];
  const upVoter = (acc, val) => {
    // more upvotes
    if (Math.random() > 0.42) {
      acc = [...acc, val];
    }
    return acc;
  };
  const downVoter = (acc, val) => {
    // less downvotes
    if (Math.random() > 0.58) {
      acc = [...acc, val];
    }
    return acc;
  };
  const randomReducer = (acc, val) => {
    // max unpredictability
    if (Math.random() > Math.random()) {
      acc = [...acc, val];
    }
    return acc;
  };
  const createRandomArray = (arr, func) => {
    return arr.reduce(func, []);
  };

  // Show status of DB before and after reset

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
      upvotes: createRandomArray(userIdArray, upVoter),
      downvotes: createRandomArray(userIdArray, downVoter)
    });
    questionIdArray.push(question._id);
    resolvedQuestions.push(question);
    await question.save();
    // Update user values for questions, qUpVotes, qDownVotes
    user.questions = [...user.questions, question._id];
    user.qUpVotes = createRandomArray(questionIdArray, upVoter);
    user.qDownVotes = createRandomArray(questionIdArray, downVoter).filter(
      (vote) => !user.qUpVotes.includes(vote)
    );
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
      upvotes: createRandomArray(userIdArray, upVoter),
      downvotes: createRandomArray(userIdArray, downVoter)
    });
    answerIdArray.push(answer._id);
    await answer.save();
    // Update questions with child answers
    question.answers = [...question.answers, answer._id];
    await question.save();
    // Update users with answers, aUpVotes, aDownVotes, followers, following
    user.answers = [...user.answers, answer._id];
    user.aUpVotes = createRandomArray(answerIdArray, upVoter);
    user.aDownVotes = createRandomArray(answerIdArray, downVoter).filter(
      (vote) => !user.qUpVotes.includes(vote)
    );
    user.followers = createRandomArray(userIdArray, randomReducer);
    user.following = createRandomArray(userIdArray, randomReducer);
    await user.save();
  }

  logDbInfo();
};
seedDb();
