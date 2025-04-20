import React, { useState, useEffect, useRef, useCallback, memo } from 'react';

const TimerComponent = memo((props) => {
  const { currentQuestionIndex, updateGameState } = props;
  const [timeLeft, setTimeLeft] = useState(120);
  const [progress, setProgress] = useState(0);
  const intervalRef = useRef(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  useEffect(() => {
    console.log(timeLeft);
    if (timeLeft < 0) return;

    if (timeLeft === 0 || currentQuestionIndex >= 5) {
      console.log("update game stats");
      updateGameState(true);
    }

    const timer = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 10;
        return newProgress > 100 ? 100 : newProgress;
      });
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, currentQuestionIndex, updateGameState]);

  return (
    <div className="text-2xl font-bold">{formatTime(timeLeft)}</div>
  );
});

export default TimerComponent;