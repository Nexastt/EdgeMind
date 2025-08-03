'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-700 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-2 text-white hover:text-purple-200 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-black/20 backdrop-blur-md rounded-xl p-8 border border-white/10"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
              Terms of Service
            </h1>
            
            <div className="space-y-6 text-gray-300">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                <p>By downloading and using EdgeMind, you agree to these Terms of Service. If you do not agree, please do not use the application.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">2. Local Data Processing</h2>
                <p>EdgeMind operates entirely on your device. We do not collect, store, or transmit any of your data to external servers. All processing happens locally on your device for maximum privacy.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">3. Open Source LLM Models</h2>
                <p>EdgeMind uses open source Large Language Models (LLMs) that are freely available under MIT license. These models are downloaded to your device and run locally. We do not own or claim ownership of these models.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">4. No Data Collection</h2>
                <p>We do not collect any personal information, usage data, or analytics. Your conversations, commands, and device interactions remain entirely on your device.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">5. Device Requirements</h2>
                <p>EdgeMind requires Android 10 or later. Performance depends on your device's capabilities. Local LLM processing requires sufficient device resources.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">6. Disclaimer</h2>
                <p>EdgeMind is provided "as is" without warranties. We are not responsible for any issues arising from the use of the application or the open source LLM models.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">7. Updates</h2>
                <p>We may release updates to improve functionality. Updates are optional and can be downloaded from our website.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">8. Contact</h2>
                <p>For questions about these terms, contact us at <a href="mailto:EdgeMind01@proton.me" className="text-purple-200 hover:text-purple-100">EdgeMind01@proton.me</a></p>
              </div>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400">Last updated: {new Date().toLocaleDateString()}</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
} 