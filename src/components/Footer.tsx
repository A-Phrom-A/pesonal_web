import { Container } from './Container';
import { Github, Mail, Phone } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-zinc-800 bg-zinc-950 py-12">
            <Container>
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                    <p className="text-sm text-zinc-500">
                        &copy; {new Date().getFullYear()} Kittisak Tantratorn. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="https://github.com/A-Phrom-A" target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                            <Github size={20} />
                        </a>
                        <a href="mailto:contact.kittisak@gmail.com" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                            <Mail size={20} />
                        </a>
                        <a href="tel:0969828778" className="text-zinc-500 hover:text-zinc-100 transition-colors">
                            <Phone size={20} />
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
