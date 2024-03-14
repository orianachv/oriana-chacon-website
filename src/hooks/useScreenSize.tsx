import { useState, useEffect } from 'react';

function useScreenType() {
  const [screenType, setScreenType] = useState(null || '');

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth < 640) {
        setScreenType('phone');
      } else if (innerWidth >= 640 && innerWidth < 1024) {
        setScreenType('tablet');
      } else {
        setScreenType('desktop');
      }
    };

    // Call handleResize initially and add event listener
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenType;
}

export default useScreenType;
