import { useState } from 'react';

import { TurnOnOffContext } from './context';

export const TurnOnOff = ({ children }) => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => setIsOn((prevState) => !prevState);

  return (
    <TurnOnOffContext.Provider value={{ isOn, handleToggle }}>
      {children}
    </TurnOnOffContext.Provider>
  );
};
