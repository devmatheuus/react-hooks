import { useContext } from 'react';

import { TurnOnOffContext } from '../../context';

export const TurnButton = ({ ...props }) => {
  const { isOn, handleToggle } = useContext(TurnOnOffContext);

  return (
    <button onClick={handleToggle} {...props}>
      Turn {isOn ? 'OFF' : 'ON'}
    </button>
  );
};
