import App from 'App';
import MainContext, { defaultValue, IMainContext } from 'contexts/MainContext';
import React, { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

const Root: React.FC = () => {
  const [context, setContext] = useState<IMainContext>(defaultValue);
  return (
    <MainContext.Provider value={context}>
      <Router>
        <Switch>
          <Route path="/another">
            <div>Another route</div>
          </Route>
          <Route path="/">
            <App setContext={setContext} />
          </Route>
        </Switch>
      </Router>
    </MainContext.Provider>
  );
};

export default Root;
