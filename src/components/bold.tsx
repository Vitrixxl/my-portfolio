import { cn } from '@/lib/utils';

export const Bold = (
  { className, ...props }: React.HTMLAttributes<HTMLSpanElement>,
) => {
  return (
    <span className={cn('font-bold ', className)} {...props}>
    </span>
  );
};
