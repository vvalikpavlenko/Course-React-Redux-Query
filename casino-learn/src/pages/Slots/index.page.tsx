import { Link } from 'react-router-dom';

import { ROUTS } from '../../app/router/utils';

import SlotGameScene from '../../games/slots/scenes/GameScene';

const Slots = () => {
  return (
    <div>
      <Link to={ROUTS.main}>return to Home</Link>
      <SlotGameScene />
    </div>
  );
};
export default Slots;
