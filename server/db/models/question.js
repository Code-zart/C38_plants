const mongoose = require('mongoose');
const Answer = require('./answer');
const User = require('./user');
const { Schema } = mongoose;

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
    categories: { type: String },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      autopopulate: true
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
