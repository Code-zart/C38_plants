const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AnswerSchema = new Schema(
  {
    text: { type: String, required: true },
    question: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Question',
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
