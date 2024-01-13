import type { FC, ReactNode } from 'react';
import EventPanel from '../../ui/EventPanel';
import BetsPanel from '../../ui/BetsPanel';
import InfoPanel from '../../ui/InfoPanel';

interface SlotGameSceneUIProps {
  children: ReactNode;
}
const SlotGameSceneUI: FC<SlotGameSceneUIProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute left-[15%] top-[50%] translate-y-[-50%]">
        <BetsPanel />
      </div>
      <div className="absolute right-[15%] top-[30%]">
        <InfoPanel />
      </div>
      <div className="absolute right-[15%] top-[50%]">
        <EventPanel />
      </div>

      {children}
    </div>
  );
};

export default SlotGameSceneUI;
