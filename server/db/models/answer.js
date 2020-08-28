import mongoose from 'mongoose';
import User from '../models/user';
import Question from '../models/question';

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

// DO WE NEED THIS??
// import Joi from 'joi';
// export const validateMessage = (message) => {
//   const schema = {
//     text: Joi.string().min(5).max(300).required(),
//   };
//   return Joi.validate(message, schema);
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

const Answer = mongoose.model('Answer', AnswerSchema);
module.exports = Answer;
