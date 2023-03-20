import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';

export const Layout = () => {
  return (
    <>
      <Header />
      <div
        style={{
          fontSize: 20,
          color: '#010101',
          padding: 10,
        }}
      >
        <Outlet />
      </div>
    </>
  );
};
