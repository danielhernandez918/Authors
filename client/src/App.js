import React from 'react'
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Create from "./views/Create";
import Edit from "./views/Edit";
import Main from './views/Main';


function App() {

  return (
    <BrowserRouter>
      <h1>Favorite Authors</h1>
      <Switch>
        <Route exact path ="/">
          <Main/>
        </Route>
        <Route exact path ="/authors">
          <Create/>
        </Route>
        <Route exact path ="/authors/:id/edit">
          <Edit/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;