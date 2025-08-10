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
      title: "100% Offline",
      description: "No internet required for inference or smart navigation. Works completely offline after setup."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Local AI Processing",
      description: "All AI processing happens on your device. No cloud servers, no internet dependency."
    },
    {
      icon: <Search className="w-8 h-8" />,
      title: "Smart Navigation",
      description: "Navigate settings and apps instantly with natural language commands - completely offline."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Device Control",
      description: "Control your device with simple text commands and navigation without internet."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Coming Soon: Voice Commands",
      description: "Voice commands like 'Lumos' for flashlight coming in next release - all offline."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Privacy First",
      description: "Your data stays on your device. No tracking, no surveillance, no internet required."
    }
  ]

  const advancedFeatures = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "Intelligent Actions & Navigation",
      description: "Navigate through Android features and perform actions by providing natural language commands."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Complete On-Device RAG",
      description: "Upload personal documents and ask questions with complete privacy - everything stays on your device."
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Call & SMS Logs Access",
      description: "Query your call logs and SMS logs through natural language commands on high-end devices."
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Multi-Model Support",
      description: "Download and switch between multiple state-of-the-art local LLMs on mobile seamlessly."
    }
  ]

  const useCases = [
    "Open any app with text commands",
    "Navigate settings without scrolling",
    "Control device features (flashlight, volume, etc.)",
    "Search your device intelligently",
    "Do assistant work locally - a privacy-focused alternative",
    "Work offline with full functionality"
  ]

  const ragFeatures = [
    "Upload personal documents (PDFs, images, text)",
    "Ask questions about your documents with natural language",
    "Query SMS and call logs on high-end devices",
    "Access personal data without privacy concerns",
    "Download multiple state-of-the-art local LLMs",
    "Switch between models for different performance needs"
  ]

  return (
         <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-700 to-slate-900">
      {/* Navigation */}
             <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
                         <div className="flex items-center space-x-2">
               <div className="w-12 h-12 rounded-lg overflow-hidden bg-white">
                 <Image 
                   src="/Gemini_Generated_Image_g146vkg146vkg146 (1).png" 
                   alt="EdgeMind Logo" 
                   width={48}
                   height={48}
                   className="w-full h-full object-contain"
                   quality={100}
                   priority
                   unoptimized
                 />
               </div>
               <span className="text-xl font-bold text-white">EdgeMind</span>
             </div>
            <div className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#demo" className="text-gray-300 hover:text-white transition-colors">Demo</a>
              <a href="#installation" className="text-gray-300 hover:text-white transition-colors">Installation Guide</a>
              <a href="#download" className="text-gray-300 hover:text-white transition-colors">Download</a>
              <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* EdgeMind Overview Section */}
      <section className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              EdgeMind Overview
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your Local AI Assistant - Experience the full power of EdgeMind
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="aspect-[9/16] bg-gray-700 rounded-xl overflow-hidden">
                                  <iframe
                    id="overview-video"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/C7oaMbbp1fg?autoplay=1&mute=1&loop=1&playlist=C7oaMbbp1fg&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
                    title="EdgeMind Overview Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-white">Your Local AI Assistant</h3>
                <p className="text-gray-300 leading-relaxed">
                  Experience the full power of EdgeMind - your local, private mobile RAG assistant that runs completely on your device. 
                  No cloud servers, no data collection, just pure AI power in your pocket.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                    <span className="text-gray-300">100% Private & Local</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                    <span className="text-gray-300">On-Device LLM Processing</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                    <span className="text-gray-300">Complete RAG Capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                    <span className="text-gray-300">Local AI RAG - Full RAG capabilities running locally</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                    <span className="text-gray-300">Smart Navigation - No LLM installation required</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                    <span className="text-gray-300">Multiple Model Support - Choose between different models</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                    <span className="text-gray-300">SMS RAG & Call Log RAG - Intelligent search capabilities</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                    <span className="text-gray-300">Lumos & Custom Commands - Device control
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                    <span className="text-gray-300">100% Private after model download - No internet required</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

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

      {/* Demo Section */}
      <section id="demo" className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              See EdgeMind in Action
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Watch our comprehensive demo videos showcasing EdgeMind's capabilities
            </p>
          </motion.div>



          {/* Feature Demos Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Row 1: Video 1 with description and Video 2 with explanation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-black/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">Smart Navigation</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="aspect-[9/16] bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    id="smart-navigate-video"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/vmu1ORrPvvM?autoplay=1&mute=1&loop=1&playlist=vmu1ORrPvvM&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
                    title="Smart Navigation Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Navigate through Android settings and apps instantly with natural language commands. 
                    No more scrolling through endless menus - just tell EdgeMind what you want to do.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Natural Language Commands</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Instant App Navigation</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Settings Quick Access</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-black/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-white mb-4 text-center">SMS & Call Logs RAG</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="aspect-[9/16] bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    id="sms-rag-video"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/Fen87jTWaFg?autoplay=1&mute=1&loop=1&playlist=Fen87jTWaFg&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
                    title="SMS & Call Logs RAG Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Query your SMS messages and call logs using natural language. 
                    Find specific conversations, check call history, and get insights from your personal data with complete privacy.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Natural Language Queries</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">SMS & Call History Search</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Complete Privacy Protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Row 2: Videos 3 & 4 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {/* Document RAG - VIDEO 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-black/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-3 text-center">Document RAG</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="aspect-[9/16] bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    id="document-rag-video"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/QrzvSd8a_lc?autoplay=1&mute=1&loop=1&playlist=QrzvSd8a_lc&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
                    title="Document RAG Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Upload and query documents with advanced RAG capabilities. 
                    Get instant answers from your PDFs, text files, and other documents with complete privacy.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Document Upload & Processing</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Advanced RAG Queries</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Multi-Format Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Voice Commands - VIDEO 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-black/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-lg font-semibold text-white mb-3 text-center">Custom Commands</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div className="aspect-square bg-gray-700 rounded-lg overflow-hidden">
                  <iframe
                    id="voice-commands-video"
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/KKlsiU2M7-I?autoplay=1&mute=1&loop=1&playlist=KKlsiU2M7-I&controls=1&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&vq=hd1080"
                    title="Custom Command Lumos Demo"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Control your device with custom commands using advanced speech recognition. 
                    Hands-free operation for a truly futuristic mobile experience.
                  </p>
                  <div className="space-y-2">

                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Custom Commands: "Lumos" turns on flashlight, "Nox" turns off</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Add your own custom commands in next update</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-purple-200 rounded-full"></div>
                      <span className="text-gray-300 text-xs">Future: Create custom actions and commands</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Advanced Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the full power of on-device AI with complete privacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedFeatures.map((feature, index) => (
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



      {/* RAG Features Section */}
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
              RAG Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Powerful document processing and personal data querying with complete privacy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {ragFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 text-white"
              >
                <div className="w-2 h-2 bg-purple-200 rounded-full"></div>
                <span className="text-lg">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
             <section className="py-20 px-4">
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
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get EdgeMind Today
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Download and experience the future of mobile AI
            </p>
            <div className="flex justify-center">
              <DownloadButton />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Installation Guide Section */}
      <section id="installation" className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Installation Guide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Follow these steps to install EdgeMind on your Android device
            </p>
          </motion.div>

          <div className="space-y-8">
            {/* Row 1: Step 1 - Small rectangle */}
            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-4 border border-white/10 max-w-md"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1">Open Play Store</h3>
                    <p className="text-gray-300 text-sm">Launch the Google Play Store app on your Android device</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 2: Steps 2 & 3 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Click on Profile Icon</h3>
                    <p className="text-gray-300 mb-4">Tap the profile icon in the top right corner of the Play Store</p>
                    <div className="relative inline-block">
                      <img 
                        src="/PLAYSTORE.jpg" 
                        alt="Play Store Profile Icon" 
                        className="w-64 h-auto rounded-lg border-2 border-purple-400"
                      />
                      <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-bold border-2 border-white">
                        CLICK HERE
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Click on Play Protect</h3>
                    <p className="text-gray-300 mb-4">Select "Play Protect" from the menu options</p>
                    <div className="relative inline-block">
                      <img 
                        src="/CLICKONPLAYPROTECT.jpg" 
                        alt="Play Protect Menu" 
                        className="w-64 h-auto rounded-lg"
                      />
                      <div className="absolute top-[288px] left-10 bg-yellow-400/50 px-8 py-3 rounded text-xs border-2 border-yellow-400 shadow-lg">
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 3: Steps 4 & 5 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Step 4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    4
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Click Settings Icon</h3>
                    <p className="text-gray-300 mb-4">In the Play Protect page, tap the settings icon in the top right corner</p>
                    <div className="relative inline-block">
                      <img 
                        src="/CLICKONSETTING.jpg" 
                        alt="Play Protect Settings Icon" 
                        className="w-64 h-auto rounded-lg border-2 border-blue-400"
                      />
                      <div className="absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded text-xs font-bold border-2 border-white">
                        SETTINGS
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 5 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    5
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Turn Off Toggle & Pause</h3>
                    <p className="text-gray-300 mb-4">In the Play Protect settings page, turn off the toggle and click on "Pause" (this is temporary)</p>
                    <div className="relative inline-block">
                      <img 
                        src="/PAUSETHEPLAYPROTECT.jpg" 
                        alt="Pause Play Protect" 
                        className="w-64 h-auto rounded-lg border-2 border-orange-400"
                      />
                      <div className="absolute top-[110px] right-5 bg-orange-500/50 px-4 py-2 rounded text-xs border-2 border-orange-400 shadow-lg">
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Row 4: Steps 6 & 7 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Step 6 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    6
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Play Protect Turned Off</h3>
                    <p className="text-gray-300 mb-4">After this, install our app. This is due to Android restrictions on side loading.</p>
                    <div className="relative inline-block">
                      <img 
                        src="/PAUSEDPLAYPROTECT.jpg" 
                        alt="Play Protect Paused" 
                        className="w-64 h-auto rounded-lg border-2 border-green-400"
                      />
                      <div className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-bold">
                        TURNED OFF
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-blue-900/20 border border-blue-400/30 rounded-lg">
                      <p className="text-blue-200 text-sm">
                        <strong>Note:</strong> In a few weeks, we will officially upload to all app stores. 
                        Don't worry - once our app is installed, you can turn Play Protect back on!
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Step 7 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-xl p-6 border border-white/10"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold text-lg flex-shrink-0">
                    7
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">Click Install Our App</h3>
                    <p className="text-gray-300 mb-4">Now you can install EdgeMind! Click on the <span className="text-yellow-300 font-bold">INSTALL</span> button when prompted.</p>
                    <div className="relative inline-block">
                      <img 
                        src="/INSTALL.jpg" 
                        alt="Install EdgeMind App" 
                        className="w-64 h-auto rounded-lg border-2 border-yellow-400"
                      />
                      <div className="absolute top-[306px] right-5 bg-yellow-400/50 text-black px-6 py-2 rounded text-sm font-bold border-2 border-white shadow-lg animate-pulse">
                        
                      </div>
                    </div>
                    <div className="mt-4 p-4 bg-green-900/20 border border-green-400/30 rounded-lg">
                      <p className="text-green-200 text-sm">
                        <strong>Important:</strong> Click the <span className="text-yellow-300 font-bold">INSTALL</span> button to proceed with the installation. 
                        This will download and install EdgeMind on your device.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
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

      {/* Video Visibility Control Script */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            document.addEventListener('DOMContentLoaded', function() {
              const videoIds = [
                'overview-video',
                'smart-navigate-video', 
                'sms-rag-video',
                'document-rag-video',
                'voice-commands-video'
              ];
              
              let players = {};
              let observers = {};
              
              // Load YouTube API
              const tag = document.createElement('script');
              tag.src = 'https://www.youtube.com/iframe_api';
              const firstScriptTag = document.getElementsByTagName('script')[0];
              firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
              
              // Initialize YouTube players when API is ready
              window.onYouTubeIframeAPIReady = function() {
                videoIds.forEach((videoId, index) => {
                  const videoElement = document.getElementById(videoId);
                  if (videoElement) {
                    players[videoId] = new YT.Player(videoId, {
                      events: {
                        'onReady': (event) => onPlayerReady(event, videoId),
                      }
                    });
                  }
                });
              };
              
              function onPlayerReady(event, videoId) {
                const videoElement = document.getElementById(videoId);
                if (videoElement) {
                  // Create intersection observer to watch video visibility
                  observers[videoId] = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                      if (entry.isIntersecting) {
                        // Video is visible, play it
                        event.target.playVideo();
                      } else {
                        // Video is not visible, pause it
                        event.target.pauseVideo();
                      }
                    });
                  }, {
                    threshold: 0.5, // Trigger when 50% of video is visible
                    rootMargin: '0px'
                  });
                  
                  // Start observing the video element
                  observers[videoId].observe(videoElement);
                }
              }
            });
          `
        }}
      />

      {/* Developer Information Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Meet Our Developers
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The talented team behind EdgeMind's innovative local AI technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Developer 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-purple-500/30">
                <img
                  src="/logo.png"
                  alt="Developer 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Alex Chen</h3>
              <p className="text-gray-300 mb-3">Lead AI Engineer</p>
              <div className="space-y-2">
                <a 
                  href="mailto:alex.chen@edgemind.ai" 
                  className="block text-purple-300 hover:text-purple-200 transition-colors text-sm"
                >
                  📧 alex.chen@edgemind.ai
                </a>
                <a 
                  href="https://linkedin.com/in/alexchen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200 transition-colors text-sm"
                >
                  🔗 LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/alexchen" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  💻 GitHub Profile
                </a>
              </div>
            </motion.div>

            {/* Developer 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-500/30">
                <img
                  src="/logo.png"
                  alt="Developer 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Sarah Kim</h3>
              <p className="text-gray-300 mb-3">Mobile App Developer</p>
              <div className="space-y-2">
                <a 
                  href="mailto:sarah.kim@edgemind.ai" 
                  className="block text-purple-300 hover:text-purple-200 transition-colors text-sm"
                >
                  📧 sarah.kim@edgemind.ai
                </a>
                <a 
                  href="https://linkedin.com/in/sarahkim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200 transition-colors text-sm"
                >
                  🔗 LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/sarahkim" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  💻 GitHub Profile
                </a>
              </div>
            </motion.div>

            {/* Developer 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white/5 rounded-xl p-6 border border-white/10 text-center hover:bg-white/10 transition-all duration-300"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-green-500/30">
                <img
                  src="/logo.png"
                  alt="Developer 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Marcus Rodriguez</h3>
              <p className="text-gray-300 mb-3">Privacy & Security Expert</p>
              <div className="space-y-2">
                <a 
                  href="mailto:marcus.rodriguez@edgemind.ai" 
                  className="block text-purple-300 hover:text-purple-200 transition-colors text-sm"
                >
                  📧 marcus.rodriguez@edgemind.ai
                </a>
                <a 
                  href="https://linkedin.com/in/marcusrodriguez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-blue-300 hover:text-blue-200 transition-colors text-sm"
                >
                  🔗 LinkedIn Profile
                </a>
                <a 
                  href="https://github.com/marcusrodriguez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-300 hover:text-white transition-colors text-sm"
                >
                  💻 GitHub Profile
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
             <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center">
                                <div className="flex items-center justify-center space-x-2 mb-4">
             <div className="w-10 h-10 rounded-lg overflow-hidden bg-white">
               <Image 
                 src="/Gemini_Generated_Image_g146vkg146vkg146 (1).png" 
                 alt="EdgeMind Logo" 
                 width={40}
                 height={40}
                 className="w-full h-full object-contain"
                 quality={100}
                 priority
                 unoptimized
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
