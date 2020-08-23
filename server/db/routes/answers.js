const router = require('express').Router({ mergeParams: true });
const { Question } = require('../models/question');
const { Answer } = require('../models/answer');

// Post an answer to a specific question
router.route('/').post((req, res) => {
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

// Get all answers to a specific question
router.route('/').get((req, res) => {
  Question.findById(req.params.qId)
    .populate('answers')
    .exec()
    .then((questionWithAnswers) => {
      res.json(questionWithAnswers);
    })
    .catch((err) => res.status(500).json('Error: ' + err));
});

// Update/Edit an existing answer

// Delete a specific answer from a question

// Upvote a specific answer

// Downvote a specific answer

module.exports = router;
