import { useState, useEffect } from "react";
const App = () => {
  const [isActive, setActive] = useState(false);
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    let interval;
    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer + 1);
      }, 100);
    }
    return () => clearInterval(interval);
  }, [timer, isActive]);

  const handleReset = () => {
    setActive(!isActive);
    setTimer(0);
  };

  return (
    <div>
      <p>Stopwatch</p>
      <p>
        {timer > 600
          ? Number.parseInt(timer / 600)
              .toString()
              .padStart(2, "0")
          : "00"}{" "}
        minutes :
        {/* {timer > 600 ? Number.parseInt(timer / 60).toString().padStart(2, "0") : timer > 10 ? Number.parseInt(timer / 10).toString().padStart(2, "0") : "00"}:
        {timer > 10 ? Number.parseInt(timer / 10).toString().padStart(2, "0") : "00"}:
        {(timer % 10).toString().padStart(2, 0)} : */}
        {timer > 10
          ? Number.parseInt(timer / 10)
              .toString()
              .padStart(2, "0")
          : "00"}{" "}
        seconds : {timer} milliseconds
      </p>
      <button
        onClick={() => setActive(!isActive)}
        className="stopped border p-2 disabled:bg-red-200"
        disabled={isActive}
      >
        Start
      </button>
      <button
        onClick={() => setActive(!isActive)}
        className="started border p-2 disabled:bg-red-200"
        disabled={!isActive}
      >
        Pause
      </button>
      <button
        onClick={handleReset}
        className="started border p-2 disabled:bg-red-200"
        disabled={!isActive}
      >
        Reset
      </button>
    </div>
  );
};

export default App;
