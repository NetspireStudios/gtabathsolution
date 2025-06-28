import React from 'react'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'

const cabinetResurfacingContent = {
  title: 'Cabinet Resurfacing',
  subtitle: 'Transform Your Kitchen Without Full Replacement',
  iconName: 'Package',
  heroImage: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  description: `Transform Your Kitchen without a Complete Remodeling! If your cabinets are sulking and appear dull, you can easily get them refreshed and renewed through cabinet resurfacing.`,
  
  mainContent: [
    {
      title: 'What is Cabinet Resurfacing?',
      content: `Is your kitchen gone through its regular wear and tear? Are you thinking of remodeling your kitchen? Don't! Hear us out; there may be a solution for you without spending big bucks.
      
      Cabinet resurfacing, or refacing, is the process or rather a makeover of existing cabinets by replacing the hardware (handles, hinges, drawer pulls) and applying a new veneer over the surface to give cabinet doors a new and refreshed look.`
    },
    {
      title: 'Tailored Solutions for Your Kitchen',
      content: `If you are looking for cabinet refacing services, GTA Bath Solution has you covered. We provide tailored cabinet resurfacing services that ensure your kitchen cabinets are as good as new.
      
      At GTA Bath Solution, we understand that clients have particulars when it comes to their kitchens and their designs. Therefore, we work closely with our clients and understand their design preferences. Then, we create a tailored plan to fit perfectly within our client's budget and timeline.`
    },
    {
      title: 'Good As New - Professional Results',
      content: `Are you searching for "cabinet resurfacing near me"? You have come to the right place. GTA Bath Solution has been providing home upgrade solutions for years and has successfully completed hundreds of jobs.
      
      We are proud of our team's continuous commitment to quality and exceptional customer service. Our cabinet refacing services will provide a complete makeover of your kitchen cabinets, ensuring your kitchen returns to its glowing and refreshing days.`
    }
  ],
  
  features: [
    'Save 50-70% vs full replacement',
    'Complete transformation in 2-3 days',
    'New hardware included',
    'Wide variety of finishes',
    'Custom color matching',
    'Professional installation',
    'Minimal disruption',
    'Eco-friendly option'
  ],
  
  process: [
    {
      step: 1,
      title: 'Design Consultation',
      description: 'Discuss your vision, preferences, and select materials'
    },
    {
      step: 2,
      title: 'Remove & Prepare',
      description: 'Remove old doors, drawer fronts, and prepare cabinet boxes'
    },
    {
      step: 3,
      title: 'Apply New Veneer',
      description: 'Install new veneer on cabinet boxes and sides'
    },
    {
      step: 4,
      title: 'Install New Components',
      description: 'Mount new doors, drawer fronts, and hardware'
    }
  ],
  
  pricing: {
    starting: 'From $2,500',
    factors: [
      'Number of cabinets',
      'Kitchen size',
      'Material selection',
      'Hardware choices'
    ]
  },
  
  faqs: [
    {
      question: 'How long does cabinet resurfacing take?',
      answer: 'Most cabinet resurfacing projects are completed within 2-3 days, significantly faster than full cabinet replacement which can take weeks.'
    },
    {
      question: 'Is the quality as good as new cabinets?',
      answer: 'Yes! With high-quality veneers and professional installation, resurfaced cabinets look and function like brand new cabinets at a fraction of the cost.'
    },
    {
      question: 'What styles and finishes are available?',
      answer: 'We offer a wide range of wood veneers, laminates, and finishes including modern, traditional, and contemporary styles in various colors and textures.'
    },
    {
      question: 'Do you replace the cabinet boxes?',
      answer: 'No, cabinet resurfacing works with your existing cabinet boxes which must be in good structural condition. We update the visible surfaces and hardware for a complete transformation.'
    }
  ],
  
  relatedServices: [
    'bathroom-wall-panels',
    'bathtub-tiles-reglazing',
    'walk-in-tub'
  ]
}

export default function CabinetResurfacingPage() {
  return <ServiceDetailPage {...cabinetResurfacingContent} />
} 