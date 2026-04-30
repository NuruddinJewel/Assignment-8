"use client"
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { error } = await signIn.email({
            email,
            password,
            callbackURL: "/",
        });

        if (error) {
            setError(error.message || "Invalid email or password.");
        } else {
            router.push("/");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center px-4">
            <div className="w-full max-w-md">

                {/* Card */}
                <div className="bg-[#123e41] rounded-2xl shadow-2xl p-8 border border-white/10">

                    {/* Title */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back</h1>
                        <p className="text-white/50 mt-2 text-sm">Sign in to continue learning</p>
                    </div>

                    {/* Error Toast */}
                    {error && (
                        <div className="alert alert-error mb-6 py-3 text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{error}</span>
                        </div>
                    )}

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-4">
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
                                <span className="label-text text-white/70 text-sm">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                placeholder="••••••••"
                                required
                                className="input input-bordered w-full bg-white/5 border-white/10 text-white placeholder-white/30 focus:border-emerald-500 focus:outline-none"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="btn w-full bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case mt-2"
                        >
                            {loading ? <span className="loading loading-spinner loading-sm" /> : "Login"}
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="divider text-white/30 text-xs my-6">OR</div>

                    {/* Google Login */}
                    <SocialLogin />

                    {/* Register Link */}
                    <p className="text-center text-white/50 text-sm mt-6">
                        Don&apos;t have an account?{" "}
                        <Link href="/register" className="text-emerald-400 hover:text-emerald-300 font-medium">
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;