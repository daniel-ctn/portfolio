'use client'

import { useState, useEffect, useRef, useCallback } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Sparkles, X, RotateCcw } from 'lucide-react'

const placeholderQuestions = [
  'Ask me about my AI projects...',
  'Show me his Web3 experience...',
  'What is his tech stack?',
  'Tell me about his career journey...',
  'What is he currently building?',
]

const VALID_IDS = [
  'project-artflow',
  'project-promptexpert',
  'project-aicommercial',
  'experience',
  'skills',
  'about',
  'contact',
]

function getMessageText(parts: Array<{ type: string; text?: string }>): string {
  return parts
    .filter((p) => p.type === 'text' && p.text)
    .map((p) => p.text)
    .join('')
}

function parseHighlightIds(text: string): string[] {
  const match = text.match(/<!--HIGHLIGHT:\[([^\]]*)\]-->/)
  if (!match) return []
  try {
    const ids = JSON.parse(`[${match[1]}]`) as string[]
    return ids.filter((id) => VALID_IDS.includes(id))
  } catch {
    return []
  }
}

function stripHighlightTag(text: string): string {
  return text.replace(/<!--HIGHLIGHT:\[[^\]]*\]-->/, '').trim()
}

interface AIChatProps {
  onFilter: (highlightedIds: string[]) => void
}

export function AIChat({ onFilter }: AIChatProps) {
  const [input, setInput] = useState('')
  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const [displayedPlaceholder, setDisplayedPlaceholder] = useState('')
  const [isTypingPlaceholder, setIsTypingPlaceholder] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, setMessages } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  // Extract highlight IDs from the latest assistant message
  useEffect(() => {
    const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant')
    if (lastAssistant && !isLoading) {
      const text = getMessageText(lastAssistant.parts)
      const ids = parseHighlightIds(text)
      if (ids.length > 0) {
        onFilter(ids)
      }
    }
  }, [messages, isLoading, onFilter])

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Typewriter effect for placeholder
  useEffect(() => {
    if (messages.length > 0) return

    const currentPlaceholder = placeholderQuestions[placeholderIndex]
    let charIndex = 0
    let timeout: NodeJS.Timeout

    if (isTypingPlaceholder) {
      const type = () => {
        if (charIndex <= currentPlaceholder.length) {
          setDisplayedPlaceholder(currentPlaceholder.slice(0, charIndex))
          charIndex++
          timeout = setTimeout(type, 50 + Math.random() * 30)
        } else {
          timeout = setTimeout(() => setIsTypingPlaceholder(false), 2000)
        }
      }
      type()
    } else {
      let eraseIndex = currentPlaceholder.length
      const erase = () => {
        if (eraseIndex >= 0) {
          setDisplayedPlaceholder(currentPlaceholder.slice(0, eraseIndex))
          eraseIndex--
          timeout = setTimeout(erase, 25)
        } else {
          setPlaceholderIndex((prev) => (prev + 1) % placeholderQuestions.length)
          setIsTypingPlaceholder(true)
        }
      }
      erase()
    }

    return () => clearTimeout(timeout)
  }, [placeholderIndex, isTypingPlaceholder, messages.length])

  const handleClear = useCallback(() => {
    setMessages([])
    setInput('')
    onFilter([])
  }, [setMessages, onFilter])

  const handleSubmit = useCallback(
    (e?: React.FormEvent) => {
      e?.preventDefault()
      if (!input.trim() || isLoading) return
      const text = input.trim()
      setInput('')
      sendMessage({ text })
    },
    [input, isLoading, sendMessage]
  )

  const handleChipClick = useCallback(
    (text: string) => {
      setInput('')
      sendMessage({ text })
    },
    [sendMessage]
  )

  const hasMessages = messages.length > 0

  return (
    <div className='flex h-full flex-col'>
      {/* Header */}
      <div className='mb-3 flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <div className='flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10'>
            <Sparkles className='h-4 w-4 text-primary' />
          </div>
          <div>
            <h3 className='text-sm font-semibold text-foreground'>AI Portfolio Assistant</h3>
            <p className='text-[0.65rem] text-muted'>Powered by Gemini</p>
          </div>
        </div>
        {hasMessages && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={handleClear}
            className='flex h-7 w-7 items-center justify-center rounded-lg text-muted transition-colors hover:bg-white/5 hover:text-foreground'
            title='Clear conversation'
          >
            <RotateCcw className='h-3.5 w-3.5' />
          </motion.button>
        )}
      </div>

      {/* Messages area */}
      {hasMessages && (
        <div className='mb-3 max-h-[200px] space-y-2.5 overflow-y-auto pr-1'>
          {messages.map((msg) => {
            const text = getMessageText(msg.parts)
            const displayText = msg.role === 'assistant' ? stripHighlightTag(text) : text

            if (!displayText && msg.role === 'assistant' && isLoading) return null

            return (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[90%] rounded-xl px-3 py-2 text-xs leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-primary/15 text-primary-light'
                      : 'bg-white/4 text-foreground-soft'
                  }`}
                >
                  {displayText}
                </div>
              </div>
            )
          })}

          {/* Loading indicator */}
          {isLoading && (
            <div className='flex justify-start'>
              <div className='flex items-center gap-2 rounded-xl bg-white/4 px-3 py-2'>
                <div className='flex items-end gap-[3px]'>
                  {[0, 1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className='wave-bar'
                      style={{ animationDelay: `${i * 0.15}s`, height: '4px' }}
                    />
                  ))}
                </div>
                <span className='text-[0.65rem] text-primary/60'>Thinking...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Input */}
      <form onSubmit={handleSubmit} className='relative'>
        <div
          className={`relative rounded-xl border bg-white/2 transition-colors ${
            input || hasMessages ? 'border-primary/20' : 'pulse-border'
          }`}
        >
          <div className='flex items-center gap-3 px-4 py-2.5'>
            <div className='relative flex-1'>
              <input
                type='text'
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='w-full bg-transparent text-sm text-foreground placeholder-transparent outline-none'
                placeholder={displayedPlaceholder}
                disabled={isLoading}
              />
              {!input && !hasMessages && (
                <span className='typewriter-cursor pointer-events-none absolute inset-0 flex items-center text-sm text-muted'>
                  {displayedPlaceholder}
                </span>
              )}
              {!input && hasMessages && (
                <span className='pointer-events-none absolute inset-0 flex items-center text-sm text-muted'>
                  Ask a follow-up...
                </span>
              )}
            </div>
            {input && (
              <button
                type='button'
                onClick={() => setInput('')}
                className='text-muted transition-colors hover:text-foreground'
              >
                <X className='h-3.5 w-3.5' />
              </button>
            )}
            <button
              type='submit'
              disabled={!input.trim() || isLoading}
              className='flex h-7 w-7 items-center justify-center rounded-lg bg-primary/20 text-primary transition-all hover:bg-primary/30 disabled:opacity-30 disabled:hover:bg-primary/20'
            >
              <Send className='h-3.5 w-3.5' />
            </button>
          </div>
        </div>
      </form>

      {/* Quick suggestion chips */}
      <AnimatePresence>
        {!hasMessages && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            className='mt-2.5 flex flex-wrap gap-1.5'
          >
            {['Tell me about his AI projects', 'Web3 experience?', 'What skills does he have?', 'Career journey'].map(
              (chip) => (
                <button
                  key={chip}
                  onClick={() => handleChipClick(chip)}
                  className='rounded-lg border border-white/5 bg-white/3 px-2.5 py-1 text-[0.65rem] text-muted transition-all hover:border-primary/20 hover:text-primary'
                >
                  {chip}
                </button>
              )
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
