const router = require('express').Router();
const Recipe = require('../models/recipeModel');

router.post("/add", (req, res) => {
  const { title, images, ingredients, instructions, createdOn, createdBy, rating, source } = req.body;
  console.log(title, images, ingredients, instructions, createdOn, createdBy, rating, source);

  const newRecipe = new Recipe({
    title, images, ingredients, instructions, createdOn, createdBy, rating, source
  });

  newRecipe.save(err => {
    if (err) return res.status(400).json({ success:false, error:err});
    return res.status(200).json({ success:true })
  })
});

router.post("/", (req, res) => {
  console.log("query options: ", req.body);
  let order = req.body.order ? req.body.order : "desc"
  let sortBy = req.body.sortBy ? req.body.sortBy : "_id"
  let limit = req.body.limit ? parseInt(req.body.limit) : 100  
  Recipe.find((err, recipes) => {
      if (err) return res.status(400).json({ success:false, error:err });
      return res.status(200).json({ success:true, recipes });
    })
    .sort([[sortBy, order]])
    .limit(limit);
});

router.get("/:id", (req, res) => {
  Recipe.findById(req.params.id)
    .exec((err, recipe) => {
      if (err) return res.status(400).json({ success:false, error:err });
      return res.status(200).json({ success:true , recipe });
    })
})

module.exports = router;