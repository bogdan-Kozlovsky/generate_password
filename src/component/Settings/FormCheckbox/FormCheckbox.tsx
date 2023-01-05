import React from 'react';

import { PasswordType } from '../../../types';
import { Checkbox } from '../../common/Checkbox';

type FormCheckboxType = {
  passwordGen: PasswordType;
  setPasswordGen: (passwordGen: PasswordType) => void;
  isDisable: boolean;
};

const FormCheckbox = (props: FormCheckboxType): React.ReactElement => {
  const { passwordGen, setPasswordGen, isDisable } = props;

  const handleChangeUppercase = (): void => {
    setPasswordGen({
      ...passwordGen,
      uppercase: !passwordGen.uppercase,
    });
  };

  const handleChangeLowercase = (): void => {
    setPasswordGen({
      ...passwordGen,
      lowercase: !passwordGen.lowercase,
    });
  };

  const handleChangeNumbers = (): void => {
    setPasswordGen({
      ...passwordGen,
      numbers: !passwordGen.numbers,
    });
  };

  const handleChangeSymbols = (): void => {
    setPasswordGen({
      ...passwordGen,
      symbols: !passwordGen.symbols,
    });
  };

  return (
    <div>
      <Checkbox
        name="Uppercase"
        value={passwordGen.uppercase}
        onChange={handleChangeUppercase}
      />
      <Checkbox
        name="Lowercase"
        value={passwordGen.lowercase}
        onChange={handleChangeLowercase}
      />
      <Checkbox
        name="Numbers"
        value={passwordGen.numbers}
        isDisable={isDisable}
        onChange={handleChangeNumbers}
      />
      <Checkbox
        name="Symbols"
        value={passwordGen.symbols}
        isDisable={isDisable}
        onChange={handleChangeSymbols}
      />
    </div>
  );
};

export { FormCheckbox };
