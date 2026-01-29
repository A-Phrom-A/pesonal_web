import { Section } from './Section';
import { AtSign, Terminal, Phone } from 'lucide-react';

export function Contact() {
    return (
        <Section id="contact" className="py-20 sm:py-32">
            <div className="mx-auto max-w-2xl">
                {/* Direct Info - Centered */}
                <div className="flex flex-col justify-center space-y-8">
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 text-center">
                        Direct <span className="text-zinc-500">Information</span>
                    </h2>

                    <div className="flex flex-col gap-6">
                        <ContactCard
                            icon={<AtSign className="w-6 h-6 text-blue-400" />}
                            label="Email Me"
                            value="contact.kittisak@gmail.com"
                            href="mailto:contact.kittisak@gmail.com"
                        />
                        <ContactCard
                            icon={<Terminal className="w-6 h-6 text-blue-400" />}
                            label="Github"
                            value="github.com/A-Phrom-A"
                            href="https://github.com/A-Phrom-A"
                        />
                        <ContactCard
                            icon={<Phone className="w-6 h-6 text-blue-400" />}
                            label="Phone"
                            value="096-982-8778"
                            href="tel:0969828778"
                        />
                    </div>
                </div>
            </div>
        </Section>
    );
}

function ContactCard({ icon, label, value, href }: { icon: React.ReactNode, label: string, value: string, href: string }) {
    return (
        <a href={href} className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-6 sm:p-8 bg-zinc-900/30 border border-zinc-800/50 rounded-3xl hover:border-zinc-700/50 hover:bg-zinc-900/50 transition-all group">
            <div className="flex-shrink-0 p-4 rounded-2xl bg-zinc-950 border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                {icon}
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-1 group-hover:text-blue-400/80 transition-colors">{label}</span>
                <span className="text-lg sm:text-xl font-medium text-zinc-200 group-hover:text-white transition-colors">{value}</span>
            </div>
        </a>
    );
}
