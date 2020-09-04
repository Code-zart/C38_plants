const mongoose = require('mongoose'),
  User = require('./user'),
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
      required: true,
      autopopulate: true
    },
    upvotes: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true }
    ],
    downvotes: [
      { type: mongoose.Schema.Types.ObjectId, ref: 'User', autopopulate: true }
    ]
  },
  { timestamps: true },
  { nested: User }
);
AnswerSchema.plugin(require('mongoose-autopopulate'));
const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
