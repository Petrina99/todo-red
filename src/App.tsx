import React from 'react';

import { BrowserRouter } from 'react-router-dom';
import { Routing } from 'modules/routing';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routing />
    </BrowserRouter>
  );
};
