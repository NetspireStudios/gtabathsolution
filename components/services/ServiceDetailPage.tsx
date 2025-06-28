'use client'

import React, { useRef, useState } from 'react'
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
  Heart,
  Loader2
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
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Simplified animations for better performance
  const simpleAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  }

  const handleQuoteClick = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Fixed mobile layout and button visibility */}
      <section className="relative min-h-[70vh] md:h-[70vh] flex items-center justify-center overflow-hidden pt-20 md:pt-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={heroImage}
            alt={title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl text-center lg:text-left mx-auto lg:mx-0 py-8 md:py-12"
          >
            {/* Breadcrumb - Hidden on mobile, visible on desktop */}
            <nav className="hidden md:flex items-center justify-center lg:justify-start space-x-2 text-sm mb-6 md:mb-8">
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

            <div className="flex flex-col lg:flex-row items-center lg:items-start space-y-6 lg:space-y-0 lg:space-x-6 mb-8 md:mb-10">
              <div className="w-16 h-16 md:w-20 md:h-20 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div className="text-center lg:text-left">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3">
                  {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-300">{subtitle}</p>
              </div>
            </div>

            <p className="text-base md:text-lg text-gray-200 leading-relaxed mb-8 md:mb-10 px-2 lg:px-0 max-w-3xl mx-auto lg:mx-0">
              {description}
            </p>

            {/* Fixed button layout for mobile visibility */}
            <div className="space-y-4 sm:space-y-0 sm:flex sm:flex-row sm:gap-4 items-center justify-center lg:justify-start max-w-md mx-auto lg:max-w-none">
              <Link
                href="/quote"
                onClick={handleQuoteClick}
                className="flex items-center justify-center w-full sm:flex-1 sm:max-w-xs px-6 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold text-base shadow-lg hover:shadow-xl touch-manipulation"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    Get Free Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </>
                )}
              </Link>
              
              <a
                href="tel:+14374227010"
                className="flex items-center justify-center w-full sm:flex-1 sm:max-w-xs px-6 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-lg hover:bg-white/20 transition-all duration-200 font-semibold text-base touch-manipulation"
              >
                <Phone className="w-5 h-5 mr-2" />
                <span className="hidden sm:inline">Call (437) 422-7010</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content - Better mobile spacing */}
      <section ref={sectionRef} className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-10 md:space-y-16">
              {/* Main Content Sections */}
              {mainContent.map((section, index) => (
                <motion.div
                  key={index}
                  {...simpleAnimation}
                  className="space-y-4 md:space-y-6"
                >
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>
                  <div className="text-gray-600 leading-relaxed whitespace-pre-line text-base md:text-lg">
                    {section.content}
                  </div>
                </motion.div>
              ))}

              {/* Process Section - Improved mobile visibility */}
              <motion.div
                {...simpleAnimation}
                className="bg-gray-50 rounded-2xl p-6 md:p-8 space-y-6 md:space-y-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
                  Our Process
                </h2>
                <div className="space-y-6 md:space-y-8">
                  {process.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 md:space-x-6 p-4 md:p-6 bg-white rounded-xl shadow-sm"
                    >
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl shadow-lg">
                        {step.step}
                      </div>
                      <div className="flex-1 pt-1">
                        <h3 className="font-bold text-gray-900 mb-2 text-lg md:text-xl">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* FAQs - Simplified for mobile */}
              <motion.div
                {...simpleAnimation}
                className="space-y-6 md:space-y-8"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center md:text-left">
                  Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === index ? null : index)}
                        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors touch-manipulation"
                      >
                        <span className="font-semibold text-gray-900 text-base md:text-lg pr-4 leading-tight">
                          {faq.question}
                        </span>
                        <ChevronDown 
                          className={`w-5 h-5 text-gray-500 transition-transform flex-shrink-0 ${
                            openFaq === index ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      {openFaq === index && (
                        <div className="px-6 pb-5 border-t border-gray-100">
                          <p className="text-gray-600 text-base md:text-lg leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar - Mobile improvements */}
            <div className="space-y-6 md:space-y-8 mt-8 lg:mt-0">
              {/* Features Card */}
              <motion.div
                {...simpleAnimation}
                className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100 lg:sticky lg:top-28"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                  Key Features
                </h3>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span className="text-gray-700 text-base leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-primary" />
                      <span className="font-semibold text-gray-900 text-lg">Pricing</span>
                    </div>
                    <span className="text-2xl font-bold text-primary">{pricing.starting}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">Pricing depends on:</p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {pricing.factors.map((factor, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full flex-shrink-0" />
                        <span>{factor}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button with loading - Mobile optimized */}
                <div className="mt-8">
                  <Link
                    href="/quote"
                    onClick={handleQuoteClick}
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl touch-manipulation"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Loading...
                      </>
                    ) : (
                      <>
                        Get Your Free Quote
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </Link>
                </div>

                {/* Mobile Call Button - Full width for mobile */}
                <div className="mt-4 block lg:hidden">
                  <a
                    href="tel:+14374227010"
                    className="inline-flex items-center justify-center w-full px-6 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-all duration-200 font-semibold text-lg shadow-sm touch-manipulation"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call (437) 422-7010
                  </a>
                </div>

                {/* Trust Badge */}
                <div className="mt-6 text-center">
                  <div className="flex items-center justify-center space-x-2 text-primary">
                    <Award className="w-4 h-4" />
                    <span className="text-sm font-medium">3 Year Warranty Included</span>
                  </div>
                </div>
              </motion.div>

              {/* Related Services - Mobile optimized */}
              {relatedServices.length > 0 && (
                <motion.div
                  {...simpleAnimation}
                  className="bg-gray-50 rounded-2xl p-6 md:p-8"
                >
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                    Related Services
                  </h3>
                  <div className="space-y-3">
                    {relatedServices.map((serviceId, index) => {
                      const service = relatedServicesMap[serviceId]
                      if (!service) return null
                      
                      return (
                        <Link
                          key={serviceId}
                          href={service.href}
                          className="block p-4 bg-white rounded-lg hover:bg-primary/5 transition-colors group touch-manipulation border border-gray-100"
                        >
                          <span className="text-gray-700 group-hover:text-primary transition-colors font-medium">
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