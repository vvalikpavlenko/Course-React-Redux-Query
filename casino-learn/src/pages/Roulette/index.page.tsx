import { Link } from 'react-router-dom';

import { ROUTS } from '../../app/router/utils';

import CoreGameRoulette from '../../games/roulette';

import style from './index.module.scss';

const Roulette = () => {
  return (
    <div className={style.roulette}>
      <Link to={ROUTS.main}>Return to home</Link>
      <CoreGameRoulette />
    </div>
  );
};

export default Roulette;
