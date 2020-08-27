import mongoose from 'mongoose';

const { Schema } = mongoose;

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

// DO WE NEED THIS??
// import Joi from 'joi';
// export const validateQuestion = (question) => {
//   const schema = {
//     text: Joi.string().min(5).max(300).required()
//   };
//   return Joi.validate(question, schema);
// };
// messageSchema.methods.toJSON = function () {
//   return {
//     id: this._id,
//     text: this.text,
//     createdAt: this.createdAt,
//     updatedAt: this.updatedAt,
//     user: this.user.toJSON(),
//   };
// };

const Question = mongoose.model('Question', QuestionSchema);
module.exports = Question;
