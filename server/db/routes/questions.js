const router = require('express').Router();

const { Question } = require('../../db/routes/questions');

// Post a new question
router.route('/').post((req, res) => {
  const question = new Question(req.body);
  question
    .save()
    .then((question) => res.status(201).json(question))
    .catch((err) => res.status(500).json('Error: ', err));
});

// Get all questions
router.route('/').get((req, res) => {
  Question.find().then((questions) =>
    res.json(questions).catch((err) => res.status(500).json('Error: ', err))
  );
});

// Get a specific question

// Edit/Update a specific question

// Delete a specific question
router.route('/:id').delete((req, res) => {
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
