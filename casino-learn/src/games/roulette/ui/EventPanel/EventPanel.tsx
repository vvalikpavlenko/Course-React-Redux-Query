import { useAppDispatch } from '../../../../app/store/hook';
import { setBalance } from '../../../../entities/wallet/slices/walletSlices';

const EventPanel = () => {
  const dispatch = useAppDispatch();

  const onClick = () => {
    dispatch(setBalance(200));
  };

  return <button onClick={onClick}>Start</button>;
};
export default EventPanel;
