import { useEffect, useState } from 'react';

const useDectectScroll = (max) => {
  const [isMoreThan20, setIsMoreThan20] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Pixels scrolled from the top

      if (scrollTop > max){
        setIsMoreThan20(true)
      }else if (scrollTop < max){
        setIsMoreThan20(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMoreThan20, max]);

  return isMoreThan20;
};

export default useDectectScroll;
