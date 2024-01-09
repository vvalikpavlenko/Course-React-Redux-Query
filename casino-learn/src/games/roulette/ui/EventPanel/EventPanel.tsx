import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { setRouletteSpinStart } from '../../slices/rouletteSpinSlice';

const EventPanel = () => {
  const dispatch = useAppDispatch();

  const rotationInProgress = useAppSelector(state => state.rouletteSpin.rotationInProgress);

  const onClick = () => {
    dispatch(setRouletteSpinStart());
  };

  return (
    <button
      disabled={rotationInProgress}
      onClick={onClick}
    >
      Start
    </button>
  );
};
export default EventPanel;
