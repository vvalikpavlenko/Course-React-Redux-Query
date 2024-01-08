import { useAppSelector } from '../../../../app/store/hook';

import { selectActiveNumber } from '../../slices/rouletteSlice';

const BetPanel = () => {
  const activeNumber = useAppSelector(selectActiveNumber);
  if (activeNumber === 0) {
    return null;
  }
  return activeNumber;
};

export default BetPanel;
