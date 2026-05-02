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

//2
// "use client";

// import { useState } from "react";
// import { useRouter, useSearchParams } from "next/navigation";
// import Link from "next/link";
// import { toast } from "react-toastify";
// import { signIn } from "@/lib/auth-client"; // better-auth client
// import { Eye, EyeOff, LogIn } from "lucide-react";

// export default function LoginPage() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   // If middleware saved a callbackUrl, go back there after login
//   const callbackUrl = searchParams.get("callbackUrl") || "/";

//   const [formData, setFormData] = useState({ email: "", password: "" });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     await signIn.email(
//       {
//         email: formData.email,
//         password: formData.password,
//       },
//       {
//         onSuccess: () => {
//           toast.success("Login successful! Welcome back 🎉", {
//             position: "top-right",
//             autoClose: 2500,
//             theme: "dark",
//           });
//           // Small delay so user sees the toast before navigating
//           setTimeout(() => router.push(callbackUrl), 800);
//         },
//         onError: (ctx) => {
//           // better-auth passes error details in ctx.error
//           const msg =
//             ctx?.error?.message ||
//             "Invalid email or password. Please try again.";
//           toast.error(msg, {
//             position: "top-right",
//             autoClose: 4000,
//             theme: "dark",
//           });
//           setLoading(false);
//         },
//       }
//     );

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center px-4">
//       <div className="w-full max-w-md">
//         {/* Card */}
//         <div className="bg-[#123e41] border border-white/10 rounded-2xl p-8 shadow-2xl">
//           {/* Header */}
//           <div className="mb-8 text-center">
//             <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-500/20 rounded-full mb-4">
//               <LogIn className="w-7 h-7 text-emerald-400" />
//             </div>
//             <h1 className="text-3xl font-extrabold text-white">
//               Welcome <span className="text-emerald-400">Back</span>
//             </h1>
//             <p className="text-white/40 text-sm mt-1">
//               Login to continue learning
//             </p>
//           </div>

//           <form onSubmit={handleLogin} className="space-y-5">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-white/70 mb-1.5">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 required
//                 placeholder="you@example.com"
//                 className="w-full bg-white/5 border border-white/10 focus:border-emerald-500 text-white placeholder-white/20 rounded-xl px-4 py-3 outline-none transition-colors text-sm"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="block text-sm font-medium text-white/70 mb-1.5">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   required
//                   placeholder="••••••••"
//                   className="w-full bg-white/5 border border-white/10 focus:border-emerald-500 text-white placeholder-white/20 rounded-xl px-4 py-3 pr-11 outline-none transition-colors text-sm"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword((p) => !p)}
//                   className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/60 transition-colors"
//                 >
//                   {showPassword ? (
//                     <EyeOff className="w-4 h-4" />
//                   ) : (
//                     <Eye className="w-4 h-4" />
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="btn w-full bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white border-none h-12 text-base font-bold transition-all"
//             >
//               {loading ? (
//                 <span className="loading loading-spinner loading-sm" />
//               ) : (
//                 "Login"
//               )}
//             </button>
//           </form>

//           <p className="text-center text-white/40 text-sm mt-6">
//             Don&apos;t have an account?{" "}
//             <Link
//               href="/register"
//               className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
//             >
//               Sign Up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }