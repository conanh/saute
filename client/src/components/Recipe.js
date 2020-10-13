import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function Recipe(params) {
  const [Recipe, setRecipe] = useState({});
  let { id } = useParams();

  const getRecipe = () => {
    axios.get(`http://localhost:5000/recipes/${id}`)
        .then(res => {
          if (res.data.success) {
            setRecipe(res.data.recipe);
            console.log(res.data.recipe); //testing
          } else {
            alert('Could not fetch the recipe');
          }
        })
        .catch(err => {
          console.log("error: ", err);
        });
        
  }

  useEffect(() => {
    getRecipe();
  });

  return (
    <div>
      <div className="title">{Recipe.title}</div>
      <div className="rating">Rating: {Recipe.rating}/5</div>
      <div className="image"><img src={Recipe.images} alt={Recipe.title}/></div>
      {/* <img src={Recipe.images[0]} alt={Recipe.title} className="image"/> */}
      <div className="ingredients">{Recipe.ingredients}</div>
      <div className="instructions">{Recipe.instructions}</div>
      <div className="source">Source: {Recipe.source}</div>
    </div>
  )
}

export default Recipe;