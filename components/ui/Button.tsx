import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: LucideIcon;
    children: React.ReactNode;
    href?: string;
    target?: string;
}

export function Button({
    className,
    variant = 'primary',
    size = 'md',
    icon: Icon,
    children,
    href,
    target,
    ...props
}: ButtonProps) {
    const variants = {
        primary: "bg-accent text-background hover:bg-accent/90",
        secondary: "bg-muted/10 text-foreground hover:bg-muted/20 border border-border",
        outline: "bg-transparent border border-border text-foreground hover:bg-accent hover:text-background",
        ghost: "bg-transparent text-foreground hover:bg-muted/10",
    };

    const sizes = {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5",
        lg: "px-8 py-3.5 text-lg",
    };

    const commonClasses = cn(
        "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
    );

    if (href) {
        return (
            <Link href={href} className={commonClasses} target={target}>
                {children}
                {Icon && <Icon className="ml-2 h-4 w-4" />}
            </Link>
        );
    }

    return (
        <button className={commonClasses} {...props}>
            {children}
            {Icon && <Icon className="ml-2 h-4 w-4" />}
        </button>
    );
}
