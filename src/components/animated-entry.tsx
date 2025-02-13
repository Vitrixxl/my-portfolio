import { useRelativeFollowPointer } from '@/hooks/use-relative-follow-pointer';
import { motion as m } from 'motion/react';
import { cn } from '@/lib/utils';
import React from 'react';

export const AnimatedEntry = (
  { children, className, layoutId }: {
    className: string;
    children: React.ReactNode;
    layoutId: string;
  },
) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { x, y } = useRelativeFollowPointer(ref);
  const [isVisible, setIsVisible] = React.useState(false);
  return (
    <m.div
      ref={ref}
      className={cn(
        'relative overflow-hidden bg-purple-500 size-full',
        className,
      )}
      onMouseUp={() => setIsVisible(true)}
      onMouseOut={() => setIsVisible(false)}
      onMouseOver={() => setIsVisible(true)}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      layoutId={layoutId}
    >
      <div
        className={` absolute bg-violet-300 rounded-full w-[250%] transition-transform aspect-square -translate-x-1/2 -translate-y-1/2   duration-700 ${
          isVisible ? 'scale-1' : 'scale-0'
        }`}
        style={{
          left: x,
          top: y,
        }}
      />
      {children}
    </m.div>
  );
};
