import { Stage } from '@pixi/react';
import RouletteSpinPixi from '../../pixi/RouletteSpin';

import bgImage from '../../../../assets/roulette/bg1.jpg';

const [width, height] = [1000, 500];

const RouletteGameScene = () => {
  return (
    <div className="flex flex-col items-center">
      <h1>title game</h1>
      <Stage
        width={width}
        height={height}
        options={{ backgroundColor: 'c1c1c1' }}
      >
        <RouletteSpinPixi />
      </Stage>
    </div>
  );
};

export default RouletteGameScene;
