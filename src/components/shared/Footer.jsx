"use client";
import Link from 'next/link';
import {
    Mail, Phone, MapPin,
    ChevronRight, Globe
} from 'lucide-react';
import { FaDiscord, FaYoutube, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: 'Home', href: '/' },
        { label: 'Courses', href: '/courses' },
        { label: 'My Profile', href: '/profile' },
        { label: 'Login', href: '/login' },
        { label: 'Register', href: '/register' },
    ];

    const socialLinks = [
        { icon: FaFacebook, href: '#' },
        { icon: FaTwitter, href: '#' },
        { icon: FaInstagram, href: '#' },
        { icon: FaLinkedin, href: '#' },
    ];

    return (
        <footer className="bg-[#0a2a2d] text-slate-300 pt-16 pb-8 border-t border-emerald-500/10">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand & Mission */}
                    <div className="space-y-6">
                        <div className="flex items-center gap-2">
                            <div className="bg-emerald-500 p-1.5 rounded-lg">
                                <Globe className="text-white" size={24} />
                            </div>
                            <span className="text-2xl font-bold text-white tracking-tight">
                                Skill<span className="text-emerald-500">Sphere</span>
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-slate-400">
                            Empowering learners worldwide with industry-leading courses and expert mentorship. Join our community to transform your career.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map(({ icon: Icon, href }, idx) => (
                                <Link
                                    key={idx}
                                    href={href}
                                    className="p-2 bg-white/5 rounded-full hover:bg-emerald-500 hover:text-white transition-all duration-200"
                                >
                                    <Icon size={18} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm">
                            {quickLinks.map(({ label, href }) => (
                                <li key={label}>
                                    <Link
                                        href={href}
                                        className="flex items-center gap-2 hover:text-emerald-400 transition-colors group"
                                    >
                                        <ChevronRight
                                            size={14}
                                            className="text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                        />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-emerald-500 shrink-0 mt-0.5" size={18} />
                                <span className="text-slate-400">Chattogram, Bangladesh</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-emerald-500 shrink-0" size={18} />
                                <span className="text-slate-400">+88018xxxxxxxx</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-emerald-500 shrink-0" size={18} />
                                <span className="text-slate-400">support@skillsphere.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-white font-bold text-lg mb-6">Stay Connected</h4>
                        <p className="text-sm text-slate-400 mb-4">
                            Subscribe to get the latest updates on new courses.
                        </p>
                        <div className="join w-full">
                            <input
                                type="email"
                                className="input input-sm join-item bg-white/5 border border-emerald-500/20 text-white placeholder-slate-500 focus:outline-none w-full"
                                placeholder="Email Address"
                            />
                            <button className="btn btn-sm join-item bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case px-4">
                                Join
                            </button>
                        </div>

                        <div className="mt-6 flex items-center gap-4 text-slate-400">
                            <span className="text-xs uppercase tracking-widest">Community:</span>
                            <FaDiscord
                                size={20}
                                className="cursor-pointer hover:text-[#5865F2] transition-colors"
                            />
                            <FaYoutube
                                size={20}
                                className="cursor-pointer hover:text-[#FF0000] transition-colors"
                            />
                            <FaGithub
                                size={20}
                                className="cursor-pointer hover:text-white transition-colors"
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© {currentYear} SkillSphere Learning Platform. All rights reserved.</p>
                    <div className="flex gap-6">
                        <Link
                            href="/terms"
                            className="hover:text-emerald-400 transition-colors underline underline-offset-4"
                        >
                            Terms & Conditions
                        </Link>
                        <Link
                            href="/privacy"
                            className="hover:text-emerald-400 transition-colors underline underline-offset-4"
                        >
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;