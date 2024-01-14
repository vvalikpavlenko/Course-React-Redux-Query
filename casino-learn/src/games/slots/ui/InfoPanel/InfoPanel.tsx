import { useEffect, useState } from 'react';

import { selectBalance } from '../../../../entities/wallet/slices/walletSlice';
import { useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, selectSlotCurrentBet, selectSlotLifecycle } from '../../slices/slotSlice';

const InfoPanel = () => {
  const balance = useAppSelector(selectBalance);
  const currentBet = useAppSelector(selectSlotCurrentBet);
  const lifecycle = useAppSelector(selectSlotLifecycle);

  const [displayBalance, setDisplayBalance] = useState<number>(balance);

  useEffect(() => {
    if (lifecycle === SlotLifecycle.INFO) {
      setDisplayBalance(balance);
    }
  }, [lifecycle, balance]);

  return (
    <div>
      <div>Balance: {displayBalance}</div>
      <div>Current Bet: {currentBet}</div>
    </div>
  );
};
export default InfoPanel;
