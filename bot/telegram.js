const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.BOT_TOKEN,{polling:true});
const axios = require("axios");

bot.onText(/\/short (.+)/, async(msg,match)=>{
 const res = await axios.post("https://YOUR_DOMAIN/api/links/create",{
   url: match[1], user: msg.from.username
 });
 bot.sendMessage(msg.chat.id, `Short Link:\nhttps://YOUR_DOMAIN/${res.data.short}`);
});
