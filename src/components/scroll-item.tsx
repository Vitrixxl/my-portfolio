// import { motion as m } from 'motion/react';
// import { useScroll, useTransform } from 'motion/react';
//
// export const ScrollItem = (
//   { index, children, max }: {
//     index: number;
//     children?: React.ReactNode;
//     max: number;
//   },
// ) => {
//   const { scrollYProgress } = useScroll();
//
//   const top = useTransform(scrollYProgress, [
//     0,
//     0.2,
//     0.4 / max * index,
//   ], [
//     370 * (index - 1),
//     370 * (index - 1),
//     0,
//   ]);
//   const left = useTransform(scrollYProgress, [
//     0.6 / max * index,
//     0.8 / max * index,
//   ], [
//     '0%',
//     '150%',
//   ]);
//
//   return (
//     <m.div
//       className='absolute rounded-[4rem] bg-violet-400 h-[350px] w-full '
//       style={{
//         top,
//         left,
//       }}
//     >
//       {children}
//     </m.div>
//   );
// };
