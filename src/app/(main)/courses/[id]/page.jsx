// import Link from "next/link";
// import Image from "next/image";
// import {
//     ArrowLeft, Clock, Star, User, BookOpen,
//     CheckCircle2, Globe, ListChecks, Rocket, Award,
//     Trophy, Zap, GraduationCap, Sparkles,
//     Flame, Crown, Heart, Layout, ShieldCheck
// } from "lucide-react";

// const API_URL = "https://json-server-3-fxsb.onrender.com/courses";

// const getCourseById = async (id) => {
//     try {
//         const response = await fetch(API_URL, {
//             cache: 'no-store',
//             next: { revalidate: 3600 }
//         });
//         if (!response.ok) throw new Error(`Failed to fetch courses`);
//         const courses = await response.json();
//         return courses.find((c) => c.id?.toString() === id?.toString());
//     } catch (error) {
//         console.error("Error fetching course:", error);
//         return null;
//     }
// };

// const levelConfig = {
//     Beginner: { color: "success", icon: Zap, gradient: "from-emerald-400 to-green-500" },
//     Intermediate: { color: "warning", icon: Layout, gradient: "from-amber-400 to-orange-500" },
//     Advanced: { color: "error", icon: Trophy, gradient: "from-rose-400 to-red-600" },
// };

// const CourseDetailsPage = async ({ params }) => {
//     const resolvedParams = await params;
//     const id = resolvedParams?.id;
//     const course = await getCourseById(id);

//     if (!course) {
//         return (
//             <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
//                 <div className="text-center space-y-4">
//                     <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
//                         <BookOpen className="text-red-600 w-10 h-10" />
//                     </div>
//                     <h2 className="text-2xl font-bold">Course Not Found</h2>
//                     <Link href="/courses" className="btn btn-ghost text-emerald-700">
//                         <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const {
//         title, instructor, duration, rating, level, category,
//         price, image, short_description, long_description,
//         language, requirements, features, curriculum
//     } = course;

//     const LevelIcon = levelConfig[level]?.icon || GraduationCap;

//     return (
//         <div className="min-h-screen bg-slate-50">
//             {/* Dark Hero Banner */}
//             <div className="bg-linear-to-r from-[#042f2c] via-[#064e44] to-[#042f2c] text-white pt-10 pb-20">
//                 <div className="max-w-7xl mx-auto px-4 lg:px-8">
//                     <Link href="/courses" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
//                         <ArrowLeft className="w-4 h-4 mr-2" />
//                         Back to Courses
//                     </Link>

//                     <div className="grid lg:grid-cols-2 gap-12 items-center">
//                         <div className="space-y-6">
//                             <div className="flex flex-wrap gap-3">
//                                 <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider italic">
//                                     {category}
//                                 </span>
//                                 <span className="bg-white/10 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
//                                     <LevelIcon className="w-3 h-3" />
//                                     {level}
//                                 </span>
//                             </div>
//                             <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
//                                 {title}
//                             </h1>
//                             <p className="text-emerald-50/80 text-lg max-w-2xl">
//                                 {short_description}
//                             </p>
//                             <div className="flex flex-wrap gap-6 items-center text-sm">
//                                 <div className="flex items-center gap-2">
//                                     <User className="w-5 h-5 text-emerald-400" />
//                                     <span>By <span className="font-semibold text-emerald-300">{instructor}</span></span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
//                                     <span className="font-bold">{rating}</span>
//                                     <span className="opacity-70">(2.5k reviews)</span>
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <Globe className="w-5 h-5 text-emerald-400" />
//                                     <span>{language}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content Area */}
//             <div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-12 pb-20">
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//                     {/* Left Column: Details */}
//                     <div className="lg:col-span-2 space-y-8">
//                         {/* Course Image Preview */}
//                         <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
//                             <div className="relative aspect-video w-full">
//                                 {image ? (
//                                     <Image src={image} alt={title} fill className="object-cover" unoptimized />
//                                 ) : (
//                                     <div className="w-full h-full bg-slate-200 flex items-center justify-center">
//                                         <BookOpen className="w-20 h-20 text-slate-400" />
//                                     </div>
//                                 )}
//                             </div>
//                         </div>

//                         {/* Description Section */}
//                         <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
//                             <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
//                                 <Rocket className="text-emerald-600 w-6 h-6" /> Course Overview
//                             </h2>
//                             <div className="text-slate-600 leading-relaxed whitespace-pre-line">
//                                 {long_description}
//                             </div>
//                         </section>

//                         {/* Features Section - NEW */}
//                         {features?.length > 0 && (
//                             <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
//                                 <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
//                                     <Sparkles className="text-emerald-600 w-6 h-6" /> Key Features
//                                 </h2>
//                                 <div className="grid md:grid-cols-2 gap-4">
//                                     {features.map((feature, idx) => (
//                                         <div key={idx} className="flex items-start gap-3">
//                                             <ShieldCheck className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
//                                             <span className="text-slate-700">{feature}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </section>
//                         )}

//                         {/* Requirements Section - NEW */}
//                         {requirements?.length > 0 && (
//                             <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
//                                 <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
//                                     <ListChecks className="text-emerald-600 w-6 h-6" /> Requirements
//                                 </h2>
//                                 <ul className="space-y-3">
//                                     {requirements.map((req, idx) => (
//                                         <li key={idx} className="flex items-center gap-3 text-slate-600">
//                                             <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)]"></div>
//                                             {req}
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </section>
//                         )}

//                         {/* Curriculum Section */}
//                         {curriculum?.length > 0 && (
//                             <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
//                                 <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
//                                     <GraduationCap className="text-emerald-600 w-6 h-6" /> What you will learn
//                                 </h2>
//                                 <div className="space-y-3">
//                                     {curriculum.map((item, idx) => (
//                                         <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-emerald-50 hover:border-emerald-100 transition-all cursor-default">
//                                             <div className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
//                                                 {String(idx + 1).padStart(2, '0')}
//                                             </div>
//                                             <span className="text-slate-700 font-medium">{item}</span>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </section>
//                         )}
//                     </div>

//                     {/* Right Column: Enrollment Sidebar */}
//                     <div className="lg:col-span-1">
//                         <div className="sticky top-28 space-y-6">
//                             <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
//                                 <div className="p-8 space-y-6">
//                                     <div className="flex items-baseline gap-2">
//                                         <span className="text-4xl font-black text-[#042f2c]">
//                                             {price === 0 ? "FREE" : `$${price}`}
//                                         </span>
//                                     </div>

//                                     <button className="btn w-full bg-[#00966d] hover:bg-[#007a58] text-white border-none h-14 text-lg font-bold shadow-lg transition-all active:scale-95">
//                                         Enroll Now
//                                     </button>

//                                     <div className="space-y-4 pt-2">
//                                         <p className="font-bold text-slate-800 flex items-center gap-2">
//                                             <Award className="w-4 h-4 text-emerald-600" /> Include in Course:
//                                         </p>
//                                         <ul className="space-y-3">
//                                             <li className="flex items-center gap-3 text-slate-600 text-sm">
//                                                 <Clock className="w-4 h-4 text-emerald-500" /> {duration} on-demand video
//                                             </li>
//                                             <li className="flex items-center gap-3 text-slate-600 text-sm">
//                                                 <Award className="w-4 h-4 text-emerald-500" /> Certificate of completion
//                                             </li>
//                                             <li className="flex items-center gap-3 text-slate-600 text-sm">
//                                                 <Zap className="w-4 h-4 text-emerald-500" /> Lifetime access
//                                             </li>
//                                         </ul>
//                                     </div>
//                                 </div>
//                                 <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
//                                     <button className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center justify-center gap-2 mx-auto">
//                                         <Heart className="w-4 h-4" /> Save to Wishlist
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Premium Badge */}
//                             <div className="bg-linear-to-br from-amber-50 to-yellow-100 border border-amber-200 p-6 rounded-2xl flex items-center gap-4">
//                                 <Crown className="w-10 h-10 text-amber-500 shrink-0" />
//                                 <div>
//                                     <p className="font-bold text-amber-900 text-sm uppercase">SkillSphere Premium</p>
//                                     <p className="text-amber-800 text-xs">Unlock all exercises and 1-on-1 support.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//         </div>
//     );
// };

// export default CourseDetailsPage;

import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft, Clock, Star, User, BookOpen,
    CheckCircle2, Globe, ListChecks, Rocket, Award,
    Trophy, Zap, GraduationCap, Sparkles,
    Crown, Heart, Layout, ShieldCheck
} from "lucide-react";

const API_URL = "https://json-server-3-fxsb.onrender.com/courses";

const getCourseById = async (id) => {
    try {
        const response = await fetch(API_URL, { cache: 'no-store' });
        if (!response.ok) throw new Error("Failed to fetch courses");
        const courses = await response.json();
        return courses.find((c) => c.id?.toString() === id?.toString());
    } catch (error) {
        console.error("Error fetching course:", error);
        return null;
    }
};

const levelConfig = {
    Beginner: { icon: Zap },
    Intermediate: { icon: Layout },
    Advanced: { icon: Trophy },
};

const CourseDetailsPage = async ({ params }) => {
    const resolvedParams = await params;
    const id = resolvedParams?.id;
    const course = await getCourseById(id);

    if (!course) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <div className="text-center space-y-4">
                    <div className="bg-red-100 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                        <BookOpen className="text-red-600 w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-bold">Course Not Found</h2>
                    <Link href="/courses" className="btn btn-ghost text-emerald-700">
                        <ArrowLeft className="w-4 h-4 mr-2" /> Back to Catalog
                    </Link>
                </div>
            </div>
        );
    }

    const {
        title,
        instructor,
        duration,
        rating,
        level,
        category,
        price,
        image,
        short_description,
        long_description,
        language,
        requirements,
        features,
        curriculum,
    } = course;

    const LevelIcon = levelConfig[level]?.icon || GraduationCap;

    return (
        <div className="min-h-screen bg-slate-50">

            {/* Dark Hero Banner */}
            <div className="bg-gradient-to-r from-[#042f2c] via-[#064e44] to-[#042f2c] text-white pt-10 pb-24">
                <div className="max-w-7xl mx-auto px-4 lg:px-8">
                    <Link href="/courses" className="inline-flex items-center text-emerald-400 hover:text-emerald-300 mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Courses
                    </Link>

                    <div className="space-y-6 max-w-3xl">
                        <div className="flex flex-wrap gap-3">
                            <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                {category}
                            </span>
                            <span className="bg-white/10 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
                                <LevelIcon className="w-3 h-3" />
                                {level}
                            </span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                            {title}
                        </h1>

                        <p className="text-emerald-50/80 text-lg">
                            {short_description}
                        </p>

                        <div className="flex flex-wrap gap-6 items-center text-sm">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5 text-emerald-400" />
                                <span>By <span className="font-semibold text-emerald-300">{instructor}</span></span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                                <span className="font-bold">{rating}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Globe className="w-5 h-5 text-emerald-400" />
                                <span>{language}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-5 h-5 text-emerald-400" />
                                <span>{duration}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 lg:px-8 -mt-12 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column */}
                    <div className="lg:col-span-2 space-y-8">

                        {/* Course Image */}
                        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-200">
                            <div className="relative aspect-video w-full">
                                {image ? (
                                    <Image
                                        src={image}
                                        alt={title}
                                        fill
                                        className="object-cover"
                                        unoptimized
                                    />
                                ) : (
                                    <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                                        <BookOpen className="w-20 h-20 text-slate-400" />
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Long Description */}
                        <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                                <Rocket className="text-emerald-600 w-6 h-6" /> Course Overview
                            </h2>
                            <p className="text-slate-600 leading-relaxed">{long_description}</p>
                        </section>

                        {/* Features */}
                        {features?.length > 0 && (
                            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                                    <Sparkles className="text-emerald-600 w-6 h-6" /> Key Features
                                </h2>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {features.map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <ShieldCheck className="w-5 h-5 text-emerald-500 mt-1 shrink-0" />
                                            <span className="text-slate-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Requirements */}
                        {requirements?.length > 0 && (
                            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-slate-800">
                                    <ListChecks className="text-emerald-600 w-6 h-6" /> Requirements
                                </h2>
                                <ul className="space-y-3">
                                    {requirements.map((req, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-600">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                            {req}
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}

                        {/* Curriculum */}
                        {curriculum?.length > 0 && (
                            <section className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-slate-800">
                                    <GraduationCap className="text-emerald-600 w-6 h-6" /> What You Will Learn
                                </h2>
                                <div className="space-y-3">
                                    {curriculum.map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100 hover:bg-emerald-50 hover:border-emerald-100 transition-all">
                                            <div className="bg-emerald-100 text-emerald-700 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                                                {String(idx + 1).padStart(2, '0')}
                                            </div>
                                            <span className="text-slate-700 font-medium">{item}</span>
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 ml-auto shrink-0" />
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}
                    </div>

                    {/* Right Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28 space-y-6">
                            <div className="bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
                                <div className="p-8 space-y-6">
                                    <div>
                                        <span className="text-white/40 text-xs uppercase font-bold tracking-widest text-slate-400">Price</span>
                                        <div className="text-4xl font-black text-[#042f2c] mt-1">
                                            {price === 0 ? "FREE" : `$${price}`}
                                        </div>
                                    </div>

                                    <button className="btn w-full bg-[#00966d] hover:bg-[#007a58] text-white border-none h-14 text-lg font-bold shadow-lg transition-all active:scale-95">
                                        Enroll Now
                                    </button>

                                    <div className="space-y-4 pt-2 border-t border-slate-100">
                                        <p className="font-bold text-slate-800 flex items-center gap-2">
                                            <Award className="w-4 h-4 text-emerald-600" /> This course includes:
                                        </p>
                                        <ul className="space-y-3">
                                            <li className="flex items-center gap-3 text-slate-600 text-sm">
                                                <Clock className="w-4 h-4 text-emerald-500" /> {duration} on-demand video
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-600 text-sm">
                                                <Globe className="w-4 h-4 text-emerald-500" /> Language: {language}
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-600 text-sm">
                                                <Award className="w-4 h-4 text-emerald-500" /> Certificate of completion
                                            </li>
                                            <li className="flex items-center gap-3 text-slate-600 text-sm">
                                                <Zap className="w-4 h-4 text-emerald-500" /> Lifetime access
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="bg-slate-50 p-4 text-center border-t border-slate-100">
                                    <button className="text-emerald-700 font-bold hover:text-emerald-800 flex items-center justify-center gap-2 mx-auto text-sm">
                                        <Heart className="w-4 h-4" /> Save to Wishlist
                                    </button>
                                </div>
                            </div>

                            {/* Premium Badge */}
                            <div className="bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200 p-6 rounded-2xl flex items-center gap-4">
                                <Crown className="w-10 h-10 text-amber-500 shrink-0" />
                                <div>
                                    <p className="font-bold text-amber-900 text-sm uppercase">SkillSphere Premium</p>
                                    <p className="text-amber-800 text-xs mt-1">Unlock all exercises and 1-on-1 support.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetailsPage;