"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
    front: React.ReactNode;
    back: React.ReactNode;
    className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
    const [isFlipped, setIsFlipped] = useState(false);
    const [isMobile, setIsMobile] = useState(false);


    useEffect(() => {
        const mediaQuery = window.matchMedia("(hover: none)");


        // eslint-disable-next-line
        setIsMobile(mediaQuery.matches);


        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, []);

    const handleMouseEnter = () => {
        if (!isMobile) setIsFlipped(true);
    };

    const handleMouseLeave = () => {
        if (!isMobile) setIsFlipped(false);
    };

    const handleClick = () => {

        setIsFlipped(!isFlipped);
    };

    return (
        <div
            className={cn("relative h-64 w-full cursor-pointer preserve-3d perspective-1000", className)}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
        >
            <motion.div
                className="relative h-full w-full rounded-xl transform-style-3d"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformStyle: "preserve-3d" }}
            >

                <div
                    className="absolute h-full w-full backface-hidden rounded-xl border border-border bg-background p-6 flex flex-col items-center justify-center text-center shadow-sm"
                    style={{ backfaceVisibility: 'hidden' }}
                >
                    {front}
                </div>


                <div
                    className="absolute h-full w-full backface-hidden rounded-xl border border-accent/20 bg-muted/5 p-6 flex flex-col items-center justify-center text-center shadow-lg transform-rotate-y-180"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                    {back}
                </div>
            </motion.div>
        </div>
    );
}
