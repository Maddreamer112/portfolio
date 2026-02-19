import React from 'react';
import { profileData } from './data';
import { Terminal, Shield, Cpu, Github, Linkedin, Mail, ChevronRight, Hash, Command, Lock } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#00ff41] font-mono selection:bg-[#003300] selection:text-white pb-20">
      
      {/* --- NAV BAR --- */}
      <nav className="border-b border-[#003300] bg-[#0a0a0a]/90 sticky top-0 z-50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-2 animate-pulse">
            <Terminal size={20} />
            <span className="font-bold tracking-widest">ROOT@ANAND-KB:~#</span>
          </div>
          <div className="flex gap-6 text-sm">
             <a href="#projects" className="hover:text-white transition-colors hidden md:block">./projects</a>
             <a href="#skills" className="hover:text-white transition-colors hidden md:block">./skills</a>
             <a href={`mailto:${profileData.contact.email}`} className="border border-[#00ff41] px-3 py-1 rounded hover:bg-[#00ff41] hover:text-black transition-all">
               CONTACT_ME
             </a>
          </div>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-4 mt-16 space-y-24">
        
        {/* --- HERO SECTION --- */}
        <section className="space-y-6">
          <p className="text-[#00ff41]/60">Last login: {new Date().toDateString()} on ttys000</p>
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase glitch-text">
            {profileData.name}
          </h1>
          <div className="flex items-center gap-3 text-xl md:text-2xl text-[#00ff41]/80">
            <ChevronRight size={24} />
            <h2>{profileData.role}</h2>
          </div>
          <p className="max-w-2xl text-neutral-400 leading-relaxed text-lg border-l-2 border-[#00ff41] pl-4">
            {profileData.tagline}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <SocialBtn href={profileData.contact.github} icon={<Github size={18}/>} label="GitHub" />
            <SocialBtn href={profileData.contact.linkedin} icon={<Linkedin size={18}/>} label="LinkedIn" />
            <SocialBtn href={`mailto:${profileData.contact.email}`} icon={<Mail size={18}/>} label="Email" />
          </div>
        </section>

        {/* --- ACHIEVEMENTS (CTF) --- */}
        <section className="grid md:grid-cols-2 gap-4">
            {profileData.achievements.map((ach, i) => (
                <div key={i} className="border border-[#003300] bg-[#0a0a0a] p-6 hover:border-[#00ff41] transition-all group">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-white group-hover:text-[#00ff41] transition-colors">
                                {ach.title}
                            </h3>
                            <p className="text-sm text-neutral-500 mt-1">{ach.event}</p>
                        </div>
                        <Hash className="text-[#003300] group-hover:text-[#00ff41] transition-colors" />
                    </div>
                    <p className="mt-4 text-sm font-mono text-[#00ff41]/80">{'>'} {ach.details}</p>
                </div>
            ))}
        </section>

        {/* --- PROJECTS --- */}
        <section id="projects">
            <div className="flex items-center gap-3 mb-8 border-b border-[#003300] pb-4">
                <Command size={24} />
                <h3 className="text-2xl font-bold text-white">EXECUTABLE_MODULES</h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                {profileData.projects.map((p, i) => (
                    <div key={i} className="bg-[#0a0a0a] border border-[#003300] p-6 hover:shadow-[0_0_15px_rgba(0,255,65,0.1)] transition-all">
                        <div className="flex justify-between items-center mb-4">
                            <h4 className="text-xl font-bold text-white">{p.title}</h4>
                            <span className={`text-xs px-2 py-1 border ${
                                p.category === 'Offensive' ? 'border-red-500 text-red-500' : 'border-[#00ff41] text-[#00ff41]'
                            }`}>
                                {p.category.toUpperCase()}
                            </span>
                        </div>
                        <p className="text-neutral-400 text-sm mb-6 h-16">{p.description}</p>
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {p.tech.map((t, idx) => (
                                <span key={idx} className="text-xs bg-[#003300] text-[#00ff41] px-2 py-1">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>

        {/* --- SKILLS & CERTIFICATIONS --- */}
        <section id="skills" className="grid md:grid-cols-2 gap-12">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <Cpu size={24} />
                    <h3 className="text-2xl font-bold text-white">SYSTEM_LIBRARIES</h3>
                </div>
                <div className="space-y-6">
                    <SkillGroup title="Offensive Tools" skills={profileData.skills.securityTools} />
                    <SkillGroup title="Infrastructure" skills={profileData.skills.infrastructure} />
                    <SkillGroup title="Languages" skills={profileData.skills.languages} />
                </div>
            </div>

            <div>
                 <div className="flex items-center gap-3 mb-6">
                    <Shield size={24} />
                    <h3 className="text-2xl font-bold text-white">CERTIFIED_AUTHORITY</h3>
                </div>
                <ul className="space-y-4">
                    {profileData.certs.map((cert, i) => (
                        <li key={i} className="flex items-center gap-3 text-neutral-400 border-l border-[#003300] pl-4">
                            <Lock size={14} className="text-[#00ff41]" />
                            {cert}
                        </li>
                    ))}
                </ul>

                <div className="mt-12">
                    <h4 className="text-white font-bold mb-2">EDUCATION</h4>
                    <p className="text-neutral-400">{profileData.education.degree}</p>
                    <p className="text-sm text-[#00ff41]/60">{profileData.education.school} • {profileData.education.year}</p>
                </div>
            </div>
        </section>
      </main>

      <footer className="text-center text-neutral-600 text-sm mt-24">
        <p>System Integrity Verified. © {new Date().getFullYear()} Anand K B</p>
      </footer>
    </div>
  );
}

const SocialBtn = ({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) => (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-[#0a0a0a] border border-[#003300] px-4 py-2 hover:bg-[#003300] hover:text-white transition-all text-sm">
        {icon} <span>{label}</span>
    </a>
);

const SkillGroup = ({ title, skills }: { title: string, skills: string[] }) => (
    <div>
        <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-2">{title}</h4>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
            {skills.map((s, i) => (
                <span key={i} className="text-[#00ff41] hover:text-white transition-colors cursor-default">
                    ./{s.toLowerCase()}
                </span>
            ))}
        </div>
    </div>
);

export default App;