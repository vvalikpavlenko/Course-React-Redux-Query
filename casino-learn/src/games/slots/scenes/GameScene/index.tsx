import RowsPX from '../../pixi/rows/Rows.pixi';
import { Stage } from '../../../../app/config/contextBridge';

import SlotGameSceneUI from './GameSceneUI';
import SlotLifecycleProvider from './SlotLifecycleProvider';
import BalanceProvider from './BalanceProvider';

import styles from './gameScene.module.scss';
import BodyPX from '../../pixi/Body';

const [width, height]: number[] = [1150, 500];

const SlotGameScene = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>Slot</h1>
      <div className={styles.table}>
        <SlotLifecycleProvider>
          <BalanceProvider>
            <SlotGameSceneUI>
              <Stage
                width={width}
                height={height}
                options={{
                  backgroundColor: 'rgba(46, 29, 51, 0.96)'
                }}
              >
                <BodyPX />
                <RowsPX />
              </Stage>
            </SlotGameSceneUI>
          </BalanceProvider>
        </SlotLifecycleProvider>
      </div>
    </div>
  );
};

export default SlotGameScene;
