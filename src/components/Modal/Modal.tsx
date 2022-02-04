import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { changeDefaultRateAction } from '../../store/exchangeReducer';
import { Loader } from '../Loader/Loader';
import { Select } from '../Select/Select';

import classes from './Modal.module.scss';

export const Modal:React.FC = () => {
  const dispatch = useDispatch();
  const { rates, loading, defaultRate } = useTypedSelector(state => state.exchange);

  const changeDefaultRate = (value: string) => {
    dispatch(changeDefaultRateAction(value));
  };

  if (defaultRate) {
    return <></>;
  }

  return (
    <div className={classes.modal}>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h2 className={classes.title}>Please, choose your rate</h2>
          <Select options={rates} value={defaultRate} setValue={changeDefaultRate} />
        </>
      )}
    </div>
  );
};
