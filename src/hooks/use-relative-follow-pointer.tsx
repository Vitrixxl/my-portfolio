import React from 'react';
import { RefObject } from 'react';

type Position = {
  x: number;
  y: number;
};

export const useRelativeFollowPointer = (
  ref: RefObject<HTMLDivElement | null>,
): Position => {
  const [position, setPosition] = React.useState<Position>({ x: 0, y: 0 });

  React.useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const element = ref.current;
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      setPosition({ x, y });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return position;
};
