'use client'
import Link from 'next/link';
import React from 'react';
import { LucideAlertCircle, LucideHome, MoveLeft } from "lucide-react";

const NotFound = () => {
    return (
        <div className="relative min-h-[85vh] bg-[#082a28] flex items-center justify-center overflow-hidden px-6">

            {/* Background Glassy Orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-75 h-75 bg-emerald-500/10 rounded-full blur-[100px]"></div>
            </div>

            <div className="relative z-10 text-center space-y-8 max-w-2xl">

                {/* Large 404 Text with Gradient */}
                <div className="relative inline-block">
                    <h1 className="text-[120px] sm:text-[180px] font-black text-white opacity-5 select-none">
                        404
                    </h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <LucideAlertCircle className="text-emerald-500 w-20 h-20 sm:w-32 sm:h-32 animate-bounce" />
                    </div>
                </div>

                {/* Message Content */}
                <div className="space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                        Oops! Page <span className="text-emerald-400">Not Found</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-md mx-auto">
                        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <Link
                        href="/"
                        className="btn btn-lg bg-emerald-500 hover:bg-emerald-400 border-none text-[#082a28] font-bold px-8 rounded-2xl flex items-center gap-2 transition-all hover:scale-105 shadow-lg shadow-emerald-500/20"
                    >
                        <LucideHome size={20} />
                        Back to Home
                    </Link>

                    <button
                        onClick={() => window.history.back()}
                        className="btn btn-lg bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 px-8 rounded-2xl flex items-center gap-2 transition-all hover:scale-105"
                    >
                        <MoveLeft size={20} />
                        Go Back
                    </button>
                </div>

                {/* Decorative Stats  */}
                <div className="pt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 opacity-50">
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold italic">SkillSphere Learning</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold italic hidden sm:block">•</div>
                    <div className="text-xs text-slate-500 uppercase tracking-widest font-bold italic">Support Center</div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;