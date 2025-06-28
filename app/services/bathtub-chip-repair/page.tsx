import React from 'react'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'

const bathtubChipRepairContent = {
  title: 'Bathtub Chip Repair',
  subtitle: 'Professional Repair for Chips, Cracks, and Damage',
  iconName: 'Hammer',
  heroImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  description: `During the construction process, it is common for newly installed porcelain fixtures to be chipped or stained. Don't let a damaged tub ruin the overall aesthetic of your bathroom.`,
  
  mainContent: [
    {
      title: 'Professional Bathtub Repair',
      content: `During the construction process, it is common for newly installed porcelain fixtures to be chipped or stained. Fiberglass units can be scratched, cracked, or structurally damaged. Colors are matched at the job site to ensure a quality repair.
      
      Professional bathtub repairs utilizing our highest quality coatings are made to last a long time. The bathtub repair process works on porcelain, ceramic, and fiberglass or acrylic surfaces.`
    },
    {
      title: 'Expert Technicians',
      content: `Our experienced team of repair technicians can be depended upon to meet your schedule and complete all repairs to your satisfaction. Beautiful Finishes offers quick, low-cost, and dependable repairs to solve these problems.
      
      When you choose GTA Bath Solution Repair for your bathtub needs, you can expect nothing less than exceptional results. Our technicians have extensive experience in handling bathtub repairs, utilizing industry-leading techniques and materials to achieve outstanding outcomes.`
    },
    {
      title: 'Local & Reliable Service',
      content: `Finding reliable and trustworthy bathtub repair services near you is crucial. That's why we take pride in being a local provider, serving the community with our expertise. When you search for "bathtub repair near me," you can count on GTA Bath Solution Repair to be your trusted partner.
      
      Don't let a chipped bathtub detract from the beauty of your bathroom. Our team is ready to revitalize your bathtub, giving it a fresh and flawless appearance.`
    }
  ],
  
  features: [
    'Color-matched repairs',
    'Same-day service available',
    'Works on all surfaces',
    'Long-lasting results',
    'Professional finish',
    'Minimal disruption',
    'Cost-effective solution',
    'Expert technicians'
  ],
  
  process: [
    {
      step: 1,
      title: 'Assessment',
      description: 'We evaluate the damage and determine the best repair approach'
    },
    {
      step: 2,
      title: 'Preparation',
      description: 'Surface is cleaned and prepared for optimal adhesion'
    },
    {
      step: 3,
      title: 'Color Matching',
      description: 'We match the exact color of your bathtub on-site'
    },
    {
      step: 4,
      title: 'Repair & Finish',
      description: 'Professional repair with high-quality materials and perfect finish'
    }
  ],
  
  pricing: {
    starting: 'From $150',
    factors: [
      'Size of damage',
      'Number of chips/cracks',
      'Type of material',
      'Location accessibility'
    ]
  },
  
  faqs: [
    {
      question: 'How long does a chip repair take?',
      answer: 'Most chip repairs are completed within 2-4 hours, depending on the size and number of damaged areas.'
    },
    {
      question: 'Will the repair be noticeable?',
      answer: 'Our color-matching process ensures repairs blend seamlessly with your existing bathtub. Most repairs are virtually invisible once completed.'
    },
    {
      question: 'What types of damage can you repair?',
      answer: 'We can repair chips, cracks, scratches, rust spots, and other surface damage on porcelain, ceramic, fiberglass, and acrylic bathtubs.'
    },
    {
      question: 'How long will the repair last?',
      answer: 'With proper care, our professional repairs can last for many years. We use high-quality materials and provide a warranty on all our work.'
    }
  ],
  
  relatedServices: [
    'bathtub-tiles-reglazing',
    'bathroom-wall-panels',
    'cabinet-resurfacing'
  ]
}

export default function BathtubChipRepairPage() {
  return <ServiceDetailPage {...bathtubChipRepairContent} />
} 