"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import NavLink from './NavLink';
import { Search } from 'lucide-react';
import { useSession, signOut } from "@/lib/auth-client";

const Navbar = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();

    const handleLogout = async () => {
        await signOut({
            fetchOptions: {
                onSuccess: () => {
                    router.push("/login");
                },
            },
        });
    };

    return (
        <div className="navbar bg-[#123e41] text-white px-4 lg:px-8 shadow-md">

            {/* Left: Logo and Brand Name */}
            <div className="flex-1 flex items-center">
                <Link href="/" className="btn btn-ghost text-xl font-bold tracking-tight hover:text-emerald-400 transition-colors duration-200">
                    SkillSphere
                </Link>

                {/* Desktop Menu Links */}
                <div className="hidden lg:flex ml-4">
                    <ul className="menu menu-horizontal px-1 gap-2">
                        <li><NavLink href="/">Home</NavLink></li>
                        <li><NavLink href="/courses">Courses</NavLink></li>
                        {session && <li><NavLink href="/profile">My Profile</NavLink></li>}
                    </ul>
                </div>
            </div>

            {/* Right: Auth & Profile Section */}
            <div className="flex-none flex items-center gap-4">

                {/* Search Input */}
                <div className="hidden sm:flex items-center bg-white/10 rounded-lg px-3 py-1.5 gap-2 focus-within:bg-white/20 transition-colors duration-200">
                    <Search className="h-4 w-4 text-white/60 shrink-0" />
                    <input
                        type="text"
                        placeholder="Search courses..."
                        className="bg-transparent outline-none text-sm text-white placeholder-white/50 w-40"
                    />
                </div>

                {/* Auth Logic: Loading থাকলে কিছু দেখাবে না অথবা স্পিনার দেখাতে পারেন */}
                {!isPending && (
                    <>
                        {session ? (
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handleLogout}
                                    className="btn btn-ghost btn-sm text-gray-300 normal-case"
                                >
                                    Logout
                                </button>

                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-emerald-500/30">
                                        <div className="w-10 h-10 rounded-full relative overflow-hidden bg-emerald-900/50">
                                            <Image
                                                src={session.user.image || "https://wallpapercave.com/wp/DZ9fPjm.jpg"}
                                                alt="User Avatar"
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="menu menu-sm dropdown-content bg-[#123e41] rounded-box z-1 mt-3 w-52 p-2 shadow-2xl border border-white/10">
                                        <li className="px-4 py-2 text-xs text-white/50 border-b border-white/5 mb-1">
                                            {session.user.email}
                                        </li>
                                        <li>
                                            <Link href="/profile" className="justify-between">
                                                Profile <span className="badge badge-success badge-outline">New</span>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/settings">Settings</Link>
                                        </li>
                                        <li>
                                            <button onClick={handleLogout} className="text-red-400 w-full text-left">
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center gap-2">
                                <Link
                                    href="/login"
                                    className="btn btn-ghost btn-sm normal-case"
                                >
                                    Login
                                </Link>
                                <Link
                                    href="/register"
                                    className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case px-6"
                                >
                                    Register
                                </Link>
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Navbar;