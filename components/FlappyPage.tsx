import React from 'react';
import { SuperFlappy } from 'super-flappy-react';


const FlappyPage: React.FC = () => {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-slate-900 overflow-hidden relative">
            <div className="absolute top-0 left-0 w-full p-8 z-10">
                <h1 className="text-4xl font-serif font-bold text-white mb-2">
                    Trezzo <span className="text-gold-500 italic">Play</span>
                </h1>
                <p className="text-slate-400 text-sm uppercase tracking-widest">
                    Executive Downtime
                </p>
            </div>

            <div className="w-full h-full flex items-center justify-center pt-20">
                <SuperFlappy width={800} height={600} apiKey="" className="border-4 border-gold-500/20 rounded-2xl shadow-2xl" />
            </div>
        </div>
    );
};

export default FlappyPage;
