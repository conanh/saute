import React, { useState, useEffect } from 'react';
import axios from 'axios';

function RecipeList() {
  const [Recipes, setRecipes] = useState([]);

  const getRecipes = () => {
    axios.get('http://localhost:5000/recipes')
      .then(res => {
        if (res.data.success) {
          setRecipes([...res.data.recipes]);
        } else {
          alert('Failed to retreive product data' + res.data.error.message);
        }
      })
  }

  useEffect(() => {
    getRecipes();
  }, [])

  const renderRecipes = Recipes.map((recipe, index) => {
    return <div key={index} className="recipe-card">
        <div className="title">{recipe.title}</div>
        <div className="image"><img src={recipe.images[0]} alt={recipe.title}/></div>
      </div>
  })

  return (
    <div>
      {renderRecipes}
    </div>
  )
};



export default RecipeList
