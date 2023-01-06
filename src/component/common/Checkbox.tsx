import { ChangeEventHandler, ReactElement } from 'react';

import styles from './styles.module.scss';

type Pros = {
  name: string;
  value: boolean;
  isDisable?: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
};

const Checkbox = (props: Pros): ReactElement => {
  const { name, value, isDisable, onChange } = props;

  return (
    <label className={styles.checkbox__label}>
      <input type="checkbox" disabled={isDisable} checked={value} onChange={onChange} />
      {name}
    </label>
  );
};

export { Checkbox };
