"use client";
import { useState } from "react";
import { useSession } from "@/lib/auth-client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { User, ArrowLeft, Camera, Loader2 } from "lucide-react";

const EditProfilePage = () => {
    const { data: session, isPending } = useSession();
    const router = useRouter();
    const user = session?.user;

    const [name, setName] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [previewImage, setPreviewImage] = useState("");

    // session load 
    if (!isPending && user && name === "" && imageUrl === "") {
        setName(user.name || "");
        setImageUrl(user.image || "");
        setPreviewImage(user.image || "");
    }

    const handleImageChange = (e) => {
        const url = e.target.value;
        setImageUrl(url);
        setPreviewImage(url);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await authClient.updateUser({
                name: name,
                image: imageUrl,
            });

            toast.success("Profile updated successfully! ✨", {
                position: "top-right",
                autoClose: 2500,
                theme: "dark",
            });
            router.push("/profile");
            router.refresh();
        } catch (error) {
            toast.error("Update failed. Please try again.", {
                position: "top-right",
                autoClose: 3000,
                theme: "dark",
            });
        } finally {
            setIsLoading(false);
        }
    };

    if (isPending) {
        return (
            <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-emerald-400" />
            </div>
        );
    }

    if (!user) {
        router.push("/login");
        return null;
    }

    return (
        <div className="min-h-screen bg-[#0d2b2e] flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-md">

                {/* Back button */}
                <Link
                    href="/profile"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm mb-8 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> Back to Profile
                </Link>

                <div className="bg-[#123e41] rounded-2xl p-8 border border-white/10">
                    <h1 className="text-white text-2xl font-bold mb-8">Edit Profile</h1>

                    {/* Avatar Preview */}
                    <div className="flex justify-center mb-8">
                        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-emerald-500/50">
                            {previewImage ? (
                                <Image
                                    src={previewImage}
                                    alt="Preview"
                                    fill
                                    className="object-cover"
                                    unoptimized
                                    onError={() => setPreviewImage("")}
                                />
                            ) : (
                                <div className="w-full h-full bg-emerald-800 flex items-center justify-center">
                                    <User className="w-10 h-10 text-emerald-300" />
                                </div>
                            )}
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <Camera className="w-5 h-5 text-white/70" />
                            </div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white/50 text-xs uppercase tracking-wider">
                                Full Name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your full name"
                                required
                                className="w-full bg-[#0d2b2e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 transition-colors"
                            />
                        </div>

                        {/* Image URL Field */}
                        <div className="flex flex-col gap-2">
                            <label className="text-white/50 text-xs uppercase tracking-wider">
                                Profile Image URL
                            </label>
                            <input
                                type="url"
                                value={imageUrl}
                                onChange={handleImageChange}
                                placeholder="https://example.com/your-photo.jpg"
                                className="w-full bg-[#0d2b2e] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-emerald-500 transition-colors"
                            />
                            <p className="text-white/30 text-xs">
                                Paste any public image URL to update your avatar
                            </p>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full btn bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case mt-2 disabled:opacity-60"
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <Loader2 className="w-4 h-4 animate-spin" /> Updating...
                                </span>
                            ) : (
                                "Update Information"
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfilePage;