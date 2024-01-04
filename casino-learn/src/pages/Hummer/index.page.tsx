import { Link } from 'react-router-dom';

import { ROUTS } from '../../app/router/utils';

const Hummer = () => {
  return (
    <div>
      <Link to={ROUTS.main}>return to Home</Link>
      <p>hummers</p>
    </div>
  );
};

export default Hummer;
