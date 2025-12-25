"use client";

import { Section } from "@/components/ui/Section";


export function Contact() {
    return (
        <Section id="contact">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-bold mb-4 text-gradient">Связаться со мной</h2>
                <p className="text-muted mb-12 max-w-2xl mx-auto">
                    Открыт к новым возможностям и интересным инженерным вызовам.
                    Пишите в Telegram или на почту — я всегда на связи.
                </p>

                <div className="flex flex-col items-center space-y-8">
                    <div className="text-center">
                        <p className="text-xl font-medium mb-2">ivanpopov123321123@gmail.com</p>
                        <p className="text-muted">Россия / Москва</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            { name: "HH.ru", href: "https://hh.ru/resume/ec9d610dff0d89b7a40039ed1f304875743277" },
                            { name: "GitHub", href: "https://github.com/Informativus" },
                            { name: "Telegram", href: "https://t.me/fixtables" }
                        ].map((social) => (
                            <a
                                key={social.name}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-medium text-accent hover:underline transition-colors"
                            >
                                {social.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );

}
