import React from 'react';
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
      <Switch>
        <Route exact path="/" component=""> HOME </Route>
        {/*<Route path="/" component=""> a</Route>*/}
        {/*<Route path="/" component=""> a</Route>*/}
        {/*<Route path="/" component=""> a</Route>*/}
      </Switch>
  );
}

export default App;
