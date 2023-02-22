import { useContext } from 'react';

import { TurnOnOffContext } from '../../context';

export const TurnedOn = ({ children }) => {
  const { isOn } = useContext(TurnOnOffContext);

  return isOn ? children : null;
};
