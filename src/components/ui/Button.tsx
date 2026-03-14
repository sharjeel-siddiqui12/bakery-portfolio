'use client'

import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  href?: string
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-display font-semibold uppercase tracking-[0.15em] rounded-full transition-all duration-500 cursor-pointer'

    const variants = {
      primary: 'bg-brand-gold text-brand-950 hover:bg-brand-goldlt hover:shadow-[0_0_30px_rgba(212,168,83,0.25)] active:scale-[0.97]',
      secondary: 'border border-brand-gold/60 text-brand-gold hover:border-brand-gold hover:bg-brand-gold/10 active:scale-[0.97]',
      dark: 'bg-brand-950 text-brand-ink hover:bg-brand-900 border border-brand-gold/10 hover:border-brand-gold/30 active:scale-[0.97]',
    }

    const sizes = {
      sm: 'text-[10px] px-5 py-2.5',
      md: 'text-xs px-8 py-3.5',
      lg: 'text-xs px-10 py-4',
    }

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
