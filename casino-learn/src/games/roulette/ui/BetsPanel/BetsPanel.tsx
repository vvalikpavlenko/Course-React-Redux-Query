import { useAppSelector } from '../../../../app/store/hook';

import { selectActiveNumber } from '../../slices/rouletteSlice';

const BetsPanel = () => {
  const activeNumber = useAppSelector(selectActiveNumber);
  if (activeNumber === 0) {
    return null;
  }
  return activeNumber;
};

export default BetsPanel;
