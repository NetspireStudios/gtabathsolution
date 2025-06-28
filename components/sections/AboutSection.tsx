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
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-primary">GTA Bath Solution</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For over a decade, we've been transforming bathrooms across the Greater Toronto Area 
            with professional, affordable, and reliable renovation services.
          </p>
        </motion.div>

        {/* Company Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold text-gray-900">
                Our Story
              </h3>
              <p className="text-gray-600 leading-relaxed">
                GTA Bath Solution was founded with a simple mission: to provide homeowners with 
                high-quality bathroom renovation services that don't break the bank. What started 
                as a small team with big dreams has grown into one of the GTA's most trusted 
                bathroom renovation companies.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We believe that everyone deserves a beautiful, functional bathroom. That's why we've 
                developed innovative techniques that allow us to transform bathrooms quickly and 
                affordably, without compromising on quality.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-4 text-center hover:bg-primary/5 transition-colors"
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80"
                alt="Professional team at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute bottom-6 left-6 bg-white rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-primary" />
                  <div>
                    <div className="font-semibold text-gray-900">Certified Professionals</div>
                    <div className="text-sm text-gray-600">Licensed & Insured</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Company Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.7 + index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
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
        </motion.div>

        {/* Why Work With Us */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-6">
            Why Work With Us?
          </h3>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            We're not just another renovation company. We're your partners in creating the bathroom 
            of your dreams. Here's what sets us apart:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              'Free on-site consultations',
              'Transparent, upfront pricing',
              'Same-day service available',
              'Eco-friendly materials',
              'Lifetime support',
              'Satisfaction guaranteed'
            ].map((item, index) => (
              <div key={index} className="flex items-center justify-center space-x-2">
                <CheckCircle className="w-5 h-5 text-white/80" />
                <span className="text-white/90">{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary rounded-lg hover:bg-gray-50 transition-colors font-semibold group"
            >
              Get Your Free Quote
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+14374227010"
              className="inline-flex items-center justify-center px-8 py-3 bg-white/10 border border-white/20 text-white rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Call (437) 422-7010
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 