'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowLeft, Shield, Lock, Eye, Smartphone } from 'lucide-react'

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            
            <div className="space-y-8 text-gray-300">
              <div className="text-center mb-8">
                <div className="flex justify-center space-x-4 mb-4">
                  <Shield className="w-8 h-8 text-purple-200" />
                  <Lock className="w-8 h-8 text-purple-200" />
                  <Eye className="w-8 h-8 text-purple-200" />
                  <Smartphone className="w-8 h-8 text-purple-200" />
                </div>
                <p className="text-xl text-white font-semibold">Your Privacy is Our Priority</p>
                <p className="text-gray-300">EdgeMind is designed with privacy-first principles</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Zero Data Collection</h2>
                <p>EdgeMind does not collect, store, or transmit any of your personal data. We have no servers, no databases, and no way to access your information. Everything stays on your device.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Local Processing Only</h2>
                <p>All AI processing happens locally on your device using open source LLM models. Your conversations, commands, and device interactions never leave your device. No internet connection required for core functionality.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">No Analytics or Tracking</h2>
                <p>We do not use analytics, tracking pixels, or any monitoring tools. We cannot see how you use EdgeMind because we don't collect that information.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Open Source Models</h2>
                <p>EdgeMind uses open source Large Language Models that are freely available under MIT license. These models are downloaded to your device and run entirely locally. We do not own or control these models.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Device Permissions</h2>
                <p>EdgeMind may request permissions to access device features like flashlight, settings, and apps. These permissions are used only for the features you enable and remain under your control.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">No Third-Party Services</h2>
                <p>We do not integrate with third-party services, APIs, or external data sources. EdgeMind operates completely independently on your device.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Your Data Control</h2>
                <p>You have complete control over your data. You can uninstall EdgeMind at any time, and all associated data will be removed from your device. We cannot access or recover any data.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Updates and Communication</h2>
                <p>When you contact us for support or bug reports, we only receive the information you choose to share. We do not automatically collect any diagnostic or usage information.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Children's Privacy</h2>
                <p>EdgeMind does not knowingly collect any personal information from children under 13. Since we don't collect any data, this is inherently protected.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Changes to This Policy</h2>
                <p>If we make changes to this privacy policy, we will update this page. Since we don't collect data, our privacy practices are unlikely to change.</p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-white mb-3">Contact Us</h2>
                <p>If you have questions about our privacy practices, contact us at <a href="mailto:EdgeMind01@proton.me" className="text-purple-200 hover:text-purple-100">EdgeMind01@proton.me</a></p>
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