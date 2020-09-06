const router = require('express').Router({ mergeParams: true }),
  Question = require('../../db/models/question'),
  Answer = require('../../db/models/answer');

/**
 * POST answer to a question
 */
router.post('/', async (req, res) => {
  const { _id: currentUserId } = req.user;
  const { qId } = req.params;
  const { text } = req.body;

  const newAnswer = new Answer({
    text,
    question: qId,
    author: currentUserId
  });

  await newAnswer.save();

  const question = await Question.findById(qId);

  question.answers.push(newAnswer);

  await question.save();

  res.send({ answer: newAnswer });
});

/**
 * UPDATE a specific answer
 */
router.put('/:aId', async (req, res) => {
  Answer.findById(req.params.aId)
    .then((answer) => {
      answer.text = req.body.text;

      answer
        .save()
        .then(() => res.json('Answer updated!'))
        .catch((err) => res.status(400).json('Error: ', err));
    })
    .catch((err) => res.status(400).json('Error: ', err));
});

/**
 * DELETE a specific answer
 */
router.delete('/:aId', (req, res) => {
  Answer.findByIdAndDelete(req.params.aId)
    .then(() => res.json('Answer deleted.'))
    .catch((err) => res.status(400).json('Error: ', err));
});

module.exports = router;
