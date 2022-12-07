const Note = require("../models/Note");

const createNote = async (req, res) => {
  const { title, description } = req.body;
  try {
    const userId = req.user._id;
    const newNote = await Note.create({ title, description, userId });
    res.status(200).json(newNote);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const getNote = async (req, res) => {
  try {
    const allNotes = await Note.find({ userId: req.user._id }).populate(
      "userId",
      "-tokens"
    );

    res.status(200).json(allNotes);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const editNote = async (req, res) => {
  const { title, description } = req.body;
  try {
    let note = {};
    if (title) note = { ...note, title };
    if (description) note = { ...note, description };
    const updatedNote = await Note.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      note,
      { new: true }
    );
    res.status(200).json(updatedNote);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const deleteNote = async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndDelete(
      { _id: req.params.id, userId: req.user._id },
      { new: true }
    );
    res.status(200).json(deletedNote);
  } catch (err) {
    res.status(400).json(err.message);
  }
};

const searchNote = async (req, res) => {
  if (req.query.search) {
    const searchedNote = await Note.find({
      title: { $regex: req.query.search, $options: "i" },
      userId: req.user._id,
    });
    res.status(200).json(searchedNote);
  }
};

module.exports = { getNote, createNote, editNote, deleteNote, searchNote };
