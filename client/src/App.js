import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import RecipeList from './components/RecipeList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/recipes" component={RecipeList} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
