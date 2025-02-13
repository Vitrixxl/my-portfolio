import { containerRefAtom } from '@/atoms/container-ref';

import { useAtomValue } from 'jotai';
import { Bold } from '@/components/bold';
import {
  LucideArrowLeft,
  LucideGithub,
  LucideInfo,
  LucideMail,
} from 'lucide-react';
import { motion as m, useScroll, useTransform } from 'motion/react';
import React from 'react';

export const CardContent = ({ trackScroll }: { trackScroll: boolean }) => {
  const [info, setInfo] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const background = useTransform(scrollYProgress, [0, 1], [
    'conic-gradient(rgb(139 92 246/1) 0%,transparent 0%)',
    'conic-gradient(rgb(139 92 246/ 1) 100%,transparent 100%)',
  ]);
  return (
    <>
      <m.div
        className={`overflow-hidden w-[700px] h-full flex transition-colors rounded-[4rem]  flex-col p-12 col-span-2 row-span-12 min-h-0 duration-500 ${
          !info ? 'bg-violet-300' : 'bg-violet-600'
        }`}
        layoutId='card-container'
      >
        {!info
          ? (
            <>
              <div className='flex justify-between'>
                <m.button
                  className=' rounded-[3rem]  bg-violet-100 flex size-16 gap-0 p-4 items-center text-foreground/80 hover:text-foreground  '
                  layoutId='info-button'
                  onClick={() => setInfo(!info)}
                >
                  <LucideInfo className='size-10' />
                </m.button>
              </div>

              <div className='flex-1 flex items-center w-full justify-end py-12'>
                <m.div
                  className=' h-full aspect-square rounded-full transition-colors p-2 overflow-hidden relative '
                  layoutId='me-img'
                >
                  {trackScroll && (
                    <m.div
                      className='rounded-full absolute inset-0 '
                      style={{
                        background,
                      }}
                    />
                  )}
                  <div className='bg-violet-500 size-full rounded-full relative ' />
                </m.div>
              </div>
            </>
          )
          : (
            <div className='flex-col flex flex-1 text-background'>
              <div className='flex justify-between items-center'>
                <m.div
                  className=' h-full aspect-square rounded-full transition-colors p-1 overflow-hidden relative'
                  layoutId='me-img'
                >
                  <m.div
                    className='rounded-full absolute inset-0 '
                    style={{
                      background,
                    }}
                  />
                  <div className='bg-violet-300 size-full rounded-full relative ' />
                </m.div>
                <m.button
                  layoutId='info-button'
                  className=' rounded-[3rem]  bg-violet-100 flex size-16 gap-0 p-4 items-center text-foreground/80 hover:text-foreground  ml-auto'
                  onClick={() => setInfo(!info)}
                >
                  <LucideArrowLeft className='size-10' />
                </m.button>
              </div>

              <div className='flex-1 items-center'>
                <m.p
                  className='text-5xl mt-4 text-wrap leading-[3.5rem]'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 100, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  I'm just a chill guys who likes <Bold>code</Bold> and{' '}
                  <Bold>coffee</Bold>
                </m.p>
                <m.p
                  className='text-5xl mt-10 text-pretty'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 100, y: 0 }}
                  transition={{ delay: 1 }}
                >
                  On my way to become a <Bold>JS expert</Bold>
                </m.p>
                <m.p
                  className='text-5xl mt-10 text-pretty'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 100, y: 0 }}
                  transition={{ delay: 1.6 }}
                >
                  Currently working with <Bold>Next</Bold>, <Bold>React</Bold>
                  {' '}
                  and <Bold>Express</Bold>
                </m.p>
                <m.p
                  className='text-5xl mt-10 text-pretty'
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 100, y: 0 }}
                  transition={{ delay: 2.2 }}
                >
                  I'm always looking for{'  '}<Bold>challenging</Bold>{' '}
                  project that could teach me new things and make me a{' '}
                  <Bold>better dev</Bold>
                </m.p>
              </div>
            </div>
          )}
        <div
          className={`flex flex-col gap-4 mt-auto transition-transform ${
            info ? 'translate-y-[calc(100%_+_4rem)]' : ''
          }`}
          style={{
            transitionDuration: '0.4s',
          }}
        >
          <h1 className='text-7xl flex flex-col gap-2'>
            <span>I'm</span>
            <span className='font-bold'>Vitrice</span>
            <span className='font-bold'>Cascales</span>
          </h1>
          <div className='flex justify-between'>
            <p className='text-2xl font-semibold text-foreground/70'>
              vitrice91@gmail.com
            </p>
            <div className='flex items-center gap-2'>
              <a className='bg-violet-100 text-muted-foreground p-2 rounded-full'>
                <LucideGithub />
              </a>
              <a className='bg-violet-100 text-muted-foreground p-2 rounded-full'>
                <LucideMail />
              </a>
            </div>
          </div>
        </div>
      </m.div>
    </>
  );
};
