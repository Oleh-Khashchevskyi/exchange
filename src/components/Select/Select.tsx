import React, { useState } from 'react';
import { Rate } from '../../types/Rate';

import classes from './Select.module.scss';

type Props = {
  options: Rate[],
  value: string,
  setValue: (value: string) => void,
};

export const Select:React.FC<Props> = ({ options, value, setValue }) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className={classes.select}
      onMouseLeave={() => setActive(false)}
    >
      <button
        type="button"
        className={classes.oppener}
        onClick={() => setActive(!active)}
      >
        {value || 'Select'}
        <i className="fas fa-angle-down" />
      </button>
      <div className={classes.options} style={{ display: active ? 'flex' : 'none' }}>
        {options.map(option => (
          <button
            key={option.id}
            type="button"
            className={classes.option}
            onClick={() => {
              setValue(option.name);
              setActive(false);
            }}
          >
            {option.name}
          </button>
        ))}
      </div>
    </div>
  );
};
