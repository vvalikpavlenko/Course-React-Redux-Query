import type { FC, ReactNode } from 'react';
import RouletteTable from '../../ui/RouletteTable';
import BetsPanel from '../../ui/BetsPanel';

interface GameSceneUIProps {
  children: ReactNode;
}
const GameSceneUI: FC<GameSceneUIProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute right-[5%] top-[40%] text-white">
        <RouletteTable />
      </div>
      <div className="absolute bottom-[5%] right-[5%]">
        <BetsPanel />
      </div>
      {children}
    </div>
  );
};

export default GameSceneUI;
