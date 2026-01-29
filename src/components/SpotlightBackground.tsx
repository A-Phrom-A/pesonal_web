'use client';

import { useMotionValue, useMotionTemplate, motion } from 'framer-motion';
import { useEffect } from 'react';

export function SpotlightBackground() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        function handleMouseMove({ clientX, clientY }: MouseEvent) {
            mouseX.set(clientX);
            mouseY.set(clientY);
        }

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
            style={{
                background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(255, 255, 255, 0.05),
            transparent 80%
          )
        `,
            }}
        />
    );
}
