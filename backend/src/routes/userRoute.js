const {
  signup,
  login,
  logout,
  logoutOfAll,
} = require("../controllers/userController");
const userAuthorization = require("../middlewares/userAuth");

const userRouter = require("express").Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.get("/logout", userAuthorization, logout);
userRouter.get("/logoutall", userAuthorization, logoutOfAll);

module.exports = userRouter;
