const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    //encrypt the password
    password = await bcrypt.hash(password, 10);
    const newUser = await User({ name, email, password });

    //token create
    const token = await newUser.generateToken();

    //store token in cookie
    res.cookie("authenticated", token, {
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
      httpOnly: true,
    });

    //display the user details
    res.status(200).json(newUser);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    //find the user with the perticular email if exist
    let user = await User.findOne({ email });

    //check wheather the password is matching or not
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      //check weather the token is present in cookie or not
      const cookieToken = req.cookies.authenticated;

      let matchUser = false;

      if (cookieToken) {
        const decoded = jwt.verify(cookieToken, process.env.SECRET_KEY);

        //check wheather the id of the verified token is equal to the new logging in user
        if (decoded.id === user._id.toString()) matchUser = true;
      }

      const willGenerateToken = !cookieToken || !matchUser;

      if (willGenerateToken) {
        if (cookieToken) {
          const decoded = jwt.verify(cookieToken, process.env.SECRET_KEY);
          const oldUser = await User.findOne({ _id: decoded.id });

          //deleting the token present in cookie from the database
          oldUser.tokens = oldUser.tokens.filter(
            (token) => token.token != cookieToken
          );
        }

        //token create
        const token = await user.generateToken();

        //store token in cookie
        res.cookie("authenticated", token, {
          expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
          httpOnly: true,
        });
      }

      //display the user details
      res.status(200).json(user);
    } else {
      throw new Error("Invalid email or password");
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};
const logout = async (req, res) => {
  try {
    await res.clearCookie("authenticated");
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token != req.token
    );
    await req.user.save();
    res.status(200).json("Successfully logged out");
  } catch (err) {
    res.status(400).json(err.message);
  }
};
const logoutOfAll = async (req, res) => {
  try {
    await res.clearCookie("authenticated");
    req.user.tokens = [];
    await req.user.save();
    res.status(200).json("Successfully logged out");
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = { login, signup, logout, logoutOfAll };
