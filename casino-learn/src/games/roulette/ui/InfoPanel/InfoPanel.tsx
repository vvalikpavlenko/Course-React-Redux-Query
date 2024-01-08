import { useAppSelector } from '../../../../app/store/hook';
import { selectActiveNumber, selectCurrentBet } from '../../slices/rouletteSlice';

interface IPanel {
  id: string;
  title: string;
  icon: string;
}

const PANELS: IPanel[] = [
  {
    id: 'balance',
    title: 'Balance',
    icon: ''
  },
  {
    id: 'winBet',
    title: 'Win Bet',
    icon: ''
  },
  {
    id: 'currentBet',
    title: 'Bet',
    icon: ''
  },
  {
    id: 'activeNumber',
    title: 'Bet number',
    icon: ''
  }
];

const InfoPanel = () => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const currentBet = useAppSelector(selectCurrentBet);

  return (
    <div className="flex gap-4">
      {PANELS.map(({ id, title, icon }) => {
        let bodyPanel = null;
        switch (id) {
          case 'activeNumber':
            bodyPanel = activeNumber;
            break;
          case 'currentBet':
            bodyPanel = currentBet;
            break;
          default:
            break;
        }

        return (
          <div key={id}>
            <div>{title}</div>
            <div>{bodyPanel}</div>
          </div>
        );
      })}
    </div>
  );
};

export default InfoPanel;
