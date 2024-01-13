import SlotGameSceneUI from './GameSceneUI';
import { Stage } from '../../../../app/config/contextBridge';

const [width, height] = [1000, 500];

const SlotGameScene = () => {
  return (
    <div className="flex justify-center items-center">
      <SlotGameSceneUI>
        <Stage
          white={width}
          height={height}
          options={{
            background: 'green'
          }}
        />
      </SlotGameSceneUI>
    </div>
  );
};

export default SlotGameScene;
