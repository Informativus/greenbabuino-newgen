"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ExternalLink, Github } from "lucide-react";


interface Project {
    title: string;
    description: string;
    tags: string[];
    links?: {
        external?: string;
        github?: string;
    };
    note?: string;
}

const projects: Project[] = [
    {
        title: "Проект AXIOMA",
        description: "Высоконагруженный проект для компании Росатом, предназначенный для управления и контроля рабочего времени сотрудников, а также учета инструментов: выдача, возврат и другие административные процессы.",
        tags: ["NodeJS", "Docker", "PostgreSQL", "Redis"],
        links: { external: "https://www.tadviser.ru/index.php/Продукт:Интерпроком:_Аксиома" },
    },
    {
        title: "Secure VPN Solution",
        description: "Разработка и поддержка высоконадежного VPN на основе VLESS и REALITY для обхода сетевых ограничений и безопасного подключения сотрудников. Обеспечивает шифрование трафика и стабильную работу даже в условиях строгих блокировок.",
        tags: ["VLESS", "REALITY", "TelegramAPI", "Go", "Networking", "Encryption"],
        note: "Исходный код проекта закрыт.",
    },
    {
        title: "Сайт лендинг для продажи товаров фирмы Magssory",
        description: "Полный цикл разработки лендинга: проектирование архитектуры, реализация frontend и backend-частей, настройка CI/CD и деплой готового решения в Kubernetes. Проект реализован с нуля до production-окружения с использованием современных веб-технологий.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Kubernetes", "CI/CD", "GO"],
        links: { external: "https://phonifi.ru/" },
    },
];


export function Projects() {
    return (
        <Section id="projects" className="bg-[#0c0c0c]">
            <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                <div>
                    <h2 className="text-3xl font-bold mb-4 text-gradient">Избранные Проекты</h2>
                    <p className="text-muted max-w-2xl">
                        Примеры работ, демонстрирующие решение сложных инженерных задач и архитектурный подход.
                    </p>
                </div>
                <Button variant="outline">Все Проекты</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, i) => (
                    <Card key={i} className="flex flex-col h-full group">
                        <h3 className="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                            {project.title}
                        </h3>
                        <p className="text-muted text-sm mb-6 flex-grow leading-relaxed">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tags.map((tag, j) => (
                                <span
                                    key={j}
                                    className="px-2 py-1 text-[10px] uppercase tracking-wider font-bold bg-muted/10 border border-border rounded"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <div className="mt-auto">
                            <div className="flex items-center space-x-4">
                                {project.links?.github && (
                                    <Button variant="ghost" size="sm" icon={Github} href={project.links.github} target="_blank">
                                        Code
                                    </Button>
                                )}
                                {project.links?.external && (
                                    <Button variant="ghost" size="sm" icon={ExternalLink} href={project.links.external} target="_blank">
                                        Demo
                                    </Button>
                                )}
                            </div>
                            {project.note && (
                                <p className="text-xs text-muted/60 mt-4 italic">
                                    * {project.note}
                                </p>
                            )}
                        </div>
                    </Card>
                ))}
            </div>
        </Section>
    );
}
