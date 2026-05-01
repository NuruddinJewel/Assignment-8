"use client";
import React, { useEffect, useState } from 'react';
import { Star, GraduationCap, Briefcase, BookOpen, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';


const instructorDetails = {
    "John Doe": { qualification: "Senior Software Architect", experience: "15+ Years", education: "PhD in Software Engineering, MIT", specialty: "System Design & Scalable Architecture" },
    "Sarah Chen": { qualification: "UI/UX Design Lead", experience: "10+ Years", education: "Master of Fine Arts, RISD", specialty: "User-Centric Design & Design Systems" },
    "Emily Rivera": { qualification: "Full Stack Developer", experience: "8+ Years", education: "BSc in Computer Science, Georgia Tech", specialty: "React, Node.js & Cloud Integration" },
    "Michael Torres": { qualification: "Cybersecurity Expert", experience: "12+ Years", education: "Certified Ethical Hacker (CEH)", specialty: "Network Security & Ethical Hacking" },
    "David Kim": { qualification: "Data Scientist", experience: "9+ Years", education: "MS in Statistics, UC Berkeley", specialty: "Machine Learning & Big Data Analytics" },
    "Natasha Patel": { qualification: "Mobile App Specialist", experience: "7+ Years", education: "BTech in IT", specialty: "Flutter, React Native & Swift" },
    "Laura Bennett": { qualification: "Digital Marketing Strategist", experience: "11+ Years", education: "MBA in Marketing", specialty: "SEO, SEM & Growth Hacking" },
    "James Nguyen": { qualification: "DevOps Engineer", experience: "10+ Years", education: "AWS Certified Professional", specialty: "CI/CD Pipelines & Kubernetes" }
};

const InstructorsPage = () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("https://json-server-3-fxsb.onrender.com/courses")
            .then(res => res.json())
            .then(data => {
                const uniqueNames = Array.from(new Set(data.map(c => c.instructor)));
                const formattedData = uniqueNames.map(name => ({
                    name,
                    ...(instructorDetails[name] || { qualification: "Expert Instructor", experience: "5+ Years", education: "Master's Degree", specialty: "Technology" }),
                    image: `https://ui-avatars.com/api/?name=${name}&background=10b981&color=fff&bold=true&size=128`
                }));
                setInstructors(formattedData);
            });
    }, []);

    return (
        <div className="min-h-screen bg-[#0a2a2d] text-white py-12 px-4 lg:px-20">
            {/* Header */}
            <div className="max-w-7xl mx-auto mb-12">
                <Link href="/" className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-all mb-6 w-fit">
                    <ArrowLeft size={20} /> Back to Home
                </Link>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Meet Our <span className="text-emerald-400">Expert Instructors</span></h1>
                <p className="text-slate-400 max-w-2xl text-lg">Learn from industry leaders and experienced professionals who are passionate about sharing their knowledge.</p>
            </div>

            {/* Instructors Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {instructors.map((ins, index) => (
                    <div key={index} className="bg-[#123e41] border border-white/5 rounded-3xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 group shadow-xl">
                        <div className="p-8">
                            {/* <div className="flex items-center gap-5 mb-6">
                                <img src={ins.image} alt={ins.name} className="w-20 h-20 rounded-2xl ring-4 ring-emerald-500/10 group-hover:scale-105 transition-transform duration-300" />
                                <div>
                                    <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">{ins.name}</h2>
                                    <p className="text-emerald-100/60 text-sm font-medium">{ins.qualification}</p>
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs mt-2 bg-yellow-500/10 w-fit px-2 py-0.5 rounded-full">
                                        <Star size={12} fill="currentColor" /> 4.9 Instructor Rating
                                    </div>
                                </div>
                            </div> */}
                            <div className="flex items-center gap-5 mb-6">
                                {/* Image Container with fixed dimensions to match w-20 h-20 */}
                                <div className="relative w-20 h-20 shrink-0 overflow-hidden rounded-2xl ring-4 ring-emerald-500/10 group-hover:scale-105 transition-transform duration-300">
                                    <Image
                                        src={ins.image}
                                        alt={ins.name}
                                        width={80}
                                        height={80}
                                        className="object-cover"
                                    // priority={index < 3}
                                    />
                                </div>

                                <div className="min-w-0">
                                    <h2 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors truncate">
                                        {ins.name}
                                    </h2>
                                    <p className="text-emerald-100/60 text-sm font-medium truncate">
                                        {ins.qualification}
                                    </p>
                                    <div className="flex items-center gap-1 text-yellow-500 text-xs mt-2 bg-yellow-500/10 w-fit px-2 py-0.5 rounded-full">
                                        <Star size={12} fill="currentColor" /> 4.9 Instructor Rating
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-4 text-slate-300 text-sm">
                                <div className="flex items-center gap-3">
                                    <GraduationCap size={18} className="text-emerald-500" />
                                    <span>{ins.education}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Briefcase size={18} className="text-emerald-500" />
                                    <span>{ins.experience} Experience</span>
                                </div>
                                <div className="p-4 bg-black/20 rounded-2xl border-l-4 border-emerald-500">
                                    <div className="flex gap-2">
                                        <BookOpen size={18} className="text-emerald-500 shrink-0" />
                                        <p><span className="text-white font-semibold">Specialty:</span> {ins.specialty}</p>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full mt-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold transition-all flex items-center justify-center gap-2 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.3)]">
                                <Mail size={18} /> Contact Instructor
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InstructorsPage;