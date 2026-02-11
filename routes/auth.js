const router = require("express").Router();
const User = require("../models/User");
const jwt = require("jsonwebtoken");

router.post("/login", async (req,res)=>{
  const user = await User.findOne(req.body);
  if(!user) return res.status(401).send("Invalid");

  const token = jwt.sign(user.username, process.env.JWT_SECRET);
  res.json({token, role:user.role});
});

module.exports = router;
