import TelegramBot from "node-telegram-bot-api";

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

console.log("🤖 Telegram bot started");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "🚀 Welcome to TrackifyX\nDashboard: " + process.env.BASE_URL
  );
});
