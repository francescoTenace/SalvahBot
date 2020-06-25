const Telebot = require("telebot");
const dotenv = require("dotenv");
dotenv.config();
const bot = new Telebot({
  token: process.env.TOKEN,
  webhook: {
    port: process.env.PORT,
  },
});
const _ = require("lodash");

bot.on("/start", (msg) => {
  return msg.reply.text(
    "Hi! I wasn't supposed to have this name, but here I am anyway deleting stickers and GIFs sent by Arya",
    { asReply: true }
  );
});

bot.on("document", (msg) => {
  if (msg.from.id == 399723709) {
    if (msg.document.mime_type == "video/mp4") {
      bot.deleteMessage(msg.chat.id, msg.message_id);
      return _.throttle(function () {
        bot.sendMessage(
          msg.chat.id,
          '_"Now I am become Death, the destroyer of GIFs"_',
          { parseMode: "Markdown" }
        );
      }, 60000);
    }
  }
});

bot.on("sticker", (msg) => {
  if (msg.from.id == 399723709) {
    bot.deleteMessage(msg.chat.id, msg.message_id);
    return _.throttle(function () {
      bot.sendMessage(
        msg.chat.id,
        '_"Now I am become Death, the destroyer of stickers"_',
        { parseMode: "Markdown" }
      );
    }, 60000);
  }
});

bot.start();
