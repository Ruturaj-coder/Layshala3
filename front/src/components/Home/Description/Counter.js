import React, { useState, useEffect } from 'react';

const Counter = ({ end, duration }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 1000 * 60); // Update 60 times per second
    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 1000 / 60); // 60 FPS
    return () => clearInterval(counter);
  }, [end, duration]);

  return <span>{count}</span>;
};

export default Counter;
