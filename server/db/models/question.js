const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { User } = require('../models/user');
const { Answer } = require('../models/answer');

const QuestionSchema = new Schema(
  {
    question: { type: String, required: true },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
    // Something like this?
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    // maybe
    upvote: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    downvote: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
  },
  { timestamps: true }
);

const Question = mongoose.model('Question', QuestionSchema);
module.exports = { Question };
