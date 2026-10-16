import React from 'react'

const CURRENT_YEAR = new Date().getFullYear()

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-slate-200 bg-white py-6 px-4 sm:px-6 mt-auto">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <p>© {CURRENT_YEAR} Aadhan. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-slate-800 transition-colors">
            Privacy Policy
          </a>
          <a href="#terms" className="hover:text-slate-800 transition-colors">
            Terms of Service
          </a>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            <span>Systems Normal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
