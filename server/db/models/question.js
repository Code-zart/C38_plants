const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { User } = require('../models/user');
const { Answer } = require('../models/answer');

const QuestionSchema = new Schema(
  {
    text: { type: String, required: true },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
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

const Question = mongoose.model('Question', QuestionSchema);
module.exports = { Question };
