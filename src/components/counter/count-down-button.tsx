import {useStore} from '@/app/store';
import useSound from 'use-sound';
import {FaMinus} from "react-icons/fa6";
import {Button} from '../ui/button';

export default function CountDownButton () {
  const {countDown, clickSoundEnabled} = useStore();

  const [play] = useSound('/click-2.mp3');

  function handleCountDown () {
    countDown();
    if (clickSoundEnabled) {
      play();
    }
  }

  return (
<<<<<<< Updated upstream
    <Button data-cy="count-down" size='icon' variant='secondary' className='' onClick={handleCountDown}>
=======
    <Button data-test='count-down-button' size='icon' variant='secondary' className='' onClick={handleCountDown}>
>>>>>>> Stashed changes
      <FaMinus className='fill-neutral-50' />
    </Button>
  );
}