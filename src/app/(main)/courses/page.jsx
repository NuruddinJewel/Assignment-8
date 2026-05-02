import CourseCard from "@/components/Homepage/courses/CourseCard";
import { Search } from "lucide-react";
import Link from "next/link";

async function getCourses() {
    try {
        const res = await fetch("https://json-server-3-fxsb.onrender.com/courses", {
            cache: "no-store",
        });

        if (!res.ok) {
            throw new Error("Failed to fetch courses");
        }

        return res.json();
    } catch (error) {
        console.error("Error fetching courses:", error);
        return [];
    }
}

const CoursesPage = async ({ searchParams }) => {
    // 1. searchParams await 
    const params = await searchParams;
    const searchQuery = params?.search?.toLowerCase() || "";

    const allCourses = await getCourses();

    // 2. Filtering
    const filteredCourses = allCourses.filter((course) => {
        return (
            course.title?.toLowerCase().includes(searchQuery) ||
            course.category?.toLowerCase().includes(searchQuery) ||
            course.instructor?.toLowerCase().includes(searchQuery)
        );
    });

    return (
        <div className="min-h-screen bg-[#0d2b2e]">
            {/* Header Section */}
            <div className="bg-[#123e41] border-b border-white/10 py-16 px-6 text-center relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-3xl rounded-full" />

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        {searchQuery ? (

                            <>Results for <span className="text-emerald-400">{` "${searchQuery}" `}</span></>
                        ) : (
                            <>Explore Our <span className="text-emerald-400">Premium Courses</span></>
                        )}
                    </h1>
                    <p className="text-white/50 mt-4 text-base max-w-2xl mx-auto">
                        {searchQuery
                            ? `Found ${filteredCourses.length} courses matching your search.`
                            : `Empower your future with industry-leading courses. Currently showing ${allCourses.length} courses.`
                        }
                    </p>
                </div>
            </div>

            {/* Course Grid Section */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                {filteredCourses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {filteredCourses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="flex flex-col items-center gap-4">
                            <div className="p-4 bg-white/5 rounded-full">
                                <Search className="w-12 h-12 text-white/20" />
                            </div>
                            <h3 className="text-xl font-bold text-white">No courses found</h3>
                            <p className="text-white/40 italic">{"We couldn't find any courses matching your search criteria."}</p>
                            <Link href="/courses" className="btn btn-outline btn-emerald btn-sm mt-4">
                                View All Courses
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoursesPage;