'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { 
  ArrowRight, 
  CheckCircle, 
  Phone, 
  ChevronDown,
  Clock,
  DollarSign,
  Award,
  Home,
  Waves,
  Hammer,
  Paintbrush,
  Package,
  Shield,
  Bath,
  Heart
} from 'lucide-react'

const iconMap = {
  'Waves': Waves,
  'Hammer': Hammer,
  'Paintbrush': Paintbrush,
  'Package': Package,
  'Shield': Shield,
  'Bath': Bath,
  'Heart': Heart
}

interface ServiceDetailPageProps {
  title: string
  subtitle: string
  iconName: string
  heroImage: string
  description: string
  mainContent: {
    title: string
    content: string
  }[]
  features: string[]
  process: {
    step: number
    title: string
    description: string
  }[]
  pricing: {
    starting: string
    factors: string[]
  }
  faqs: {
    question: string
    answer: string
  }[]
  relatedServices: string[]
}

const relatedServicesMap: Record<string, { name: string; href: string }> = {
  'bathroom-wall-panels': { name: 'Bathroom Wall Panels', href: '/services/bathroom-wall-panels' },
  'bathtub-chip-repair': { name: 'Bathtub Chip Repair', href: '/services/bathtub-chip-repair' },
  'bathtub-tiles-reglazing': { name: 'Bathtub & Tiles Reglazing', href: '/services/bathtub-tiles-reglazing' },
  'cabinet-resurfacing': { name: 'Cabinet Resurfacing', href: '/services/cabinet-resurfacing' },
  'grab-bar-installation': { name: 'Grab Bar Installation', href: '/services/grab-bar-installation' },
  'walk-in-tub': { name: 'Walk In Tub', href: '/services/walk-in-tub' }
}

export default function ServiceDetailPage({
  title,
  subtitle,
  iconName,
  heroImage,
  description,
  mainContent,
  features,
  process,
  pricing,
  faqs,
  relatedServices
}: ServiceDetailPageProps) {
  const Icon = iconMap[iconName as keyof typeof iconMap] || Shield
  const [openFaq, setOpenFaq] = React.useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] sm:h-[60vh] min-h-[400px] sm:min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl text-center lg:text-left"
          >
            {/* Breadcrumb */}
            <nav className="flex items-center justify-center lg:justify-start space-x-2 text-sm mb-4 md:mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                <Home className="w-4 h-4" />
              </Link>
              <span>/</span>
              <Link href="/#services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <span>/</span>
              <span className="text-primary">{title}</span>
            </nav>

            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-4 lg:space-y-0 lg:space-x-4 mb-6 md:mb-8">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">{title}</h1>
                <p className="text-lg md:text-xl text-gray-300 mt-2">{subtitle}</p>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-6 md:mb-8 px-4 lg:px-0">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 items-center justify-center lg:justify-start">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 group touch-manipulation"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="tel:+14374227010"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-300 font-semibold touch-manipulation"
              >
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                <span className="hidden sm:inline">Call (437) 422-7010</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section ref={sectionRef} className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8 md:space-y-12">
              {/* Main Content Sections */}
              {mainContent.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{section.title}</h2>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line text-sm md:text-base">
                    {section.content}
                  </div>
                </motion.div>
              ))}

              {/* Process Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Our Process</h2>
                <div className="space-y-4">
                  {process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                      className="flex items-start space-x-3 md:space-x-4"
                    >
                      <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm md:text-base">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1 text-sm md:text-base">{step.title}</h3>
                        <p className="text-gray-600 text-sm md:text-base">{step.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="space-y-6"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <div className="space-y-3 md:space-y-4">
                  {faqs.map((faq, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                      className="bg-gray-50 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full px-4 md:px-6 py-3 md:py-4 text-left flex items-center justify-between hover:bg-gray-100 transition-colors touch-manipulation"
                      >
                        <span className="font-semibold text-gray-900 text-sm md:text-base pr-4">{faq.question}</span>
                        <ChevronDown 
                          className={`w-4 h-4 md:w-5 md:h-5 text-gray-500 transition-transform flex-shrink-0 ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="px-4 md:px-6 pb-3 md:pb-4">
                          <p className="text-gray-600 text-sm md:text-base">{faq.answer}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6 md:space-y-8">
              {/* Features Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-2xl shadow-xl p-6 md:p-8 lg:sticky lg:top-24"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Key Features</h3>
                <ul className="space-y-2 md:space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2 md:space-x-3">
                      <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-sm md:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Info */}
                <div className="mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                      <span className="font-semibold text-gray-900 text-sm md:text-base">Pricing</span>
                    </div>
                    <span className="text-lg md:text-xl font-bold text-primary">{pricing.starting}</span>
                  </div>
                  <p className="text-xs md:text-sm text-gray-600 mb-2 md:mb-3">Pricing depends on:</p>
                  <ul className="space-y-1 text-xs md:text-sm text-gray-600">
                    {pricing.factors.map((factor, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="mt-6 md:mt-8">
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center w-full px-6 py-3 md:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 group touch-manipulation"
                  >
                    Get Your Free Quote
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>

                {/* Trust Badge */}
                <div className="mt-4 md:mt-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-primary">
                    <Award className="w-4 h-4" />
                    <span className="text-xs md:text-sm font-medium">3 Year Warranty Included</span>
                  </div>
                </div>
              </motion.div>

              {/* Related Services */}
              {relatedServices.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="bg-gray-50 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">Related Services</h3>
                  <div className="space-y-2 md:space-y-3">
                    {relatedServices.map((serviceId, index) => {
                      const service = relatedServicesMap[serviceId]
                      if (!service) return null
                      
                      return (
                        <Link
                          key={serviceId}
                          href={service.href}
                          className="block p-3 md:p-4 bg-white rounded-lg hover:bg-primary/5 transition-colors group touch-manipulation"
                        >
                          <span className="text-gray-700 group-hover:text-primary transition-colors text-sm md:text-base">
                            {service.name}
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 