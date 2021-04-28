import React, {useEffect} from 'react';
import Home from './pages/Home';
import Response from './pages/Response';
import "aos/dist/aos.css";

import AOS from "aos";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <Router>
      <Switch>
          <Route path="/response">
            <Response />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
