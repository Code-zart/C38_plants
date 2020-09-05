const mongoose = require('mongoose'),
  { Schema } = mongoose;

const AnswerSchema = new Schema(
  {
    text: { type: String, required: true },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    upvotes: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true }
    ],
    downvotes: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true }
    ]
  },
  { timestamps: true }
);
const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
