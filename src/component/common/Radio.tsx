import React from 'react';

type RadioType = {
  name: string;
  value: string;
  isChecked: string;
  handleCheckbox: (checked: string) => void;
};

const Radio = (props: RadioType): React.ReactElement => {
  const { name, isChecked, value, handleCheckbox } = props;
  return (
    <label className="label">
      {name}
      <input
        type="radio"
        value={value}
        checked={isChecked === value}
        onChange={event => handleCheckbox(event.currentTarget.value)}
        name="encryption-style"
      />
    </label>
  );
};

export { Radio };
