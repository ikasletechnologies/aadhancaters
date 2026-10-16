import React from 'react'
import { Loader2 } from 'lucide-react'
import { cn } from '@/utils/cn'

export type LoaderSize = 'sm' | 'md' | 'lg' | 'xl'

export interface LoaderProps {
  size?: LoaderSize
  className?: string
  text?: string
  fullScreen?: boolean
}

const sizeClasses: Record<LoaderSize, string> = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
}

export const Loader: React.FC<LoaderProps> = ({
  size = 'md',
  className,
  text,
  fullScreen = false,
}) => {
  const content = (
    <div
      role="status"
      aria-live="polite"
      className={cn('flex flex-col items-center justify-center gap-3', className)}
    >
      <Loader2 className={cn('animate-spin text-blue-600', sizeClasses[size])} />
      {text && <p className="text-sm font-medium text-slate-600 animate-pulse">{text}</p>}
      <span className="sr-only">Loading...</span>
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-xs">
        {content}
      </div>
    )
  }

  return content
}
