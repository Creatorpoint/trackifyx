const router = require("express").Router();
const User = require("../models/User");

router.post("/add", async(req,res)=>{
  await User.create(req.body);
  res.send("Admin Added");
});

router.get("/users", async(req,res)=>{
  res.json(await User.find());
});

module.exports = router;
