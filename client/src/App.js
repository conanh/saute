import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  const [currentMenu, setCurrentMenu] = useState('');

  const handleClick = e => {
    console.log('click ', e);
    setCurrentMenu(e.key);
  };

  return (
    <BrowserRouter>

      <Layout className="layout">
        <Header>
        <Link to="/"><div className="logo" /></Link>
          <Menu theme="dark" mode="horizontal" selectedKeys={[currentMenu]} onClick={handleClick}>
            <Menu.Item key="recipes">
              <Link to="/recipes">Recipes</Link>
            </Menu.Item>
            <Menu.Item key="planning">
              <Link>Meal Planning</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Switch>
          <Route exact path="/recipes" component={RecipeList} />
          <Route path="/recipes/add" component={AddRecipe} />
          <Route path="/recipes/:id" component={Recipe} />
        </Switch>
        <Footer style={{ textAlign: 'center' }}>Saute ©2020</Footer>
      </Layout>


    </BrowserRouter>
  );
}

export default App;
