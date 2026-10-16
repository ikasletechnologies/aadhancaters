import { useState } from 'react'
import { MainLayout } from '@/layouts'
import { DashboardPage, ComponentsShowcasePage } from '@/pages'

export function App() {
  const [activeNav, setActiveNav] = useState('dashboard')

  return (
    <MainLayout activeNavId={activeNav} onSelectNav={setActiveNav}>
      {activeNav === 'dashboard' && <DashboardPage />}
      {activeNav === 'components' && <ComponentsShowcasePage />}
      {activeNav === 'users' && (
        <div className="py-12 text-center">
          <h2 className="text-xl font-semibold text-slate-800">Team & Users Module</h2>
          <p className="text-slate-500 mt-2">Connect to your user management API or backend service.</p>
        </div>
      )}
      {activeNav === 'settings' && (
        <div className="py-12 text-center">
          <h2 className="text-xl font-semibold text-slate-800">Workspace Settings</h2>
          <p className="text-slate-500 mt-2">Configure project preferences, notifications, and security policies.</p>
        </div>
      )}
    </MainLayout>
  )
}

export default App
