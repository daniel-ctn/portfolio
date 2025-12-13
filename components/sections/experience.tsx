"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Web3 Platform",
    location: "Remote",
    period: "2021 - Present",
    description:
      "Leading frontend development for a comprehensive Web3 ecosystem with multiple interconnected products. Building decentralized applications, implementing wallet integrations, and creating seamless user experiences for blockchain interactions.",
    highlights: [
      "Architected frontend for 5+ interconnected dApps",
      "Implemented complex wallet connection flows",
      "Reduced bundle size by 40% through optimization",
      "Led a team of 4 frontend developers",
    ],
    technologies: ["React", "TypeScript", "Web3.js", "TailwindCSS", "GraphQL"],
    current: true,
  },
  {
    title: "Frontend Developer",
    company: "Tech Startup",
    location: "Ho Chi Minh City",
    period: "2018 - 2021",
    description:
      "Developed and maintained multiple client-facing web applications. Collaborated with designers and backend teams to deliver pixel-perfect, responsive interfaces.",
    highlights: [
      "Built 10+ production applications from scratch",
      "Introduced component library reducing dev time by 30%",
      "Mentored junior developers",
      "Improved performance metrics by 50%",
    ],
    technologies: ["React", "Vue.js", "Redux", "SCSS", "REST APIs"],
    current: false,
  },
  {
    title: "Junior Frontend Developer",
    company: "Digital Agency",
    location: "Ho Chi Minh City",
    period: "2015 - 2018",
    description:
      "Started my professional journey building websites and web applications for various clients. Learned the fundamentals of frontend development and best practices.",
    highlights: [
      "Delivered 20+ client projects",
      "Learned responsive design patterns",
      "Collaborated with cross-functional teams",
      "Developed strong JavaScript fundamentals",
    ],
    technologies: ["JavaScript", "jQuery", "HTML5", "CSS3", "Bootstrap"],
    current: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 },
  },
};

export function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey building exceptional web experiences"
        />

        <motion.div
          className="relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-purple-500 to-transparent transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              variants={itemVariants}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary transform -translate-x-1/2 md:-translate-x-1/2 mt-8 z-10">
                {exp.current && (
                  <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-50" />
                )}
              </div>

              {/* Content */}
              <div
                className={`flex-1 pl-8 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-16" : "md:pl-16"
                }`}
              >
                <Card variant="gradient" className="relative overflow-hidden">
                  {exp.current && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 text-xs font-medium bg-secondary/20 text-secondary rounded-full">
                        Current
                      </span>
                    </div>
                  )}

                  <div className="space-y-4">
                    {/* Header */}
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-start gap-2 text-sm text-muted"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
