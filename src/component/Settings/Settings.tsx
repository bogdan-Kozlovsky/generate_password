import React, { useState } from 'react';

import { PasswordType } from '../../types';

import { FormCheckbox } from './FormCheckbox/FormCheckbox';
import { FormRadio } from './FormRadio/FormRadio';
import { PasswordLength } from './PasswordLength/PasswordLength';
import styles from './styles.module.scss';

type SettingsPropsType = {
  passwordGen: PasswordType;
  setPasswordGen: (passwordGen: PasswordType) => void;
};

const Settings = ({
  passwordGen,
  setPasswordGen,
}: SettingsPropsType): React.ReactElement => {
  const [checked, setChecked] = useState('all-characters');
  const [isDisable, setIsDisable] = useState(false);

  const handleCheckbox = (value: string): void => {
    setChecked(value);

    if (value === 'easy-to-say') {
      setPasswordGen({
        ...passwordGen,
        numbers: false,
        symbols: false,
      });
      setIsDisable(true);
    }

    if (value === 'easy-to-read') {
      setPasswordGen({
        ...passwordGen,
        uppercase: true,
        lowercase: true,
        numbers: false,
        symbols: false,
      });
      setIsDisable(false);
    }

    if (value === 'all-characters') {
      setPasswordGen({
        ...passwordGen,
        uppercase: true,
        lowercase: true,
        numbers: true,
        symbols: true,
      });
    }
  };

  return (
    <div className={styles.settings}>
      <h1 className={styles.settings__title}>Customize your password</h1>

      <div className={styles.settings__wrapper}>
        <PasswordLength passwordGen={passwordGen} setPasswordGen={setPasswordGen} />

        <FormRadio checked={checked} handleCheckbox={handleCheckbox} />
        <FormCheckbox
          isDisable={isDisable}
          setPasswordGen={setPasswordGen}
          passwordGen={passwordGen}
        />
      </div>
    </div>
  );
};

export { Settings };
