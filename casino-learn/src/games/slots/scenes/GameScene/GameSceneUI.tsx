import type { FC, ReactNode } from 'react';

interface SlotGameSceneUIProps {
  children: ReactNode;
}
const SlotGameSceneUI: FC<SlotGameSceneUIProps> = ({ children }) => {
  return (
    <div className="relative">
      <div className="absolute let-[5%] top[50%]">Game scene slot UI</div>
      {children}
    </div>
  );
};

export default SlotGameSceneUI;
