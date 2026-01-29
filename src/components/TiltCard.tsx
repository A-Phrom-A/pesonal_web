'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef } from 'react';

type TiltCardProps = {
    children: React.ReactNode;
    className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseY = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["25deg", "-25deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-25deg", "25deg"]);

    const sheenGradient = useTransform(
        [mouseX, mouseY],
        ([xVal, yVal]: number[]) => {
            // logic to move sheen based on x/y
            // xVal, yVal are -0.5 to 0.5
            return `radial-gradient(
          circle at ${50 + xVal * 100}% ${50 + yVal * 100}%, 
          rgba(255,255,255,0.1) 0%, 
          transparent 50%
       )`
        }
    );

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseXPos = e.clientX - rect.left;
        const mouseYPos = e.clientY - rect.top;

        const xPct = mouseXPos / width - 0.5;
        const yPct = mouseYPos / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`relative transform-gpu ${className}`}
        >
            <div
                style={{ transform: "translateZ(75px)" }}
                className="relative z-10 h-full"
            >
                {children}
            </div>

            {/* Sheen effect */}
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none rounded-xl"
                style={{ background: sheenGradient }}
            />
        </motion.div>
    );
}
