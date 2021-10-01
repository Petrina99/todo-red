import React from 'react';

import { useHistory } from 'react-router';

import style from './styles/welcome.module.css';

import logo from 'images/check.svg';

export const WelcomeView: React.FC = () => {

  const history = useHistory();

  const onClick = () => {
    history.push('/tasks');
  }

  return (
    <div className={style.welcomeDiv}>
      <div className={style.titleDiv}>
        <h1>Todoish</h1>
        <img alt='todoish-logo' src={logo} />
      </div>
      <div className={style.paragraphDiv}>
        <p>Keep your day-to-day tasks in</p>
        <p>one place</p>
      </div>
      <button 
        onClick={onClick}
        className={style.btn}  
      >
        Start planning
      </button>
      <footer className={style.footer}>
        <p>Created by</p>
        <p>Mislav Petrina © 2021.</p>
      </footer>
    </div>
  );
};
