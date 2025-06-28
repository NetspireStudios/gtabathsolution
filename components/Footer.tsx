'use client'

import React from 'react'
import Link from 'next/link'
import { 
  Bath, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Waves,
  Hammer,
  Paintbrush,
  Home,
  Shield
} from 'lucide-react'

const services = [
  { name: 'Bathroom Wall Panels', href: '/services/bathroom-wall-panels', icon: Waves },
  { name: 'Bathtub Chip Repair', href: '/services/bathtub-chip-repair', icon: Hammer },
  { name: 'Bathtub & Tiles Reglazing', href: '/services/bathtub-tiles-reglazing', icon: Paintbrush },
  { name: 'Cabinet Resurfacing', href: '/services/cabinet-resurfacing', icon: Home },
  { name: 'Grab Bar Installation', href: '/services/grab-bar-installation', icon: Shield },
  { name: 'Walk In Tub', href: '/services/walk-in-tub', icon: Bath }
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <Bath className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold">GTA Bath Solution</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Professional bathroom renovation services in the Greater Toronto Area. 
              Transform your bathroom with our expert solutions - quick, affordable, and reliable.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-primary transition-colors p-2 hover:bg-gray-800 rounded-lg"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-400 hover:text-primary transition-colors text-sm flex items-center space-x-2 group"
                  >
                    <service.icon className="w-3 h-3 group-hover:text-primary transition-colors" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-primary transition-colors text-sm text-left"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact')
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-primary transition-colors text-sm text-left"
                >
                  Contact
                </button>
              </li>
              <li>
                <Link href="/quote" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Get Quote
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <div className="text-gray-400 text-sm">
                  East York<br />
                  Greater Toronto Area, ON
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+14374227010" 
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  +1 (437) 422-7010
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:info@gtabathsolution.com" 
                  className="text-gray-400 hover:text-primary transition-colors text-sm"
                >
                  info@gtabathsolution.com
                </a>
              </div>
            </div>

            {/* Call to Action */}
            <div className="pt-4">
              <Link
                href="/quote"
                className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-gray-400 text-sm">
            © {currentYear} GTA Bath Solution. All rights reserved.
          </div>
          <div className="text-gray-400 text-sm">
            Professional bathroom renovation services in the Greater Toronto Area
          </div>
        </div>
      </div>
    </footer>
  )
} 