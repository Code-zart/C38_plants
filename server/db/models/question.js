const mongoose = require('mongoose'),
  Schema = mongoose.Schema;

const QuestionSchema = new Schema(
  {
    question: { type: String, require: true },
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }]
  },
  { timestamps: true }
);

const Question = mongoose.model('Question', QuestionSchema);
module.exports = { Question };
