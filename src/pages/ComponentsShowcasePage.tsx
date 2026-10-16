import React, { useState } from 'react'
import {
  Sparkles,
  Search,
  Mail,
  Send,
  Trash2,
  CheckCircle,
  AlertCircle,
  Eye,
} from 'lucide-react'
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Modal,
  Loader,
  Badge,
  PageHeader,
} from '@/components/common'
import { useDisclosure } from '@/hooks/useDisclosure'

export const ComponentsShowcasePage: React.FC = () => {
  const modal = useDisclosure(false)
  const [btnLoading, setBtnLoading] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [inputError, setInputError] = useState('')

  const handleSimulateLoad = () => {
    setBtnLoading(true)
    setTimeout(() => setBtnLoading(false), 1500)
  }

  const handleValidateEmail = (val: string) => {
    setInputValue(val)
    if (val && !val.includes('@')) {
      setInputError('Please enter a valid email address')
    } else {
      setInputError('')
    }
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title="Reusable Component Gallery"
        description="Comprehensive design system showcase with interactive props, states, and accessibility standards."
        badge={<Badge variant="info">Design System v1.0</Badge>}
      />

      {/* 1. BUTTONS */}
      <Card>
        <CardHeader>
          <CardTitle>1. Button Component</CardTitle>
          <CardDescription>
            Multi-variant button system with sizes, icon slots, loading spinners, and disabled states.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Variants */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Variants
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger" leftIcon={<Trash2 className="h-4 w-4" />}>
                Danger
              </Button>
              <Button variant="success" leftIcon={<CheckCircle className="h-4 w-4" />}>
                Success
              </Button>
            </div>
          </div>

          {/* Sizes */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Sizes
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small (sm)</Button>
              <Button size="md">Medium (md)</Button>
              <Button size="lg">Large (lg)</Button>
            </div>
          </div>

          {/* Interactive States */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
              Interactive & Dynamic States
            </h4>
            <div className="flex flex-wrap items-center gap-3">
              <Button
                variant="primary"
                isLoading={btnLoading}
                leftIcon={<Sparkles className="h-4 w-4" />}
                onClick={handleSimulateLoad}
              >
                {btnLoading ? 'Simulating...' : 'Click to Simulate Loading'}
              </Button>

              <Button variant="secondary" disabled>
                Disabled
              </Button>

              <Button
                variant="outline"
                rightIcon={<Send className="h-4 w-4" />}
              >
                Send Message
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 2. INPUTS */}
      <Card>
        <CardHeader>
          <CardTitle>2. Input Component</CardTitle>
          <CardDescription>
            Form input with labels, icons, error handling, helper text, and accessible attributes.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input
              label="Standard Text Input"
              placeholder="Enter your full name"
              helperText="Your legal name as shown on documents"
            />

            <Input
              label="Search Input with Icon"
              placeholder="Search components or records..."
              leftIcon={<Search className="h-4 w-4" />}
            />

            <Input
              label="Email with Live Validation"
              placeholder="user@example.com"
              value={inputValue}
              onChange={(e) => handleValidateEmail(e.target.value)}
              error={inputError}
              leftIcon={<Mail className="h-4 w-4" />}
              required
            />

            <Input
              label="Disabled Input"
              value="readonly-system-variable"
              disabled
              helperText="This field is managed by the system administrator"
            />
          </div>
        </CardContent>
      </Card>

      {/* 3. BADGES & LOADERS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>3. Badge Component</CardTitle>
            <CardDescription>Status indicators for workflows, roles, and states</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <Badge variant="default">Default</Badge>
              <Badge variant="success" dot>Active</Badge>
              <Badge variant="warning" dot>Pending</Badge>
              <Badge variant="danger" dot>Rejected</Badge>
              <Badge variant="info">Information</Badge>
              <Badge variant="neutral">Neutral Draft</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>4. Loader Component</CardTitle>
            <CardDescription>Spinners and loading states for async operations</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-8">
              <Loader size="sm" />
              <Loader size="md" />
              <Loader size="lg" text="Processing data..." />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 5. MODAL INTERACTION */}
      <Card>
        <CardHeader>
          <CardTitle>5. Modal Component</CardTitle>
          <CardDescription>
            Accessible dialog with overlay blur, focus management, and Escape key trigger.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="primary"
            leftIcon={<Eye className="h-4 w-4" />}
            onClick={modal.open}
          >
            Launch Interactive Modal
          </Button>
        </CardContent>
      </Card>

      {/* Modal Demo */}
      <Modal
        isOpen={modal.isOpen}
        onClose={modal.close}
        title="Interactive Modal Preview"
        description="This modal demonstrates backdrop blur, keyboard navigation (Escape to close), and responsive auto-centering."
      >
        <div className="space-y-4">
          <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-start gap-3">
            <AlertCircle className="h-5 w-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-800">
              <p className="font-semibold">Accessibility Standard</p>
              <p className="mt-0.5">
                Modals trap focus within the dialog, prevent body scrolling, and emit accessible ARIA roles.
              </p>
            </div>
          </div>

          <Input label="Feedback or Notes" placeholder="Enter any notes here..." />

          <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <Button variant="outline" onClick={modal.close}>
              Dismiss
            </Button>
            <Button variant="primary" onClick={modal.close}>
              Confirm Action
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}
