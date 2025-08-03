'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Loader2 } from 'lucide-react'
import { downloadAPK, EDGEMIND_FILENAME } from '../utils/downloadUtils'

interface DownloadButtonProps {
  variant?: 'primary' | 'secondary'
  size?: 'sm' | 'lg'
  className?: string
}

export default function DownloadButton({ 
  variant = 'primary', 
  size = 'lg',
  className = ''
}: DownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = async () => {
    setIsDownloading(true)
    
    try {
      await downloadAPK(EDGEMIND_FILENAME)
      console.log('Direct download completed!')
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const baseClasses = "flex items-center justify-center space-x-2 font-semibold rounded-lg transition-all duration-300 cursor-pointer"
  
  const variantClasses = {
    primary: "bg-gradient-to-r from-purple-500 to-purple-200 text-white hover:from-purple-600 hover:to-purple-300",
    secondary: "border border-white/30 text-white bg-black/10 hover:bg-white/15"
  }

  const sizeClasses = {
    sm: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  }

  const iconSize = size === 'lg' ? 'w-6 h-6' : 'w-5 h-5'

  return (
    <motion.button
      onClick={handleDownload}
      disabled={isDownloading}
      whileHover={{ scale: isDownloading ? 1 : 1.05 }}
      whileTap={{ scale: isDownloading ? 1 : 0.95 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        isDownloading ? 'opacity-75 cursor-not-allowed' : ''
      }`}
    >
      {isDownloading ? (
        <Loader2 className={`${iconSize} animate-spin`} />
      ) : (
        <Download className={iconSize} />
      )}
             <span>
         {isDownloading ? 'Downloading...' : 'Download APK'}
       </span>
    </motion.button>
  )
} 