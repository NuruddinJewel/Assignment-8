"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import CourseCard from "./courses/CourseCard";
import { Flame, ArrowRight, TrendingUp } from "lucide-react";
import Link from "next/link";

const API_URL = "https://json-server-3-fxsb.onrender.com/courses";

const PopularCourses = () => {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPopular = async () => {
            try {
                const response = await fetch(API_URL);
                if (!response.ok) throw new Error("Failed to fetch");
                const data = await response.json();


                const sorted = data
                    .sort((a, b) => b.rating - a.rating)
                    .slice(0, 8);
                setCourses(sorted);
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchPopular();
    }, []);

    return (
        <section className="bg-[#042f2c] py-20 relative overflow-hidden">
            {/* Background Glow Effect */}
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px]"></div>

            <div className="max-w-7xl mx-auto px-4 lg:px-8 mb-12">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                            <TrendingUp size={14} />
                            Student Favorites
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                            Most <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">Popular</span> Pickups
                        </h2>
                        <p className="text-slate-300/70 text-lg max-w-2xl leading-relaxed">
                            {"Don't just take our word for it. Join thousands of learners currently mastering these trending skills."}
                        </p>
                    </div>

                    <Link
                        href="/courses"
                        className="group hidden md:flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                    >
                        Explore All
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="relative">
                {loading ? (
                    <div className="flex justify-center py-20">
                        <span className="loading loading-spinner loading-lg text-emerald-500"></span>
                    </div>
                ) : (
                    <Marquee
                        gradient={true}
                        gradientColor="#042f2c"
                        gradientWidth={100}
                        speed={50}
                        pauseOnHover={true}
                        direction="left"
                        className="py-10"
                    >
                        {courses.map((course) => (
                            <div key={course.id} className="mx-4 w-[300px] md:w-[350px]">
                                <CourseCard course={course} />
                            </div>
                        ))}
                    </Marquee>
                )}
            </div>

            {/* Mobile View All Button */}
            <div className="mt-8 px-4 md:hidden">
                <Link href="/courses" className="btn btn-outline border-emerald-500/50 text-emerald-400 w-full hover:bg-emerald-500 hover:border-emerald-500">
                    View All Popular Courses
                </Link>
            </div>
        </section>
    );
};

export default PopularCourses;