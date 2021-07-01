import React from 'react';
import {Switch, Route} from 'react-router-dom';
import {Home} from "./pages/pages";


function App() {
  return (
      <Switch>
        <Route exact path="/" component={Home}/>
        {/*<Route path="/" component=""> a</Route>*/}
        {/*<Route path="/" component=""> a</Route>*/}
        {/*<Route path="/" component=""> a</Route>*/}
      </Switch>
  );
}

export default App;
