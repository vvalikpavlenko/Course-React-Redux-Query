import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { RouletteLifecycle, selectRouletteLifecycle, setRouletteLifecycle } from '../../slices/rouletteSlice';
import { setRouletteSpinStart } from '../../slices/rouletteSpinSlice';

const EventPanel = () => {
  const dispatch = useAppDispatch();
  const lifecycle = useAppSelector(selectRouletteLifecycle);

  const onStart = () => {
    dispatch(setRouletteSpinStart());
    dispatch(setRouletteLifecycle(RouletteLifecycle.PAY));
  };

  return (
    <>
      {lifecycle === RouletteLifecycle.READY_TO_START && <button onClick={onStart}>Start</button>}
      {lifecycle === RouletteLifecycle.PAY && <p>Playing...</p>}
      {lifecycle === RouletteLifecycle.FINISHED && <p>Calculation </p>}
      {lifecycle === RouletteLifecycle.INFO && <p>Win or Lose</p>}
    </>
  );
};
export default EventPanel;
