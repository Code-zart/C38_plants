const router = require('express').Router({ mergeParams: true }),
  Question = require('../../db/models/question'),
  Answer = require('../../db/models/answer');

/**
 * POST answer to a question
 */
router.post('/', async (req, res) => {
  console.log('In POst Router', req.params);
  const newAnswer = new Answer(req.body);
  console.log('newAnswer', newAnswer);
  console.log('user', req.user);
  newAnswer.question = req.params.qId;

  Question.findById(req.params.qId)
    .then((question) => {
      newAnswer.save().then((createdAnswer) => {
        question.answers.push(createdAnswer._id);

        question.save().then(res.json(createdAnswer));
      });
    })
    .catch((err) => res.status(500).json('Error: ', err));
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
