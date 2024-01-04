import { Link } from 'react-router-dom';
import { ROUTS } from '../../app/router/utils';

const Roulette = () => {
  return (
    <div>
      <Link to={ROUTS.main}>Return to home</Link>
      <p>roulette</p>
    </div>
  );
};

export default Roulette;
