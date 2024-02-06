import  { useState, useEffect } from 'react'
import "../App.css"

const CountdownTimer = () => {
    const initialTime = 14 * 24 * 60 * 60; // 14 days in seconds
    const [time, setTime] = useState(initialTime);

    useEffect(() => {
        const interval = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
        return () => clearInterval(interval);
    }, [time]);

   
    const formatTime = (time) => {
        const days = Math.floor(time / (24 * 60 * 60));
        const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
        const minutes = Math.floor((time % (60 * 60)) / 60);
        const seconds = time % 60;
        // const minutes = Math.floor(time / 60);
        // const seconds = time % 60;
        return `${String(days)}:${String(hours)}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      };

    const renderFlipUnit = (digit, upperCardFlipped) => {
        return (
          <div className="flipUnitContainer">
            <div className={`flipUnit ${upperCardFlipped ? 'flip' : ''}`}>
              <div className="upperCard">{digit}</div>
              <div className="lowerCard">{digit}</div>
            </div>
          </div>
        );
      };

    const renderFlipClock = () => {
        const timeArray = formatTime(time).split('');
    
        return (
        //   <div className="flipClock">
        //     {timeArray.map((digit, index) => (
        //       <div key={index}>{renderFlipUnit(digit)}</div>
        //     ))}
        //   </div>
           <div className="flipClock">
           {timeArray.map((digit, index) => (
             <div key={index}>
               {renderFlipUnit(digit, index % 2 === 0)} {/* Flip the top half for even indices */}
             </div>
           ))}
         </div>
        );
      };

  return (
    <div className="countdownTimer">
    <h1>Countdown Timer</h1>
    {renderFlipClock()}
  </div>
  )
}

export default CountdownTimer