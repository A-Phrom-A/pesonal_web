'use client';

import { useState } from 'react';
import { Container } from './Container';
import { FadeIn } from './FadeIn';
import { MagneticButton } from './MagneticButton';
import { TiltCard } from './TiltCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Award, Briefcase, X, ChevronDown, ChevronUp } from 'lucide-react';

const projects = [
    {
        title: 'AI Novel Narrator & Illustrative Background (in progress)',
        description: 'Automated multimedia pipeline using DeepSeek Local for text structuring and WangchanBERTA for emotion detection.',
        mechanism: 'Powers a voice cloning system (Open Voice) and context-aware image generation via Animagine XL 4.0.',
        tags: ['AI Engineering', 'Generative AI', 'NLP'],
        href: '#',
        pdfHref: undefined
    },
    {
        title: 'PolyDry Predictor',
        description: 'Smart dehydration system for 3D printing filaments.',
        mechanism: 'Integrated DHT22 sensors with an MCU for real-time data transmission and optimal dehydration calculation.',
        tags: ['IoT', '3D Printing', 'Hardware'],
        href: '/pdf/PolyDry Predictor (1).pdf',
        pdfHref: undefined
    },
    {
        title: 'AI-Based Motorcycle Rider Helmet Detection',
        description: 'Real-time road safety monitoring system.',
        mechanism: 'Applied Object Detection (YOLO/TensorFlow) for real-time video processing to verify helmet usage.',
        tags: ['Computer Vision', 'Deep Learning'],
        href: 'https://aibasedsystemformotorcycleriderhelmetwearingdetection.streamlit.app/',
        pdfHref: undefined
    },
    {
        title: 'Mobile Price Prediction: New Era',
        description: 'Market trend analyzer for modern smartphones (2020-2025).',
        mechanism: 'Implemented a Regression Model analyzing hardware specs and historical data for price prediction.',
        tags: ['Data Science', 'Machine Learning'],
        href: 'https://s6604062610021kittisak.streamlit.app/',
        pdfHref: undefined
    },
    {
        title: 'Mobile Price Prediction: Classic Era',
        description: 'Valuation system for vintage mobile phones (2000-2010).',
        mechanism: 'Engineered a Neural Network to process complex, non-linear data relationships in legacy hardware.',
        tags: ['Neural Networks', 'Data Analysis'],
        href: 'https://s6604062610021kittisak.streamlit.app/',
        pdfHref: undefined
    },
    {
        title: 'Java Tower Hero Defence Game',
        description: 'A classic Tower Hero Defence game built entirely in Java.',
        mechanism: 'Players control a stationary or jumping hero to dodge or attack obstacles and monsters in a single-lane defence format.',
        tags: ['Java', 'Game Development', 'OOP'],
        href: 'https://github.com/A-Phrom-A/Hero_Runner-final-',
        pdfHref: undefined
    },
    {
        title: 'Smart Pet Feeder with IoT Integration',
        description: 'Automated pet feeding system with real-time monitoring and history tracking.',
        mechanism: 'Integrated ESP32 with a load cell for weight sensing and MG996R servo for dispensing, controlled via Blynk IoT platform.',
        tags: ['IoT', 'ESP32', 'Hardware'],
        href: 'https://github.com/teerapat-ch/iot-final-project/tree/PUMPUM',
        pdfHref: '/pdf/Project Report IoT 6604062610021.pdf'
    },
];

const certificates = [
    { id: 1, title: 'Thai MOOC - Information Security', src: '/cer/thai_mooc.png' },
    { id: 2, title: 'Vocational Gold Medal - Electrical', src: '/cer/vocational_gold.png' },
    { id: 3, title: 'Thailand Cyber Talent 2025', src: '/cer/cyber_talent.png' },
    { id: 4, title: 'Cyber Warrior Hackathon 2025', src: '/cer/cyber_warrior.png' },
    { id: 5, title: 'PEA Internship Certificate', src: '/cer/pea_internship.png' },
    { id: 6, title: 'MICE Management Internship', src: '/cer/mice_management.png' },
];

const experiences = [
    {
        id: 1,
        company: 'การไฟฟ้าส่วนภูมิภาค (กองบริการ)',
        position: 'นักศึกษาฝึกงานด้านช่างเทคนิคไฟฟ้า',
        duration: '22 พฤศจิกายน 2564 – 12 กุมภาพันธ์ 2565',
        tasks: [
            'สนับสนุนงานด้านระบบไฟฟ้าและงานบริการภายในหน่วยงาน',
            'ศึกษาและปฏิบัติงานตามกระบวนการทำงานด้านวิศวกรรมไฟฟ้า',
            'มีส่วนร่วมในการตรวจสอบ บำรุงรักษา และแก้ไขปัญหาเบื้องต้นของระบบไฟฟ้า',
            'ปฏิบัติงานตามมาตรฐานความปลอดภัยในการทำงานด้านไฟฟ้า',
        ],
    },
    {
        id: 2,
        company: 'บริษัท ไมซ์ แมเนจเมนท์ จำกัด',
        position: 'นักศึกษาฝึกงานช่างเทคนิคระบบวิศวกรรมอาคาร',
        duration: '22 พฤศจิกายน 2564 – 12 กุมภาพันธ์ 2565',
        tasks: [
            'สนับสนุนงานด้านระบบวิศวกรรมอาคาร เช่น ระบบไฟฟ้า และระบบประกอบอาคาร',
            'ช่วยตรวจสอบและซ่อมบำรุงอุปกรณ์และระบบภายในอาคาร',
            'เรียนรู้การทำงานเชิงเทคนิคในสถานที่ปฏิบัติงานจริง',
            'ทำงานร่วมกับทีมช่างและทีมวิศวกรรม เพื่อสนับสนุนการดำเนินงานขององค์กร',
        ],
    },
];

type TabType = 'projects' | 'certificates' | 'experience';

export function Projects() {
    const [activeTab, setActiveTab] = useState<TabType>('projects');
    const [selectedCert, setSelectedCert] = useState<{ title: string, src: string } | null>(null);

    return (
        <section id="projects" className="relative py-24 md:py-32 bg-zinc-950 overflow-hidden min-h-screen">
            {/* Background: Minimal Floating Shapes */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-purple-500/5 blur-[100px]"
                    animate={{ x: [0, 50, 0], y: [0, 30, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-[20%] right-[5%] w-96 h-96 rounded-full bg-blue-500/5 blur-[100px]"
                    animate={{ x: [0, -50, 0], y: [0, -50, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                />
            </div>

            <Container className="relative z-10 flex flex-col items-center">

                {/* Tab Switcher */}
                <div className="flex p-1 mb-16 space-x-1 bg-zinc-900/40 rounded-xl border border-zinc-800/50 backdrop-blur-sm">
                    <TabButton
                        isActive={activeTab === 'projects'}
                        onClick={() => setActiveTab('projects')}
                        icon={<Code className="w-4 h-4" />}
                        label="Projects"
                    />
                    <TabButton
                        isActive={activeTab === 'certificates'}
                        onClick={() => setActiveTab('certificates')}
                        icon={<Award className="w-4 h-4" />}
                        label="Certificates"
                    />
                    <TabButton
                        isActive={activeTab === 'experience'}
                        onClick={() => setActiveTab('experience')}
                        icon={<Briefcase className="w-4 h-4" />}
                        label="Experience"
                    />
                </div>

                <div className="w-full min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'projects' && (
                            <motion.div
                                key="projects"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
                            >
                                {projects.map((project, index) => (
                                    <FadeIn key={project.title} delay={index * 0.1}>
                                        <TiltCard className="flex flex-col h-full rounded-2xl bg-zinc-900/40 border border-zinc-800/50 backdrop-blur-sm p-6 sm:p-8 hover:bg-zinc-900/60 hover:border-zinc-700/80 transition-all duration-300 group">
                                            <div className="flex-1 flex flex-col">
                                                <h3 className="text-xl font-semibold text-zinc-100 group-hover:text-white transition-colors">
                                                    {project.title}
                                                </h3>

                                                <p className="mt-4 text-sm text-zinc-400 leading-relaxed">
                                                    {project.description}
                                                </p>

                                                <div className="mt-4 pt-4 border-t border-zinc-800/50">
                                                    <p className="text-xs font-medium text-zinc-500 uppercase tracking-wider mb-2">Mechanism</p>
                                                    <p className="text-xs text-zinc-400 leading-relaxed">
                                                        {project.mechanism}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="mt-6">
                                                <div className="flex flex-wrap gap-2 mb-6">
                                                    {project.tags.map((tag) => (
                                                        <span
                                                            key={tag}
                                                            className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-950/50 text-zinc-400 border border-zinc-800/50"
                                                        >
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>

                                                <div className="flex flex-col sm:flex-row gap-3">
                                                    <a
                                                        href={project.href}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex-1"
                                                    >
                                                        <MagneticButton className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-zinc-100 text-zinc-950 font-medium text-sm transition-transform active:scale-95 hover:bg-white">
                                                            {project.pdfHref ? 'View Code' : 'View Project'}
                                                        </MagneticButton>
                                                    </a>
                                                    {project.pdfHref && (
                                                        <a
                                                            href={project.pdfHref}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex-1"
                                                        >
                                                            <MagneticButton className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-zinc-800/50 text-zinc-100 border border-zinc-700/50 font-medium text-sm transition-transform active:scale-95 hover:bg-zinc-800 hover:border-zinc-600">
                                                                View PDF
                                                            </MagneticButton>
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </TiltCard>
                                    </FadeIn>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'certificates' && (
                            <motion.div
                                key="certificates"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            >
                                {certificates.map((cert) => (
                                    <div
                                        key={cert.id}
                                        onClick={() => setSelectedCert(cert)}
                                        className="relative group aspect-[3/2] rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 cursor-pointer"
                                    >
                                        {/* Image Layer */}
                                        <div className="absolute inset-0 bg-zinc-900 flex items-center justify-center text-zinc-700">
                                            <img
                                                src={cert.src}
                                                alt={cert.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>

                                        {/* Overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                                            <span className="text-white font-medium">{cert.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        )}

                        {activeTab === 'experience' && (
                            <motion.div
                                key="experience"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="w-full max-w-4xl mx-auto flex flex-col items-center gap-6"
                            >
                                {experiences.map((exp) => (
                                    <ExperienceCard key={exp.id} experience={exp} />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Lightbox / Modal for Certificates */}
                <AnimatePresence>
                    {selectedCert && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        >
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.9, opacity: 0 }}
                                onClick={(e) => e.stopPropagation()}
                                className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-zinc-900"
                            >
                                <button
                                    onClick={() => setSelectedCert(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 hover:bg-black/70 text-white transition-colors z-10"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <img
                                    src={selectedCert.src}
                                    alt={selectedCert.title}
                                    className="w-full h-full object-contain max-h-[85vh]"
                                />

                                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent">
                                    <h3 className="text-white text-lg font-medium text-center">{selectedCert.title}</h3>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>

            </Container>
        </section>
    );
}

function TabButton({ isActive, onClick, icon, label }: { isActive: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
    return (
        <button
            onClick={onClick}
            className={`
                relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2
                ${isActive ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'}
            `}
        >
            {isActive && (
                <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-zinc-800 rounded-lg shadow-sm"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
            )}
            <span className="relative z-10 flex items-center gap-2">
                {icon} {label}
            </span>
        </button>
    );
}

function ExperienceCard({ experience }: { experience: typeof experiences[0] }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`w-full bg-zinc-900/40 border border-zinc-800/50 rounded-2xl overflow-hidden backdrop-blur-sm transition-all duration-300 ${isOpen ? 'border-zinc-700/80 bg-zinc-900/60' : 'hover:border-zinc-700/50'}`}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full p-6 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-4 text-left"
            >
                <div>
                    <h3 className="text-xl font-semibold text-zinc-100">{experience.position}</h3>
                    <p className="text-blue-400 font-medium mt-1">{experience.company}</p>
                </div>

                <div className="flex items-center gap-4 text-zinc-500">
                    <span className="text-sm font-medium whitespace-nowrap hidden sm:block">{experience.duration}</span>
                    <div className={`p-2 rounded-full bg-zinc-800 text-zinc-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : ''}`}>
                        <ChevronDown className="w-5 h-5" />
                    </div>
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden bg-zinc-900/30 border-t border-zinc-800/30"
                    >
                        <div className="p-6 sm:p-8 pt-0">
                            {/* Mobile duration shown here */}
                            <p className="text-sm text-zinc-500 mb-4 sm:hidden">{experience.duration}</p>

                            <ul className="space-y-3">
                                {experience.tasks.map((task, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-zinc-300 leading-relaxed"
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        <span>{task}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
