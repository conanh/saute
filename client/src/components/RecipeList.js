import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Typography, Card, Row, Col, Layout, Input } from 'antd';
import { PlusOutlined, DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Meta } = Card;
const { Content, Sider } = Layout;
const { Search } = Input;

function RecipeList() {
  const [Recipes, setRecipes] = useState([]);
  const [menuCollapsed, setMenuCollapsed] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [recipesLoading, setRecipesLoading] = useState(false);

  useEffect(() => {
    const options = {order:'desc', sortBy:'createdOn'}; //temp
    axios.post('http://localhost:5000/recipes', options)
      .then(res => {
        if (res.data.success) {
          console.log("Recipes: ", res.data.recipes);
          setRecipes([...res.data.recipes]);
        } else {
          alert('Failed to retreive product data' + res.data.error.message);
        }
      })
  }, []);

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

  const onInputChange = event => {
    setSearchQuery(event.target.value);
    setRecipesLoading(true);
    console.log("query: ", event.target.value);
  }
  const onSearch = searchTerms => {
    console.log("search terms:", searchTerms);
  }
  const onBreakpoint = broken => {
    console.log("broken:", broken);
  }
  const onCollapse = (collapsed, type) => {
    console.log("collapsed & type:", collapsed, type);
    setMenuCollapsed(!menuCollapsed);
  }

  return (
    <Layout>
      <Sider 
        className="search-sider"
        width={240}
        breakpoint="lg"
        onBreakpoint={onBreakpoint}
        onCollapse={onCollapse}
        collapsed={menuCollapsed}
      >
        <Button 
          className={menuCollapsed ? "btn-collapse collapsed" : "btn-collapse"}
          onClick={onCollapse}
        >
          {menuCollapsed ? <DoubleRightOutlined /> : <DoubleLeftOutlined />}
        </Button>
        <Search
          placeholder="Search..."
          allowClear
          onSearch={onSearch}
          onChange={onInputChange}
          className={menuCollapsed ? "search collapsed" : "search"}
        />
        <div></div>
        <div>Blah</div>
      </Sider>
      <Content className="recipes-list">
        <Title level={2} id="recipes-list-title">Recipes</Title>
        <Link to="/recipes/add">
          <Button 
              id="add-recipe-btn" 
              icon={<PlusOutlined />}
              type="primary"
              size="large"
              shape="round"
            >Add Recipe</Button>
        </Link>
        <Row gutter={[24, 24]} className="recipe-card-container">
          {renderRecipes}
        </Row>
      </Content>
    </Layout>
  )
};



export default RecipeList
