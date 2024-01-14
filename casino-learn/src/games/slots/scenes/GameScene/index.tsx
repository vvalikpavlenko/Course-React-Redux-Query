import RowsPX from '../../pixi/rows/Rows.pixi';
import { Stage } from '../../../../app/config/contextBridge';

import SlotGameSceneUI from './GameSceneUI';
import SlotLifecycleProvider from './SlotLifecycleProvider';
import BalanceProvider from './BalanceProvider';

const [width, height]: number[] = [1150, 500];

const SlotGameScene = () => {
  return (
    <div className="flex justify-center items-center">
      <SlotLifecycleProvider>
        <BalanceProvider>
          <SlotGameSceneUI>
            <Stage
              width={width}
              height={height}
              options={{
                background: 'green'
              }}
            >
              <RowsPX />
            </Stage>
          </SlotGameSceneUI>
        </BalanceProvider>
      </SlotLifecycleProvider>
    </div>
  );
};

export default SlotGameScene;
