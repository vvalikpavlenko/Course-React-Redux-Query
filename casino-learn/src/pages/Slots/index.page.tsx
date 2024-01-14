import { twMerge } from 'tailwind-merge';

import CoreGameRoulette from '../.././games/slots';
import titleImage from '../../assets/slot/title.svg';

import styles from './Slots.module.scss';

const Slots = () => {
  return (
    <div className={twMerge('h-screen flex justify-center items-center relative', styles.slots)}>
      <div className="absolute top-[5%] left-[50%] translate-x-[-50%] z-10">
        <img src={titleImage} />
      </div>
      <CoreGameRoulette />
    </div>
  );
};
export default Slots;
