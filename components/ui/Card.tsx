import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    hoverable?: boolean;
}

export function Card({ children, className, hoverable = true, ...props }: CardProps) {
    return (
        <div
            className={cn(
                "relative rounded-lg border border-border bg-background p-6 transition-all duration-300",
                hoverable && "hover:border-accent/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.03)]",
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}
