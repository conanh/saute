import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';
import AddRecipe from './components/AddRecipe';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/recipes" component={RecipeList} />
        <Route path="/recipes/add" component={AddRecipe} />
        <Route path="/recipes/:id" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
