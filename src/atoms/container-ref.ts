import { atom } from 'jotai';
import { RefObject } from 'react';
export const containerRefAtom = atom<RefObject<HTMLDivElement | null>>();
