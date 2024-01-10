import { useState } from 'react';
import { Container, Sprite, useTick } from '@pixi/react';

import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import {
  selectRouletteSpinRotationInProgress,
  selectRouletteSpinSpeed,
  setRouletteSpinDegreesRotation,
  setRouletteSpinSpeed
} from '../../slices/rouletteSpinSlice';
import { radianToDegrees } from '../../../../shared/lib/degrees/radianToDegrees';

import arrowImage from '../../../../assets/roulette/arrow.png';
import externalCircleImage from '../../../../assets/roulette/external-circle.png';
import internalCircleImage from '../../../../assets/roulette/internal-circle.png';
import mediumCircleImage from '../../../../assets/roulette/medium-circle.png';
import wheelImage from '../../../../assets/roulette/wheel.png';
import { RouletteLifecycle, setRouletteLifecycle } from '../../slices/rouletteSlice';

const POSITION_SPIN = {
  x: 200,
  y: 300,
  anchor: 0.5
};

const POSITION_ARROW = {
  x: 200,
  y: 170,
  rotation: -0.45,
  anchor: 0.5
};

const RouletteSpinPixi = () => {
  const speed = useAppSelector(selectRouletteSpinSpeed);
  const rotationInProgress = useAppSelector(selectRouletteSpinRotationInProgress);

  const dispatch = useAppDispatch();

  const [rotationMedium, setRotationMedium] = useState<number>(0);
  const [rotationWheel, setRotationWheel] = useState<number>(0);

  useTick(delta => {
    if (rotationInProgress) {
      const rotation = delta * speed;
      setRotationMedium(prev => prev + rotation);
      setRotationWheel(prev => prev - rotation);
      if (speed < 0.005) {
        dispatch(setRouletteSpinSpeed(0));
        dispatch(setRouletteSpinDegreesRotation(radianToDegrees(rotationMedium % (Math.PI * 2))));
        dispatch(setRouletteLifecycle(RouletteLifecycle.FINISHED));
      } else {
        dispatch(setRouletteSpinSpeed(null));
      }
    }
  });

  return (
    <Container>
      <Sprite
        image={externalCircleImage}
        {...POSITION_SPIN}
      />
      <Sprite
        image={mediumCircleImage}
        rotation={rotationMedium}
        {...POSITION_SPIN}
      />
      <Sprite
        image={internalCircleImage}
        {...POSITION_SPIN}
      />
      <Sprite
        image={wheelImage}
        rotation={rotationWheel}
        {...POSITION_SPIN}
      />
      <Sprite
        image={arrowImage}
        {...POSITION_ARROW}
      />
    </Container>
  );
};

export default RouletteSpinPixi;
