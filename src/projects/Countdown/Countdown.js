import React, { useState, useEffect } from 'react';

const padLeftWith0s = (value) => value < 10 ? `0${value}` : value;

const calculateTimeLeft = (goalTime) => {
  const second = 1000;
  const minute = 1000 * 60;
  const hour = 1000 * 60 * 60;
  const day = 1000 * 60 * 60 * 24;

  const now = Date.now();
  const diff = goalTime - now;

  if (diff > 0) {
    return {
      days: padLeftWith0s(Math.floor(diff / day)),
      hours: padLeftWith0s(Math.floor((diff % day) / hour)),
      minutes: padLeftWith0s(Math.floor((diff % hour) / minute)),
      seconds: padLeftWith0s(Math.floor((diff % minute) / second)),
    }
  }

  return {};
};

const Countdown = () => {
  const goalDateTime = new Date('Dec 28, 2020, 17:43');

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(goalDateTime));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(goalDateTime));
    }, 1000);
    return () => clearInterval(timer);
  }, [goalDateTime]);

  return (
    <div className="
      flex flex-col items-center justify-center 
      min-h-screen container
      text-secondary text-center
    ">
      <h1 className="uppercase text-4xl mb-8">
        Countdown Timer
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6">
        {Object.keys(timeLeft).map((unit) => (
          <div key={unit} className="flex flex-col">
            <div className="
              text-6xl font-bold px-3
              border-secondary border-2 rounded-md
              shadow-lg text-primary
            ">
              {timeLeft[unit]}
            </div>
            <span className="capitalize py-3">
              {unit}
            </span>
          </div>
        ))}
        {!Object.keys(timeLeft).length && (
          <span className="text-2xl leading-loose">
            Timer's up! <br />
            Goal of <strong className="text-primary">{goalDateTime.toLocaleString()}</strong> reached!
          </span>
        )}
      </div>
    </div>
  )
}

export default Countdown;