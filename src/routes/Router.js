import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PageNotFound from '../views/404';
import About from '../views/About';
import Home from '../views/Home';
import Projects from '../views/Projects';
import Detail from '../views/Detail';

function Router() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
      <Route path="/detail" component={Detail} />
      <Route component={PageNotFound} />
    </Switch>
  );
}

export default Router;
