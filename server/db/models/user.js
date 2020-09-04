const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/^[a-zA-Z0-9_]+$/, 'is invalid'],
      index: true
    },
    email: {
      type: String,
      lowercase: true,
      unique: true,
      required: [true, "can't be blank"],
      match: [/\S+@\S+\.\S+/, 'is invalid'],
      index: true
    },
    password: {
      type: String,
      trim: true,
      required: true,
      minlength: 6,
      maxlength: 60
    },
    name: { type: String, required: true },
    avatar: String,
    bio: String,
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
    qUpVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    aUpVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
    qDownVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    aDownVotes: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    darkmode: { Type: Boolean, default: false },
    tokens: [
      {
        token: {
          type: String,
          required: true
        }
      }
    ]
  },
  { timestamps: true }
);

// By naming this method toJSON we don't need to call it for it to run because of our express res.send methods calls it for us.
UserSchema.methods.toJSON = function () {
  const user = this;
  const userObject = user.toObject();
  delete userObject.password;
  delete userObject.tokens;
  return userObject;
};

UserSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign(
    { _id: user._id.toString(), name: user.name },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
  user.tokens = user.tokens.concat({ token });
  await user.save();
  return token;
};

// find user by email and password
UserSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("user doesn't exist");
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('invalid credentials');
  return user;
};

UserSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
