'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Home, 
  Wrench, 
  Users, 
  Phone, 
  ChevronDown,
  Menu,
  X,
  Waves,
  Hammer,
  Paintbrush,
  Package,
  Shield,
  Bath
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    name: 'Bathroom Wall Panels',
    href: '/services/bathroom-wall-panels',
    icon: Waves,
    description: 'Modern waterproof wall panels'
  },
  {
    name: 'Bathtub Chip Repair',
    href: '/services/bathtub-chip-repair',
    icon: Hammer,
    description: 'Professional chip repair services'
  },
  {
    name: 'Bathtub & Tiles Reglazing',
    href: '/services/bathtub-tiles-reglazing',
    icon: Paintbrush,
    description: 'Complete reglazing solutions'
  },
  {
    name: 'Cabinet Resurfacing',
    href: '/services/cabinet-resurfacing',
    icon: Package,
    description: 'Kitchen cabinet makeovers'
  },
  {
    name: 'Grab Bar Installation',
    href: '/services/grab-bar-installation',
    icon: Shield,
    description: 'Safety and accessibility solutions'
  },
  {
    name: 'Walk In Tub',
    href: '/services/walk-in-tub',
    icon: Bath,
    description: 'Accessible bathing solutions'
  }
]

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" 
        : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-primary rounded-lg">
              <Bath className="w-4 h-4 md:w-6 md:h-6 text-white" />
            </div>
            <span className={cn(
              "text-lg md:text-xl font-bold transition-colors",
              isScrolled ? "text-gray-900" : "text-white"
            )}>
              <span className="hidden sm:inline">GTA Bath Solution</span>
              <span className="sm:hidden">GTA Bath</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/"
              className={cn(
                "flex items-center space-x-1 hover:text-primary transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              <Home className="w-4 h-4" />
              <span>Home</span>
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={cn(
                "flex items-center space-x-1 hover:text-primary transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}>
                <Wrench className="w-4 h-4" />
                <span>Services</span>
                <ChevronDown className={cn(
                  "w-4 h-4 transition-transform",
                  isServicesOpen && "rotate-180"
                )} />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-2">
                      {services.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                        >
                          <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <service.icon className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium text-gray-900 group-hover:text-primary transition-colors">
                              {service.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {service.description}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              onClick={() => scrollToSection('about')}
              className={cn(
                "flex items-center space-x-1 hover:text-primary transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              <Users className="w-4 h-4" />
              <span>About</span>
            </button>

            <button 
              onClick={() => scrollToSection('contact')}
              className={cn(
                "flex items-center space-x-1 hover:text-primary transition-colors",
                isScrolled ? "text-gray-700" : "text-white"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </button>

            <Link
              href="/quote"
              className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "md:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors touch-manipulation",
              isScrolled 
                ? "text-gray-700 hover:bg-gray-100" 
                : "text-white hover:bg-white/10"
            )}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white border-t border-gray-100 rounded-b-xl shadow-xl"
            >
              <div className="px-4 py-6 space-y-1">
                <Link 
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors touch-manipulation"
                >
                  <Home className="w-5 h-5" />
                  <span className="font-medium">Home</span>
                </Link>

                <div className="space-y-1">
                  <div className="flex items-center space-x-3 px-4 py-3 text-gray-900 font-semibold">
                    <Wrench className="w-5 h-5 text-primary" />
                    <span>Services</span>
                  </div>
                  <div className="ml-4 space-y-1">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex items-center space-x-3 px-4 py-3 text-gray-600 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors touch-manipulation"
                      >
                        <service.icon className="w-4 h-4 text-primary" />
                        <span>{service.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={() => scrollToSection('about')}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors w-full text-left touch-manipulation"
                >
                  <Users className="w-5 h-5" />
                  <span className="font-medium">About</span>
                </button>

                <button 
                  onClick={() => scrollToSection('contact')}
                  className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors w-full text-left touch-manipulation"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium">Contact</span>
                </button>

                <div className="pt-4 border-t border-gray-100">
                  <Link
                    href="/quote"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center w-full bg-primary text-white px-6 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg touch-manipulation"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
} 