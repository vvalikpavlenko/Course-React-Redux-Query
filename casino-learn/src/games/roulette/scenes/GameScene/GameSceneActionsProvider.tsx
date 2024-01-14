import type { FC, ReactNode } from 'react';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import {
  RouletteLifecycle,
  RouletteWinOrLose,
  clearRoulette,
  selectActiveNumber,
  selectRouletteLifecycle,
  selectRouletteWinNumber,
  setRouletteLifecycle,
  setWinOrLose
} from '../../slices/rouletteSlice';
import { clearRouletteSpin, selectRouletteSpinCurrentNumber } from '../../slices/rouletteSpinSlice';
import { setBalance } from '../../../../entities/wallet/slices/walletSlice';

interface GameSceneActionsProviderProps {
  children: ReactNode;
}

const GameSceneActionsProvider: FC<GameSceneActionsProviderProps> = ({ children }) => {
  const dispatch = useAppDispatch();

  const lifecycle = useAppSelector(selectRouletteLifecycle);
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentNumber = useAppSelector(selectRouletteSpinCurrentNumber);
  const currentBet = useAppSelector(selectRouletteSpinCurrentNumber);
  const winBed = useAppSelector(selectRouletteWinNumber);

  useEffect(() => {
    if (lifecycle === RouletteLifecycle.FINISHED && typeof currentBet === 'number') {
      if (activeNumber === currentNumber) {
        // Win case
        dispatch(setBalance(currentBet * winBed));
        dispatch(setWinOrLose(RouletteWinOrLose.WIN));
      } else {
        // Lose case
        dispatch(setBalance(-currentBet));
        dispatch(setWinOrLose(RouletteWinOrLose.LOSE));
      }
      dispatch(setRouletteLifecycle(RouletteLifecycle.INFO));
    }
  }, [lifecycle, dispatch, activeNumber, currentNumber, currentBet, winBed]);

  useEffect(() => {
    if (lifecycle === RouletteLifecycle.INFO) {
      setTimeout(() => {
        dispatch(setRouletteLifecycle(RouletteLifecycle.READY_TO_START));
        dispatch(clearRoulette());
        dispatch(clearRouletteSpin());
      }, 3000);
    }
  }, [lifecycle, dispatch]);

  return children;
};

export default GameSceneActionsProvider;
