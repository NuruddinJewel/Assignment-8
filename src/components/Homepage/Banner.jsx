'use client'
import Link from "next/link";
import Image from "next/image";
import { LuUsers, LuStar } from "react-icons/lu";
import { TbStars, TbStarsFilled } from "react-icons/tb";
import { LucideBarChart3, LucideShieldCheck } from "lucide-react";

const Banner = () => {
    return (
        <section className="relative bg-[#0d3d3a] overflow-hidden min-h-[90vh] flex items-center">

            {/* Decorative Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <svg className="absolute right-0 top-0 w-[55%] h-full opacity-20" viewBox="0 0 600 400" fill="none">
                    <g stroke="#4ade80" fill="none">
                        <path d="M600 0 Q400 100 500 200 Q600 300 400 400" strokeWidth="1.5" />
                        <path d="M600 30 Q380 130 490 230 Q610 330 390 420" strokeWidth="1" />
                        <path d="M600 60 Q360 160 470 260 Q590 360 370 440" strokeWidth="0.8" />
                        <path d="M600 90 Q340 190 450 290 Q570 390 350 460" strokeWidth="0.6" />
                        <path d="M600 120 Q320 220 430 320 Q550 400 330 480" strokeWidth="0.4" />
                    </g>
                </svg>
                <TbStarsFilled className="absolute bottom-10 right-10 w-10 h-10 text-emerald-400 opacity-40 fill-emerald-400" />
            </div>

            <div className="container mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-center gap-12 relative z-10">

                {/* Left Content Area */}
                <div className="flex-1 text-center lg:text-left">
                    <h1 className="text-4xl lg:text-6xl font-black text-white leading-tight">
                        Unlock Your Global Potential: Learn{" "}
                        <span className="text-emerald-400 italic">from Experts</span>
                    </h1>

                    <p className="text-white/70 mt-6 text-lg max-w-lg mx-auto lg:mx-0">
                        Join over 5,000+ students and master new skills with industry-leading courses.
                    </p>

                    <div className="mt-10">
                        <Link href="/courses" className="btn btn-primary bg-emerald-500 border-none hover:bg-emerald-400 text-white px-8">
                            Discover Your Course
                        </Link>
                    </div>

                    {/* Stats Section using DaisyUI style logic */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16 border-t border-white/10 pt-8">
                        <div className="flex items-center lg:items-start gap-4">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <LucideShieldCheck className="w-8 h-8 text-emerald-400 shrink-0" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm">Verified</p>
                                <p className="text-white/50 text-xs mt-1">10,000+ Quality<br />Handpicked Courses</p>
                            </div>
                        </div>

                        <div className="flex items-center lg:items-start gap-4">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <LucideBarChart3 className="w-8 h-8 text-emerald-400 shrink-0" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm">Trusted</p>
                                <p className="text-white/50 text-xs mt-1">1500+ Active<br />Students Worldwide</p>
                            </div>
                        </div>

                        <div className="flex items-center lg:items-start gap-4">
                            <div className="p-2 bg-emerald-500/10 rounded-lg">
                                <LuUsers className="w-8 h-8 text-emerald-400 shrink-0" />
                            </div>
                            <div className="text-left">
                                <p className="text-white font-bold text-sm">Community</p>
                                <p className="text-white/50 text-xs mt-1">Join Our 5k+<br />Active Global Hub</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Hero Image Area */}
                <div className="flex-1 relative w-full aspect-square max-w-137.5">
                    <Image
                        src="https://i.ibb.co.com/NnGP56v2/image-11.png"
                        alt="Learn from Experts"
                        fill
                        priority
                        className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(16,185,129,0.3)]"
                    />
                </div>

            </div>
        </section>
    );
};

export default Banner;