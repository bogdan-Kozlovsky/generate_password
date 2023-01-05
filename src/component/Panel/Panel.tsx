import React, { ReactElement, useState } from 'react';

import iconGenerate from '../../assets/icons/icon-generate-new.svg';
import { ArrayType, PasswordType } from '../../types';
import { CheckmarkRound } from '../common/CheckmarkRound';
import { Copy } from '../common/Copy';

import styles from './styles.module.scss';

type PanelType = {
  handePassword: string;
  setHandePassword: (handePassword: string) => void;
  passwordGen: PasswordType;
};

const Panel = ({
  handePassword,
  setHandePassword,
  passwordGen,
}: PanelType): ReactElement => {
  const [copied, setCopied] = useState(false);
  const [isRotated, setIsRotated] = React.useState(false);

  const onCopyClick = (): void => {
    if (handePassword.length > 0) {
      navigator.clipboard.writeText(handePassword);
      setCopied(true);
      setInterval(() => {
        setCopied(false);
      }, 2000);
    }
  };

  const generatePassword = (): void => {
    setIsRotated(rotated => !rotated);
    const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const symbolsArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

    const characterCodes = Array.from(Array(26)).map((_e, i) => i + 97);
    const lowerCaseLetters = characterCodes.map(code => String.fromCharCode(code));
    const upperCaseLetters = lowerCaseLetters.map(letter => letter.toUpperCase());

    const { length, uppercase, lowercase, numbers, symbols } = passwordGen;

    const generateTheWord = (
      length: number,
      uppercase: boolean,
      lowercase: boolean,
      numbers: boolean,
      symbols: boolean,
    ): ArrayType => {
      const availableCharacters = [
        ...(lowercase ? lowerCaseLetters : []),
        ...(uppercase ? upperCaseLetters : []),
        ...(numbers ? numbersArray : []),
        ...(symbols ? symbolsArray : []),
      ];

      const shuffleArray = (array: ArrayType): ArrayType =>
        array.sort(() => Math.random() - 0.5);
      const characters = shuffleArray(availableCharacters).slice(0, length);
      setHandePassword(characters.join(''));
      return characters;
    };

    generateTheWord(length, uppercase, lowercase, numbers, symbols);
  };
  return (
    <div className={styles.panel}>
      <div className={styles.panel__wrapper}>
        <input
          className={styles.panel__input}
          type="text"
          value={handePassword}
          placeholder=""
          autoComplete="off"
          onChange={event => setHandePassword(event.target.value)}
        />
        <button className={styles.panel__button_generate} onClick={generatePassword}>
          <img
            className={` ${isRotated ? styles.panel__rotate : ''}`}
            src={iconGenerate}
            alt="icon-generate-new"
          />
        </button>
        <button className={styles.panel__button_copy} onClick={onCopyClick}>
          {copied ? <Copy /> : <CheckmarkRound />}
        </button>
      </div>
    </div>
  );
};

export { Panel };
