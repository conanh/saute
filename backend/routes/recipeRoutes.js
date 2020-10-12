const router = require('express').Router();
const Recipe = require('../models/recipeModel');

router.post("/add", (req, res) => {
  const { title, images, ingredients, instructions, createdOn, createdBy, rating, source } = req.body;
  console.log(title, images, ingredients, instructions, createdOn, createdBy, rating, source);

  const newRecipe = new Recipe({
    title, images, ingredients, instructions, createdOn, createdBy, rating, source
  });

  newRecipe.save(err => {
    if (err) return res.status(400).json({ success:false, err});
    return res.status(200).json({ success:true })
  })
});

router.get("/", (req, res) => {
  Recipe.find((err, recipes) => {
      if (err) return res.status(400).json({ success:false, err });
      return res.status(200).json({ success:true, recipes });
    })
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .exec((err, recipe) => {
      if (err) return res.status(400).json({ success:false, err });
      return res.status(200).json({ success:true , recipe });
    })
})

module.exports = router;