import { Link } from 'react-router-dom';
import { ROUTS } from '../../app/router/utils';
const Home = () => {
  return (
    <div className="flex gap-4">
      <Link to={ROUTS.games.roulette}>roulette</Link>
      <Link to={ROUTS.games.slots}>slots</Link>
      <Link to={ROUTS.games.hummers}>hummers</Link>
    </div>
  );
};

export default Home;
