import React, { useEffect, useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Loader } from '../../components/Loader/Loader';
import { Select } from '../../components/Select/Select';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import classes from './Exchange.module.scss';

export const Exchange:React.FC = () => {
  const { rates, loading, error } = useTypedSelector(state => state.exchange);

  const [fromValue, setFromValue] = useState('');
  const [toValue, setToValue] = useState('');

  const [fromRate, setFromRate] = useState('');
  const [toRate, setToRate] = useState('');

  function change() {
    const rate = fromRate;

    setFromRate(toRate);
    setToRate(rate);
  }

  function convert() {
    if (!fromValue) {
      setToValue('');
    }

    if (fromValue && fromRate && toRate) {
      const from = rates.find(rate => rate.name === fromRate)?.value;
      const to = rates.find(rate => rate.name === toRate)?.value;

      setToValue(
        ((to / from) * +fromValue).toFixed(2),
      );
    }
  }

  useEffect(() => {
    setFromRate(rates[0]?.name);
    setToRate(rates[1]?.name);
  }, [rates]);

  useEffect(() => {
    convert();
  }, [fromValue, fromRate, toRate]);

  return (
    <>
      <Header />
      <main className="container">
        {loading && <Loader />}
        {error || loading ? (
          <h1 className={classes.title}>{error}</h1>
        ) : (
          <div className={classes.exchange}>
            <div className={classes.field}>
              <input
                type="text"
                placeholder={fromRate}
                className={classes.input}
                value={fromValue}
                onChange={(e) => setFromValue(e.target.value.replace(/\D/g, ''))}
              />
              <Select options={rates} value={fromRate} setValue={setFromRate} />
            </div>
            <div className={classes.field}>
              <input
                type="text"
                placeholder={toRate}
                className={classes.input}
                value={toValue}
                readOnly
              />
              <Select options={rates} value={toRate} setValue={setToRate} />
            </div>
            <button
              type="button"
              className={classes.changeBtn}
              onClick={change}
            >
              <i className="fas fa-exchange-alt" />
            </button>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
