import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Card, Row, Col } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Meta } = Card;

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
    let image = recipe.images[0] || `https://via.placeholder.com/240?text=${recipe.title}`;
    return <Col xl={4} lg={6} md={8} s={12} xs={24}>
        <Link to={`/recipes/${recipe._id}`}>
          <Card
            className="recipe-card"
            hoverable
            style={{ }}
            cover={<img src={image} alt={recipe.title}/>}
          >
            <Meta title={<span title={recipe.title}>{recipe.title}</span>} />
          </Card>
        </Link>
      </Col>
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
      <Row gutter={[24, 24]} className="recipe-card-container">
        {renderRecipes}
      </Row>
      
    </div>
  )
};



export default RecipeList
