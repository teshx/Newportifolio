
import React from 'react';

const CornerMark: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`absolute w-4 h-4 dark:text-white/20 text-black/20 flex items-center justify-center ${className}`}>
        <div className="absolute w-full h-[1px] bg-current"></div>
        <div className="absolute h-full w-[1px] bg-current"></div>
    </div>
);

const BackgroundDecorations: React.FC = () => {
    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Corner Marks */}
            <CornerMark className="top-12 left-12" />
            <CornerMark className="top-12 right-12" />
            <CornerMark className="bottom-12 left-12" />
            <CornerMark className="bottom-12 right-12" />

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 blur-[120px] rounded-full rotate-12"></div>
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/5 dark:bg-blue-500/10 blur-[100px] rounded-full -rotate-12"></div>
        </div>
    );
};

export default BackgroundDecorations;
