import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home, Login} from "./pages/pages";


function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/login" component={Login} />
        {/*<Route path="/" component=""> a</Route>*/}
        {/*<Route path="/" component=""> a</Route>*/}
      </Switch>
  );
}

export default App;
