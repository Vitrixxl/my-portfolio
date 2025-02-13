'use client';

import * as React from 'react';
import { RefObject, useEffect } from 'react';

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      const element = ref.current!;
      setPosition({
        x: clientX - element.offsetLeft - element.offsetWidth / 2,
        y: clientY - element.offsetTop - element.offsetHeight / 2,
      });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => window.removeEventListener('pointermove', handlePointerMove);
  }, []);

  return position;
}
