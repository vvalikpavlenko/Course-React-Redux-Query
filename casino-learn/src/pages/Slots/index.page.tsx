import { Link } from 'react-router-dom';

import { ROUTS } from '../../app/router/utils';

const Slots = () => {
  return (
    <div>
      <Link to={ROUTS.main}>return to Home</Link>
      <p>slots</p>
    </div>
  );
};
export default Slots;
