'use client';

import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary';
    href?: string;
}

const Button = ({
    variant,
    className,
    children,
    onClick,
    disabled,
    href,
    ...props
}: ButtonProps) => {
    const router = useRouter();

    const handleClick = useCallback(
        (event: React.MouseEvent<HTMLButtonElement>) => {
            if (disabled) return;

            if (href) return router.push(href);
            if (onClick) return onClick(event);
        },
        [href, onClick, disabled, router]
    );

    return (
        <button
            className={clsx(
                'font-medium ~text-sm/base text-center flex items-center justify-center',
                {
                    'bg-accent-1 text-foreground-1 py-4 px-6 rounded-2xl':
                        variant === 'primary',
                },
                className
            )}
            onClick={handleClick}
            {...props}
        >
            <span className='~text-xs/base'>{children}</span>
        </button>
    );
};

export { Button };
