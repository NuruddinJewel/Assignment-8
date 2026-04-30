import Link from "next/link";
import { Clock, Star, User, Tag } from "lucide-react";
import Image from "next/image";

const levelColor = {
    Beginner: "badge-success",
    Intermediate: "badge-warning",
    Advanced: "badge-error",
};

const CourseCard = ({ course }) => {

    const {
        id,
        title,
        instructor,
        duration,
        rating,
        level,
        short_description,
        image,
        category,
        price
    } = course;

    const imageSrc = image && image.trim() !== ""
        ? image
        : `https://placehold.co/400x200/123e41/ffffff?text=${encodeURIComponent(category || "Course")}`;

    return (
        <div className="card bg-[#123e41] border border-white/10 shadow-lg hover:shadow-emerald-900/30 hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden flex flex-col h-full">

            {/* Image Section */}
            <figure className="relative h-44 w-full bg-[#0d2b2e] shrink-0">
                <Image
                    src={imageSrc}
                    alt={title || "Course Image"}
                    fill
                    unoptimized
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute top-3 left-3 z-10 badge badge-sm bg-emerald-600 border-none text-white">
                    {category}
                </span>
            </figure>

            <div className="card-body p-5 flex flex-col justify-between gap-3">
                <div>
                    {/* Level & Rating */}
                    <div className="flex items-center justify-between mb-2">
                        <span className={`badge badge-sm badge-outline ${levelColor[level] || "badge-ghost"}`}>
                            {level}
                        </span>
                        <span className="flex items-center gap-1 text-yellow-400 text-sm font-semibold">
                            <Star className="w-3.5 h-3.5 fill-yellow-400" />
                            {rating}
                        </span>
                    </div>

                    {/* Title */}
                    <h2 className="text-white font-bold text-lg leading-tight line-clamp-2 mb-1">
                        {title}
                    </h2>

                    {/* Short Description */}
                    <p className="text-white/60 text-sm line-clamp-2 italic mb-3">
                        {short_description}
                    </p>

                    {/* Instructor & Duration */}
                    <div className="flex flex-col gap-2 text-xs text-white/40 mb-4">
                        <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5">
                                <User className="w-3.5 h-3.5" /> {instructor}
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5" /> {duration}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Price & Action Button */}
                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between gap-4">
                    <div className="flex flex-col">
                        <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Price</span>
                        <span className="text-emerald-400 font-extrabold text-xl">
                            ${price}
                        </span>
                    </div>
                    <Link
                        href={`/courses/${id}`}
                        className="btn btn-sm px-5 bg-emerald-600 hover:bg-emerald-700 border-none text-white normal-case"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;