const router = require("express").Router();
const Message = require("../models/Message");
const User = require("../models/User");

//add

const add_msg =async (req, res) => {
  const newMessage = new Message(req.body);
  try {
    const savedMessage = await newMessage.save();
    res.status(200).json(savedMessage);
  } catch (err) {
    res.status(500).json(err);
  }
};

//GET_MESSAGES

const get_msg= async (req, res) => {
  try {
    const messages = await Message.find({
      conversationId: req.query.conversationId,
    });
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json(err);
  }
};

const get_info= async (req, res) => {
  try {
    const userId= req.body.userId;
    const user = await User.findById(userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};


module.exports = {
    get_msg, 
    add_msg,
    get_info
};
