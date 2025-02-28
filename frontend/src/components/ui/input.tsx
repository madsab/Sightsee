import * as React from 'react'

import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  error?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, error, type, disabled, ...props }, ref) => {
  return (
    <>
      <input
        type={type}
        className={cn(
          'flex h-9 w-full text-content rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground placeholder:text-white focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
          className,
          error && 'border-red-500',
          disabled && 'cursor-not-allowed bg-current/50 ',
        )}
        ref={ref}
        disabled={disabled}
        {...props}
      />
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </>
  )
})
Input.displayName = 'Input'

export { Input }
