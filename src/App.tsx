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
                    <div key={i} className="bg-[#0a0a0a] border border-[#003300] p-6 hover:shadow-