import SlotGameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';
import RowsPX from '../../pixi/rows/Rows.pixi';
import SlotLifecycleProvider from './SlotLifecycleProvider';

const [width, height]: number[] = [1150, 500];

const SlotGameScene = () => {
  return (
    <div className="flex justify-center items-center">
      <SlotLifecycleProvider>
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
      </SlotLifecycleProvider>
    </div>
  );
};

export default SlotGameScene;
