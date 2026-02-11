import express from "express";
import redirectRoute from "./backend/routes/redirect.js";
import campaignsRoute from "./backend/routes/campaigns.js";
import db from "./backend/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/r", redirectRoute);
app.use("/api/campaigns", campaignsRoute);

app.get("/", (req, res) => {
  res.send("🚀 TrackifyX running!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server on port ${PORT}`));
