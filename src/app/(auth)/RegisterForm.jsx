"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signUp } from "@/lib/auth-client";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";

const RegisterForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const name = e.target.name.value;
        const email = e.target.email.value;
        const image = e.target.photoUrl.value;
        const password = e.target.password.value;

        const { error } = await signUp.email({
            name,
            email,
            password,
            image,
            callbackURL: "/login",
        });

        if (error) {
            //  Email already exists / weak password 
            toast.error(error.message || "Registration failed. Please try again.", {
                position: "top-right",
                autoClose: 4000,
                theme: "dark",
            });
        } else {
            //  Signup success
            toast.success("Sign up successful! Please login. 🎉", {
                position: "top-right",
                autoClose: 2500,
                theme: "dark",
            });
            setTimeout(() => router.push("/login"), 1000);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-[#123e41] rounded-2xl shadow-2xl p-8 border border-white/10">

                    {/* Title */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-white tracking-tight">Create account</h1>
                        <p className="text-white/50 mt-2 text-sm">Join SkillSphere and start learning</p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="label-text text-white/70 text-sm">Full Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="John Doe"
                                required
                                className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="label-text text-white/70 text-sm">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="you@example.com"
                                required
                                className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="label-text text-white/70 text-sm">Photo URL</span>
                            </label>
                            <input
                                type="url"
                                name="photoUrl"
                                placeholder="https://example.com/photo.jpg"
                                className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none"
                            />
                        </div>

                        <div className="form-control">
                            <label className="label pb-1">
                                <span className="label-text text-white/70 text-sm">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                required
                                minLength={8}
                                className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn w-full bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case mt-2"
                        >
                            {loading ? <span className="loading loading-spinner loading-sm" /> : "Register"}
                        </button>
                    </form>

                    <div className="divider text-white/30 text-xs my-6">OR</div>

                    <SocialLogin />

                    <p className="text-center text-white/50 text-sm mt-6">
                        Already have an account?{" "}
                        <Link href="/login" className="text-emerald-400 hover:text-emerald-300 font-medium">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
