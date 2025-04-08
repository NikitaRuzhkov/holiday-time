import { useEffect, useState } from 'react';

const useScrollVisibility = (threshold = 500) => {
  const [isVisble, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isVisble;
};

export default useScrollVisibility;
