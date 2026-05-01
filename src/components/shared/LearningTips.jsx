import React from 'react';
import { Lightbulb, CheckCircle2, Calendar, Code, BookOpen, Trophy } from 'lucide-react';

const LearningTips = () => {
    const tips = [
        {
            icon: <Calendar className="text-emerald-400" size={20} />,
            title: "Daily Consistency",
            desc: "Dedicate at least 1 hour every day. Big achievements are possible through small, consistent steps."
        },
        {
            icon: <BookOpen className="text-blue-400" size={20} />,
            title: "Module Completion",
            desc: "Finish one module thoroughly before moving to the next. Avoid rushing through the content."
        },
        {
            icon: <Code className="text-yellow-400" size={20} />,
            title: "Hands-on Practice",
            desc: "Don't just watch the videos; code or practice simultaneously to reinforce your learning."
        },
        {
            icon: <CheckCircle2 className="text-emerald-500" size={20} />,
            title: "Active Recalling",
            desc: "Reflect on what you've learned throughout the day or try explaining the concepts to someone else."
        }
    ];

    return (
        <>
            {/* Modal Trigger Button in Navbar Style */}
            <button
                onClick={() => document.getElementById('learning_tips_modal').showModal()}
                className="btn btn-ghost btn-sm text-emerald-400 flex items-center gap-1 hover:bg-white/10"
            >
                <Lightbulb size={16} />
                <span className="hidden md:inline">Learning Tips</span>
            </button>

            {/* Modal Structure */}
            <dialog id="learning_tips_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box bg-[#123e41] border border-emerald-500/30 text-white">
                    <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
                        <Trophy className="text-yellow-400" size={28} />
                        <div>
                            <h3 className="font-bold text-xl">Student Success Guide</h3>
                            <p className="text-xs text-white/50">Tips to complete your course effectively</p>
                        </div>
                    </div>

                    <div className="grid gap-4">
                        {tips.map((tip, index) => (
                            <div key={index} className="flex gap-4 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 transition-all">
                                <div className="mt-1">{tip.icon}</div>
                                <div>
                                    <h4 className="font-semibold text-emerald-400">{tip.title}</h4>
                                    <p className="text-sm text-slate-300 leading-relaxed">{tip.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="modal-action mt-8">
                        <form method="dialog">
                            <button className="btn btn-sm bg-emerald-600 hover:bg-emerald-700 text-white border-none">Got It!</button>
                        </form>
                    </div>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default LearningTips;