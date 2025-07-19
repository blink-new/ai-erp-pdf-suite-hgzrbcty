import React, { useState, useEffect, useMemo } from 'react'

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0)
  const [currentText, setCurrentText] = useState('INITIALIZING OMNITRIX...')

  const loadingTexts = useMemo(() => [
    'INITIALIZING OMNITRIX...',
    'SCANNING ALIEN DNA...',
    'CALIBRATING TRANSFORMATION MATRIX...',
    'LOADING HERO PROTOCOLS...',
    'READY FOR TRANSFORMATION!'
  ], [])

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          return 100
        }
        return prev + 2
      })
    }, 50)

    const textInterval = setInterval(() => {
      setCurrentText(prev => {
        const currentIndex = loadingTexts.indexOf(prev)
        const nextIndex = (currentIndex + 1) % loadingTexts.length
        return loadingTexts[nextIndex]
      })
    }, 600)

    return () => {
      clearInterval(progressInterval)
      clearInterval(textInterval)
    }
  }, [loadingTexts])

  return (
    <div className="fixed inset-0 bg-void-black flex items-center justify-center z-50">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-black via-void-black to-space-black"></div>
      
      {/* Central Omnitrix */}
      <div className="relative z-10 flex flex-col items-center space-y-8">
        {/* Omnitrix Watch */}
        <div className="relative">
          {/* Outer Ring */}
          <div className="w-32 h-32 rounded-full border-4 border-ben-green animate-omnitrix-spin glow-green">
            {/* Inner Core */}
            <div className="absolute inset-4 rounded-full bg-ben-green animate-alien-glow flex items-center justify-center">
              {/* Center Symbol */}
              <div className="w-8 h-8 bg-void-black rounded-full flex items-center justify-center">
                <div className="w-4 h-4 bg-ben-green rounded-full animate-energy-pulse"></div>
              </div>
            </div>
            
            {/* Energy Particles */}
            <div className="absolute -inset-8">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-ben-green rounded-full animate-energy-pulse"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `rotate(${i * 45}deg) translateY(-60px)`,
                    animationDelay: `${i * 0.2}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-4">
          <h1 className="font-orbitron text-2xl md:text-3xl font-bold text-ben-green text-glow-green animate-bounce-in">
            {currentText}
          </h1>
          
          {/* Progress Bar */}
          <div className="w-80 h-2 bg-space-black rounded-full border border-ben-green overflow-hidden">
            <div 
              className="h-full bg-alien-gradient transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Progress Percentage */}
          <div className="font-rajdhani text-lg text-ben-green">
            {progress}%
          </div>
        </div>

        {/* DNA Helix Animation */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-16 bg-ben-green rounded-full animate-energy-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
      </div>

      {/* Corner Effects */}
      <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-ben-green animate-fade-in"></div>
      <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-ben-green animate-fade-in"></div>
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-ben-green animate-fade-in"></div>
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-ben-green animate-fade-in"></div>
    </div>
  )
}

export default LoadingScreen