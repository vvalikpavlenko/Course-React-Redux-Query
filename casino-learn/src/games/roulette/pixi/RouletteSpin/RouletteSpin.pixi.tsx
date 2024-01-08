import { useState } from 'react';
import { Container, Sprite, useTick } from '@pixi/react';

import arrowImage from '../../../../assets/roulette/arrow.png';
import externalCircleImage from '../../../../assets/roulette/external-circle.png';
import internalCircleImage from '../../../../assets/roulette/internal-circle.png';
import mediumCircleImage from '../../../../assets/roulette/medium-circle.png';
import wheelImage from '../../../../assets/roulette/wheel.png';

const POSITION_SPIN = {
  x: 200,
  y: 300,
  anchor: 0.5
};

const POSITION_ARROw = {
  x: 280,
  y: 190,
  rotation: 0.4
};

const SPEED = 0.05;

const RouletteSpinPixi = () => {
  const [rotationMedium, setRotationMedium] = useState<number>(0);
  const [rotationWheel, setRotationWheel] = useState<number>(0);

  useTick(delta => {
    const rotation = delta * SPEED;
    setRotationMedium(prev => prev + rotation);
    setRotationWheel(prev => prev - rotation);
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
        {...POSITION_ARROw}
      />
    </Container>
  );
};

export default RouletteSpinPixi;
