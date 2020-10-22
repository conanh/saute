import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

function RecipeList() {
  const [Recipes, setRecipes] = useState([]);

  const options = {order:'desc', sortBy:'createdOn'}; //temp

  const getRecipes = () => {
    axios.post('http://localhost:5000/recipes', options)
      .then(res => {
        if (res.data.success) {
          console.log("Recipes: ", res.data.recipes);
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
        <Link to={`/recipes/${recipe._id}`}>
          <div className="title">{recipe.title}</div>
          <div className="image"><img src={recipe.images[0]} alt={recipe.title}/></div>
        </Link>
      </div>
  })

  return (
    <div>
      <div className="add-recipe-header">
        <Title level={2}>Recipes</Title>
        <Link to="/recipes/add">
          <Button 
              className="add-recipe-btn" 
              icon={<PlusOutlined />}
              type="primary"
              size="large"
              shape="round"
            >Add Recipe</Button>
        </Link>
      </div>
      {renderRecipes}
    </div>
  )
};



export default RecipeList
