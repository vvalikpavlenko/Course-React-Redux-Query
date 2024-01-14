import { useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, selectSlotLifecycle } from '../../slices/slotSlice';

const EventPanel = () => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const onStart = () => {
    
  };
  return <div>{lifecycle === SlotLifecycle.READY_TO_START && <button onClick={onStart}>Go!</button>}</div>;
};
export default EventPanel;
