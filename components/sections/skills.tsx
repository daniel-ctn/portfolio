"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Code2, Blocks, Wrench, GraduationCap } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    color: "primary",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "TailwindCSS",
      "Framer Motion",
      "Vue.js",
      "HTML5",
      "CSS3",
      "SCSS",
    ],
  },
  {
    title: "Web3",
    icon: Blocks,
    color: "secondary",
    skills: [
      "Web3.js",
      "Ethers.js",
      "wagmi",
      "RainbowKit",
      "Wallet Integration",
      "Smart Contracts",
      "DeFi Protocols",
      "NFT Standards",
      "IPFS",
    ],
  },
  {
    title: "Tools & Libraries",
    icon: Wrench,
    color: "accent",
    skills: [
      "Git",
      "GitHub Actions",
      "TanStack Query",
      "Redux",
      "Zustand",
      "GraphQL",
      "REST APIs",
      "Jest",
      "Cypress",
      "Vercel",
      "Figma",
    ],
  },
  {
    title: "Currently Learning",
    icon: GraduationCap,
    color: "muted",
    skills: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "AWS",
      "Docker",
      "AI/ML APIs",
      "Python",
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Expertise"
          subtitle="Technologies I work with and areas I'm actively developing"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
            >
              <Card variant="gradient" className="h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      category.color === "primary"
                        ? "bg-primary/20"
                        : category.color === "secondary"
                        ? "bg-secondary/20"
                        : category.color === "accent"
                        ? "bg-accent/20"
                        : "bg-muted/20"
                    }`}
                  >
                    <category.icon
                      className={`w-5 h-5 ${
                        category.color === "primary"
                          ? "text-primary"
                          : category.color === "secondary"
                          ? "text-secondary"
                          : category.color === "accent"
                          ? "text-accent"
                          : "text-muted"
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-bold ${
                      category.color === "primary"
                        ? "text-primary"
                        : category.color === "secondary"
                        ? "text-secondary"
                        : category.color === "accent"
                        ? "text-accent"
                        : "text-muted"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      className="tech-tag"
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
