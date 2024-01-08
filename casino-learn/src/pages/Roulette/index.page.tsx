import { Link } from 'react-router-dom';

import { ROUTS } from '../../app/router/utils';

import CoreGameRoulette from '../../games/roulette';

const Roulette = () => {
  return (
    <div>
      <Link to={ROUTS.main}>Return to home</Link>
      <CoreGameRoulette />
    </div>
  );
};

export default Roulette;
