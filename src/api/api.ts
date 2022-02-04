import axios from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';
import { fetchRatesAction, fetchRatesErrorAction, fetchRatesSuccsessAction } from '../store/exchangeReducer';

const URL = 'https://openexchangerates.org/api/latest.json?app_id=bcde4331dfca4e269b08462961977580';

export const getRates = () => {
  return async (dispatch: Dispatch<AnyAction>) => {
    dispatch(fetchRatesAction());
    try {
      const response = await axios.get(URL);

      dispatch(fetchRatesSuccsessAction(response.data.rates));
    } catch {
      dispatch(fetchRatesErrorAction());
    }
  };
};
