"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Sparkles } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Web3 Ecosystem Platform",
    description:
      "A comprehensive decentralized platform connecting multiple products including DeFi, NFT marketplace, and DAO governance. Built with modern Web3 technologies for seamless blockchain interactions.",
    image: "/projects/web3-platform.png",
    technologies: [
      "React",
      "TypeScript",
      "Web3.js",
      "Ethers.js",
      "TailwindCSS",
      "GraphQL",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    gradient: "from-purple-500/20 via-primary/20 to-pink-500/20",
  },
  {
    title: "AI Code Assistant",
    description:
      "An AI-powered development tool that helps developers write, review, and optimize code. Integrates with popular IDEs and uses advanced language models. (Coming Soon)",
    image: "/projects/ai-assistant.png",
    technologies: ["Next.js", "OpenAI API", "TypeScript", "Tailwind", "Prisma"],
    liveUrl: null,
    githubUrl: null,
    featured: true,
    comingSoon: true,
    gradient: "from-cyan-500/20 via-secondary/20 to-emerald-500/20",
  },
  {
    title: "NFT Marketplace",
    description:
      "A sleek marketplace for trading digital collectibles. Features include lazy minting, auctions, and social features for collectors and creators.",
    image: "/projects/nft-marketplace.png",
    technologies: ["React", "Solidity", "IPFS", "Web3.js", "Chakra UI"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-orange-500/20 via-accent/20 to-rose-500/20",
  },
  {
    title: "DeFi Dashboard",
    description:
      "Real-time portfolio tracker and analytics dashboard for DeFi assets across multiple chains. Provides insights on yields, risks, and opportunities.",
    image: "/projects/defi-dashboard.png",
    technologies: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Recharts",
      "wagmi",
    ],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
    gradient: "from-blue-500/20 via-indigo-500/20 to-purple-500/20",
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

export function Projects() {
  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of work I'm proud of, from Web3 platforms to AI experiments"
        />

        <motion.div
          className="grid gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Featured Projects - Large Cards */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter((p) => p.featured)
              .map((project) => (
                <motion.div key={project.title} variants={itemVariants}>
                  <Card
                    variant="gradient"
                    className="group h-full overflow-hidden"
                  >
                    {/* Project Image */}
                    <div
                      className={`relative h-48 md:h-56 -mx-6 -mt-6 mb-6 overflow-hidden bg-gradient-to-br ${project.gradient}`}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        {project.comingSoon ? (
                          <div className="flex flex-col items-center gap-3">
                            <Sparkles className="w-12 h-12 text-foreground/50" />
                            <span className="text-sm font-medium text-foreground/50">
                              Coming Soon
                            </span>
                          </div>
                        ) : (
                          <div className="w-3/4 h-3/4 relative rounded-lg overflow-hidden border border-white/10 shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-background to-background/80 flex items-center justify-center">
                              <span className="text-muted text-sm">
                                Project Preview
                              </span>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                        {project.liveUrl && (
                          <motion.a
                            href={project.liveUrl}
                            className="p-3 rounded-full glass-card text-foreground hover:bg-white/10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                        {project.githubUrl && (
                          <motion.a
                            href={project.githubUrl}
                            className="p-3 rounded-full glass-card text-foreground hover:bg-white/10"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-foreground">
                          {project.title}
                        </h3>
                        {project.comingSoon && (
                          <span className="px-2 py-0.5 text-xs font-medium bg-accent/20 text-accent rounded-full">
                            Soon
                          </span>
                        )}
                      </div>
                      <p className="text-muted leading-relaxed mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>

          {/* Other Projects - Smaller Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project) => (
                <motion.div key={project.title} variants={itemVariants}>
                  <Card variant="glass" className="group h-full">
                    <div className="flex flex-col h-full">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-bold text-foreground">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              className="text-muted hover:text-foreground transition-colors"
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              className="text-muted hover:text-foreground transition-colors"
                            >
                              <Github className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-muted leading-relaxed mb-4 flex-grow">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech) => (
                          <span key={tech} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="tech-tag">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
          </div>
        </motion.div>

        {/* View More */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-muted">
            More projects coming soon as I continue building AI-first
            applications!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
