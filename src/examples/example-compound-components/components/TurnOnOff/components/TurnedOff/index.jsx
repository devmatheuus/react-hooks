import { useContext } from 'react';

import { TurnOnOffContext } from '../../context';

export const TurnedOff = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);

  return !isOn ? children : null;
};
