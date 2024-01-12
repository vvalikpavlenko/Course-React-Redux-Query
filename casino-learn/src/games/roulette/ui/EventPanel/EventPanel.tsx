import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import RouletteStartButton from '../../shared/button/RouletteStartButton';
import {
  RouletteLifecycle,
  RouletteWinOrLose,
  selectRouletteLifecycle,
  selectRouletteWinOrLose,
  setRouletteLifecycle
} from '../../slices/rouletteSlice';
import { selectRouletteSpinCurrentNumber, setRouletteSpinStart } from '../../slices/rouletteSpinSlice';

const EventPanel = () => {
  const dispatch = useAppDispatch();
  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const winOrLose = useAppSelector(selectRouletteWinOrLose);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);

  const onStart = () => {
    dispatch(setRouletteSpinStart());
    dispatch(setRouletteLifecycle(RouletteLifecycle.PAY));
  };

  return (
    <>
      {lifecycle === RouletteLifecycle.READY_TO_START && <RouletteStartButton onClick={onStart} />}
      {lifecycle === RouletteLifecycle.PAY && <p>Playing...</p>}
      {lifecycle === RouletteLifecycle.FINISHED && <p>Calculation </p>}
      {lifecycle === RouletteLifecycle.INFO && (
        <div className="flex gap-4">
          <div>{winOrLose === RouletteWinOrLose.WIN ? 'Win' : 'Lose'}!</div>
          <div>{currentNumber}</div>
        </div>
      )}
    </>
  );
};
export default EventPanel;
