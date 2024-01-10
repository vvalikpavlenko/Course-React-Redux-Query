import { twMerge } from 'tailwind-merge';

import { useAppSelector } from '../../../../app/store/hook';
import { selectBalance } from '../../../../entities/wallet/slices/walletSlices';
import { selectActiveNumber, selectCurrentBet } from '../../slices/rouletteSlice';
import { ROULETTE_TABLE_NUMBERS } from '../RouletteTable/initData';

import balance from '../../../../assets/roulette/Cash.png';
import winBetImage from '../../../../assets/roulette/WinBest.svg';
import betImage from '../../../../assets/roulette/Bet.png';
import activeNumberImage from '../../../../assets/roulette/activeNumber.png';

interface IPanel {
  id: string;
  title: string;
  icon: string;
}

const PANELS: IPanel[] = [
  {
    id: 'balance',
    title: 'Balance',
    icon: balance
  },
  {
    id: 'winBet',
    title: 'Win Bet',
    icon: winBetImage
  },
  {
    id: 'currentBet',
    title: 'Bet',
    icon: betImage
  },
  {
    id: 'activeNumber',
    title: 'Bet number',
    icon: activeNumberImage
  }
];

const InfoPanel = () => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);
  const balance = useAppSelector(selectBalance);

  const colorActive = ROULETTE_TABLE_NUMBERS.find(element => element.number === activeNumber);

  return (
    <div className="flex justify-between px-10">
      {PANELS.map(({ id, title, icon }) => {
        let bodyPanel: number = 0;
        switch (id) {
          case 'activeNumber':
            bodyPanel = activeNumber;
            break;
          case 'currentBet':
            bodyPanel = currentBet;
            break;
          case 'balance':
            bodyPanel = balance;
            break;
          default:
            break;
        }

        return (
          <div key={id}>
            <div>{title}</div>
            <div className="flex">
              <div className={twMerge(id === 'activeNumber' && 'flex gap-3 items-center')}>
                {bodyPanel}
                {id === 'activeNumber' && colorActive && (
                  <svg
                    width="25"
                    height="39"
                    viewBox="0 0 25 39"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      id="Vector 4"
                      d="M1.1759 19.713L12.6759 37.1759L24.1759 19.713L12.6759 1.82408L1.1759 19.713Z"
                      fill={colorActive.color === 'red' ? 'rgb(186, 36, 39)' : 'rgb(43, 43, 43)'}
                      stroke="white"
                    />
                  </svg>
                )}
              </div>
              <img
                src={icon}
                alt={title}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoPanel;
