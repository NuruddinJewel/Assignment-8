import CourseCard from "@/components/Homepage/courses/CourseCard";
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

const CoursesPage = async () => {
    const courses = await getCourses();

    return (
        <div className="min-h-screen bg-[#0d2b2e]">
            {/* Header Section */}
            <div className="bg-[#123e41] border-b border-white/10 py-16 px-6 text-center relative overflow-hidden">
                {/* Decorative background element */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-emerald-500/5 blur-3xl rounded-full" />

                <div className="relative z-10">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
                        Explore Our <span className="text-emerald-400">Premium Courses</span>
                    </h1>
                    <p className="text-white/50 mt-4 text-base max-w-2xl mx-auto">
                        Empower your future with industry-leading courses. Currently showing {courses.length} courses designed by experts.
                    </p>
                </div>
            </div>

            {/* Course Grid Section */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16">
                {courses.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                ) : (
                    // Empty State or Error
                    <div className="text-center py-20">
                        <div className="flex flex-col items-center gap-4">
                            <span className="loading loading-dots loading-lg text-emerald-500"></span>
                            <p className="text-white/40 italic">No courses found or taking too long to load...</p>
                            <button className="btn btn-outline btn-emerald btn-sm mt-4">Reload Page</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CoursesPage;