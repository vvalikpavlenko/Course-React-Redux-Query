import { Stage } from '../../../../app/config/contextBridge';
import RouletteSpinPixi from '../../pixi/RouletteSpin';
import GameSceneActionsProvider from './GameSceneActionsProvider';

import GameSceneUI from './GameSceneUI';

const [width, height] = [1150, 500];

const RouletteGameScene = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>title game</h1>
      <GameSceneActionsProvider>
        <GameSceneUI>
          <Stage
            width={width}
            height={height}
            options={{ backgroundColor: 'green' }}
          >
            <RouletteSpinPixi />
          </Stage>
        </GameSceneUI>
      </GameSceneActionsProvider>
    </div>
  );
};

export default RouletteGameScene;
