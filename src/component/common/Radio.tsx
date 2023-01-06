import React from 'react';

import { Tooltip as ReactTooltip } from 'react-tooltip';

import infoIcon from '../../assets/icons/icon-info.svg';

import styles from './styles.module.scss';

type RadioType = {
  name: string;
  value: string;
  isChecked: string;
  handleCheckbox: (checked: string) => void;
  valueTooltip: string;
};

const Radio = (props: RadioType): React.ReactElement => {
  const { name, isChecked, value, handleCheckbox, valueTooltip } = props;

  return (
    <div className={styles.radio}>
      <label className="label">
        <input
          type="radio"
          value={value}
          checked={isChecked === value}
          onChange={event => handleCheckbox(event.currentTarget.value)}
          name="encryption-style"
        />
        {name}
      </label>
      <img id={name} className={styles.radio__icon} src={infoIcon} alt="icon info" />
      <ReactTooltip
        className="tooltip"
        anchorId={name}
        content={valueTooltip}
        place="right"
      />
    </div>
  );
};

export { Radio };
