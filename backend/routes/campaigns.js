import express from "express";
import db from "../db.js";

const router = express.Router();

router.post("/create", async (req, res) => {
  const { slug, redirect_url } = req.body;

  try {
    await db.query(
      "INSERT INTO campaigns (slug, redirect_url) VALUES ($1,$2)",
      [slug, redirect_url]
    );

    res.json({
      success: true,
      tracking_link: `/r/${slug}`
    });
  } catch (err) {
    res.status(400).json({ error: "Slug already exists" });
  }
});

export default router;
