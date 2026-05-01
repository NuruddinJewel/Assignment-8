'use client'
import React from 'react';

const LoadingPage = () => {
    return (

        <div className="flex h-[85vh] w-full flex-col items-center justify-center bg-[#082a28] gap-6 relative overflow-hidden">


            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-62.5 h-62.5 bg-emerald-500/10 rounded-full blur-[100px]"></div>
            </div>

            {/* Spinner Container */}
            <div className="relative flex flex-col items-center gap-4 z-10">
                {/* DaisyUI Loading Spinner with Emerald Color */}
                <span className="loading loading-spinner loading-lg text-emerald-500 scale-125"></span>

                {/* Minimal Loading Text */}
                <div className="flex flex-col items-center">
                    <p className="text-white font-bold text-lg tracking-widest uppercase opacity-80 animate-pulse">
                        Skill<span className="text-emerald-500">Sphere</span>
                    </p>
                    <span className="text-slate-400 text-[10px] uppercase tracking-[0.3em] mt-1">
                        Please Wait...
                    </span>
                </div>
            </div>

            {/* Glassy Border Element (Optional) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-emerald-500 animate-[loading_2s_ease-in-out_infinite] w-1/2"></div>
            </div>

            <style jsx>{`
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(200%); }
                }
            `}</style>
        </div>
    );
};

export default LoadingPage;