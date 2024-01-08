import type { FC, ReactNode } from 'react';
import RouletteTable from '../../ui/RouletteTable';
import BetPanel from '../../ui/BetPanel';

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
        <BetPanel />
      </div>
      {children}
    </div>
  );
};

export default GameSceneUI;
