'use client'

import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { 
  Waves, 
  Hammer, 
  Paintbrush, 
  Package, 
  Shield, 
  Bath, 
  ArrowRight, 
  Clock,
  DollarSign,
  Award
} from 'lucide-react'

const services = [
  {
    id: 'bathroom-wall-panels',
    name: 'Bathroom Wall Panels',
    description: 'Waterproof wall panels that transform your shower in just one day. No grout, easy to clean, and 100% waterproof.',
    icon: Waves,
    image: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Grout-free installation', 'Easy to clean', '100% waterproof'],
    price: 'From $1,200',
    duration: '1 Day',
    href: '/services/bathroom-wall-panels'
  },
  {
    id: 'bathtub-chip-repair',
    name: 'Bathtub Chip Repair',
    description: 'Professional chip and crack repair for porcelain, ceramic, and fiberglass surfaces. Color-matched for perfect results.',
    icon: Hammer,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Color matching', 'Professional repair', 'Long-lasting results'],
    price: 'From $150',
    duration: '2-4 Hours',
    href: '/services/bathtub-chip-repair'
  },
  {
    id: 'bathtub-tiles-reglazing',
    name: 'Bathtub & Tiles Reglazing',
    description: 'Complete reglazing service for bathtubs and tiles. Save thousands compared to replacement with a like-new finish.',
    icon: Paintbrush,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Save vs replacement', 'High-quality finish', '2-year warranty'],
    price: 'From $450',
    duration: '4-6 Hours',
    href: '/services/bathtub-tiles-reglazing'
  },
  {
    id: 'cabinet-resurfacing',
    name: 'Cabinet Resurfacing',
    description: 'Transform your kitchen cabinets without full replacement. New doors, hardware, and finishes for a fresh look.',
    icon: Package,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['New hardware', 'Custom finishes', 'Budget-friendly'],
    price: 'From $2,500',
    duration: '2-3 Days',
    href: '/services/cabinet-resurfacing'
  },
  {
    id: 'grab-bar-installation',
    name: 'Grab Bar Installation',
    description: 'Professional safety grab bar installation for bathrooms and showers. ADA compliant and secure mounting.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['ADA compliant', 'Secure mounting', 'Safety first'],
    price: 'From $120',
    duration: '1-2 Hours',
    href: '/services/grab-bar-installation'
  },
  {
    id: 'walk-in-tub',
    name: 'Walk In Tub',
    description: 'Safe and accessible walk-in tub installation. Perfect for seniors and those with mobility challenges.',
    icon: Bath,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    features: ['Easy access', 'Safety features', 'Therapeutic options'],
    price: 'From $3,500',
    duration: '1 Day',
    href: '/services/walk-in-tub'
  }
]

export default function ServicesSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })
  const [hoveredService, setHoveredService] = useState<string | null>(null)

  return (
    <section id="services" ref={sectionRef} className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We ensure and prioritize customer satisfaction, which is why we offer a 3-year warranty 
            to further suffice you, our process will last you and we are here every step of the way.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-40 sm:h-44 md:h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                {/* Icon */}
                <div className="absolute top-3 left-3 md:top-4 md:left-4">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                </div>

                {/* Price Badge */}
                <div className="absolute top-3 right-3 md:top-4 md:right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-2 py-1 md:px-3">
                    <span className="text-xs md:text-sm font-semibold text-gray-900">{service.price}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 md:p-6 space-y-3 md:space-y-4">
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-1.5 md:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                      <span className="text-xs md:text-sm text-gray-600 line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Duration & CTA */}
                <div className="pt-3 md:pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between mb-3 md:mb-4">
                    <div className="flex items-center space-x-1 text-xs md:text-sm text-gray-500">
                      <Clock className="w-3 h-3 md:w-4 md:h-4" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs md:text-sm text-primary">
                      <Award className="w-3 h-3 md:w-4 md:h-4" />
                      <span className="hidden sm:inline">3 Year Warranty</span>
                      <span className="sm:hidden">3Y Warranty</span>
                    </div>
                  </div>

                  <Link
                    href={service.href}
                    className="inline-flex items-center justify-center w-full px-4 py-2.5 md:py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-medium group touch-manipulation"
                  >
                    <span className="text-sm md:text-base">Learn More</span>
                    <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: hoveredService === service.id ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-primary/5 pointer-events-none"
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-12 md:mt-16"
        >
          <p className="text-gray-600 mb-6 md:mb-8 px-4">
            Don't see what you're looking for? We offer custom solutions for all your bathroom needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 group touch-manipulation"
            >
              Get Free Custom Quote
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+14374227010"
              className="inline-flex items-center justify-center w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-primary border-2 border-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300 font-semibold group touch-manipulation"
            >
              <span className="hidden sm:inline">Call for Consultation: (437) 422-7010</span>
              <span className="sm:hidden">Call: (437) 422-7010</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 