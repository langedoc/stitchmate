
import { render, screen, fireEvent } from '@testing-library/react';
import CountDownButton from '../src/components/counter/count-down-button';
import { describe, expect, it, afterEach, vitest } from "vitest"
import { useStore } from '@/app/store';
import useSound from 'use-sound';

// Mock useStore 
vitest.mock('@/app/store', () => ({
  useStore: vitest.fn(),
}));

// mock the 'use-sound' module
vitest.mock('use-sound', () => ({
  default: vitest.fn(() => [vitest.fn()]), 
}));


describe('CountDownButton tests', () => {
 afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = ''; 
  })
  it('should call countDown when button is clicked', () => {
    const countDownMock = vitest.fn(); 
    const initialCount = 10; 


    (useStore as  vitest.Mock).mockReturnValue({
      count: initialCount,
      countDown: countDownMock, 
      clickSoundEnabled: false, 
    });


    render(<CountDownButton />);

    // Simulate a click on the 'CountDownButton'
    const button = screen.getByRole('button');
    fireEvent.click(button);
    screen.debug();
    expect(countDownMock).toHaveBeenCalledTimes(1);
   // expect(countDownMock).toBe(9);
  });
  // it('should play sound if clickSoundEnabled is true', () => {
  //   const countDownMock = vitest.fn(); // Mock 'countDown'
  //   const playSoundMock = vitest.fn(); // Mock 'playSound'

  //   (useStore as vitest.Mock).mockReturnValue({
  //     count: 10,
  //     countDown: countDownMock,
  //     clickSoundEnabled: true, // Sound is enabled
  //   });

  //   (useSound  as vitest.Mock).mockReturnValue([playSoundMock]); // Correct mock for 'useSound'

  //   render(<CountDownButton />); // Render the component

  //   const button = screen.getByRole('button'); // Find the button
  //   fireEvent.click(button); // Simulate the click
  //   screen.debug();
  //   expect(countDownMock).toHaveBeenCalledTimes(1);

  //   expect(playSoundMock).toHaveBeenCalledTimes(1); 
  // });
});