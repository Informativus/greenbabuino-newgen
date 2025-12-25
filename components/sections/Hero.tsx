"use client";

import { motion } from "framer-motion";
import { ArrowRight, Terminal, Cpu, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center pt-32 overflow-hidden">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45%_45%_at_50%_50%,var(--background)_0%,var(--muted)_100%)] opacity-20 dark:bg-[radial-gradient(45%_45%_at_50%_50%,#171717_0%,#0a0a0a_100%)] dark:opacity-100" />
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            <Container>
                <div className="max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center space-x-2 mb-6"
                    >
                        <span className="h-px w-8 bg-accent" />
                        <span className="text-sm font-mono tracking-widest uppercase text-muted">
                            Middle Backend Developer
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold tracking-tight mb-8"
                    >
                        Инженерные <span className="text-gradient">Архитектуры</span> <br />
                        для Масштабируемых Систем.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg md:text-xl text-muted mb-10 max-w-2xl leading-relaxed"
                    >
                        Специализируюсь на создании высокопроизводительных распределенных систем,
                        надежных API и устойчивой backend-инфраструктуры с использованием Go, Node.js
                        и современных облачных технологий. Фокус на чистоте кода и надежности.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <Button size="lg" icon={ArrowRight} href="#projects">
                            Смотреть работы
                        </Button>
                        <Button variant="secondary" size="lg" href="#contact">
                            Связаться
                        </Button>
                    </motion.div>


                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border/50"
                    >
                        {[
                            { icon: Terminal, title: "Clean Code", desc: "SOLID принципы и поддерживаемость" },
                            { icon: Cpu, title: "High Load", desc: "Оптимизация высоконагруженных систем" },
                            { icon: ShieldCheck, title: "Reliability", desc: "Отказоустойчивая архитектура" },
                        ].map((item, i) => (
                            <div key={i} className="flex items-start space-x-4">
                                <div className="p-2 glass rounded-lg">
                                    <item.icon className="h-5 w-5 text-accent" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold">{item.title}</h3>
                                    <p className="text-xs text-muted mt-1">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
