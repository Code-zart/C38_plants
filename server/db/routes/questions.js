const router = require('express').Router({ mergeParams: true });

const { Question } = require('../models/question');

/**
 * POST a new question
 */
router.post('/', (req, res) => {
  const question = new Question(req.body);
  question
    .save()
    .then((question) => res.status(201).json(question))
    .catch((err) => res.status(500).json('Error: ', err));
});

/**
 * GET all questions
 */
router.get('/', (req, res) => {
  Question.find().then((questions) =>
    res.json(questions).catch((err) => res.status(500).json('Error: ', err))
  );
});

// Get a specific question

/**
 * UPDATE a specific question
 */
router.put('/:id', (req, res) => {
  Question.findById(req.id)
    .then((question) => {
      question.text = req.body.text;

      question
        .save()
        .then(() => res.json('question updated!'))
        .catch((err) => res.status(400).json('Error: ', err));
    })
    .catch((err) => res.status(400).json('Error: ', err));
});

/**
 * DELETE a specific question
 */
router.delete('/:id', (req, res) => {
  Question.findByIdAndRemove(req.params.id)
    .then((question) => {
      if (!question) {
        return res.status(404).json({ error: 'question does not exist' });
      }
      res.status(204).json(question);
    })
    .catch((err) => res.status(500).json('Error: ', err));
});

module.exports = router;
