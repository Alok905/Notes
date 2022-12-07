const {
  getNote,
  createNote,
  editNote,
  deleteNote,
  searchNote,
} = require("../controllers/noteController");
const userAuthorization = require("../middlewares/userAuth");

const noteRouter = require("express").Router();

noteRouter.post("/create", userAuthorization, createNote);
noteRouter.get("/fetch", userAuthorization, getNote);
noteRouter.put("/:id", userAuthorization, editNote);
noteRouter.delete("/:id", userAuthorization, deleteNote);
noteRouter.get("/", userAuthorization, searchNote);

module.exports = noteRouter;
