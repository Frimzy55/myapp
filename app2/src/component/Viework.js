import React from 'react';
import { useSpring, animated } from 'react-spring';

function Viework() {
  // Define the spring animation properties
  const [props, set] = useSpring(() => ({
    from: { transform: 'translateX(-100%)' }, // Start off-screen to the left
    to: { transform: 'translateX(100%)' },    // Move off-screen to the right
    config: { duration: 20000 },               // Duration of the animation
    reset: true,
  }));

  // Use an effect to restart the animation when it completes
  React.useEffect(() => {
    const interval = setInterval(() => {
      set({ from: { transform: 'translateX(-100%)' }, to: { transform: 'translateX(100%)' } });
    }, 20000); // Match this duration with the animation duration

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [set]);

  return (
    <div className='w-full h-screen bg-[#0a192f] flex items-center justify-center'>
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <animated.h1 style={props} className='text-4xl sm:text-7xl font-bold text-white'>
          Thank you!
        </animated.h1>
      </div>
    </div>
  );
}

export default Viework;
