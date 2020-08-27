const router = require('express').Router({ mergeParams: true });
const { Question } = require('../models/question');
const { Answer } = require('../models/answer');

/**
 * POST answer to a question
 */
router.post('/', (req, res) => {
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
 * GET all answers to a specific question
 */
router.get('/', (req, res) => {
  Question.findById(req.params.qId)
    .populate('answers')
    .exec()
    .then((questionWithAnswers) => {
      res.json(questionWithAnswers);
    })
    .catch((err) => res.status(500).json('Error: ', err));
});

/**
 * UPDATE a specific answer
 */
router.put('/:aId', (req, res) => {
  let id = req.id;
  let aId = req.params.answerId;
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
