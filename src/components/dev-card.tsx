'use client';
import { LayoutGroup } from 'motion/react';
import React from 'react';
import { useIsMobile } from '@/hooks/screen-size';
import { CardContent } from '@/components/card-content';
import { MobileCard } from '@/components/mobile-card';

export const DevCard = () => {
  const { isXl } = useIsMobile();

  return (
    <LayoutGroup>
      {isXl
        ? (
          <div className='sticky top-14 left-0 h-[calc(100dvh_-_7rem)] '>
            <CardContent trackScroll={true} />
          </div>
        )
        : <MobileCard />}
    </LayoutGroup>
  );
};
