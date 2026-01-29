import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
};

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'bg-zinc-100 text-zinc-950 hover:bg-zinc-200 focus-visible:ring-zinc-200',
        secondary: 'bg-zinc-800 text-zinc-100 hover:bg-zinc-700 focus-visible:ring-zinc-700',
        outline: 'border border-zinc-700 text-zinc-100 hover:bg-zinc-800 focus-visible:ring-zinc-700',
        ghost: 'text-zinc-300 hover:text-zinc-100 hover:bg-zinc-800/50',
    };

    const sizes = {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-6 text-base',
    };

    return (
        <button
            className={cn(
                'inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-zinc-950',
                variants[variant],
                sizes[size],
                className
            )}
            {...props}
        />
    );
}
