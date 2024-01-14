import { useState } from 'react';
import type { FC } from 'react';
import { Container, Sprite, useTick } from '@pixi/react';

import { TSlotRow } from './utils';
import { useAppSelector } from '../../../../app/store/hook';
import { SlotLifecycle, selectSlotLifecycle } from '../../slices/slotSlice';

interface IRowPXProps {
  rowID: number;
  activeItemID: number;
  slotRow: TSlotRow[];
}

const ITEM_HEIGHT: number = 100;
const SPEED: number = 40;
const DELTA_ALIGN_CENTER = ITEM_HEIGHT * 2;

const OPTIONS_SPRITE = {
  x: 0,
  scale: 0.5
};

const RowPX: FC<IRowPXProps> = ({ slotRow, rowID, activeItemID }) => {
  const lifecycle = useAppSelector(selectSlotLifecycle);
  const isStopping = lifecycle === SlotLifecycle.STOPPING;
  const isPlaying = lifecycle === SlotLifecycle.PLAY;

  const FULL_HEIGHT_ROW = slotRow.length * ITEM_HEIGHT;
  const currentIndexRowItem = slotRow.findIndex(rowItem => rowItem.id === activeItemID);
  const currentPosition = -(currentIndexRowItem * ITEM_HEIGHT - DELTA_ALIGN_CENTER);
  const startPosition = currentPosition - FULL_HEIGHT_ROW;
  const speed = isPlaying || isStopping ? SPEED : 0;

  const [position, setPosition] = useState<number>(-FULL_HEIGHT_ROW);
  const [fixPosition, setFixPosition] = useState<boolean>(false);

  useTick(delta => {
    if (position >= FULL_HEIGHT_ROW) {
      setPosition(-FULL_HEIGHT_ROW);
    } else {
      setPosition(prevState => prevState + speed * delta);
    }
    if (isStopping && !fixPosition) {
      setPosition(startPosition);
      setFixPosition(true);
    }
    if (isStopping && fixPosition) {
      const koefC = currentPosition - position;
      if (koefC > 0) {
        setPosition(position + speed * delta);
      } else {
        setPosition(currentPosition);
      }
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
