import { useEffect } from 'react';
import { sound } from '@pixi/sound';
import * as PIXI from 'pixi.js';

import { Stage } from '../../../../app/config/contextBridge';
import RouletteSpinPixi from '../../pixi/RouletteSpin';
import GameSceneActionsProvider from './GameSceneActionsProvider';

import soundBg from '../../../../assets/sounds/roulette/bg.mp3';
import soundBet from '../../../../assets/sounds/roulette/bet.mp3';
import soundNumber from '../../../../assets/sounds/roulette/number.mp3';
import soundRouletteSpin from '../../../../assets/sounds/roulette/spin.mp3';

import { SOUNDS_ROULETTE } from './config';

import GameSceneUI from './GameSceneUI';
import BgPX from '../../pixi/Bg/Bg';

const [width, height] = [1150, 500];

const RouletteGameScene = () => {
  sound.add(SOUNDS_ROULETTE.BG, soundBg);
  sound.add(SOUNDS_ROULETTE.BET, soundBet);
  sound.add(SOUNDS_ROULETTE.NUMBER, soundNumber);
  sound.add(SOUNDS_ROULETTE.SPIN, soundRouletteSpin);

  useEffect(() => {
    (async () => {
      await PIXI.Assets.load(SOUNDS_ROULETTE.BG);
      sound.volume(SOUNDS_ROULETTE.BG, 0.2);
      sound.play(SOUNDS_ROULETTE.BG);
    })();
  }, []);

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
            <BgPX />
            <RouletteSpinPixi />
          </Stage>
        </GameSceneUI>
      </GameSceneActionsProvider>
    </div>
  );
};

export default RouletteGameScene;
