"use client"
import React, { useState } from 'react';

const ContactInfoItem: React.FC<{
    icon: string;
    title: string;
    detail: string;
    highlight?: boolean;
    copyable?: boolean;
}> = ({ icon, title, detail, highlight, copyable }) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        if (!copyable) return;
        navigator.clipboard.writeText(detail);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            onClick={handleCopy}
            className={`flex items-center justify-between p-4 rounded-2xl border border-transparent transition-all duration-300 group ${copyable ? 'cursor-pointer hover:bg-white/[0.03] hover:border-white/5' : ''}`}
        >
            <div className="flex items-center gap-5">
                <div className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-white/5 transition-all duration-300 group-hover:border-[#2ecc71]/50 ${highlight ? 'text-[#2ecc71]' : 'text-white/60'}`}>
                    <i className={`${icon} text-lg transition-all`}></i>
                </div>
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-white uppercase tracking-wider">{title}</span>
                    <span className="text-white/50 text-sm font-light break-all">{detail}</span>
                </div>
            </div>

            {copyable && (
                <div className="flex flex-col items-end gap-1">
                    <div className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all duration-300 ${copied ? 'bg-[#2ecc71]/20 text-[#2ecc71]' : 'text-white/20 group-hover:text-white/40 bg-white/0 group-hover:bg-white/5'}`}>
                        <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} text-xs`}></i>
                    </div>
                    <span className={`text-[8px] font-mono tracking-widest transition-opacity duration-300 ${copied ? 'text-[#2ecc71] opacity-100' : 'opacity-0'}`}>
                        COPIED
                    </span>
                </div>
            )}
        </div>
    );
};

const Contact: React.FC = () => {
    return (
        <section id="contact" className="py-24 px-[10vw] lg:px-[15vw] bg-black">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="text-center max-w-2xl mx-auto mb-20 space-y-6">
                    <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
                        Let's Work Together
                    </h2>
                    <p className="text-white/40 text-sm md:text-base leading-relaxed font-light">
                        Ready to bring your ideas to life? I'm available for freelance projects and full-time opportunities. Let's discuss how we can collaborate.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

                    {/* Left Side: Contact Information */}
                    <div className="space-y-4">
                        <ContactInfoItem
                            icon="far fa-envelope"
                            title="Email"
                            detail="teshie00001@gmail.com"
                            copyable={true}
                        />
                        <ContactInfoItem
                            icon="fas fa-phone-alt"
                            title="Phone"
                            detail="+252968476662"
                            copyable={true}
                        />
                        <ContactInfoItem
                            icon="fab fa-telegram-plane"
                            title="Telegram"
                            detail="@teshie_dev"
                            copyable={true}
                        />
                        <ContactInfoItem
                            icon="fas fa-check-circle"
                            title="Availability"
                            detail="Available for new projects"
                            highlight={true}
                        />
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className="space-y-6">
                        <div className="space-y-4">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#2ecc71] transition-all placeholder:text-white/20"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#2ecc71] transition-all placeholder:text-white/20"
                            />
                            <textarea
                                placeholder="Tell me about your project..."
                                rows={5}
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-white text-sm focus:outline-none focus:border-[#2ecc71] transition-all placeholder:text-white/20 resize-none"
                            ></textarea>
                        </div>

                        <button className="w-full py-5 bg-[#d1d5db] hover:bg-white text-black font-black uppercase tracking-widest text-xs rounded-full transition-all transform active:scale-[0.98] shadow-2xl">
                            Start a Project
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
