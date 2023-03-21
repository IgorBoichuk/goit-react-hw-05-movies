// import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './header/Header';
import { Suspense } from 'react';

const SharedLayout = () => {
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
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </>
  );
};
export default SharedLayout;
