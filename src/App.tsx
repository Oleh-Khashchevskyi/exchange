import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Exchange } from './pages/Exchange/Exchange';
import { Home } from './pages/Home/Home';
import { PageNotFound } from './pages/PageNotFound/PageNotFound';
import { Rates } from './pages/Rates/Rates';
import { getRates } from './api/api';

import './App.scss';
import './styles/main.scss';
import { Modal } from './components/Modal/Modal';

export const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRates());
  }, []);

  return (
    <>
      <Modal />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};
