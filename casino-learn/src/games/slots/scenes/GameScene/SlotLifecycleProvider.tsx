import { useEffect } from 'react';
import type { FC, ReactNode } from 'react';

import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, selectSlotLifecycle, setSlotCurrentBet, setSlotLifecycle } from '../../slices/slotSlice';

interface ISlotLifecycleProviderProps {
  children: ReactNode;
}

const SlotLifecycleProvider: FC<ISlotLifecycleProviderProps> = ({ children }) => {
  const lifecycle = useAppSelector(selectSlotLifecycle);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (lifecycle === SlotLifecycle.PLAY) {
      const stopping = setTimeout(() => {
        dispatch(setSlotLifecycle(SlotLifecycle.STOPPING));
      }, 2000);

      return () => clearTimeout(stopping);
    }
  }, [lifecycle, dispatch]);

  useEffect(() => {
    if (lifecycle === SlotLifecycle.STOPPING) {
      const stop = setTimeout(() => {
        dispatch(setSlotLifecycle(SlotLifecycle.STOP));
      }, 3000);

      return () => clearTimeout(stop);
    }
  }, [lifecycle, dispatch]);

  useEffect(() => {
    if (lifecycle === SlotLifecycle.STOP) {
      dispatch(setSlotLifecycle(SlotLifecycle.INFO));
    }
  }, [lifecycle, dispatch]);

  useEffect(() => {
    if (lifecycle === SlotLifecycle.INFO) {
      setTimeout(() => {
        dispatch(setSlotLifecycle(SlotLifecycle.READY_TO_START));
        dispatch(setSlotCurrentBet(0));
      }, 3000);
    }
  }, [lifecycle, dispatch]);

  return <>{children}</>;
};

export default SlotLifecycleProvider;
