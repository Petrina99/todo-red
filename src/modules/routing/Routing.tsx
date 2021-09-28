import React from 'react';

import { WelcomeView, TaskView } from 'views';
import { Switch, Route } from 'react-router-dom';

export const Routing: React.FC = () => {
  return (
    <Switch>
      <Route path='/'>
        <WelcomeView />
      </Route>
      <Route path='/tasks'>
        <TaskView />
      </Route>
    </Switch>
  );
};
