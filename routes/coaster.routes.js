const express = require('express')
const router = express.Router()
const Coaster = require("../models/coaster.model.js");


router.get("/new-coaster", (req, res, next) => res.render("coasters/new-coaster"));

router.post("/new-coaster", (req, res, next) => {
  Coaster.create({
    name: req.body.name,
    description: req.body.description,
    inversions: req.body.active,
    length : req.body.name,
    active : req.body.active,
    park : Schema.Types.ObjectId // don't remember
  })
    .then(() => res.redirect("/"))
    .catch(function() {
      next();
      throw new Error("Something went wrong");
    });
});


module.exports = router