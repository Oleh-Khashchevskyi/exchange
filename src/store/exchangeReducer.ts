import { AnyAction } from 'redux';
import { StateType } from '../types/Rate';

const defaultState: StateType = {
  rates: [],
  defaultRate: localStorage.getItem('rate') || '',
  loading: false,
  error: null,
};

const FETCH_RATES = 'FETCH_RATES';
const FETCH_RATES_SUCCSESS = 'FETCH_RATES_SUCCSESS';
const FETCH_RATES_ERROR = 'FETCH_RATES_ERROR';
const CHANGE_DEFAULT_RATE = 'CHANGE_DEFAULT_RATE';

export const exchangeReducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case FETCH_RATES:
      return {
        ...state,
        loading: true,
      };

    case FETCH_RATES_SUCCSESS:
      return {
        ...state,
        loading: false,
        rates: Object.keys(action.payload).map((key, i) => (
          {
            id: i + 1, name: key, value: action.payload[key],
          }
        )),
      };

    case FETCH_RATES_ERROR:
      return {
        ...state,
        loading: false,
        error: 'An error occurred while requesting the server...',
      };

    case CHANGE_DEFAULT_RATE:
      localStorage.setItem('rate', action.payload);

      return {
        ...state,
        defaultRate: action.payload,
      };

    default:
      return state;
  }
};

export const fetchRatesAction = () => ({ type: FETCH_RATES });
export const fetchRatesSuccsessAction = (payload: AnyAction) => (
  { type: FETCH_RATES_SUCCSESS, payload }
);
export const fetchRatesErrorAction = () => ({ type: FETCH_RATES_ERROR });
export const changeDefaultRateAction = (payload: string) => (
  { type: CHANGE_DEFAULT_RATE, payload }
);
