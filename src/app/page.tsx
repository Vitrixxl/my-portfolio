'use client';
import { DevCard } from '@/components/dev-card';
import React from 'react';
import BallPointer from '@/components/ball-pointer';
import { TEmp } from '@/components/temp';
import { AnimatedEntry } from '@/components/animated-entry';

export default function Home() {
  return (
    <>
      {/* <BallPointer /> */}
      <div className='  p-8 md:p-10 lg:p-[5rem]  flex lg:gap-[5rem] gap-4 w-full !py-0  min-h-0 flex-row  h-dvh overflow-hidden'>
        <DevCard />
        <TEmp />
      </div>
    </>
  );
}
