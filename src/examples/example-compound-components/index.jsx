import { TurnOnOff } from './components/TurnOnOff';
import { TurnButton } from './components/TurnOnOff/components/TurnButton';
import { TurnedOff } from './components/TurnOnOff/components/TurnedOff';
import { TurnedOn } from './components/TurnOnOff/components/TurnedOn';

const styles = {
  style: {
    color: 'blue',
    display: 'block',
    fontSize: '2rem',
  },
};

export const ExampleCompoundComponent = () => {
  return (
    // <Parent>
    //   <p>oi 1</p>
    //   <p>oi 2</p>
    //   <p>oi 3</p>
    // </Parent>

    <TurnOnOff>
      <div>
        <TurnedOn>ONLINE</TurnedOn>
        <TurnedOff>OFFLINE</TurnedOff>
        <TurnButton {...styles} />
      </div>
    </TurnOnOff>
  );
};
