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
      <div className="absolute left-[3%] top-[30%]">
        <InfoPanel />
      </div>
      <div className="absolute right-[9%] bottom-[15%]">
        <EventPanel />
      </div>
      <div className="absolute left-[50%] bottom-[3%] translate-x-[-50%]">
        <BetsPanel />
      </div>

      {children}
    </div>
  );
};

export default SlotGameSceneUI;
