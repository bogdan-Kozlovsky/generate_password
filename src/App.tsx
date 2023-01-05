import { ReactElement, useState } from 'react';
import './App.scss';

import { Panel, Settings } from './component';

const App = (): ReactElement => {
  const [handePassword, setHandePassword] = useState('');

  const [passwordGen, setPasswordGen] = useState({
    length: 10,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true,
  });

  return (
    <div className="wrapper">
      <div className="content">
        <Panel
          passwordGen={passwordGen}
          handePassword={handePassword}
          setHandePassword={setHandePassword}
        />
        <Settings passwordGen={passwordGen} setPasswordGen={setPasswordGen} />
      </div>
    </div>
  );
};

export default App;
