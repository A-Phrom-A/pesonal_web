'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Container } from './Container';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-zinc-950/80 border-b border-zinc-800">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-zinc-100">
                        Portfolio
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex gap-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-zinc-400 hover:text-zinc-100"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-zinc-950 border-b border-zinc-800 overflow-hidden"
                    >
                        <Container className="py-4 flex flex-col gap-4">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-base font-medium text-zinc-400 hover:text-zinc-100"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
