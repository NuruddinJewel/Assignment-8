"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ href, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link
            href={href}
            className={`relative px-1 py-1 transition-colors duration-200 text-sm font-medium
                after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full
                after:origin-left after:scale-x-0 after:bg-emerald-400 after:transition-transform after:duration-200
                hover:text-emerald-400 hover:after:scale-x-100
                ${isActive
                    ? 'text-emerald-400 after:scale-x-100'
                    : 'text-white/80'
                }`}
        >
            {children}
        </Link>
    );
};

export default NavLink;

