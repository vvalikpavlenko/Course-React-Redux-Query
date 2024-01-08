import type { FC, ReactNode } from 'react';
import RouletteTable from '../../ui/RouletteTable';
import BetsPanel from '../../ui/BetsPanel';
import InfoPanel from '../../ui/InfoPanel';

interface GameSceneUIProps {
  children: ReactNode;
}
const GameSceneUI: FC<GameSceneUIProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-[5%] text-white">
        <InfoPanel />
      </div>
      <div className="absolute right-[5%] top-[40%] text-white">
        <RouletteTable />
      </div>
      <div className="absolute bottom-[15%] right-[30%]">
        <BetsPanel />
      </div>
      {children}
    </div>
  );
};

export default GameSceneUI;
