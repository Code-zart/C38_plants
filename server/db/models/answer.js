const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { User } = require('../models/user');
const { Question } = require('../models/question');

const AnswerSchema = new Schema(
  {
    answer: { type: String, required: true },
    question: { type: mongoose.Schema.Types.ObjectId, ref: 'Question' },

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

const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = { Answer };
