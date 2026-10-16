import React from 'react'
import {
  LayoutDashboard,
  Layers,
  Users,
  Settings,
  HelpCircle,
  X,
  type LucideIcon,
} from 'lucide-react'
import { cn } from '@/utils/cn'

export interface SidebarItem {
  id: string
  label: string
  icon: LucideIcon
  href: string
  badge?: string | number
  active?: boolean
}

export interface SidebarProps {
  isOpen?: boolean
  onClose?: () => void
  activeId?: string
  onSelect?: (id: string) => void
}

const defaultNavItems: SidebarItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, href: '#dashboard' },
  { id: 'components', label: 'Components', icon: Layers, href: '#components', badge: 'New' },
  { id: 'users', label: 'Team & Users', icon: Users, href: '#users' },
  { id: 'settings', label: 'Settings', icon: Settings, href: '#settings' },
]

export const Sidebar: React.FC<SidebarProps> = ({
  isOpen = false,
  onClose,
  activeId = 'dashboard',
  onSelect,
}) => {
  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/50 backdrop-blur-xs lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Aside */}
      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-slate-200 bg-white transition-transform duration-200 ease-in-out lg:static lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Mobile Header */}
        <div className="flex h-16 items-center justify-between px-6 border-b border-slate-100 lg:hidden">
          <div className="flex items-center gap-2.5">
            <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold">
              A
            </div>
            <span className="font-bold text-slate-900">Aadhan App</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
            aria-label="Close navigation"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation list */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-1">
          <div className="px-3 mb-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
            Overview
          </div>
          {defaultNavItems.map((item) => {
            const Icon = item.icon
            const isActive = activeId === item.id

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => {
                  onSelect?.(item.id)
                  onClose?.()
                }}
                className={cn(
                  'w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer',
                  isActive
                    ? 'bg-blue-50 text-blue-700 font-semibold'
                    : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
                )}
              >
                <div className="flex items-center gap-3">
                  <Icon className={cn('h-4 w-4 shrink-0', isActive ? 'text-blue-600' : 'text-slate-400')} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded-full text-[11px] font-medium',
                      isActive ? 'bg-blue-100 text-blue-700' : 'bg-slate-100 text-slate-600'
                    )}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            )
          })}
        </div>

        {/* Footer info in sidebar */}
        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 rounded-lg bg-slate-50 p-3">
            <HelpCircle className="h-5 w-5 text-slate-400 shrink-0" />
            <div className="flex-1 text-xs">
              <p className="font-medium text-slate-800">Need support?</p>
              <p className="text-slate-500 text-[11px]">Check docs or contact us</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}
