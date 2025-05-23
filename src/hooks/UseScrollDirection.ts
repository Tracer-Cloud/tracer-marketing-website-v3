import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | null;

export function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const updateScrollDirection = () => {
      const scrollY = window.scrollY;
      
      // Determine scroll direction
      const direction = scrollY > lastScrollY ? 'down' : 'up';
      
      // Only update state if there's a significant change
      if (scrollY !== lastScrollY) {
        setScrollDirection(direction);
        setLastScrollY(scrollY);
      }
    };

    // Add event listener
    window.addEventListener('scroll', updateScrollDirection);
    
    // Call once to initialize
    updateScrollDirection();

    // Clean up
    return () => {
      window.removeEventListener('scroll', updateScrollDirection);
    };
  }, [lastScrollY]);

  return scrollDirection;
}
