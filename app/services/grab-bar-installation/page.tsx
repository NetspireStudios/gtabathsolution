import React from 'react'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'

const grabBarInstallationContent = {
  title: 'Grab Bar Installation',
  subtitle: 'Professional Safety Solutions for Your Bathroom',
  iconName: 'Shield',
  heroImage: 'https://images.unsplash.com/photo-1584622781292-b9330d2c3edf?auto=format&fit=crop&w=1920&h=800&q=80',
  description: 'Enhance bathroom safety with our expert grab bar installation services. ADA-compliant installations that provide security and peace of mind for you and your loved ones.',
  
  mainContent: [
    {
      title: 'Safety & Mobility Prioritized',
      content: `Whether you are suffering from temporary mobility issues or have a senior loved one in your home who struggles with balance, installing grab bars is essential for bathroom safety. At GTA Bath Solution, we can help you install grab bars quickly and conveniently.
      
      Our team of trained professionals and technicians has the experience, expertise, and equipment to install grab bars in the location of your choice. Whether you are looking for a shower grab bar or a tub grab bar, we are here to help.`
    },
    {
      title: 'Professional Installation on All Surfaces',
      content: `Our team of technicians is here to work together with you and install high-quality and durable grab bars that will withstand general wear and tear for years to come.
      
      We can help you install grab bars on all wall surfaces, including marble, granite, porcelain, ceramic, fiberglass, drywall, concrete, and more. When you opt for GTA Bath Solution for your grab bar needs, you can rest assured that you are working with a team and company that understands the intricacies of bath upgrades.`
    },
    {
      title: 'Convenient, Affordable, & Full-Service Solutions',
      content: `We prioritize three factors in our service; convenience, affordability, and competence. These factors are core elements of our service and help us retain most of our clients.
      
      We respect the needs of our clients and try to tailor our services within the budget and timeline provided by our clients. Service transparency is something we care deeply about. Rest assured, when you partner with GTA Bath Solution, you'll be kept in the loop the entire time, from material selection and service charges to installation and more.`
    }
  ],
  
  features: [
    'ADA compliant installation standards',
    'Professional mounting in wall studs',
    'Multiple styles and finishes available',
    'Same-day installation service',
    'Weight tested to 250+ pounds capacity',
    'Lifetime warranty on installation',
    'Custom placement assessment',
    'Corrosion-resistant materials'
  ],
  
  process: [
    {
      step: 1,
      title: 'Safety Assessment',
      description: 'Our expert evaluates your bathroom to identify the best grab bar locations for maximum safety and accessibility.'
    },
    {
      step: 2,
      title: 'Style Selection',
      description: 'Choose from our selection of grab bars in various finishes including chrome, brushed nickel, and oil-rubbed bronze.'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Secure mounting into wall studs or with heavy-duty anchors, ensuring each grab bar can support 250+ pounds safely.'
    },
    {
      step: 4,
      title: 'Testing & Cleanup',
      description: 'We test each installation for security and clean up completely, leaving your bathroom safe and spotless.'
    }
  ],
  
  faqs: [
    {
      question: 'How much weight can your grab bars support?',
      answer: 'All our grab bars are tested and installed to support a minimum of 250 pounds. For individuals requiring higher weight capacity, we offer specialized heavy-duty options that can support up to 500 pounds.'
    },
    {
      question: 'Can grab bars be installed on any wall type?',
      answer: 'Yes, we can install grab bars on virtually any wall type including drywall, tile, fiberglass, and concrete. Our technicians use the appropriate mounting hardware for each specific wall material to ensure maximum security.'
    },
    {
      question: 'Do the grab bars come in different styles and finishes?',
      answer: 'Absolutely! We offer grab bars in multiple finishes including polished chrome, brushed nickel, oil-rubbed bronze, and white. Styles range from straight bars to L-shaped, curved, and decorative options to match your bathroom décor.'
    },
    {
      question: 'How long does the installation process take?',
      answer: 'Most grab bar installations are completed within 1-2 hours. For multiple grab bars or complex installations, it may take up to 3 hours. We always work efficiently to minimize disruption to your daily routine.'
    },
    {
      question: 'Are your installations ADA compliant?',
      answer: 'Yes, all our grab bar installations meet or exceed ADA (Americans with Disabilities Act) standards for placement, height, and weight capacity. This ensures maximum safety and accessibility for all users.'
    },
    {
      question: 'What\'s included in your warranty?',
      answer: 'We provide a lifetime warranty on our installation workmanship and a manufacturer\'s warranty on the grab bars themselves. This covers any installation defects or hardware failures under normal use.'
    }
  ],
  
  pricing: {
    starting: 'From $120',
    factors: [
      'Number of grab bars needed',
      'Wall surface type and condition',
      'Installation complexity',
      'Style and finish selection',
      'Additional safety features'
    ]
  },
  
  relatedServices: [
    'walk-in-tub',
    'bathroom-wall-panels',
    'bathtub-chip-repair'
  ]
}

export default function GrabBarInstallationPage() {
  return <ServiceDetailPage {...grabBarInstallationContent} />
}

export const metadata = {
  title: 'Professional Grab Bar Installation | GTA Bath Solution',
  description: 'Expert grab bar installation services in the GTA. ADA-compliant safety solutions starting at $120. Professional installation with lifetime warranty.',
  keywords: 'grab bar installation, bathroom safety, ADA compliant, Toronto, GTA, seniors, accessibility',
}; 