import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Upload, 
  Download, 
  Save, 
  Undo, 
  Redo, 
  Type, 
  Image, 
  Square, 
  Circle,
  Pen,
  Highlighter,
  Eraser,
  ZoomIn,
  ZoomOut,
  RotateCw,
  FileText,
  Layers,
  Settings,
  Bot,
  Sparkles
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Separator } from '../components/ui/separator'
import { Badge } from '../components/ui/badge'
import { Slider } from '../components/ui/slider'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

const tools = [
  { name: 'Select', icon: Square, active: true },
  { name: 'Text', icon: Type, active: false },
  { name: 'Draw', icon: Pen, active: false },
  { name: 'Highlight', icon: Highlighter, active: false },
  { name: 'Shapes', icon: Circle, active: false },
  { name: 'Image', icon: Image, active: false },
  { name: 'Eraser', icon: Eraser, active: false },
]

const recentDocuments = [
  { name: 'Contract_2024.pdf', size: '2.4 MB', modified: '2 hours ago', pages: 12 },
  { name: 'Invoice_001.pdf', size: '1.2 MB', modified: '1 day ago', pages: 3 },
  { name: 'Report_Q1.pdf', size: '5.8 MB', modified: '3 days ago', pages: 24 },
  { name: 'Proposal.pdf', size: '3.1 MB', modified: '1 week ago', pages: 8 },
]

export default function PDFEditor() {
  const [selectedTool, setSelectedTool] = useState('Select')
  const [zoomLevel, setZoomLevel] = useState([100])
  const [hasDocument, setHasDocument] = useState(false)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gradient">PDF Editor</h1>
          <p className="text-muted-foreground">Professional PDF editing with AI assistance</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Upload className="h-4 w-4 mr-2" />
            Upload PDF
          </Button>
          <Button className="gradient-primary text-white">
            <Bot className="h-4 w-4 mr-2" />
            AI Assist
          </Button>
        </div>
      </div>

      {!hasDocument ? (
        /* Welcome Screen */
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect border-border/50 h-96">
              <CardContent className="flex flex-col items-center justify-center h-full space-y-6">
                <motion.div
                  className="w-24 h-24 gradient-primary rounded-2xl flex items-center justify-center"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Upload className="h-12 w-12 text-white" />
                </motion.div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold">Upload Your PDF</h3>
                  <p className="text-muted-foreground">
                    Drag and drop your PDF file here, or click to browse
                  </p>
                </div>
                <Button 
                  className="gradient-primary text-white"
                  onClick={() => setHasDocument(true)}
                >
                  Choose File
                </Button>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span>Supports: PDF, DOC, DOCX</span>
                  <Separator orientation="vertical" className="h-4" />
                  <span>Max size: 50MB</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Recent Documents */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass-effect border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="h-5 w-5 text-primary" />
                  <span>Recent Documents</span>
                </CardTitle>
                <CardDescription>
                  Continue working on your files
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {recentDocuments.map((doc, index) => (
                  <motion.div
                    key={doc.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="p-3 rounded-lg border border-border/50 hover:bg-muted/50 cursor-pointer transition-colors"
                    onClick={() => setHasDocument(true)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{doc.name}</p>
                        <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                          <span>{doc.size}</span>
                          <span>•</span>
                          <span>{doc.pages} pages</span>
                        </div>
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {doc.modified}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      ) : (
        /* Editor Interface */
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-200px)]">
          {/* Toolbar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1"
          >
            <Card className="glass-effect border-border/50 h-full">
              <CardHeader>
                <CardTitle className="text-lg">Tools</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Drawing Tools */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Drawing Tools</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {tools.map((tool) => (
                      <Button
                        key={tool.name}
                        variant={selectedTool === tool.name ? "default" : "outline"}
                        size="sm"
                        className={`flex flex-col items-center space-y-1 h-16 ${
                          selectedTool === tool.name ? "gradient-primary text-white" : ""
                        }`}
                        onClick={() => setSelectedTool(tool.name)}
                      >
                        <tool.icon className="h-4 w-4" />
                        <span className="text-xs">{tool.name}</span>
                      </Button>
                    ))}
                  </div>
                </div>

                {/* Zoom Controls */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">Zoom</h4>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <ZoomOut className="h-4 w-4" />
                    </Button>
                    <div className="flex-1">
                      <Slider
                        value={zoomLevel}
                        onValueChange={setZoomLevel}
                        max={200}
                        min={25}
                        step={25}
                        className="w-full"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <ZoomIn className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="text-center text-sm text-muted-foreground">
                    {zoomLevel[0]}%
                  </div>
                </div>

                {/* AI Features */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">AI Features</h4>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Auto Extract Text
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Bot className="h-4 w-4 mr-2" />
                      Smart Fill Forms
                    </Button>
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Sparkles className="h-4 w-4 mr-2" />
                      Translate Document
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Editor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect border-border/50 h-full">
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Badge variant="outline">Page 1 of 12</Badge>
                    <Separator orientation="vertical" className="h-4" />
                    <span className="text-sm text-muted-foreground">Contract_2024.pdf</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Undo className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Redo className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <RotateCw className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Save className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="w-full h-full bg-white rounded-lg border-2 border-dashed border-border/50 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-40 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 flex items-center justify-center mx-auto">
                      <FileText className="h-16 w-16 text-blue-400" />
                    </div>
                    <div>
                      <h3 className="font-medium">PDF Document Loaded</h3>
                      <p className="text-sm text-muted-foreground">
                        Use the tools on the left to edit your document
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Properties Panel */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-1"
          >
            <Card className="glass-effect border-border/50 h-full">
              <CardHeader>
                <CardTitle className="text-lg">Properties</CardTitle>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="document" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="document">Document</TabsTrigger>
                    <TabsTrigger value="layers">Layers</TabsTrigger>
                  </TabsList>
                  <TabsContent value="document" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Document Info</h4>
                      <div className="space-y-1 text-sm text-muted-foreground">
                        <div className="flex justify-between">
                          <span>Pages:</span>
                          <span>12</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Size:</span>
                          <span>2.4 MB</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Format:</span>
                          <span>PDF 1.7</span>
                        </div>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Quick Actions</h4>
                      <div className="space-y-2">
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Download className="h-4 w-4 mr-2" />
                          Export PDF
                        </Button>
                        <Button variant="outline" size="sm" className="w-full justify-start">
                          <Settings className="h-4 w-4 mr-2" />
                          Document Settings
                        </Button>
                      </div>
                    </div>
                  </TabsContent>
                  <TabsContent value="layers" className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Layers</h4>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 p-2 rounded border border-border/50">
                          <Layers className="h-4 w-4 text-primary" />
                          <span className="text-sm">Text Layer</span>
                        </div>
                        <div className="flex items-center space-x-2 p-2 rounded border border-border/50">
                          <Layers className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">Background</span>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </div>
  )
}