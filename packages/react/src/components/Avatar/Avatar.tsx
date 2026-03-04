import * as React from 'react';
import { cn } from '../../utils/cn';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt?: string;
  initials?: string;
  size?: 'sm' | 'default' | 'lg';
  rounded?: boolean;
}

const Avatar = React.forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, src, alt, initials, size = 'default', rounded = false, ...props }, ref) => {
    const [imgError, setImgError] = React.useState(false);

    const sizes = {
      sm: 'h-8 w-8 text-xs',
      default: 'h-10 w-10 text-sm',
      lg: 'h-14 w-14 text-base',
    };

    const showImage = src && !imgError;

    return (
      <div
        ref={ref}
        className={cn(
          'relative flex items-center justify-center overflow-hidden',
          'bg-[var(--swiss-panel,#E5E5E0)] border-2 border-[var(--swiss-border,#000000)]',
          'font-mono font-bold text-[var(--swiss-ink,#000000)] uppercase select-none',
          sizes[size],
          rounded ? 'rounded-full' : 'rounded-none',
          className
        )}
        {...props}
      >
        {showImage ? (
          <img
            src={src}
            alt={alt}
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <span>{initials ?? '?'}</span>
        )}
      </div>
    );
  }
);
Avatar.displayName = 'Avatar';

export { Avatar };
