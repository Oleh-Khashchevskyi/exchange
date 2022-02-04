import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Loader } from '../../components/Loader/Loader';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { Rate } from '../../types/Rate';
import classes from './Rates.module.scss';

export const Rates:React.FC = () => {
  const {
    rates,
    loading,
    defaultRate,
    error,
  } = useTypedSelector(state => state.exchange);
  const searchParams = new URLSearchParams(useLocation().search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';
  const visibleRates = rates.filter(rate => rate.name.toLowerCase().includes(searchQuery));
  const [query, setQuery] = useState(searchQuery.toString() || '');
  const navigate = useNavigate();

  const rateValue = rates.find(r => r.name === defaultRate)?.value;

  useEffect(() => {
    if (query) {
      searchParams.set('search', query);
    } else {
      searchParams.delete('search');
    }

    navigate({
      search: searchParams.toString(),
    });
  }, [query]);

  return (
    <>
      <Header />
      <main className="container">
        {loading && <Loader />}
        {error || loading ? (
          <h1 className={classes.title}>{error}</h1>
        ) : (
          <div className="rates">
            <div className={classes.head}>
              <h2 className={classes.title}>{`Amount per 100 ${defaultRate}:`}</h2>
              <input
                type="search"
                placeholder="search.."
                className={classes.search}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <ul className={classes.list}>
              {visibleRates.map((rate: Rate) => (
                <li key={rate.id} className={classes.item}>
                  <span>{`${rate.name}: `}</span>
                  <span>{+((rate.value / rateValue) * 100).toFixed(4)}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};
