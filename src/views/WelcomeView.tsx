import React from 'react';

import { useHistory } from 'react-router';

export const WelcomeView: React.FC = () => {

  const history = useHistory();

  const onClick = () => {
    history.push('/tasks');
  }

  return (
    <div>
      <h1>Todoish</h1>
      <p>Keep your day-to-day tasks in</p>
      <p>one place</p>
      <button onClick={onClick}>Start planning</button>
    </div>
  );
};
