import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import Recipe from './components/Recipe';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/recipes" component={RecipeList} />
        <Route path="/recipes/:id" component={Recipe} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
