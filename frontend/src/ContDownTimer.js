import React, { useState, useEffect } from 'react';

const ContDownTimer = ({ targetDate }) => {

  const [strokeWidth, setStrokeWidth] = useState(getStrokeWidth());
  const [radiou, setRadious] = useState(getRadious());
  const [center, setCenter] = useState(getCenter());

  function getStrokeWidth() {
    const width = window.innerWidth;
    if (width <= 992) return 4;
    return 6;
  }

  function getRadious() {
    const width = window.innerWidth;
    if (width <= 480) return 33;
    if (width <= 576) return 38;
    if (width <= 768) return 46;
    if (width <= 992) return 48;
    return 50;
  }

  function getCenter() {
    const width = window.innerWidth;
    if (width <= 480) return 35;
    if (width <= 576) return 40;
    if (width <= 768) return 48;
    if (width <= 992) return 50;
    return 53;
  }

  useEffect(() => {
    const handleResize = () => {
      setStrokeWidth(getStrokeWidth());
      setRadious(getRadious());
      setCenter(getCenter())
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);






  const calculateTimeLeft = () => {
    const difference = targetDate - new Date().getTime();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className="countdown center">
      <div className="countdown-main center">
        <div className="countdown-item center">
          <svg className="progress-ring" width="106" height="106">
            <circle
              className="progress-ring-circle center"
              stroke="#38b6ff"
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radiou}
              cx={center}
              cy={center}
              style={{
                strokeDasharray: 2 * Math.PI * {radiou},
                strokeDashoffset: (1 - timeLeft.days / 20) * 2 * Math.PI * {radiou},
                transition: "stroke-dashoffset 1s linear"
              }}
            />
          </svg>
          <div className="countdown-number center">
            <span>{timeLeft.days}</span>
          </div>
          <span className="timer-text">Days</span>
        </div>
        <div className="countdown-item center">
          <svg className="progress-ring" width="106" height="106">
            <circle
              className="progress-ring-circle center"
              stroke="#38b6ff"
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radiou}
              cx={center}
              cy={center}
              style={{
                strokeDasharray: 2 * Math.PI * {radiou},
                strokeDashoffset: (1 - timeLeft.hours / 24) * 2 * Math.PI * {radiou},
                transition: "stroke-dashoffset 1s linear"
              }}
            />
          </svg>
          <div className="countdown-number center">
            <span>{timeLeft.hours}</span>
          </div>
          <span className="timer-text">Hours</span>
        </div>
        <div className="countdown-item center">
          <svg className="progress-ring" width="106" height="106">
            <circle
              className="progress-ring-circle center"
              stroke="#38b6ff"
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radiou}
              cx={center}
              cy={center}
              style={{
                strokeDasharray: 2 * Math.PI * {radiou},
                strokeDashoffset: (1 - timeLeft.minutes / 60) * 2 * Math.PI * {radiou},
                transition: "stroke-dashoffset 1s linear"
              }}
            />
          </svg>
          <div className="countdown-number center">
            <span>{timeLeft.minutes}</span>
          </div>
          <span className="timer-text">Minutes</span>
        </div>
        <div className="countdown-item center">
          <svg className="progress-ring" width="106" height="106">
            <circle
              className="progress-ring-circle"
              stroke="#38b6ff"
              strokeWidth={strokeWidth}
              fill="transparent"
              r={radiou}
              cx={center}
              cy={center}
              style={{
                strokeDasharray: 2 * Math.PI * {radiou},
                strokeDashoffset: (1 - timeLeft.seconds / 60) * 2 * Math.PI * {radiou},
                transition: "stroke-dashoffset 1s linear"
              }}
            />
          </svg>
          <div className="countdown-number center">
            <span>{timeLeft.seconds}</span>
          </div>
          <span className="timer-text">Seconds</span>
        </div>
      </div>

    </div>
  );
};

export default ContDownTimer;