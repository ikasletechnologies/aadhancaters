import React, { useState } from 'react'
import {
  TrendingUp,
  Users,
  DollarSign,
  Activity,
  Plus,
  Search,
  ExternalLink,
} from 'lucide-react'
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  PageHeader,
  Badge,
  Modal,
  Input,
} from '@/components/common'
import { useDisclosure } from '@/hooks/useDisclosure'
import { formatCurrency, formatNumber, formatDate } from '@/utils/formatters'

export const DashboardPage: React.FC = () => {
  const modal = useDisclosure(false)
  const [isSaving, setIsSaving] = useState(false)
  const [projectName, setProjectName] = useState('')
  const [projectError, setProjectError] = useState('')

  const handleCreateProject = () => {
    if (!projectName.trim()) {
      setProjectError('Project title is required')
      return
    }
    setProjectError('')
    setIsSaving(true)
    setTimeout(() => {
      setIsSaving(false)
      modal.close()
      setProjectName('')
    }, 1000)
  }

  const stats = [
    {
      title: 'Total Revenue',
      value: formatCurrency(1245000),
      change: '+14.2% from last month',
      icon: DollarSign,
      trend: 'success',
    },
    {
      title: 'Active Users',
      value: formatNumber(8420),
      change: '+8.1% new signups',
      icon: Users,
      trend: 'success',
    },
    {
      title: 'Performance Score',
      value: '99.4%',
      change: '+0.3% uptime',
      icon: Activity,
      trend: 'info',
    },
    {
      title: 'Conversion Rate',
      value: '4.85%',
      change: '+2.1% this week',
      icon: TrendingUp,
      trend: 'success',
    },
  ]

  const recentItems = [
    { id: '1', title: 'Brand Identity Redesign', client: 'Aadhan Media', status: 'success', date: '2026-10-15' },
    { id: '2', title: 'ERP Frontend Component Migration', client: 'Internal Platform', status: 'info', date: '2026-10-14' },
    { id: '3', title: 'Customer Portal Security Audit', client: 'Enterprise Sec', status: 'warning', date: '2026-10-12' },
    { id: '4', title: 'API Gateway Integration', client: 'Cloud Services', status: 'neutral', date: '2026-10-10' },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <PageHeader
        title="Dashboard Overview"
        description="Welcome to Aadhan. Monitor metrics, manage design components, and track live performance."
        badge={<Badge variant="success" dot>Live Production</Badge>}
        actions={
          <>
            <Button
              variant="outline"
              size="sm"
              leftIcon={<ExternalLink className="h-4 w-4" />}
              onClick={() => window.open('https://vite.dev', '_blank')}
            >
              Docs
            </Button>
            <Button
              variant="primary"
              size="sm"
              leftIcon={<Plus className="h-4 w-4" />}
              onClick={modal.open}
            >
              New Project
            </Button>
          </>
        }
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <Card key={idx} hoverable>
              <CardContent className="flex items-center justify-between p-6">
                <div className="space-y-1">
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    {stat.title}
                  </p>
                  <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                  <p className="text-xs text-emerald-600 font-medium">{stat.change}</p>
                </div>
                <div className="rounded-xl bg-blue-50 p-3 text-blue-600">
                  <Icon className="h-6 w-6" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Recent Projects Table Card */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Projects</CardTitle>
              <CardDescription>Track status and delivery timelines</CardDescription>
            </div>
            <div className="w-48">
              <Input
                placeholder="Filter projects..."
                leftIcon={<Search className="h-4 w-4" />}
                className="py-1 text-xs"
              />
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50/80 text-xs uppercase text-slate-400 border-b border-slate-100">
                  <tr>
                    <th className="py-3 px-6 font-semibold">Project Title</th>
                    <th className="py-3 px-6 font-semibold">Client</th>
                    <th className="py-3 px-6 font-semibold">Status</th>
                    <th className="py-3 px-6 font-semibold text-right">Updated</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {recentItems.map((item) => (
                    <tr key={item.id} className="hover:bg-slate-50/50 transition-colors">
                      <td className="py-4 px-6 font-medium text-slate-900">{item.title}</td>
                      <td className="py-4 px-6 text-slate-500">{item.client}</td>
                      <td className="py-4 px-6">
                        <Badge
                          variant={
                            item.status === 'success'
                              ? 'success'
                              : item.status === 'warning'
                              ? 'warning'
                              : item.status === 'info'
                              ? 'info'
                              : 'neutral'
                          }
                          dot
                        >
                          {item.status.toUpperCase()}
                        </Badge>
                      </td>
                      <td className="py-4 px-6 text-right text-slate-400 text-xs">
                        {formatDate(item.date)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center text-xs text-slate-500">
            <span>Showing 4 of 4 projects</span>
            <Button variant="ghost" size="sm">
              View all
            </Button>
          </CardFooter>
        </Card>

        {/* Quick Actions & System Info */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Architecture Stack</CardTitle>
              <CardDescription>Configured system foundations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Core Framework</span>
                <span className="font-semibold text-slate-900">React 19 + Vite</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Language</span>
                <span className="font-semibold text-slate-900">TypeScript 5</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Styling Engine</span>
                <span className="font-semibold text-slate-900">Tailwind CSS v4</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">Icons</span>
                <span className="font-semibold text-slate-900">Lucide React</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="secondary" size="sm" className="w-full" onClick={modal.open}>
                Quick Action Modal
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Creation Modal */}
      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="Create New Project"
        description="Initialize a new project workspace under Aadhan."
      >
        <div className="space-y-4">
          <Input
            label="Project Title"
            placeholder="e.g. Aadhan Mobile Redesign"
            value={projectName}
            onChange={(e) => {
              setProjectName(e.target.value)
              if (projectError) setProjectError('')
            }}
            error={projectError}
            required
            autoFocus
          />

          <Input
            label="Client or Domain"
            placeholder="e.g. Enterprise Client"
            helperText="Optional identifier for categorization"
          />

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <Button variant="outline" onClick={modal.close} disabled={isSaving}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handleCreateProject} isLoading={isSaving}>
              Create Project
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
