const router = require("express").Router();
const { nanoid } = require("nanoid");
const Link = require("../models/Link");

router.post("/create", async(req,res)=>{
  const code = nanoid(6);
  await Link.create({ code, url:req.body.url, createdBy:req.body.user });
  res.json({ short: code });
});

router.get("/stats", async(req,res)=>{
  const data = await Link.find({ createdBy:req.query.user });
  res.json(data);
});

router.redirect = async(req,res)=>{
  const link = await Link.findOne({ code:req.params.code });
  if(!link) return res.send("Invalid link");
  link.clicks++;
  await link.save();
  res.redirect(link.url);
};

module.exports = router;
