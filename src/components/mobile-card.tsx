import React from 'react';
import { motion as m } from 'motion/react';
import { CardContent } from '@/components/card-content';

export const MobileCard = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const [radius, setRadius] = React.useState('2rem');

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Escape') setIsOpen(false);
  };
  React.useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }
    setTimeout(() => {
      setRadius('2rem');
    }, 200);
  }, [isOpen]);
  return (
    <div className='fixed top-0 left-0 h-full p-8 z-20'>
      <div
        className={`fixed inset-0 transition-colors z-0 ${
          isOpen ? 'bg-foreground/50' : 'pointer-events-none '
        }`}
        onClick={() => setIsOpen(false)}
      >
      </div>
      {!isOpen
        ? (
          <m.div
            className='size-16   relative '
            layoutId='card-container'
            onClick={() => setIsOpen(true)}
          >
            {/* <m.button */}
            {/*   className=' rounded-[3rem]  max-h-0 max-w-0 overflow-hidden bg-violet-100 flex  gap-0 items-center text-foreground/80 hover:text-foreground  ' */}
            {/*   layoutId='info-button' */}
            {/* > */}
            {/*   <LucideInfo className='size-10' /> */}
            {/* </m.button> */}
            <m.div
              className='size-full bg-violet-500 rounded-full'
              layoutId='me-img'
            >
            </m.div>
          </m.div>
        )
        : (
          <>
            <div className='relative z-10 h-full'>
              <CardContent trackScroll={false} />
            </div>
          </>
        )}
    </div>
  );
};
