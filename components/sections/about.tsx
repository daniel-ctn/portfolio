"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Code2, Rocket, Brain, Heart } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Expert",
    description:
      "Nearly 9 years building performant, accessible, and beautiful web applications with modern technologies.",
  },
  {
    icon: Rocket,
    title: "Web3 Pioneer",
    description:
      "3+ years architecting decentralized applications and ecosystem platforms in the blockchain space.",
  },
  {
    icon: Brain,
    title: "AI Enthusiast",
    description:
      "Passionate about AI-powered development. Building AI-first projects and integrating AI into daily workflows.",
  },
  {
    icon: Heart,
    title: "Lifelong Learner",
    description:
      "Continuously expanding skills into backend, databases, and cloud technologies to become a well-rounded engineer.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="A passionate developer who loves creating impactful digital experiences"
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6 text-lg text-muted leading-relaxed">
              <p>
                I&apos;m{" "}
                <span className="text-foreground font-semibold">
                  Daniel Nguyen
                </span>
                , a Senior Frontend Developer with a passion for building
                exceptional digital experiences. Over the past{" "}
                <span className="text-primary font-semibold">9 years</span>,
                I&apos;ve had the privilege of working on diverse projects that
                have shaped my expertise and perspective.
              </p>
              <p>
                In the last{" "}
                <span className="text-secondary font-semibold">3 years</span>,
                I&apos;ve been deeply immersed in the{" "}
                <span className="text-primary">Web3 ecosystem</span>, working on
                a platform that connects multiple products into a cohesive
                experience. This journey has taught me the importance of
                building scalable, user-centric applications.
              </p>
              <p>
                Beyond frontend, I&apos;m actively expanding my horizons into{" "}
                <span className="text-foreground">backend development</span>,{" "}
                <span className="text-foreground">database architecture</span>,
                and <span className="text-foreground">cloud technologies</span>.
                I believe in being a well-rounded engineer who can tackle
                challenges across the stack.
              </p>
              <p>
                I&apos;m particularly excited about{" "}
                <span className="text-accent font-semibold">AI</span> and use it
                daily to enhance my productivity. I have plans to build AI-first
                projects that push the boundaries of what&apos;s possible.
              </p>
            </div>
          </motion.div>

          {/* Right side - Highlight cards */}
          <motion.div
            className="grid gap-4 sm:grid-cols-2"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((item) => (
              <motion.div key={item.title} variants={itemVariants}>
                <Card variant="gradient" className="h-full">
                  <div className="flex flex-col gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
