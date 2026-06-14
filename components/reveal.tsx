'use client'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode
  className?: string
  delay?: number
  as?: 'div' | 'section' | 'li' | 'article'
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.15 },
    )
    // Pequeño delay para que el navegador termine de renderizar antes de observar
    const timer = setTimeout(() => observer.observe(node), 100)
    return () => {
      clearTimeout(timer)
      observer.disconnect()
    }
  }, [])

  const Component = Tag as 'div'
  return (
    <Component
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn('reveal', visible && 'is-visible', className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  )
}
