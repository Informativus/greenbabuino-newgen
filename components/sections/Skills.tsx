"use client";

import { Section } from "@/components/ui/Section";
import { FlipCard } from "@/components/ui/FlipCard";
import { Server, Database, Layers, Terminal, Code2, Globe, Cpu } from "lucide-react";

const skills = [
    {
        title: "Node.js Backend",
        icon: Server,
        description: "Разработка масштабируемых серверных приложений основанных на самописном фреймворке."
    },
    {
        title: "Go (Golang)",
        icon: Code2,
        description: "Создание высокопроизводительных микросервисов, конкуррентность, go-routines."
    },
    {
        title: "REST API",
        icon: Globe,
        description: "Проектирование чистых и понятных API, OpenAPI спецификации, версионирование."
    },
    {
        title: "Архитектура",
        icon: Layers,
        description: "Построение отказоустойчивых распределенных систем, микросервисная архитектура."
    },
    {
        title: "Базы Данных",
        icon: Database,
        description: "PostgreSQL, оптимизация запросов, миграции, транзакции. Redis для кэширования."
    },
    {
        title: "Linux & Server",
        icon: Terminal,
        description: "Настройка серверов, bash скриптинг, работа с командной строкой, основы DevOps."
    },
    {
        title: "Clean Code",
        icon: Cpu,
        description: "Следование принципам SOLID, DRY, KISS. Написание поддерживаемого и тестируемого кода."
    },
];

export function Skills() {
    return (
        <Section id="skills">
            <div className="mb-16">
                <h2 className="text-3xl font-bold mb-4 text-gradient">Навыки</h2>
                <p className="text-muted max-w-2xl">
                    Технологический стек, который я использую для решения сложных инженерных задач.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {skills.map((skill, i) => (
                    <FlipCard
                        key={i}
                        front={
                            <div className="flex flex-col items-center">
                                <div className="p-4 glass rounded-full mb-6 bg-accent/5">
                                    <skill.icon className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-bold">{skill.title}</h3>
                            </div>
                        }
                        back={
                            <div>
                                <h4 className="text-lg font-bold mb-3 text-accent">{skill.title}</h4>
                                <p className="text-sm text-muted leading-relaxed">
                                    {skill.description}
                                </p>
                            </div>
                        }
                    />
                ))}
            </div>
        </Section>
    );
}
