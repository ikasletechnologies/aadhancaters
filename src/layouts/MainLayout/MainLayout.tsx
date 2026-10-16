import React from 'react'
import { Navbar, Sidebar, Footer } from '@/components/layout'
import { useDisclosure } from '@/hooks/useDisclosure'

export interface MainLayoutProps {
  children: React.ReactNode
  activeNavId?: string
  onSelectNav?: (id: string) => void
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  activeNavId = 'dashboard',
  onSelectNav,
}) => {
  const sidebar = useDisclosure(false)

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar onToggleSidebar={sidebar.toggle} />

      <div className="flex flex-1 overflow-hidden">
        <Sidebar
          isOpen={sidebar.isOpen}
          onClose={sidebar.close}
          activeId={activeNavId}
          onSelect={onSelectNav}
        />

        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex flex-col">
          <div className="mx-auto w-full max-w-7xl flex-1">
            {children}
          </div>
          <Footer />
        </main>
      </div>
    </div>
  )
}
