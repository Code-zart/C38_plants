const { string } = require('joi');

const mongoose = require('mongoose'),
  Answer = require('./answer'),
  User = require('./user'),
  { Schema } = mongoose;

const QuestionSchema = new Schema(
  {
    text: { type: String, required: true },
    answers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Answer',
        autopopulate: true
      }
    ],
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      autopopulate: { select: 'username' }
    },
    upvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    downvotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    image: String
  },

  { timestamps: true },
  { nested: { User, Answer } }
);
QuestionSchema.plugin(require('mongoose-autopopulate'));
const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
