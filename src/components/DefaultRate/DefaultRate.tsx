import React from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { changeDefaultRateAction } from '../../store/exchangeReducer';
import { Select } from '../Select/Select';

import classes from './DefaultRate.module.scss';

export const DefaultRate:React.FC = () => {
  const dispatch = useDispatch();
  const { rates, defaultRate } = useTypedSelector(state => state.exchange);

  const changeDefaultRate = (value: string) => {
    dispatch(changeDefaultRateAction(value));
  };

  return (
    <div className={classes.rate}>
      <Select options={rates} value={defaultRate} setValue={changeDefaultRate} />
    </div>
  );
};
