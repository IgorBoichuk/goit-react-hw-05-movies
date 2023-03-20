import React from 'react';
import { NavLink } from 'react-router-dom';

import style from './style.module.css';

export const Header = () => {
  return (
    <header className={style.header}>
      <NavLink className="link" to="/">
        Home
      </NavLink>
      <NavLink className="link" to="/movies">
        Movies
      </NavLink>
    </header>
  );
};
