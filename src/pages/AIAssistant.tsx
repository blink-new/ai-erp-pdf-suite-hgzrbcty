import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  FileText, 
  BarChart3, 
  Package, 
  ShoppingCart,
  Mic,
  Image,
  Paperclip,
  MoreHorizontal,
  Copy,
  ThumbsUp,
  ThumbsDown
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Badge } from '../components/ui/badge'
import { ScrollArea } from '../components/ui/scroll-area'
import { Separator } from '../components/ui/separator'

const quickActions = [
  { 
    title: 'Analyze Inventory', 
    description: 'Get insights on stock levels and trends',
    icon: Package,
    color: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20'
  },
  { 
    title: 'Order Summary', 
    description: 'Generate reports on recent orders',
    icon: ShoppingCart,
    color: 'bg-blue-500/10 text-blue-500 border-blue-500/20'
  },
  { 
    title: 'Process PDF', 
    description: 'Extract and analyze document content',
    icon: FileText,
    color: 'bg-purple-500/10 text-purple-500 border-purple-500/20'
  },
  { 
    title: 'Create Report', 
    description: 'Generate business analytics report',
    icon: BarChart3,
    color: 'bg-orange-500/10 text-orange-500 border-orange-500/20'
  }
]

const chatMessages = [
  {
    id: 1,
    type: 'assistant',
    content: "Hello! I'm your AI assistant. I can help you with inventory management, order processing, PDF analysis, and business insights. What would you like to work on today?",
    timestamp: '10:30 AM'
  },
  {
    id: 2,
    type: 'user',
    content: "Can you analyze my current inventory and tell me which products need restocking?",
    timestamp: '10:32 AM'
  },
  {
    id: 3,
    type: 'assistant',
    content: "I've analyzed your inventory data. Here are the key findings:\n\n**Low Stock Alerts:**\n• Gaming Mouse - 8 units (below 15 minimum)\n• Laptop Stand - 0 units (out of stock)\n\n**Recommendations:**\n• Reorder Gaming Mouse: 50 units\n• Urgent restock Laptop Stand: 25 units\n• Monitor Wireless Headphones: trending up, consider increasing stock\n\nWould you like me to generate purchase orders for these items?",
    timestamp: '10:33 AM'
  }
]

export default function AIAssistant() {
  const [message, setMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!message.trim()) return
    
    // Simulate sending message
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
    }, 2000)
    
    setMessage('')
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gradient">AI Assistant</h1>
          <p className="text-muted-foreground">Your intelligent business companion</p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge className="bg-green-500/10 text-green-500 border-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
            Online
          </Badge>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
        {/* Quick Actions Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-1"
        >
          <Card className="glass-effect border-border/50 h-full">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-primary" />
                <span>Quick Actions</span>
              </CardTitle>
              <CardDescription>
                Common AI-powered tasks
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {quickActions.map((action, index) => (
                <motion.div
                  key={action.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 rounded-lg border cursor-pointer transition-all hover:shadow-md ${action.color}`}
                >
                  <div className="flex items-start space-x-3">
                    <action.icon className="h-5 w-5 mt-0.5" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm">{action.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        {action.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-3"
        >
          <Card className="glass-effect border-border/50 h-full flex flex-col">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 gradient-primary rounded-full flex items-center justify-center">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">AI Assistant</h3>
                    <p className="text-sm text-muted-foreground">Always ready to help</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>
            
            <Separator />
            
            {/* Chat Messages */}
            <CardContent className="flex-1 flex flex-col p-0">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {chatMessages.map((msg, index) => (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-3 max-w-[80%] ${
                        msg.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          msg.type === 'user' 
                            ? 'bg-primary text-primary-foreground' 
                            : 'gradient-primary'
                        }`}>
                          {msg.type === 'user' ? (
                            <User className="h-4 w-4 text-white" />
                          ) : (
                            <Bot className="h-4 w-4 text-white" />
                          )}
                        </div>
                        <div className={`rounded-2xl px-4 py-3 ${
                          msg.type === 'user'
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted'
                        }`}>
                          <div className="text-sm whitespace-pre-wrap">{msg.content}</div>
                          <div className="flex items-center justify-between mt-2">
                            <span className="text-xs opacity-70">{msg.timestamp}</span>
                            {msg.type === 'assistant' && (
                              <div className="flex items-center space-x-1">
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <Copy className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <ThumbsUp className="h-3 w-3" />
                                </Button>
                                <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                  <ThumbsDown className="h-3 w-3" />
                                </Button>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 gradient-primary rounded-full flex items-center justify-center">
                          <Bot className="h-4 w-4 text-white" />
                        </div>
                        <div className="bg-muted rounded-2xl px-4 py-3">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                            <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </ScrollArea>
              
              <Separator />
              
              {/* Message Input */}
              <div className="p-4">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" size="sm">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Image className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <Mic className="h-4 w-4" />
                  </Button>
                  <div className="flex-1">
                    <Input
                      placeholder="Ask me anything about your business..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      className="border-0 bg-muted/50 focus-visible:ring-1"
                    />
                  </div>
                  <Button 
                    onClick={handleSendMessage}
                    disabled={!message.trim()}
                    className="gradient-primary text-white"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-muted-foreground">
                  <span>AI can make mistakes. Verify important information.</span>
                  <span>Powered by GPT-4</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}