const Telebot = require('telebot')
const dotenv = require('dotenv')
dotenv.config()
const bot = new Telebot(process.env.TOKEN)

bot.on('/start', (msg) => {
    return msg.reply.text('Hi! I wasn\'t supposed to have this name, but here I am anyway deleting sticker and GIFs sent by Arya', {asReply: true});
});

bot.on('sticker', (msg) => {
    if(msg.from.id == 399723709){
        bot.deleteMessage(msg.chat.id, msg.message_id);
        return bot.sendMessage(msg.chat.id, '_"Now I am become Death, the destroyer of stickers"_', { parseMode: 'Markdown' }); 
    }else{
        return true;
    }
});

bot.start();