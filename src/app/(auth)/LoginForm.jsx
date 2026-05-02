"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "@/lib/auth-client";
import { toast } from "react-toastify";
import SocialLogin from "./SocialLogin";

const LoginForm = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const email = e.target.email.value;
        const password = e.target.password.value;

        const { error } = await signIn.email({
            email,
            password,
            callbackURL: callbackUrl,
        });

        if (error) {
            //  Error — wrong email / password / not registered
            toast.error(error.message || "Invalid email or password.", {
                position: "top-right",
                autoClose: 4000,
                theme: "dark",
            });
        } else {
            //  Success
            toast.success("Login successful! Welcome back 🎉", {
                position: "top-right",
                autoClose: 2000,
                theme: "dark",
            });
            setTimeout(() => {
                router.push(callbackUrl);
                router.refresh();
            }, 800);
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="bg-[#123e41] rounded-2xl shadow-2xl p-8 border border-white/10">

                    {/* Title */}
                    <div className="mb-8 text-center">
                        <h1 className="text-3xl font-bold text-white tracking-tight">Welcome back</h1>
                        <p className="text-white/50 mt-2 text-sm">Sign in to continue learning</p>
                    </div>

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

                    <div className="divider text-white/30 text-xs my-6">OR</div>

                    <SocialLogin />

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