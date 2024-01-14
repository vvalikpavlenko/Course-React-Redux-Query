import { useState } from 'react';
import type { FC } from 'react';
import { Container, Sprite, useTick } from '@pixi/react';

import { TSlotRow } from './utils';

interface IRowPXProps {
  rowID: number;
  activeItemID: number;
  slotRow: TSlotRow[];
}

const ITEM_HEIGHT: number = 100;
const SPEED: number = 0;

const OPTIONS_SPRITE = {
  x: 0,
  scale: 0.5
};

const RowPX: FC<IRowPXProps> = ({ slotRow, rowID }) => {
  const FULL_HEIGHT_ROW = slotRow.length * ITEM_HEIGHT;
  const [position, setPosition] = useState(-FULL_HEIGHT_ROW);
  useTick(delta => {
    if (position >= FULL_HEIGHT_ROW) {
      setPosition(-FULL_HEIGHT_ROW);
    } else {
      setPosition(prevState => prevState + SPEED * delta);
    }
  });
  return (
    <Container
      x={(rowID - 1) * 120}
      y={position}
    >
      {/* Fake top row */}
      <Container y={-FULL_HEIGHT_ROW}>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            y={idx * ITEM_HEIGHT}
            {...OPTIONS_SPRITE}
          />
        ))}
      </Container>
      {/* END Fake top row */}

      <Container>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            y={idx * ITEM_HEIGHT}
            {...OPTIONS_SPRITE}
          />
        ))}
      </Container>

      {/* Bottom fake row */}
      <Container y={FULL_HEIGHT_ROW}>
        {slotRow.map((row, idx) => (
          <Sprite
            key={row.id}
            image={row.image}
            y={idx * ITEM_HEIGHT}
            {...OPTIONS_SPRITE}
          />
        ))}
      </Container>
      {/* END Bottom fake row */}
    </Container>
  );
};

export default RowPX;
