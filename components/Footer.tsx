import Link from "next/link";
import { Github, Send } from "lucide-react";
import { Container } from "./ui/Container";
import { cn } from "@/lib/utils";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/Informativus", icon: Github },
    { name: "Telegram", href: "https://t.me/fixtables", icon: Send },
    { name: "HH.ru", href: "https://hh.ru/resume/ec9d610dff0d89b7a40039ed1f304875743277", icon: (props: { className?: string }) => <span {...props} className={cn("font-bold text-xs flex items-center justify-center border border-current rounded-sm", props.className)}>hh</span> },
];

export function Footer() {
    return (
        <footer className="border-t border-border py-12 md:py-16 bg-background">
            <Container>
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-bold tracking-tight">
                            Greenbabuino
                        </h3>
                        <p className="mt-2 text-sm text-muted max-w-xs">
                            Создание надежных систем и масштабируемых архитектур с инженерным подходом.
                        </p>
                    </div>

                    <div className="flex items-center space-x-6">
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-muted hover:text-foreground transition-colors"
                                aria-label={link.name}
                            >
                                <link.icon className="h-5 w-5" />
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-border/50 text-center text-xs text-muted">
                    <p>© {new Date().getFullYear()} Все права защищены. Разработано для производительности.</p>
                </div>
            </Container>
        </footer>
    );
}
