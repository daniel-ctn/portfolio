'use client'

import type { CSSProperties, ElementType } from 'react'
import { Bot, Braces, Coins, FileCode2, Gem, PawPrint, Rocket, Waypoints } from 'lucide-react'
import {
  SiClaude,
  SiCss,
  SiEthers,
  SiFramer,
  SiGit,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiNestjs,
  SiNextdotjs,
  SiOpenai,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReactquery,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiVitest,
  SiWagmi,
} from 'react-icons/si'
import { cn } from '@/lib/utils'

type TechBadgeVariant = 'chip' | 'tile'

type TechVisual = {
  color: string
  icon: ElementType
  shortLabel?: string
}

const techVisuals: Record<string, TechVisual> = {
  React: { icon: SiReact, color: '#61DAFB' },
  'Next.js': { icon: SiNextdotjs, color: '#F5F5F5' },
  TypeScript: { icon: SiTypescript, color: '#3178C6' },
  Viem: { icon: Waypoints, color: '#8B5CF6' },
  TailwindCSS: { icon: SiTailwindcss, color: '#38BDF8', shortLabel: 'Tailwind' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8', shortLabel: 'Tailwind' },
  GraphQL: { icon: SiGraphql, color: '#E10098' },
  Redux: { icon: SiRedux, color: '#764ABC' },
  JavaScript: { icon: SiJavascript, color: '#F7DF1E' },
  HTML5: { icon: SiHtml5, color: '#E34F26' },
  CSS3: { icon: SiCss, color: '#1572B6' },
  'TanStack Start': { icon: Rocket, color: '#FF6B2C' },
  'TanStack Query': { icon: SiReactquery, color: '#FF4154', shortLabel: 'Query' },
  'Framer Motion': { icon: SiFramer, color: '#0055FF', shortLabel: 'Framer' },
  wagmi: { icon: SiWagmi, color: '#F5F5F5' },
  'Ethers.js': { icon: SiEthers, color: '#3C5BFF', shortLabel: 'Ethers' },
  'Smart Contracts': { icon: FileCode2, color: '#5EEAD4', shortLabel: 'Contracts' },
  DeFi: { icon: Coins, color: '#F59E0B' },
  NFTs: { icon: Gem, color: '#A78BFA' },
  Git: { icon: SiGit, color: '#F05032' },
  Zustand: { icon: PawPrint, color: '#F59E0B' },
  Jest: { icon: SiJest, color: '#C21325' },
  Vitest: { icon: SiVitest, color: '#6E9F18' },
  'Claude Code': { icon: SiClaude, color: '#D97757', shortLabel: 'Claude' },
  Codex: { icon: SiOpenai, color: '#10A37F' },
  Python: { icon: SiPython, color: '#3776AB' },
  NestJS: { icon: SiNestjs, color: '#E0234E' },
  PostgreSQL: { icon: SiPostgresql, color: '#336791', shortLabel: 'Postgres' },
  'Agentic Systems': { icon: Bot, color: '#C4B5FD', shortLabel: 'Agents' },
}

function alpha(color: string, opacity: number) {
  const normalized = color.replace('#', '')

  if (normalized.length !== 6) {
    return color
  }

  const channel = Math.round(opacity * 255)
    .toString(16)
    .padStart(2, '0')

  return `#${normalized}${channel}`
}

function getTechVisual(name: string) {
  return techVisuals[name] ?? { icon: Braces, color: '#5EEAD4' }
}

function TechGlyph({ color, icon: Icon, variant }: { color: string; icon: ElementType; variant: TechBadgeVariant }) {
  return (
    <Icon
      aria-hidden='true'
      className={cn('shrink-0', variant === 'tile' ? 'h-3.5 w-3.5' : 'h-3.5 w-3.5')}
      style={{ color }}
    />
  )
}

export function TechBadge({
  name,
  variant = 'chip',
  className,
}: {
  name: string
  variant?: TechBadgeVariant
  className?: string
}) {
  const tech = getTechVisual(name)

  const surfaceStyle: CSSProperties = {
    borderColor: alpha(tech.color, variant === 'tile' ? 0.24 : 0.16),
    backgroundColor: alpha(tech.color, variant === 'tile' ? 0.08 : 0.05),
  }

  const iconFrameStyle: CSSProperties = {
    borderColor: alpha(tech.color, 0.18),
    backgroundColor: alpha(tech.color, 0.1),
  }

  return (
    <span
      className={cn(
        'transition-all duration-200',
        variant === 'tile'
          ? 'flex min-h-[56px] w-[56px] flex-col items-center justify-center gap-1 rounded-lg border px-1 py-1.5 text-center hover:-translate-y-px'
          : 'inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5',
        className
      )}
      style={surfaceStyle}
      title={name}
    >
      <span
        className={cn(
          'flex shrink-0 items-center justify-center rounded-lg border',
          variant === 'tile' ? 'h-6 w-6' : 'h-6 w-6'
        )}
        style={iconFrameStyle}
      >
        <TechGlyph color={tech.color} icon={tech.icon} variant={variant} />
      </span>

      <span
        className={cn(
          'font-medium text-foreground',
          variant === 'tile' ? 'max-w-full text-[0.5rem] leading-tight tracking-[-0.01em]' : 'text-[0.68rem] leading-none'
        )}
      >
        {tech.shortLabel ?? name}
      </span>
    </span>
  )
}
