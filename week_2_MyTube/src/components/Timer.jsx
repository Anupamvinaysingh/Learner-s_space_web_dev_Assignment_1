import React, { useEffect, useState } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const savedTime = Number(sessionStorage.getItem("timeSpent")) || 0;
    setSeconds(savedTime);

    const intervalId = setInterval(() => {
      setSeconds(prev => {
        const newTime = prev + 1;
        sessionStorage.setItem("timeSpent", newTime); // persist across page reloads
        return newTime;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ fontSize: "14px", color: "gray", margin: "10px 0" }}>
      Time Spent on this site: {seconds} second{seconds !== 1 ? "s" : ""}
    </div>
  );
};

export default Timer;
