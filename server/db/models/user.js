const mongoose = require('mongoose'),
  bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken');
const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    provider: {
      type: String,
      required: true
    },
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
    name: String,
    avatar: String,
    role: { type: String, default: 'USER' },
    bio: String,
    // google
    googleId: {
      type: String,
      unique: true,
      sparse: true
    },
    // fb
    facebookId: {
      type: String,
      unique: true,
      sparse: true
    },
    questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Question' }],
    answers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Answer' }],
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
