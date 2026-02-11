import TelegramBot from "node-telegram-bot-api";

console.log("🤖 Bot loading...");

const TOKEN = process.env.BOT_TOKEN;

if (!TOKEN) {
  console.error("❌ BOT_TOKEN missing");
  process.exit(1);
}

const bot = new TelegramBot(TOKEN, { polling: true });

console.log("✅ Bot started (polling)");

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    "✅ TrackifyX Bot is LIVE!\nBackend clean restart successful 🚀"
  );
});

bot.on("polling_error", (err) => {
  console.error("🚨 Polling error:", err.message);
});
