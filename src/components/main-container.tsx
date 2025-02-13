'use client';

import { containerRefAtom } from '@/atoms/container-ref';
import { useSetAtom } from 'jotai';
import { LayoutGroup } from 'motion/react';
import React from 'react';

export const MainContainer = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const setContaineRef = useSetAtom(containerRefAtom);
  const realRef = React.useRef<HTMLDivElement>(null);
  const [ref, setRef] = React.useState<HTMLDivElement | null>(null);

  React.useEffect(() => {
    realRef.current = ref;
    setContaineRef(realRef);
  }, [ref]);

  return (
    <LayoutGroup>
      <div {...props} ref={(r) => setRef(r)}>
      </div>
    </LayoutGroup>
  );
};
