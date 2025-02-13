import { useFollowPointer } from '@/hooks/useFollowPointer';
import { motion } from 'motion/react';
import { useRef } from 'react';

export default function BallPointer() {
  const ref = useRef<HTMLDivElement>(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <motion.div
      ref={ref}
      className='size-8 rounded-full bg-purple-900 pointer-events-none fixed z-50 '
      style={{ x, y }}
    />
  );
}
