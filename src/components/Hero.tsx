'use client';

import { MagneticButton } from './MagneticButton';
import { Container } from './Container';
import { FadeIn } from './FadeIn';

export function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center pt-16 overflow-hidden">
            {/* Background gradients or effects can go here */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-800/20 via-zinc-950 to-zinc-950" />

            <Container className="relative z-10 text-center">
                <FadeIn>
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-6xl md:text-7xl">
                        KITTISAK TANTRATORN
                    </h1>
                    <p className="mt-6 text-lg text-zinc-400 sm:text-xl max-w-2xl mx-auto">
                        I&apos;m a CS student specializing in AI pipelines, IoT systems, and applied cybersecurity.
                    </p>
                    <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <MagneticButton
                            className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-zinc-950 bg-zinc-100 text-zinc-950 hover:bg-zinc-200 focus-visible:ring-zinc-200 h-12 px-6 text-base"
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            View Projects
                        </MagneticButton>
                        <MagneticButton
                            className="inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-zinc-950 border border-zinc-700 text-zinc-100 hover:bg-zinc-800 focus-visible:ring-zinc-700 h-12 px-6 text-base"
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        >
                            Contact Me
                        </MagneticButton>
                    </div>
                </FadeIn>
            </Container>
        </section>
    );
}
