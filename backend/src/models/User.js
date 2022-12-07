const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
    },
    tokens: [
      {
        token: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);
userSchema.methods.generateToken = async function () {
  const token = jwt.sign(
    { id: this._id, email: this.email },
    process.env.SECRET_KEY
  );
  this.tokens.push({ token });
  await this.save();
  return token;
};
const User = mongoose.model("User", userSchema);
module.exports = User;
