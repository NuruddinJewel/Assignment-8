import CourseCard from "./courses/CourseCard";
import { Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";

const API_URL = "https://json-server-3-fxsb.onrender.com/courses";


async function getFeaturedCourses() {
    try {
        const response = await fetch(API_URL, {
            cache: 'no-store',
            // next: { revalidate: 3600 }
        });
        if (!response.ok) throw new Error("Failed to fetch courses");
        const data = await response.json();

        return data.slice(0, 4);
    } catch (error) {
        console.error("Error loading featured courses:", error);
        return [];
    }
}

const FeaturedCourses = async () => {
    const courses = await getFeaturedCourses();

    return (
        <section className="bg-linear-to-b from-[#042f2c] via-[#064e44] to-[#042f2c] py-20 px-4 lg:px-8 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="space-y-4">
                        <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
                            <Sparkles size={14} />
                            Top Picks
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-white leading-tight">
                            Featured <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-teal-300">Courses</span>
                        </h2>
                        <p className="text-slate-300/70 text-lg max-w-2xl leading-relaxed">
                            Hand-picked professional courses designed to help you master new skills and advance your career.
                        </p>
                    </div>

                    <Link
                        href="/courses"
                        className="group flex items-center gap-2 text-emerald-400 font-semibold hover:text-emerald-300 transition-colors"
                    >
                        View All Courses
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Course Grid */}
                {courses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
                        <p className="text-slate-400 italic">No featured courses available at the moment.</p>
                    </div>
                )}

                {/* Mobile Call to Action */}
                <div className="mt-12 text-center md:hidden">
                    <Link href="/courses" className="btn btn-outline border-emerald-500/50 text-emerald-400 w-full hover:bg-emerald-500 hover:border-emerald-500">
                        Explore Full Catalog
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default FeaturedCourses;