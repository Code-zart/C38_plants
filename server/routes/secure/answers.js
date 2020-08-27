const router = require('express').Router({ mergeParams: true }),
  Question = require('../models/question'),
  Answer = require('../models/answer');

/**
 * POST answer to a question
 */
router.post('/', async (req, res) => {
  const newAnswer = new Answer(req.body);
  newAnswer.question = req.params.qId;

  return Question.findById(req.params.qId)
    .then((question) => {
      newAnswer
        .save()
        .then((createdAnswer) => {
          question.answers.push(createdAnswer._id);

          question
            .save()
            .then(res.json(createdAnswer))
            .catch((err) => res.status(500).json('Error: ', err));
        })
        .catch((err) => res.status(500).json('Error: ', err));
    })
    .catch((err) => res.status(500).json('Error: ', err));
});

/**
 * UPDATE a specific answer
 */
router.put('/:aId', async (req, res) => {
  let id = req.id;
  let aId = req.params.answerId;

  // try {
  //   const answer = await Answer.findById(aId);
  //   const answer.text = req.body.text;
  //   console.log('Answer updated!');
  // } catch (error) {
  //   res.status(400).json('Error: ', err);
  // }
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
  let id = req.id;
  let aId = req.params.answerId;

  Answer.findByIdAndDelete(req.params.aId)
    .then(() => res.json('Answer deleted.'))
    .catch((err) => res.status(400).json('Error: ', err));
});

module.exports = router;
