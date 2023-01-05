import React from 'react';

import { Radio } from '../../common/Radio';

type FormRadioType = {
  checked: string;
  handleCheckbox: (checked: string) => void;
};

const FormRadio = (props: FormRadioType): React.ReactElement => {
  const { checked, handleCheckbox } = props;
  return (
    <div>
      <Radio
        name="Easy to say"
        value="easy-to-say"
        isChecked={checked}
        handleCheckbox={handleCheckbox}
      />
      <Radio
        name="Easy to read"
        value="easy-to-read"
        isChecked={checked}
        handleCheckbox={handleCheckbox}
      />
      <Radio
        name="All characters "
        value="all-characters"
        isChecked={checked}
        handleCheckbox={handleCheckbox}
      />
    </div>
  );
};

export { FormRadio };
