import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { SingleMovie } from 'pages/SingleMovie';
import { NotFound } from 'pages/NotFound';
import { Layout } from './Layout';

// import style from './style.module.css';

export const App = () => {
  return (
    <div
      style={{
        height: '60px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<SingleMovie />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
};
