const faker = require('faker');
const { join } = require('path');
const Question = require('../models/question');
const Answer = require('../models/answer');
const User = require('../models/user');
const { deleteAllAvatars } = require('./utils');

export const seedDb = async () => {
  console.log('Seeding database...');

  await User.deleteMany({});
  await Answer.deleteMany({});
  await Question.deleteMany({});
  // Depends on Avatar handling
  await deleteAllAvatars(
    join(__dirname, '../..', process.env.IMAGES_FOLDER_PATH)
  );

  // create 3 users
  const usersPromises = [...Array(3).keys()].map((index, i) => {
    const user = new User({
      provider: 'email',
      username: `user${index}`,
      email: `email${index}@email.com`,
      password: '123456789',
      name: faker.name.findName(),
      // avatar: faker.image.avatar(),
      avatar: `avatar${index}.jpg`,
      bio: faker.lorem.sentences(3)
    });
    // OMIT? Probably
    if (index === 0) {
      user.role = 'ADMIN';
    }
    user.registerUser(user, () => {});

    return user;
  });

  await Promise.all(
    usersPromises.map(async (user) => {
      await user.save();
    })
  );

  // create 9 messages
  // REFACTOR MESSAGES INTO Q'S (AGAIN FOR A'S)
  const questionPromises = [...Array(9).keys()].map((index, i) => {
    const question = new Question({
      text: faker.lorem.sentences(3)
    });
    return question;
  });

  await Promise.all(
    questionPromises.map(async (question) => {
      await question.save();
    })
  );

  const users = await User.find();
  const questions = await Questions.find();
  const answers = await Answer.find();

  // every user 3 messages
  // THIS MIGHT WORK OR IT MIGHT NOT, DEPENDING ON MODEL OWNERSHIP
  users.map(async (user, index) => {
    const threeQuestionsIds = questions
      .slice(index * 3, index * 3 + 3)
      .map((q) => q.id);
    await User.updateOne(
      { _id: user.id },
      { $push: { questions: threeQuestionsIds } }
    );
  });

  // 0,1,2 message belong to user 0 ...
  questions.map(async (question, index) => {
    const j = Math.floor(index / 3);
    const user = users[j];
    await Question.updateOne(
      { _id: question.id },
      {
        $set: {
          user: user.id
        }
      }
    );
  });
};
