import { twMerge } from 'tailwind-merge';

import { ROULETTE_TABLE_NUMBERS } from './initData';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectActiveNumber, setActiveNumber } from '../../slices/rouletteSlice';

const RouletteTable = () => {
  const activeNumber = useAppSelector(selectActiveNumber);
  const dispatch = useAppDispatch();
  const onClickHandle = (number: number) => {
    dispatch(setActiveNumber(number));
  };

  return (
    <div className="flex flex-wrap w-[600px]">
      {ROULETTE_TABLE_NUMBERS.map(({ color, number }) => (
        <button
          onClick={() => onClickHandle(number)}
          key={number}
          className={twMerge(
            'w-[50px] h-[50px] flex justify-center items-center border border-solid border-white text-xl font-medium cursor-pointer hover:border-yellow',
            color === 'red' && 'bg-red',
            color === 'black' && 'bg-black',
            activeNumber === number && 'border-yellow border-2'
          )}
        >
          {number}
        </button>
      ))}
    </div>
  );
};

export default RouletteTable;
