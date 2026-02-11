import TelegramBot from "node-telegram-bot-api";

console.log("🤖 Bot file loaded");

if (!process.env.BOT_TOKEN) {
  console.error("❌ BOT_TOKEN is missing");
  process.exit(1);
}

const bot = new TelegramBot(process.env.BOT_TOKEN, {
  polling: true
});

bot.on("polling_error", (err) => {
  console.error("🚨 Polling error:", err.message);
});

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🚀 TrackifyX bot is LIVE");
});

console.log("✅ Telegram bot polling started");
