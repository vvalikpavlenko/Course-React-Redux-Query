import { useAppDispatch } from '../../../../app/store/hook';

import { setCurrentBet } from '../../slices/rouletteSlice';

import bets50Image from '../../../../assets/roulette/bet-50.png';
import bets100Image from '../../../../assets/roulette/bet-100.png';
import bets200Image from '../../../../assets/roulette/bet-200.png';
import bets400Image from '../../../../assets/roulette/bet-400.png';
import bets800Image from '../../../../assets/roulette/bet-800.png';

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

  const pinkBet = (value: IBETS['value']) => {
    dispatch(setCurrentBet(value));
  };

  return (
    <div>
      <div className="flex gap-4 items-center">
        {BETS.map(({ value, image }) => (
          <div key={value}>
            <button
              className="cursor-pointer transition-all hover:scale-[1.2]"
              onClick={() => pinkBet(value)}
              onContextMenu={event => {
                event.preventDefault();
                pinkBet(-value);
              }}
            >
              <img src={image} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BetsPanel;
