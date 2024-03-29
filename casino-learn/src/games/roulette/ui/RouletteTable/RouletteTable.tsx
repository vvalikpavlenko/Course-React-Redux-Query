import { twMerge } from 'tailwind-merge';
import { sound } from '@pixi/sound';

import { ROULETTE_TABLE_NUMBERS } from './initData';
import { useAppDispatch, useAppSelector } from '../../../../app/store/hook';
import { selectActiveNumber, setActiveNumber } from '../../slices/rouletteSlice';

import { SOUNDS_ROULETTE } from '../../scenes/GameScene/config';

const RouletteTable = () => {
  const activeNumber = useAppSelector(selectActiveNumber);

  const dispatch = useAppDispatch();

  const onClickHandle = (number: number) => {
    sound.play(SOUNDS_ROULETTE.NUMBER);
    dispatch(setActiveNumber(number));
  };

  return (
    <div className="flex flex-wrap flex-col-reverse w-[600px] h-[150px]">
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
