"use client";
import React, { useEffect, useState } from 'react';
import { Users, Star, GraduationCap, Briefcase, BookOpen, Award } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const API_URL = "https://json-server-3-fxsb.onrender.com/courses";

const instructorDetails = {
    "John Doe": {
        qualification: "Senior Software Architect",
        experience: "15+ Years",
        education: "PhD in Software Engineering, MIT",
        specialty: "System Design & Scalable Architecture"
    },
    "Sarah Chen": {
        qualification: "UI/UX Design Lead",
        experience: "10+ Years",
        education: "Master of Fine Arts, RISD",
        specialty: "User-Centric Design & Design Systems"
    },
    "Emily Rivera": {
        qualification: "Full Stack Developer",
        experience: "8+ Years",
        education: "BSc in Computer Science, Georgia Tech",
        specialty: "React, Node.js & Cloud Integration"
    },
    "Michael Torres": {
        qualification: "Cybersecurity Expert",
        experience: "12+ Years",
        education: "Certified Ethical Hacker (CEH)",
        specialty: "Network Security & Ethical Hacking"
    },
    "David Kim": {
        qualification: "Data Scientist",
        experience: "9+ Years",
        education: "MS in Statistics, UC Berkeley",
        specialty: "Machine Learning & Big Data Analytics"
    },
    "Natasha Patel": {
        qualification: "Mobile App Specialist",
        experience: "7+ Years",
        education: "BTech in IT",
        specialty: "Flutter, React Native & Swift"
    },
    "Laura Bennett": {
        qualification: "Digital Marketing Strategist",
        experience: "11+ Years",
        education: "MBA in Marketing",
        specialty: "SEO, SEM & Growth Hacking"
    },
    "James Nguyen": {
        qualification: "DevOps Engineer",
        experience: "10+ Years",
        education: "AWS Certified Professional",
        specialty: "CI/CD Pipelines & Kubernetes"
    }
};

const TopInstructors = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        const fetchInstructors = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();

                const uniqueInstructors = Array.from(new Set(data.map(c => c.instructor)))
                    .map(name => {
                        const details = instructorDetails[name] || {
                            qualification: "Senior Industry Expert",
                            experience: "7+ Years in Field",
                            education: "Master's Degree",
                            specialty: "Specialized Course Topic"
                        };

                        return {
                            name: name,
                            ...details,
                            image: `https://ui-avatars.com/api/?name=${name}&background=10b981&color=fff&bold=true`
                        };
                    });
                setInstructors(uniqueInstructors.slice(0, 6));
            } catch (error) {
                console.error("Error fetching instructors:", error);
            }
        };
        fetchInstructors();
    }, []);

    return (
        <>
            <button
                onClick={() => document.getElementById('instructors_modal').showModal()}
                className="btn btn-ghost btn-sm text-emerald-400 flex items-center gap-1 hover:bg-white/10"
            >
                <Users size={16} />
                <span className="hidden md:inline">Top Instructors</span>
            </button>

            <dialog id="instructors_modal" className="modal modal-bottom sm:modal-middle">
                {/* Modal width increased to max-w-4xl */}
                <div className="modal-box bg-[#123e41] border border-emerald-500/30 text-white max-w-4xl w-11/12">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                        <Award className="text-yellow-400" size={28} />
                        <div>
                            <h3 className="font-bold text-2xl text-white">Our Expert Instructors</h3>
                            <p className="text-xs text-white/50 tracking-wide uppercase">World-class mentors at SkillSphere</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 max-h-[65vh] overflow-y-auto pr-2 custom-scrollbar">
                        {instructors.map((ins, index) => (
                            <div key={index} className="flex gap-4 p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all duration-300 group">
                                {/* <div className="avatar shrink-0">
                                    <div className="w-14 h-14 rounded-full ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/50 transition-all">
                                        <img src={ins.image} alt={ins.name} />
                                    </div>
                                </div> */}
                                <div className="avatar shrink-0">
                                    <div className="w-14 h-14 relative overflow-hidden rounded-full ring-2 ring-emerald-500/20 group-hover:ring-emerald-500/50 transition-all">
                                        <Image
                                            src={ins.image}
                                            alt={ins.name}
                                            width={56}
                                            height={56}
                                            className="object-cover"
                                        // layout="responsive" 
                                        />
                                    </div>
                                </div>
                                <div className="space-y-3 flex-1 min-w-0">
                                    <div className="flex justify-between items-start">
                                        <div className="min-w-0">
                                            <h4 className="font-bold text-emerald-400 text-lg leading-tight truncate">{ins.name}</h4>
                                            <p className="text-xs text-emerald-100/60 font-medium truncate mt-1">{ins.qualification}</p>
                                        </div>
                                        <div className="flex items-center gap-1 text-yellow-500 text-xs bg-yellow-500/10 px-2 py-1 rounded-full shrink-0 ml-2">
                                            <Star size={12} fill="currentColor" /> 4.9
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-sm text-slate-300">
                                        <div className="flex items-center gap-2">
                                            <GraduationCap size={16} className="text-emerald-500 shrink-0" />
                                            <span className="truncate">{ins.education}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Briefcase size={16} className="text-emerald-500 shrink-0" />
                                            <span>{ins.experience}</span>
                                        </div>
                                        <div className="mt-2 italic text-emerald-50 bg-emerald-950/40 p-3 rounded-xl border-l-4 border-emerald-500 text-xs leading-relaxed">
                                            <div className="flex gap-2">
                                                <BookOpen size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                                <span><strong>Expertise:</strong> {ins.specialty}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="modal-action border-t border-white/10 pt-4 mt-6">
                        <form method="dialog">
                            <button className="btn btn-md bg-emerald-600 hover:bg-emerald-700 text-white border-none px-8 rounded-xl shadow-lg">Close</button>
                        </form>
                    </div> */}
                    <div className="modal-action border-t border-white/10 pt-4 mt-6 flex justify-between items-center w-full">
                        {/* View All Button */}
                        <Link
                            href="/instructors"
                            className="text-emerald-400 hover:text-white text-sm font-medium underline underline-offset-4"
                            onClick={() => document.getElementById('instructors_modal').close()}
                        >
                            View All Instructors
                        </Link>

                        <form method="dialog">
                            <button className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white border-none px-6">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop backdrop-blur-sm">
                    <button>close</button>
                </form>
            </dialog>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 6px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(16, 185, 129, 0.3);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(16, 185, 129, 0.6);
                }
            `}</style>
        </>
    );
};

export default TopInstructors;