// "use client"
// import { useSession } from "@/lib/auth-client";
// import Image from "next/image";
// import Link from "next/link";
// import {
//     User, Mail, BookOpen, Clock,
//     Award, GraduationCap, Settings, LogOut
// } from "lucide-react";

// const ProfilePage = () => {
//     const { data: session, isPending } = useSession();
//     const user = session?.user;

//     if (isPending) {
//         return (
//             <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center">
//                 <span className="loading loading-spinner loading-lg text-emerald-400" />
//             </div>
//         );
//     }

//     if (!user) {
//         return (
//             <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center">
//                 <div className="text-center space-y-4">
//                     <h2 className="text-white text-2xl font-bold">Not logged in</h2>
//                     <Link href="/login" className="btn bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case">
//                         Go to Login
//                     </Link>
//                 </div>
//             </div>
//         );
//     }

//     const stats = [
//         { icon: BookOpen, label: "Enrolled Courses", value: "0" },
//         { icon: Clock, label: "Hours Learned", value: "0" },
//         { icon: Award, label: "Certificates", value: "0" },
//         { icon: GraduationCap, label: "Completed", value: "0" },
//     ];

//     return (
//         <div className="min-h-screen bg-[#0d2b2e]">

//             {/* Hero Banner */}
//             <div className="bg-gradient-to-r from-[#042f2c] via-[#064e44] to-[#042f2c] pt-12 pb-24">
//                 <div className="max-w-5xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center gap-6">

//                     {/* Avatar */}
//                     <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-500/50 shrink-0">
//                         {user.image ? (
//                             <Image
//                                 src={user.image}
//                                 alt={user.name}
//                                 fill
//                                 className="object-cover"
//                                 unoptimized
//                             />
//                         ) : (
//                             <div className="w-full h-full bg-emerald-800 flex items-center justify-center">
//                                 <User className="w-10 h-10 text-emerald-300" />
//                             </div>
//                         )}
//                     </div>

//                     {/* User Info */}
//                     <div className="text-center sm:text-left">
//                         <h1 className="text-3xl font-extrabold text-white">{user.name}</h1>
//                         <p className="text-emerald-400 flex items-center justify-center sm:justify-start gap-2 mt-1 text-sm">
//                             <Mail className="w-4 h-4" /> {user.email}
//                         </p>
//                         <span className="mt-3 inline-block badge bg-emerald-600 border-none text-white text-xs px-3 py-2">
//                             Student
//                         </span>
//                     </div>
//                 </div>
//             </div>

//             {/* Main Content */}
//             <div className="max-w-5xl mx-auto px-4 lg:px-8 -mt-12 pb-20 space-y-8">

//                 {/* Stats Row */}
//                 <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                     {stats.map(({ icon: Icon, label, value }) => (
//                         <div key={label} className="bg-[#123e41] rounded-2xl p-5 border border-white/10 text-center">
//                             <Icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
//                             <p className="text-2xl font-black text-white">{value}</p>
//                             <p className="text-white/50 text-xs mt-1">{label}</p>
//                         </div>
//                     ))}
//                 </div>

//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

//                     {/* Left: Account Info */}
//                     <div className="lg:col-span-2 space-y-6">
//                         <div className="bg-[#123e41] rounded-2xl p-6 border border-white/10">
//                             <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
//                                 <User className="w-5 h-5 text-emerald-400" /> Account Information
//                             </h2>
//                             <div className="space-y-4">
//                                 <div className="flex flex-col gap-1">
//                                     <span className="text-white/40 text-xs uppercase tracking-wider">Full Name</span>
//                                     <span className="text-white font-medium">{user.name}</span>
//                                 </div>
//                                 <div className="divider my-0 opacity-10" />
//                                 <div className="flex flex-col gap-1">
//                                     <span className="text-white/40 text-xs uppercase tracking-wider">Email Address</span>
//                                     <span className="text-white font-medium">{user.email}</span>
//                                 </div>
//                                 <div className="divider my-0 opacity-10" />
//                                 <div className="flex flex-col gap-1">
//                                     <span className="text-white/40 text-xs uppercase tracking-wider">Member Since</span>
//                                     <span className="text-white font-medium">
//                                         {user.createdAt
//                                             ? new Date(user.createdAt).toLocaleDateString("en-US", {
//                                                 year: "numeric", month: "long", day: "numeric"
//                                             })
//                                             : "N/A"}
//                                     </span>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Enrolled Courses Placeholder */}
//                         <div className="bg-[#123e41] rounded-2xl p-6 border border-white/10">
//                             <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
//                                 <BookOpen className="w-5 h-5 text-emerald-400" /> My Courses
//                             </h2>
//                             <div className="text-center py-10 space-y-3">
//                                 <GraduationCap className="w-12 h-12 text-white/20 mx-auto" />
//                                 <p className="text-white/40 text-sm">You haven&apos;t enrolled in any courses yet.</p>
//                                 <Link
//                                     href="/courses"
//                                     className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case"
//                                 >
//                                     Browse Courses
//                                 </Link>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Right: Quick Actions */}
//                     <div className="space-y-4">
//                         <div className="bg-[#123e41] rounded-2xl p-6 border border-white/10">
//                             <h2 className="text-white font-bold text-lg mb-4">Quick Actions</h2>
//                             <div className="space-y-3">
//                                 <Link
//                                     href="/settings"
//                                     className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/70 hover:text-white text-sm"
//                                 >
//                                     <Settings className="w-4 h-4 text-emerald-400" />
//                                     Account Settings
//                                 </Link>
//                                 <Link
//                                     href="/courses"
//                                     className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/70 hover:text-white text-sm"
//                                 >
//                                     <BookOpen className="w-4 h-4 text-emerald-400" />
//                                     Browse Courses
//                                 </Link>
//                                 <Link
//                                     href="/login"
//                                     className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 transition-colors text-red-400 hover:text-red-300 text-sm"
//                                 >
//                                     <LogOut className="w-4 h-4" />
//                                     Logout
//                                 </Link>
//                             </div>
//                         </div>

//                         {/* Premium Card */}
//                         <div className="bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200 p-6 rounded-2xl">
//                             <Award className="w-8 h-8 text-amber-500 mb-3" />
//                             <p className="font-bold text-amber-900 text-sm">Upgrade to Premium</p>
//                             <p className="text-amber-800 text-xs mt-1 mb-4">Get unlimited access to all courses.</p>
//                             <button className="btn btn-sm w-full bg-amber-500 hover:bg-amber-600 border-none text-white normal-case">
//                                 Upgrade Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProfilePage;
// 2

"use client";
import { useSession, signOut } from "@/lib/auth-client"; // ← signOut যোগ
import { useRouter } from "next/navigation";              // ← useRouter যোগ
import { toast } from "react-toastify";                   // ← toast যোগ
import Image from "next/image";
import Link from "next/link";
import {
    User, Mail, BookOpen, Clock,
    Award, GraduationCap, Settings, LogOut,
} from "lucide-react";

const ProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const user = session?.user;

    // ── Logout handler ──────────────────────────────────────────────
    const handleLogout = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    toast.success("Logout successful! See you soon 👋", {
                        position: "top-right",
                        autoClose: 2500,
                        theme: "dark",
                    });
                    router.push("/");
                    router.refresh();
                },
                onError: () => {
                    toast.error("Logout failed. Please try again.", {
                        position: "top-right",
                        autoClose: 3000,
                        theme: "dark",
                    });
                },
            },
        });
    };
    // ────────────────────────────────────────────────────────────────

    if (isPending) {
        return (
            <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-emerald-400" />
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center">
                <div className="text-center space-y-4">
                    <h2 className="text-white text-2xl font-bold">Not logged in</h2>
                    <Link
                        href="/login"
                        className="btn bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case"
                    >
                        Go to Login
                    </Link>
                </div>
            </div>
        );
    }

    const stats = [
        { icon: BookOpen, label: "Enrolled Courses", value: "0" },
        { icon: Clock, label: "Hours Learned", value: "0" },
        { icon: Award, label: "Certificates", value: "0" },
        { icon: GraduationCap, label: "Completed", value: "0" },
    ];

    return (
        <div className="min-h-screen bg-[#0d2b2e]">

            {/* Hero Banner */}
            <div className="bg-gradient-to-r from-[#042f2c] via-[#064e44] to-[#042f2c] pt-12 pb-24">
                <div className="max-w-5xl mx-auto px-4 lg:px-8 flex flex-col sm:flex-row items-center gap-6">
                    {/* Avatar */}
                    <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-500/50 shrink-0">
                        {user.image ? (
                            <Image
                                src={user.image}
                                alt={user.name}
                                fill
                                className="object-cover"
                                unoptimized
                            />
                        ) : (
                            <div className="w-full h-full bg-emerald-800 flex items-center justify-center">
                                <User className="w-10 h-10 text-emerald-300" />
                            </div>
                        )}
                    </div>

                    {/* User Info */}
                    <div className="text-center sm:text-left">
                        <h1 className="text-3xl font-extrabold text-white">{user.name}</h1>
                        <p className="text-emerald-400 flex items-center justify-center sm:justify-start gap-2 mt-1 text-sm">
                            <Mail className="w-4 h-4" /> {user.email}
                        </p>
                        <span className="mt-3 inline-block badge bg-emerald-600 border-none text-white text-xs px-3 py-2">
                            Student
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-5xl mx-auto px-4 lg:px-8 -mt-12 pb-20 space-y-8">

                {/* Stats Row */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map(({ icon: Icon, label, value }) => (
                        <div key={label} className="bg-[#123e41] rounded-2xl p-5 border border-white/10 text-center">
                            <Icon className="w-6 h-6 text-emerald-400 mx-auto mb-2" />
                            <p className="text-2xl font-black text-white">{value}</p>
                            <p className="text-white/50 text-xs mt-1">{label}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left: Account Info */}
                    <div className="lg:col-span-2 space-y-6">
                        <div className="bg-[#123e41] rounded-2xl p-6 border border-white/10">
                            <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                                <User className="w-5 h-5 text-emerald-400" /> Account Information
                            </h2>
                            <div className="space-y-4">
                                <div className="flex flex-col gap-1">
                                    <span className="text-white/40 text-xs uppercase tracking-wider">Full Name</span>
                                    <span className="text-white font-medium">{user.name}</span>
                                </div>
                                <div className="divider my-0 opacity-10" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-white/40 text-xs uppercase tracking-wider">Email Address</span>
                                    <span className="text-white font-medium">{user.email}</span>
                                </div>
                                <div className="divider my-0 opacity-10" />
                                <div className="flex flex-col gap-1">
                                    <span className="text-white/40 text-xs uppercase tracking-wider">Member Since</span>
                                    <span className="text-white font-medium">
                                        {user.createdAt
                                            ? new Date(user.createdAt).toLocaleDateString("en-US", {
                                                year: "numeric", month: "long", day: "numeric",
                                            })
                                            : "N/A"}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Enrolled Courses Placeholder */}
                        <div className="bg-[#123e41] rounded-2xl p-6 border border-white/10">
                            <h2 className="text-white font-bold text-lg mb-5 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-emerald-400" /> My Courses
                            </h2>
                            <div className="text-center py-10 space-y-3">
                                <GraduationCap className="w-12 h-12 text-white/20 mx-auto" />
                                <p className="text-white/40 text-sm">You haven&apos;t enrolled in any courses yet.</p>
                                <Link
                                    href="/courses"
                                    className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case"
                                >
                                    Browse Courses
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Right: Quick Actions */}
                    <div className="space-y-4">
                        <div className="bg-[#123e41] rounded-2xl p-6 border border-white/10">
                            <h2 className="text-white font-bold text-lg mb-4">Quick Actions</h2>
                            <div className="space-y-3">
                                <Link
                                    href="/settings"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/70 hover:text-white text-sm"
                                >
                                    <Settings className="w-4 h-4 text-emerald-400" />
                                    Account Settings
                                </Link>
                                <Link
                                    href="/courses"
                                    className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-white/70 hover:text-white text-sm"
                                >
                                    <BookOpen className="w-4 h-4 text-emerald-400" />
                                    Browse Courses
                                </Link>

                                {/* ── Logout button — আগে ছিল Link to /login, এখন handleLogout ── */}
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-500/10 transition-colors text-red-400 hover:text-red-300 text-sm"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </div>
                        </div>

                        {/* Premium Card */}
                        <div className="bg-gradient-to-br from-amber-50 to-yellow-100 border border-amber-200 p-6 rounded-2xl">
                            <Award className="w-8 h-8 text-amber-500 mb-3" />
                            <p className="font-bold text-amber-900 text-sm">Upgrade to Premium</p>
                            <p className="text-amber-800 text-xs mt-1 mb-4">Get unlimited access to all courses.</p>
                            <button className="btn btn-sm w-full bg-amber-500 hover:bg-amber-600 border-none text-white normal-case">
                                Upgrade Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;