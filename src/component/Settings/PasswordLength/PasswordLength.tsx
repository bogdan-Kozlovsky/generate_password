import React from 'react';

import { PasswordType } from '../../../types';

import styles from './styles.module.scss';

type PasswordLengthType = {
  passwordGen: PasswordType;
  setPasswordGen: (passwordGen: PasswordType) => void;
};
const PasswordLength = (props: PasswordLengthType): React.ReactElement => {
  const { passwordGen, setPasswordGen } = props;

  const setPasswordLength = (value: number): void => {
    setPasswordGen({
      ...passwordGen,
      length: value,
    });
  };

  return (
    <div className={styles.password}>
      <h3>Password Length</h3>
      <div className={styles.password__wrapper}>
        <input
          type="range"
          min="1"
          max="70"
          value={passwordGen.length}
          onChange={event => setPasswordLength(Number(event.target.value))}
        />

        <input
          className={styles.password__number}
          style={{ border: '1px solid #000' }}
          type="number"
          min="1"
          max="70"
          value={passwordGen.length}
          onChange={event => setPasswordLength(Number(event.target.value))}
        />
      </div>
    </div>
  );
};

export { PasswordLength };
