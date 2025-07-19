import { motion } from 'framer-motion'
import { 
  TrendingUp, 
  TrendingDown, 
  DollarSign, 
  Users, 
  Package, 
  ShoppingCart,
  Calendar,
  Download,
  Filter,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Badge } from '../components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select'

const kpiData = [
  {
    title: 'Total Revenue',
    value: '$124,563',
    change: '+12.5%',
    trend: 'up',
    icon: DollarSign,
    color: 'text-green-500'
  },
  {
    title: 'Orders',
    value: '1,429',
    change: '+8.2%',
    trend: 'up',
    icon: ShoppingCart,
    color: 'text-blue-500'
  },
  {
    title: 'Customers',
    value: '892',
    change: '-2.4%',
    trend: 'down',
    icon: Users,
    color: 'text-purple-500'
  },
  {
    title: 'Products',
    value: '156',
    change: '+5.1%',
    trend: 'up',
    icon: Package,
    color: 'text-orange-500'
  }
]

const topProducts = [
  { name: 'Wireless Headphones', sales: 234, revenue: '$23,400', trend: 'up' },
  { name: 'Gaming Mouse', sales: 189, revenue: '$11,334', trend: 'up' },
  { name: 'Office Chair', sales: 156, revenue: '$46,800', trend: 'down' },
  { name: 'Laptop Stand', sales: 134, revenue: '$6,700', trend: 'up' },
  { name: 'Bluetooth Speaker', sales: 98, revenue: '$7,840', trend: 'down' }
]

const recentActivity = [
  { type: 'sale', message: 'New order #1234 - $299.99', time: '2 min ago' },
  { type: 'inventory', message: 'Low stock alert: Gaming Mouse', time: '15 min ago' },
  { type: 'customer', message: 'New customer registration', time: '1 hour ago' },
  { type: 'refund', message: 'Refund processed - Order #1230', time: '2 hours ago' },
  { type: 'sale', message: 'Bulk order received - $1,299.99', time: '3 hours ago' }
]

export default function Analytics() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gradient">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your business performance and insights</p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="30days">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7days">Last 7 days</SelectItem>
              <SelectItem value="30days">Last 30 days</SelectItem>
              <SelectItem value="90days">Last 90 days</SelectItem>
              <SelectItem value="1year">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
          <Button className="gradient-primary text-white">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpiData.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="glass-effect border-border/50 hover:glow-primary transition-all duration-300">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {kpi.title}
                </CardTitle>
                <kpi.icon className={`h-4 w-4 ${kpi.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{kpi.value}</div>
                <div className="flex items-center space-x-1 text-xs">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-green-500" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-red-500" />
                  )}
                  <span className={kpi.trend === 'up' ? 'text-green-500' : 'text-red-500'}>
                    {kpi.change}
                  </span>
                  <span className="text-muted-foreground">vs last month</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Charts and Data */}
      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="sales">Sales</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="customers">Customers</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Revenue Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2"
            >
              <Card className="glass-effect border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Revenue Trend</span>
                  </CardTitle>
                  <CardDescription>
                    Monthly revenue over the past year
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 rounded-lg border border-border/50 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <BarChart3 className="h-16 w-16 text-primary/50 mx-auto" />
                      <p className="text-muted-foreground">Revenue chart visualization</p>
                      <p className="text-sm text-muted-foreground">Interactive chart would be rendered here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Products */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="glass-effect border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Package className="h-5 w-5 text-primary" />
                    <span>Top Products</span>
                  </CardTitle>
                  <CardDescription>
                    Best performing products this month
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {topProducts.map((product, index) => (
                    <motion.div
                      key={product.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">{product.name}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{product.sales} sales</span>
                          <span>•</span>
                          <span>{product.revenue}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {product.trend === 'up' ? (
                          <TrendingUp className="h-4 w-4 text-green-500" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-red-500" />
                        )}
                        <Badge variant="outline">#{index + 1}</Badge>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Recent Activity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Activity className="h-5 w-5 text-primary" />
                  <span>Recent Activity</span>
                </CardTitle>
                <CardDescription>
                  Latest business activities and events
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      className="flex items-center space-x-4 p-3 rounded-lg hover:bg-muted/50 transition-colors"
                    >
                      <div className={`w-2 h-2 rounded-full ${
                        activity.type === 'sale' ? 'bg-green-500' :
                        activity.type === 'inventory' ? 'bg-yellow-500' :
                        activity.type === 'customer' ? 'bg-blue-500' :
                        'bg-red-500'
                      }`} />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{activity.message}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                      <Badge variant="outline" className="capitalize">
                        {activity.type}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>

        <TabsContent value="sales">
          <Card className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle>Sales Analytics</CardTitle>
              <CardDescription>Detailed sales performance metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 rounded-lg border border-border/50 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <PieChart className="h-16 w-16 text-primary/50 mx-auto" />
                  <p className="text-muted-foreground">Sales analytics dashboard</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="products">
          <Card className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle>Product Performance</CardTitle>
              <CardDescription>Product-specific analytics and insights</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/20 rounded-lg border border-border/50 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Package className="h-16 w-16 text-primary/50 mx-auto" />
                  <p className="text-muted-foreground">Product analytics dashboard</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="customers">
          <Card className="glass-effect border-border/50">
            <CardHeader>
              <CardTitle>Customer Insights</CardTitle>
              <CardDescription>Customer behavior and demographics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-96 bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 rounded-lg border border-border/50 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Users className="h-16 w-16 text-primary/50 mx-auto" />
                  <p className="text-muted-foreground">Customer analytics dashboard</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}