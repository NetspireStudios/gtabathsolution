import React from 'react'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'

const bathroomWallPanelsContent = {
  title: 'Bathroom Wall Panels',
  subtitle: 'Transform Your Shower in Just One Day',
  iconName: 'Waves',
  heroImage: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80',
  description: `Are you tired of your old shower, but scared of the cost to replace it? At GTA Bath Solution Remodeling, we have the affordable bathroom remodeling option you've been looking for!`,
  
  mainContent: [
    {
      title: 'Quick & Easy Installation',
      content: `Shower surround panels are a cost-effective way to bring new life into outdated showers. Not only are they budget-friendly; we can also finish them in as little as one day!
      
      Whilst tile installation can be a chaotic task, wall panels enable grout-free, quick and easy installation which massively reduces turnaround times and any unnecessary stress.`
    },
    {
      title: '100% Waterproof',
      content: `Shower panels are 100% waterproof and can be applied directly to almost any surface including tiles, concrete, plaster, plasterboard, chipboard and plywood, or as part of a new installation. Our Technicians can transform your bathroom or shower enclosure instantly, giving them a modern finish.`
    },
    {
      title: 'Low Maintenance',
      content: `On top of being quick and easy to install, bathroom wall panels require very low maintenance. Actually, no grout means you can say goodbye to annoying moldy stains and endless hours of cleaning. Shower wall panels are simple to clean through the use of warm water and a non-abrasive mild detergent.`
    }
  ],
  
  features: [
    'Grout-free installation',
    '100% waterproof',
    'Easy to clean and maintain',
    'Wide range of styles and colors',
    'Installed in as little as 1 day',
    '3-year warranty',
    'No mold or mildew growth',
    'Durable and long-lasting'
  ],
  
  process: [
    {
      step: 1,
      title: 'Free Consultation',
      description: 'We visit your home to assess your bathroom and discuss your vision'
    },
    {
      step: 2,
      title: 'Custom Design',
      description: 'Choose from our wide selection of colors, patterns, and finishes'
    },
    {
      step: 3,
      title: 'Professional Installation',
      description: 'Our certified technicians install your new wall panels in just 1 day'
    },
    {
      step: 4,
      title: 'Final Inspection',
      description: 'We ensure everything is perfect and you\'re completely satisfied'
    }
  ],
  
  pricing: {
    starting: 'From $1,200',
    factors: [
      'Size of shower/bathroom',
      'Current condition',
      'Selected materials',
      'Additional features'
    ]
  },
  
  faqs: [
    {
      question: 'How long does installation take?',
      answer: 'Most bathroom wall panel installations are completed in just 1 day, minimizing disruption to your daily routine.'
    },
    {
      question: 'Are wall panels better than tiles?',
      answer: 'Wall panels offer several advantages over tiles: no grout to clean, 100% waterproof, faster installation, and lower maintenance.'
    },
    {
      question: 'Can panels be installed over existing tiles?',
      answer: 'Yes! Our wall panels can be installed directly over existing tiles, saving time and money on demolition.'
    },
    {
      question: 'What styles are available?',
      answer: 'We offer a wide range of styles including marble effects, stone looks, solid colors, and modern patterns to match any design preference.'
    }
  ],
  
  relatedServices: [
    'bathtub-chip-repair',
    'bathtub-tiles-reglazing',
    'walk-in-tub'
  ]
}

export default function BathroomWallPanelsPage() {
  return <ServiceDetailPage {...bathroomWallPanelsContent} />
} 