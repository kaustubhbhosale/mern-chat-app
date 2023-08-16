const mongoose = require("mongoose");

const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        //users is array because there will be more than two users in group chat
        type: mongoose.Schema.Types.ObjectID, //this will contain Id to particular user
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.Schema.Types.ObjectID,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Chat = mongoose.model("Chat", chatModel);

module.exports = Chat;
