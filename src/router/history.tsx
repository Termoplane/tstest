import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import { routerConfig } from './config';

const history = createBrowserHistory();

const RouterHistory: React.FC = () => {
  const switchesEls = routerConfig.map(({ href, component, exact = true }) => (
    <Route key={href} exact={exact} path={href} component={component} />
  ));

  return (
    <Router history={history}>
      <Switch>
        {switchesEls}
      </Switch>
    </Router>
  );
};

export { RouterHistory };
