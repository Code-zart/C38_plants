const router = require('express').Router({ mergeParams: true }),
  Question = require('../../db/models/question'),
  { cloudinary } = require('../../db/utils/cloudinary.js'),
  express = require('express'),
  app = express();

/**
 * POST a new question // WORKING
 */
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    const question = new Question({
      text: req.body.question,
      author: req.user._id
    });
    await question.save();
    return res.status(201).json({ message: 'question posted successfully' });
  } catch (error) {
    res.status(400).json({ error: error.toString() });
  }
});

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
 * UPVOTE a specific question
 */
// router.put('/:id', async (req, res) => {
// try {
//   const question = await Question.findById(req.id);
//   const user =
//   question.upvotes = [...question.upvotes, user._id];
// } catch (error) {

//   // }

//     .then((question) => {
//       question.text = req.body.text;

//       question
//         .save()
//         .then(() => res.json('question updated!'))
//         .catch((err) => res.status(400).json('Error: ', err));
//     })
//     .catch((err) => res.status(400).json('Error: ', err));
// });
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

/**
 * UPLOAD Image for Question -- SEE CLOUDINARY EXAMPLE
 */
router.use(express.json({ limit: '50mb' }));
router.use(express.urlencoded({ limit: '50mb', extended: true }));
router.post('/api/qid/upload', async (req, res) => {
  try {
    const fileStr = req.body.data;
    const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
      upload_preset: 'ml_default'
    });
    console.log(uploadedResponse);
    res.json({ msg: 'success' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: 'try again' });
  }
});
module.exports = router;
