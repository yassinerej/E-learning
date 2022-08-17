const router = require("express").Router();
const Conversation = require("../models/Conversation");
const Message = require("../models/Message");

// const test = async (req,res)=> {
//     const ok= await Conversation.find({}); 
//     res.status(200).json(ok);
// }


//new conv
const new_conv = async (req, res) => {
  const newConversation = new Conversation({
    members: [req.body.senderId, req.body.receiverId],
  });

  try {
    const savedConversation = await newConversation.save();
    res.status(200).json(savedConversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

//get conv of a user

const get_user_conv = async (req, res) => {
  try {
    let user=req.query.user
    const conversation = await Conversation.find({
      members: { $in: [user] },
    });
    res.status(200).json(conversation);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get conv includes two userId

const get_conv_twoUsers = async (req, res) => {
  try {
    const conversation = await Conversation.findOne({
      members: { $all: [req.query.firstUserId, req.query.secondUserId] },
    });
    res.status(200).json(conversation)
  } catch (err) {
    res.status(500).json(err);
  }
};

const get_conv_info = async (req, res) => {
	try{
		  const convId = req.body.convId;
			const lastMsg = await Message.findOne({
        conversationId:convId
      }).sort({"createdAt":-1} ).limit(1);
      console.log('conv info',lastMsg,convId);
			res.json(lastMsg);
	}catch(err){ 
		res.json("Can't find lastMsg");
	}
}

module.exports = {
    get_conv_twoUsers,
    get_user_conv, 
    new_conv,
    get_conv_info
};