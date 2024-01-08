import { Stage } from '@pixi/react';
import RouletteSpinPixi from '../../pixi/RouletteSpin';

import GameSceneUI from './GameSceneUI';

const [width, height] = [1100, 500];

const RouletteGameScene = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>title game</h1>
      <GameSceneUI>
        <Stage
          width={width}
          height={height}
          options={{ backgroundColor: 'c1c1c1' }}
        >
          <RouletteSpinPixi />
        </Stage>
      </GameSceneUI>
    </div>
  );
};

export default RouletteGameScene;
