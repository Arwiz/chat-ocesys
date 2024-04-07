import React, { useState, useEffect } from 'react';

const CountdownTimer: React.FC<{ initialTimeInMinutes: number }> = ({ initialTimeInMinutes }) => {
  const [totalSeconds, setTotalSeconds] = useState(initialTimeInMinutes*60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTotalSeconds((prevSeconds) => {
        if (prevSeconds > 0) {
          return prevSeconds - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
      return (
          <div className=' bg-black pl-4 pr-4 p-2 float-end rounded-full'>
            <div className=' flex  rounded-full'>
                <div className=' text-sky-400/100'>{hours} :</div><div className=' text-sky-800/100'>{minutes} :</div><div className='text-sky-600/100'>{remainingSeconds}</div>
            </div>
          </div>);
  };

  return (
    <div>
        {formatTime(totalSeconds)}
    </div>
  );
};

export default CountdownTimer;