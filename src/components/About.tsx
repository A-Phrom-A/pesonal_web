'use client';

import { Section } from './Section';
import { motion } from 'framer-motion';
import {
    Brain,
    Cpu,
    ShieldCheck,
    Terminal,
    Map
} from 'lucide-react';

const orbitImages = [
    { src: "/images/about/hackathon-group.jpg", alt: "Cyber Warrior Hackathon", radius: "60% 40% 30% 70% / 60% 30% 70% 40%" },
    { src: "/images/about/งานPlamDSS.jfif", alt: "Palm DSS Project", radius: "30% 70% 70% 30% / 30% 30% 70% 70%" },
    { src: "/images/about/GIsdaงานร่างแผนพัฒนาGIS_2070-2075.jpg", alt: "GIS Development Plan", radius: "50% 50% 33% 67% / 55% 27% 73% 45%" },
    { src: "/images/about/about1.jpg", alt: "About Me", radius: "73% 27% 59% 41% / 57% 59% 41% 43%" },
    { src: "/images/about/งานนิเทศสหกิจ.jfif", alt: "Internship Supervision", radius: "26% 74% 49% 51% / 21% 51% 49% 79%" },
    { src: "/images/about/group1.jpg", alt: "Team Collaboration", radius: "64% 36% 27% 73% / 70% 59% 41% 30%" },
    { src: "/images/about/group2.jfif", alt: "Community", radius: "45% 55% 60% 40% / 50% 35% 65% 50%" },
];

const skillCategories = [
    {
        name: "GIS & Remote Sensing",
        icon: <Map className="w-5 h-5 text-teal-400" />,
        tags: ["QGIS", "Geopandas", "Rasterio", "SNAP", "Sentinel-1 SAR", "Sentinel-2", "SAM", "GeoAIpy", "Data Fusion"]
    },
    {
        name: "Artificial Intelligence",
        icon: <Brain className="w-5 h-5 text-purple-400" />,
        tags: ["Machine Learning", "Neural Networks", "Computer Vision", "Generative AI", "NLP", "ViT / MAE"]
    },
    {
        name: "IoT & Hardware",
        icon: <Cpu className="w-5 h-5 text-emerald-400" />,
        tags: ["Microcontrollers", "3D Printer Optimization", "Raspberry Pi", "Bambu Lab A1"]
    },
    {
        name: "Programming",
        icon: <Terminal className="w-5 h-5 text-blue-400" />,
        tags: ["Python", "C++", "Java", "JavaScript", "SQL", "HTML", "CSS", "Shell Scripting"]
    },
    {
        name: "Cybersecurity (Foundational)",
        icon: <ShieldCheck className="w-5 h-5 text-red-400" />,
        tags: ["Penetration Testing", "Digital Forensics", "CTF", "Kali Linux", "Nmap", "Wireshark", "Burp Suite"]
    }
];

export function About() {
    return (
        <Section id="about" className="py-24 md:py-32 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 h-full items-center">

                {/* 1. Left Column: Massive Organic Orbit */}
                <div className="relative h-[600px] w-full flex items-center justify-center lg:-ml-20">

                    {/* Orbiting Container */}
                    <motion.div
                        className="relative w-[600px] h-[600px] rounded-full" // Removed border/center
                        animate={{ rotate: 360 }}
                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    >
                        {orbitImages.map((item, index) => {
                            const angle = (index / orbitImages.length) * 360;

                            return (
                                <div
                                    key={index}
                                    className="absolute top-1/2 left-1/2 w-40 h-40 sm:w-48 sm:h-48 -ml-20 -mt-20 sm:-ml-24 sm:-mt-24"
                                    style={{
                                        transform: `rotate(${angle}deg) translate(280px) rotate(-${angle}deg)` // Increased radius
                                    }}
                                >
                                    {/* Counter-Rotation & Floating */}
                                    <motion.div
                                        className="w-full h-full"
                                        animate={{ rotate: -360 }}
                                        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                                    >
                                        <motion.div
                                            className="w-full h-full overflow-hidden shadow-2xl border-4 border-zinc-900/50"
                                            style={{ borderRadius: item.radius }}
                                            animate={{ y: [0, -20, 0] }} // Floating effect
                                            transition={{
                                                duration: 4 + index, // Varied duration
                                                repeat: Infinity,
                                                ease: "easeInOut",
                                                delay: index * 0.5
                                            }}
                                            whileHover={{ scale: 1.1, zIndex: 50 }}
                                        >
                                            <img
                                                src={item.src}
                                                alt={item.alt}
                                                className="w-full h-full object-cover"
                                            />
                                        </motion.div>
                                    </motion.div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* 2. Right Column: Content & Skills */}
                <div className="flex flex-col justify-center space-y-10 lg:pl-10 relative z-10">

                    {/* Intro */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold text-zinc-100 mb-6 tracking-tight">
                            About <span className="text-zinc-700">&</span> Technical Skills
                        </h2>
                        <p className="text-lg text-zinc-400 leading-relaxed max-w-xl">
                            I am a CS student specializing in <span className="text-zinc-200 font-medium">GIS &amp; Remote Sensing</span> and <span className="text-zinc-200 font-medium">AI Pipelines</span>, with experience in multi-modal satellite data analysis and agricultural decision support. I have a foundational background in <span className="text-zinc-200 font-medium">Cybersecurity</span> from national CTF competitions and hackathons.
                        </p>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {skillCategories.map((category, idx) => (
                            <motion.div
                                key={idx}
                                className={`p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm hover:bg-zinc-900/60 hover:border-zinc-700/80 transition-all duration-300 group
                                    ${idx === skillCategories.length - 1 ? 'sm:col-span-2' : ''} 
                                `}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                                        {category.icon}
                                    </div>
                                    <h3 className="font-semibold text-zinc-100 text-sm">{category.name}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {category.tags.map(tag => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-1 bg-zinc-950/50 text-zinc-400 text-xs rounded-md border border-zinc-800/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </Section>
    );
}
