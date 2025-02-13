'use client';
import { motion as m } from 'motion/react';
import * as Dialog from '@radix-ui/react-dialog';
import React from 'react';
import { useRelativeFollowPointer } from '@/hooks/use-relative-follow-pointer';
export const Project = (
  { project, order, n }: { project: number; order: boolean; n?: boolean },
) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const ref = React.useRef<HTMLDivElement>(null);
  // const [isVisible, setIsVisible] = React.useState(false);
  // const { x, y } = useRelativeFollowPointer(isOpen ? { current: null } : ref);

  return (
    <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger>
        <m.div
          // onMouseEnter={() => setIsVisible(true)}
          // onMouseLeave={() => !isOpen && setIsVisible(false)}
          // ref={ref}
          layoutId={project.toString() + String(order) + String(n)}
          className={`overflow-hidden rounded-[4rem] bg-violet-500 w-full relative ${
            project % 2 ? 'h-[400px]' : project % 3 ? 'h-[250px]' : 'h-[300px]'
          }`}
          whileInView={{
            scale: 1,
            opacity: 1,
          }}
          style={{
            scale: 0.8,
            opacity: 0.7,
          }}
          transition={{
            type: 'keyframes',
          }}
        >
          {/* <div */}
          {/*   className={` absolute bg-violet-300 rounded-full w-[250%] transition-transform aspect-square -translate-x-1/2 -translate-y-1/2   duration-700 ${ */}
          {/*     isVisible ? 'scale-1' : 'scale-0' */}
          {/*   }`} */}
          {/*   style={{ */}
          {/*     left: x, */}
          {/*     top: y, */}
          {/*   }} */}
          {/* /> */}
        </m.div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className='animate-in fade-in-0  bg-foreground/50 fixed inset-0 '
          style={{ animationDuration: '0.8s' }}
        >
        </Dialog.Overlay>
        <Dialog.Content
          className='fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 outline-none'
          title='project'
        >
          <Dialog.Title></Dialog.Title>
          <m.div
            className='size-[800px] bg-cyan-500 rounded-[4rem]'
            layoutId={project.toString() + String(order) + String(n)}
          >
          </m.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
