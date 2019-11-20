const express = require('express')
const router = express.Router()
const Park = require("../models/park.model.js");

router.get("/new-park", (req, res, next) => res.render("parks/new-park"));
router.post("/new-park", (req, res, next) => {
  Park.create({
    name: req.body.name,
    description: req.body.description,
    active: req.body.active
  })
    .then(() => res.redirect("/"))
    .catch(function() {
      next();
      throw new Error("Something went wrong");
    });
});


module.exports = router