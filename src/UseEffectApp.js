import React from 'react';

function UseEffectApp() {
  const [isOn, setIsOn] = React.useState(false);
  const [timer, setTimer] = React.useState(0);

  React.useEffect(() => {
    let interval;
    if (isOn) {
      interval = setInterval(() => {
        console.log(`current timer is ${timer}, increasing it`);
        // This implementation captures the timer value at the moment
        // of the component update on setting isOn to TRUE.
        // setTimer(timer + 1)

        // This implementation always re-reads the current timer variable.
        setTimer((oldTimer) => { return oldTimer + 1; });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOn]);

  return (
    <div>
      {timer}

      {!isOn && (
        <button type="button" onClick={() => setIsOn(true)}>
          Start
        </button>
      )}

      {isOn && (
        <button type="button" onClick={() => setIsOn(false)}>
          Stop
        </button>
      )}
    </div>
  );
}

export default UseEffectApp;