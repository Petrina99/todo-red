import React from 'react';

import { WelcomeView, TaskView } from 'views';
import { Switch, Route } from 'react-router-dom';

export const Routing: React.FC = () => {
  return (
    <Switch>
      <Route exact path='/'>
        <WelcomeView />
      </Route>
      <Route exact path='/tasks'>
        <TaskView />
      </Route>
    </Switch>
  );
};
