import { useEffect, useState } from 'react';

const useKeyHandler = (code: any) => {
  const [keyPressed, setKeyPress] = useState(false);

  // 按下
  const keyDownHandler = ({ keyCode }) => {
    if (keyCode == code) {
      setKeyPress(true);
    }
  };

  // 抬起
  const keyUpHandler = ({ keyCode }) => {
    if (keyCode == code) {
      setKeyPress(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', keyDownHandler);
    document.addEventListener('keydown', keyUpHandler);
    return () => {
      document.removeEventListener('keyup', keyDownHandler);
      document.removeEventListener('keydown', keyUpHandler);
    };
  });

  return keyPressed;
};

export default useKeyHandler;
