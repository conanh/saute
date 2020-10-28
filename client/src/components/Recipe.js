import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Image, Typography, Rate, Carousel } from 'antd';

const { Title } = Typography;

function Recipe(params) {
  const [Recipe, setRecipe] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:5000/recipes/${id}`)
        .then(res => {
          if (res.data.success) {
            setRecipe(res.data.recipe);
          } else {
            alert('Could not fetch the recipe');
          }
        })
        .catch(err => {
          console.log("error: ", err);
        });
  },[id]);

  const renderCarouselImages = () => {
    let images = Recipe.images ? Recipe.images : [`https://via.placeholder.com/750x500?text="${Recipe.title}"`];
    return images.map((image,index) => {
      return <Image 
          src={image}
          alt={`${Recipe.title}-${index}`}
          placeholder={true}
          className="image"
          key={index}
        />
    });
  }

  return (
    <div className="recipe-single">
      <Title level={2} className="title">{Recipe.title}</Title>
      <div className="rating"><Rate disabled value={Recipe.rating} title={`${Recipe.rating}/5`} /></div>
      <Carousel className="image-carousel">
        {renderCarouselImages()}
      </Carousel>
      <Title level={3} className="recipe-label">Ingredients</Title>
      <div className="ingredients">{Recipe.ingredients}</div>
      <Title level={3} className="recipe-label">Instructions</Title>
      <div className="instructions">{Recipe.instructions}</div>
      <div className="source">Source: {Recipe.source}</div>
    </div>
  )
}

export default Recipe;