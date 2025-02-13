import { Project } from '@/components/project';

import { motion as m, useMotionValue, useSpring } from 'motion/react';
import React from 'react';

export const TEmp = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const columnRef = React.useRef<HTMLDivElement>(null);

  const translateY = useMotionValue(0);
  const translateY2 = useMotionValue(0);
  const smoothTranslateY = useSpring(translateY, {
    stiffness: 100,
    damping: 15,
  });

  const smoothTranslateY2 = useSpring(translateY2, {
    stiffness: 100,
    damping: 15,
  });

  React.useEffect(() => {
    const handleWheeling = (e: WheelEvent) => {
      if (!containerRef.current || !columnRef.current) return;
      const column = columnRef.current;
      const maxTop = 0 - (column.offsetHeight - window.innerHeight);

      // In order to make the first column go to the bottom when the end of it reach the top of the screen we have to :
      // - Verify if the translate is greater than the height of the column
      // - Translate to screen height + column height
      let newValue!: number;
      translateY.set(
        // translateY.get() - e.deltaY / 3
        // newValue.
        Math.min(0, Math.max(maxTop, translateY.get() - e.deltaY / 3)),
      );
      translateY2.set(
        Math.max(0, Math.min(-maxTop, -translateY.get() + e.deltaY)),
      );
    };

    document.addEventListener('wheel', handleWheeling);
    return () => {
      document.removeEventListener('wheel', handleWheeling);
    };
  }, [translateY]);

  return (
    <div
      className='flex gap-8 h-full flex-1 justify-center relative'
      ref={containerRef}
    >
      <div className='flex-1 flex-col flex '>
        <m.div
          ref={columnRef}
          className=' flex flex-col gap-8 h-max flex-1 py-8'
          // style={{ transform: `translateY(${smoothTranslateY.get()}px)` }}
          style={{
            translateY: smoothTranslateY,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Project project={i + 100} key={i} order={false} n />
          ))}
        </m.div>
      </div>
      <div className='relative flex-1'>
        <m.div
          className=' absolute bottom-0 left-0 right-0 flex flex-col gap-8 h-max flex-1 py-8 '
          style={{
            translateY: smoothTranslateY2,
          }}
        >
          {Array.from({ length: 8 }).map((_, i) => (
            <Project project={i + 100} key={i} order={true} n />
          ))}
        </m.div>
      </div>
    </div>
  );
};
