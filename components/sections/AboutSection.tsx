'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { 
  CheckCircle, 
  Award, 
  Users, 
  Clock, 
  Target,
  Heart,
  Shield,
  Sparkles,
  ArrowRight
} from 'lucide-react'

const stats = [
  { number: '10+', label: 'Years Experience', icon: Clock },
  { number: '500+', label: 'Happy Customers', icon: Users },
  { number: '3 Year', label: 'Warranty', icon: Shield },
  { number: '24/7', label: 'Support', icon: Heart }
]

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on quality. Every project is completed to the highest standards.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Your satisfaction is our priority. We listen, understand, and deliver beyond expectations.'
  },
  {
    icon: Sparkles,
    title: 'Innovation',
    description: 'We use the latest techniques and materials to provide cutting-edge solutions.'
  },
  {
    icon: Heart,
    title: 'Integrity',
    description: 'Honest pricing, transparent communication, and ethical business practices always.'
  }
]

const milestones = [
  { year: '2014', event: 'Company Founded', description: 'Started with a vision to transform bathrooms across GTA' },
  { year: '2016', event: 'Expanded Services', description: 'Added cabinet resurfacing and walk-in tub installations' },
  { year: '2018', event: '100+ Projects', description: 'Reached our first major milestone of 100 satisfied customers' },
  { year: '2020', event: 'New Technology', description: 'Introduced advanced reglazing techniques and eco-friendly materials' },
  { year: '2023', event: '500+ Customers', description: 'Celebrating over 500 successful bathroom transformations' }
]

export default function AboutSection() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

  // Simple animation that always shows content as fallback
  const simpleAnimation = {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4 }
  }

  return (
    <section id="about" ref={sectionRef} className="py-12 md:py-20 bg-white relative overflow-hidden">
      {/* Background Elements - Reduced opacity for mobile */}
      <div className="absolute inset-0 bg-grid-pattern opacity-3" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          {...simpleAnimation}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            About <span className="text-primary">GTA Bath Solution</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            For over a decade, we've been transforming bathrooms across the Greater Toronto Area 
            with professional, affordable, and reliable renovation services.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 md:mb-20">
          <motion.div
            {...simpleAnimation}
            className="space-y-6 order-2 lg:order-1"
          >
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                GTA Bath Solution was founded with a simple mission: to provide homeowners with 
                high-quality bathroom renovation services that don't break the bank. What started 
                as a small team with big dreams has grown into one of the GTA's most trusted 
                bathroom renovation companies.
              </p>
              <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                We believe that everyone deserves a beautiful, functional bathroom. That's why we've 
                developed innovative techniques that allow us to transform bathrooms quickly and 
                affordably, without compromising on quality.
              </p>
            </div>

            {/* Stats Grid - Mobile optimized */}
            <div className="grid grid-cols-2 gap-3 md:gap-4 pt-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-3 md:p-4 text-center hover:bg-primary/5 transition-colors"
                >
                  <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mx-auto mb-2" />
                  <div className="text-xl md:text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-xs md:text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            {...simpleAnimation}
            className="relative order-1 lg:order-2"
          >
            <div className="relative h-64 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                alt="Professional team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Floating Badge - Mobile optimized */}
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-white rounded-xl p-3 md:p-4 shadow-xl">
                <div className="flex items-center space-x-2 md:space-x-3">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                  <div>
                    <div className="font-semibold text-gray-900 text-sm md:text-base">Certified Professionals</div>
                    <div className="text-xs md:text-sm text-gray-600">Licensed & Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Company Values - Fixed for mobile visibility */}
        <div className="mb-16 md:mb-20">
          <motion.div
            {...simpleAnimation}
            className="text-center mb-8 md:mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h3>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                {...simpleAnimation}
                className="bg-white rounded-xl p-4 md:p-6 shadow-lg hover:shadow-xl transition-all duration-200 border border-gray-100"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                  <value.icon className="w-5 h-5 md:w-6 md:h-6 text-primary" />
                </div>
                <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline - Mobile optimized layout */}
        <div className="mb-16 md:mb-20">
          <motion.div
            {...simpleAnimation}
            className="text-center mb-8 md:mb-12"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h3>
          </motion.div>
          
          {/* Mobile: Simple stacked layout, Desktop: Timeline */}
          <div className="space-y-6 md:space-y-0">
            {/* Mobile Layout */}
            <div className="block md:hidden space-y-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  {...simpleAnimation}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                >
                  <div className="text-primary font-bold text-lg mb-2">{milestone.year}</div>
                  <h4 className="font-semibold text-gray-900 mb-2 text-lg">{milestone.event}</h4>
                  <p className="text-gray-600 text-base leading-relaxed">{milestone.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Desktop Timeline Layout */}
            <div className="hidden md:block relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  {...simpleAnimation}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                      <div className="text-primary font-bold text-lg mb-1">{milestone.year}</div>
                      <h4 className="font-semibold text-gray-900 mb-2">{milestone.event}</h4>
                      <p className="text-gray-600 text-sm">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Work With Us - Mobile optimized */}
        <motion.div
          {...simpleAnimation}
          className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 md:p-8 lg:p-12 text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
            Why Work With Us?
          </h3>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            We're not just another renovation company. We're your partners in creating the bathroom 
            of your dreams. Here's what sets us apart:
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {[
              'Free on-site consultations',
              'Transparent, upfront pricing',
              'Same-day service available',
              'Eco-friendly materials',
              'Lifetime support',
              'Satisfaction guaranteed'
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-2 p-2">
                <CheckCircle className="w-4 h-4 md:w-5 md:h-5 text-white/80 flex-shrink-0" />
                <span className="text-white/90 text-sm md:text-base">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white text-primary rounded-lg hover:bg-gray-50 transition-colors font-semibold text-base md:text-lg touch-manipulation"
            >
              Get Your Free Quote
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 ml-2" />
            </Link>
            <a
              href="tel:+14374227010"
              className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold text-base md:text-lg touch-manipulation"
            >
              Call (437) 422-7010
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 