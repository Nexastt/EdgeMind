'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { 
  Smartphone, 
  Shield, 
  Zap, 
  Search, 
  Settings, 
  Lightbulb,
  Download,
  Mail,
  Github,
  Twitter
} from 'lucide-react'
import DownloadButton from './components/DownloadButton'

export default function Home() {
  const features = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Local & Private",
      description: "All processing happens on your device. No data sent to cloud servers."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Device-Based Performance",
      description: "Performance depends on your device. Local LLM processing for privacy."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Navigation",
      description: "Find settings and apps instantly with natural language commands."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Device Control",
      description: "Control your device with simple text commands and navigation."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Coming Soon: Voice Commands",
      description: "Voice commands like 'Lumos' for flashlight coming in next release."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "Your data stays on your device. No tracking, no surveillance."
    }
  ]

  const useCases = [
    "Open any app with text commands",
    "Navigate settings without scrolling",
    "Control device features (flashlight, volume, etc.)",
    "Search your device intelligently",
    "Replace Google Assistant completely",
    "Work offline with full functionality"
  ]

  return (
         <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-700 to-slate-900">
      {/* Navigation */}
             <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
                         <div className="flex items-center space-x-2">
               <div className="w-8 h-8 rounded-lg overflow-hidden bg-white">
                 <Image 
                   src="/Gemini_Generated_Image_g146vkg146vkg146 (1).png" 
                   alt="EdgeMind Logo" 
                   width={32}
                   height={32}
                   className="w-full h-full object-cover"
                 />
               </div>
               <span className="text-xl font-bold text-white">EdgeMind</span>
             </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              The Future of
              <span className="gradient-text block"> Mobile Assistance</span>
            </h1>
                                      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                EdgeMind is your local, private mobile RAG assistant. 
                Experience the privilege of running LLMs on your device with complete privacy.
                Replace Google Assistant with something that actually respects your privacy.
                Voice commands coming in the next release!
              </p>
                         <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <DownloadButton variant="primary" size="lg" />
                             <motion.button
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/15 transition-colors bg-black/10"
               >
                Learn More
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose EdgeMind?
            </h2>
                         <p className="text-xl text-gray-300 max-w-2xl mx-auto">
               Experience the privilege of running LLMs locally on your mobile device with complete privacy
             </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                                 className="feature-card rounded-xl p-6 hover:bg-white/10 transition-all duration-300 bg-black/10"
              >
                                 <div className="text-purple-200 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
             <section className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What Can EdgeMind Do?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From simple commands to complex device control
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-white"
              >
                <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                <span className="text-lg">{useCase}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Try EdgeMind?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download the APK and experience the future of mobile assistance
            </p>
                                      <DownloadButton variant="primary" size="lg" className="mx-auto px-12 py-6 text-xl" />
                         <p className="text-sm text-gray-400 mt-4">
               Compatible with Android 10+ • Performance varies by device • 100% Private
             </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
             <section id="contact" className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Found a Bug?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're constantly improving EdgeMind. Let us know about any issues or suggestions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                             <a
                 href="mailto:EdgeMind01@proton.me"
                 className="flex items-center space-x-2 bg-black/20 text-white px-6 py-3 rounded-lg hover:bg-black/30 transition-colors"
               >
                <Mail className="w-5 h-5" />
                <span>EdgeMind01@proton.me</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
             <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
                                <div className="flex items-center justify-center space-x-2 mb-4">
             <div className="w-6 h-6 rounded-lg overflow-hidden bg-white">
               <Image 
                 src="/Gemini_Generated_Image_g146vkg146vkg146 (1).png" 
                 alt="EdgeMind Logo" 
                 width={24}
                 height={24}
                 className="w-full h-full object-cover"
               />
             </div>
             <span className="text-lg font-bold text-white">EdgeMind</span>
           </div>
          <p className="text-gray-400 mb-4">
            The future of mobile assistance. Local, private, and powerful.
          </p>
                     <div className="flex justify-center space-x-6 text-gray-400">
             <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
             <a href="/terms" className="hover:text-white transition-colors">Terms</a>
             <a href="mailto:EdgeMind01@proton.me" className="hover:text-white transition-colors">Support</a>
           </div>
        </div>
      </footer>
    </div>
  )
} 