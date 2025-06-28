'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  User,
  Home,
  Calendar,
  MessageSquare,
  CheckCircle,
  DollarSign,
  Loader2
} from 'lucide-react'

const services = [
  'Bathroom Wall Panels',
  'Bathtub Chip Repair',
  'Bathtub & Tiles Reglazing',
  'Cabinet Resurfacing',
  'Grab Bar Installation',
  'Walk-in Tub Installation',
  'Multiple Services',
  'Other'
]

const budgetRanges = [
  'Under $1,000',
  '$1,000 - $2,500',
  '$2,500 - $5,000',
  '$5,000 - $10,000',
  'Over $10,000',
  'Not Sure'
]

const timeframes = [
  'ASAP',
  'Within 1 week',
  'Within 2 weeks',
  'Within 1 month',
  '1-3 months',
  'Just exploring options'
]

export default function QuotePage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    service: '',
    budget: '',
    timeframe: '',
    message: '',
    preferredContact: 'phone'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowSuccess(true)
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        postalCode: '',
        service: '',
        budget: '',
        timeframe: '',
        message: '',
        preferredContact: 'phone'
      })
      
      // Scroll to top to show success message
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-8 md:py-20 pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Success Message */}
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 md:mb-12 bg-green-50 border border-green-200 rounded-xl p-6 md:p-8 text-center shadow-lg"
          >
            <CheckCircle className="w-12 h-12 md:w-16 md:h-16 text-green-500 mx-auto mb-4 md:mb-6" />
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Thank You!</h3>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We've received your quote request and will contact you within 24 hours.
            </p>
          </motion.div>
        )}

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 leading-tight">
            Get Your Free Quote
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 leading-relaxed">
            Fill out the form below and we'll provide you with a detailed quote for your bathroom renovation project. 
            No obligations, no hidden fees.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 space-y-6 md:space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">Contact Information</h2>
              
              <div className="space-y-6 md:space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Call Us</h3>
                    <p className="text-primary font-semibold text-base md:text-lg">+1 (437) 422-7010</p>
                    <p className="text-sm md:text-base text-gray-500">Mon-Fri 8AM-8PM, Sat-Sun 9AM-6PM</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Email Us</h3>
                    <p className="text-gray-600 text-base md:text-lg">info@gtabathsolution.com</p>
                    <p className="text-sm md:text-base text-gray-500">We reply within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-1">Service Area</h3>
                    <p className="text-gray-600 text-base md:text-lg">Greater Toronto Area</p>
                    <p className="text-sm md:text-base text-gray-500">East York & surrounding regions</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gradient-to-r from-primary to-blue-600 rounded-2xl p-6 md:p-8 text-white shadow-xl">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8">Why Choose Us?</h3>
              <ul className="space-y-4">
                {[
                  'Free on-site consultations',
                  'No hidden fees or charges',
                  '3-year warranty on all work',
                  'Licensed and insured',
                  'Same-day service available'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white/90 flex-shrink-0" />
                    <span className="text-base md:text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 text-center lg:text-left">
                Request Your Quote
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <User className="w-5 h-5 md:w-6 md:h-6 mr-2 text-primary" />
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                        placeholder="(647) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Property Information */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <Home className="w-5 h-5 md:w-6 md:h-6 mr-2 text-primary" />
                    Property Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                        placeholder="123 Main Street"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                        placeholder="Toronto"
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Postal Code *
                      </label>
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                        placeholder="M1A 1A1"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center">
                    <MessageSquare className="w-5 h-5 md:w-6 md:h-6 mr-2 text-primary" />
                    Project Details
                  </h3>
                  <div className="space-y-4 md:space-y-6">
                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                      >
                        <option value="">Select a service...</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                      <div>
                        <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                          Budget Range
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                        >
                          <option value="">Select budget range...</option>
                          {budgetRanges.map((range) => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                          Timeframe
                        </label>
                        <select
                          name="timeframe"
                          value={formData.timeframe}
                          onChange={handleChange}
                          className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation"
                        >
                          <option value="">Select timeframe...</option>
                          {timeframes.map((timeframe) => (
                            <option key={timeframe} value={timeframe}>{timeframe}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm md:text-base font-medium text-gray-700 mb-2">
                        Additional Details
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 md:px-5 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-base touch-manipulation resize-none"
                        placeholder="Please describe your project in detail, including any specific requirements or concerns..."
                      />
                    </div>
                  </div>
                </div>

                {/* Contact Preferences */}
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-4 md:mb-6">
                    Preferred Contact Method
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                        className="mr-3 text-primary focus:ring-primary"
                      />
                      <Phone className="w-5 h-5 text-primary mr-2" />
                      <span className="font-medium">Phone Call</span>
                    </label>
                    <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        className="mr-3 text-primary focus:ring-primary"
                      />
                      <Mail className="w-5 h-5 text-primary mr-2" />
                      <span className="font-medium">Email</span>
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 md:pt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 md:py-5 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-lg md:text-xl shadow-lg hover:shadow-xl touch-manipulation flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-6 h-6 mr-3 animate-spin" />
                        Submitting Your Request...
                      </>
                    ) : (
                      <>
                        Get My Free Quote
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 ml-3" />
                      </>
                    )}
                  </button>
                  <p className="mt-4 text-center text-sm md:text-base text-gray-500">
                    By submitting this form, you agree to be contacted by our team regarding your quote request.
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 