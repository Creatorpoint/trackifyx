require("./bot/bot");
import express from "express";
import redirectRoute from "./routes/redirect.js";
import campaignsRoute from "./routes/campaigns.js";

const app = express();
app.use(express.json());

app.use("/r", redirectRoute);
app.use("/api/campaigns", campaignsRoute);

app.get("/", (req, res) => {
  res.send("🚀 TrackifyX is running");
});

app.listen(process.env.PORT, () =>
  console.log(`Server running on port ${process.env.PORT}`)
);
