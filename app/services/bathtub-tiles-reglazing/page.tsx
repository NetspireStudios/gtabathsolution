import React from 'react'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'

const bathtubTilesReglazingContent = {
  title: 'Bathtub & Tiles Reglazing',
  subtitle: 'Transform Your Bathroom Without Replacement',
  iconName: 'Paintbrush',
  heroImage: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  description: `Don't Replace It – REGLAZE IT! Looking to elevate the style of your bathroom? Look no further than our professional reglazing services that will make your fixtures look brand new.`,
  
  mainContent: [
    {
      title: 'The Smart Alternative to Replacement',
      content: `Replacing bathroom fixtures can be a hassle and expensive. If you have chipped or cracked tile in your home or are looking to update the color of your tile for a more modern look, reglazing is the perfect solution.
      
      Once the refinishing process is complete, your tile will look brand new and will be easy to clean with a mild liquid cleaner. Save thousands of dollars compared to full replacement while achieving the same stunning results.`
    },
    {
      title: 'Professional Reglazing Process',
      content: `We begin by doing a comprehensive cleaning on your bathtub using special cleaners to remove any oil or wax from the surface. Then we do any repairs needed using high-grade repairing compounds designed for bathtubs.
      
      We start the masking process to make sure that all your belongings are protected from our process. The final step in the spray process is 3 coats of a high grade 3-component aliphatic acrylic urethane which will give it a wet look that will last for many years.`
    },
    {
      title: 'Marble Tile Bathroom Options',
      content: `Looking to elevate the style of your bathroom? With its timeless beauty and elegance, marble tile can transform your ordinary bathroom into a luxurious retreat. Whether you prefer a classic white marble or a bolder choice, marble tile offers a wide range of options to suit your taste and design vision.
      
      Not only does marble tile exude luxury, but it also offers durability and longevity. With proper care, your marble tile bathroom will retain its beauty for years to come.`
    }
  ],
  
  features: [
    'Save 60-80% vs replacement',
    'Like-new appearance',
    'Durable finish lasting years',
    'Wide color selection',
    'Eco-friendly process',
    'No demolition required',
    '2-year warranty',
    'Same-day completion'
  ],
  
  process: [
    {
      step: 1,
      title: 'Deep Cleaning',
      description: 'Remove all oils, wax, and contaminants from surfaces'
    },
    {
      step: 2,
      title: 'Repairs & Prep',
      description: 'Fix chips, cracks, and imperfections with professional compounds'
    },
    {
      step: 3,
      title: 'Masking & Protection',
      description: 'Protect surrounding areas and your belongings'
    },
    {
      step: 4,
      title: 'Professional Application',
      description: 'Apply 3 coats of high-grade urethane for lasting finish'
    }
  ],
  
  pricing: {
    starting: 'From $450',
    factors: [
      'Size of bathtub/tiles',
      'Current condition',
      'Color selection',
      'Additional repairs needed'
    ]
  },
  
  faqs: [
    {
      question: 'How long does reglazing last?',
      answer: 'With proper care and maintenance, professionally reglazed bathtubs and tiles can last 10-15 years or more. We provide a 2-year warranty on all our work.'
    },
    {
      question: 'Can I change the color when reglazing?',
      answer: 'Yes! One of the benefits of reglazing is the ability to completely change the color of your fixtures. We offer a wide range of colors to match any design preference.'
    },
    {
      question: 'How long before I can use my bathroom?',
      answer: 'The reglazing process typically takes 4-6 hours. You can use your bathroom again after 24-48 hours, once the coating has fully cured.'
    },
    {
      question: 'Is reglazing better than replacement?',
      answer: 'Reglazing saves 60-80% compared to replacement costs, avoids demolition mess, and can be completed in one day. It\'s an eco-friendly option that delivers like-new results.'
    }
  ],
  
  relatedServices: [
    'bathroom-wall-panels',
    'bathtub-chip-repair',
    'cabinet-resurfacing'
  ]
}

export default function BathtubTilesReglazingPage() {
  return <ServiceDetailPage {...bathtubTilesReglazingContent} />
} 