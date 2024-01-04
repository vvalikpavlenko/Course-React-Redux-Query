import { Link } from 'react-router-dom';

import { ROUTS } from '../../app/router/utils';
import { useAppSelector } from '../../app/store/hook';
import { selectUserNickname } from '../../entities/user/slices/userSlice';
import { useGetUserQuery } from '../../entities/user/api/userApi';

const Home = () => {
  const data = useAppSelector(selectUserNickname);

  const { data: users } = useGetUserQuery({ userId: 2 });

  return (
    <div className="flex gap-4">
      {data}
      <Link to={ROUTS.games.roulette}>roulette</Link>
      <Link to={ROUTS.games.slots}>slots</Link>
      <Link to={ROUTS.games.hummers}>hummers</Link>
    </div>
  );
};

export default Home;
