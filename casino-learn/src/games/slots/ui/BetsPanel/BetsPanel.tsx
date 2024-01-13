import { sound } from '@pixi/sound';

import { useAppDispatch } from '../../../../app/store/hook';
// import { setCurrentBet } from '../../slices/rouletteSlice';

import { SOUNDS_ROULETTE } from '../../scenes/GameScene/config';

import bets50Image from '../../../../assets/roulette/bet-50.png';
import bets100Image from '../../../../assets/roulette/bet-100.png';
import bets200Image from '../../../../assets/roulette/bet-200.png';
import bets400Image from '../../../../assets/roulette/bet-400.png';
import bets800Image from '../../../../assets/roulette/bet-800.png';

import styles from './BetsPanel.module.scss';

interface IBETS {
  value: number;
  image: string;
}

const BETS: IBETS[] = [
  {
    value: 50,
    image: bets50Image
  },
  {
    value: 100,
    image: bets100Image
  },
  {
    value: 200,
    image: bets200Image
  },
  {
    value: 400,
    image: bets400Image
  },
  {
    value: 800,
    image: bets800Image
  }
];

const BetsPanel = () => {
  const dispatch = useAppDispatch();

  const pickBet = (value: IBETS['value']) => {
    sound.play(SOUNDS_ROULETTE.BET);
    // dispatch(setCurrentBet(value));
  };

  return (
    <div>
      <div className="flex flex-col gap-3 items-center">
        {BETS.map(({ value, image }) => (
          <div
            onClick={() => pickBet(value)}
            onContextMenu={e => {
              e.preventDefault();
              pickBet(-value);
            }}
            key={value}
            className="cursor-pointer hover:scale-[1.05] transition-all"
          >
            <img src={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetsPanel;
