import type { FC, ReactNode } from 'react';
import RouletteTable from '../../ui/RouletteTable';
import BetsPanel from '../../ui/BetsPanel';
import InfoPanel from '../../ui/InfoPanel';
import EventPanel from '../../ui/EventPanel';

interface GameSceneUIProps {
  children: ReactNode;
}
const GameSceneUI: FC<GameSceneUIProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[5%] text-white">
        <InfoPanel />
      </div>
      <div className="absolute left-[45%] bottom-[29%] text-white">
        <RouletteTable />
      </div>
      <div className="absolute left-[62%] top-[25%] text-white">
        <EventPanel />
      </div>
      <div className="absolute left-[45%] bottom-[10%] text-white z-10">
        <BetsPanel />
      </div>
      {children}
    </div>
  );
};

export default GameSceneUI;
