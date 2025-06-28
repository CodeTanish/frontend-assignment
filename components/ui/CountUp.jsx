'use client';

import { useEffect, useState } from 'react';

const CountUp = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const fps = 60;
    const totalFrames = Math.round(duration * fps);
    const increment = end / totalFrames;
    let frame = 0;

    const animate = () => {
      frame++;
      start += increment;

      if (frame < totalFrames) {
        setCount(Math.floor(start));
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Set exact value at end
      }
    };

    animate();
  }, [end, duration]);

  return <>{Number(count).toLocaleString()}</>;
};

export default CountUp;
