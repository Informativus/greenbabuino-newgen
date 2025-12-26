"use client";

import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export function About() {
    return (
        <Section id="about" className="bg-[#0c0c0c]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <h2 className="text-3xl font-bold mb-8">
                        Решение задач через <span className="text-gradient">инженерный подход</span>
                    </h2>
                    <div className="space-y-6 text-muted leading-relaxed">
                        <p>
                            Я backend-разработчик с опытом работы над Node.js-проектами и изучением Go. Моя практика включает создание API,
                            разработку и поддержку серверной архитектуры, работу с базами данных и высоконагруженными системами.
                        </p>
                        <p>
                            Мой подход основан на философии &quot;Engineering First&quot;: начинать с четких требований,
                            выбирать правильные инструменты для задачи и создавать стабильные, поддерживаемые решения.
                            Я считаю, что хороший софт &mdash; это софт, который просто работает.
                        </p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Backend-разработке на Node.js и Go</li>
                            <li>Проектировании надежных и масштабируемых API</li>
                            <li>High-load системах и оптимизации производительности</li>
                            <li>Архитектуре распределенных сервисов и административных решений</li>
                        </ul>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Card className="flex flex-col justify-between h-40">
                        <span className="text-4xl font-bold text-accent">3+</span>
                        <span className="text-sm text-muted">Года опыта разработки</span>
                    </Card>
                    <Card className="flex flex-col justify-between h-40">
                        <span className="text-4xl font-bold text-accent">7+</span>
                        <span className="text-sm text-muted">Проектов (backend, tools)</span>
                    </Card>
                </div>
            </div>
        </Section>
    );
}
