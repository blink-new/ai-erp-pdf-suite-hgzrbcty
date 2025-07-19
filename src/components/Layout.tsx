import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from 'next-themes'
import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  FileText,
  Bot,
  BarChart3,
  Settings,
  Menu,
  X,
  Sun,
  Moon,
  Zap,
  Search,
  Bell,
  User
} from 'lucide-react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Badge } from './ui/badge'
import blink from '../blink/client'

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard, color: 'text-blue-500' },
  { name: 'Inventory', href: '/inventory', icon: Package, color: 'text-emerald-500' },
  { name: 'Orders', href: '/orders', icon: ShoppingCart, color: 'text-orange-500' },
  { name: 'PDF Editor', href: '/pdf-editor', icon: FileText, color: 'text-purple-500' },
  { name: 'AI Assistant', href: '/ai-assistant', icon: Bot, color: 'text-pink-500' },
  { name: 'Analytics', href: '/analytics', icon: BarChart3, color: 'text-cyan-500' },
  { name: 'Settings', href: '/settings', icon: Settings, color: 'text-slate-500' },
]

interface LayoutProps {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const location = useLocation()
  const { theme, setTheme } = useTheme()

  const currentPage = navigation.find(item => item.href === location.pathname)

  return (
    <div className="min-h-screen bg-background">
      {/* Mobile sidebar overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="fixed inset-0 bg-black/50" onClick={() => setSidebarOpen(false)} />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              className="fixed left-0 top-0 h-full w-80 glass-effect border-r"
            >
              <Sidebar onClose={() => setSidebarOpen(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-80 lg:flex-col">
        <div className="glass-effect border-r border-border/50">
          <Sidebar />
        </div>
      </div>

      {/* Main content */}
      <div className="lg:pl-80">
        {/* Top header */}
        <header className="sticky top-0 z-40 glass-effect border-b border-border/50">
          <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <Menu className="h-5 w-5" />
              </Button>
              
              <div className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${currentPage?.color?.replace('text-', 'bg-')} animate-pulse`} />
                <h1 className="text-xl font-semibold text-foreground">
                  {currentPage?.name || 'Dashboard'}
                </h1>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative hidden sm:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search..."
                  className="pl-10 w-64 bg-muted/50"
                />
              </div>

              {/* Notifications */}
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="h-5 w-5" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500">
                  3
                </Badge>
              </Button>

              {/* Theme toggle */}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              >
                {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>

              {/* User menu */}
              <Button variant="ghost" size="sm">
                <User className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="p-4 sm:p-6 lg:p-8"
          >
            {children}
          </motion.div>
        </main>
      </div>
    </div>
  )
}

function Sidebar({ onClose }: { onClose?: () => void }) {
  const location = useLocation()

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="flex h-16 items-center justify-between px-6">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="w-8 h-8 gradient-primary rounded-lg flex items-center justify-center">
              <Zap className="h-4 w-4 text-white" />
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-background animate-pulse" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-gradient">ERP Suite</h2>
            <p className="text-xs text-muted-foreground">AI-Powered</p>
          </div>
        </div>
        {onClose && (
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-5 w-5" />
          </Button>
        )}
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4 py-4">
        {navigation.map((item) => {
          const isActive = location.pathname === item.href
          return (
            <Link key={item.name} to={item.href} onClick={onClose}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  group flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all
                  ${isActive 
                    ? 'bg-primary/10 text-primary border border-primary/20 glow-primary' 
                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                  }
                `}
              >
                <item.icon className={`h-5 w-5 ${isActive ? item.color : 'group-hover:' + item.color}`} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="ml-auto w-2 h-2 bg-primary rounded-full"
                  />
                )}
              </motion.div>
            </Link>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-border/50">
        <div className="gradient-border p-4 text-center space-y-2">
          <div className="flex items-center justify-center space-x-2">
            <Bot className="h-5 w-5 text-primary" />
            <span className="font-medium">AI Status</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Online & Ready</span>
          </div>
        </div>
      </div>
    </div>
  )
}