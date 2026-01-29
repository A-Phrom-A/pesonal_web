import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { Container } from './Container';
import { FadeIn } from './FadeIn';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

type SectionProps = React.HTMLAttributes<HTMLDivElement> & {
    className?: string;
    id?: string;
    title?: string;
};

export function Section({ className, id, title, children, ...props }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 sm:py-24", className)} {...props}>
            <Container>
                <FadeIn>
                    {title && (
                        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-8">
                            {title}
                        </h2>
                    )}
                    {children}
                </FadeIn>
            </Container>
        </section>
    );
}
