import express from "express";
import db from "../db.js";

const router = express.Router();

router.get("/:slug", async (req, res) => {
  try {
    const slug = req.params.slug;
    const source = req.query.src || "direct";

    const campaign = await db.query(
      "SELECT * FROM campaigns WHERE slug=$1",
      [slug]
    );

    if (campaign.rows.length === 0) {
      return res.status(404).send("Invalid tracking link");
    }

    await db.query(
      "INSERT INTO clicks (campaign_id, source, ip, device) VALUES ($1,$2,$3,$4)",
      [
        campaign.rows[0].id,
        source,
        req.ip,
        req.headers["user-agent"]
      ]
    );

    res.redirect(campaign.rows[0].redirect_url);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
});

export default router;
