import React from 'react'
import ServiceDetailPage from '@/components/services/ServiceDetailPage'

export default function WalkInTubPage() {
  const serviceData = {
    title: "Walk-in Tub Installation",
    subtitle: "Accessible Bathing Solutions for Independence and Safety",
    iconName: "Heart",
    heroImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1920&h=800&q=80",
    description: "Transform your bathroom with a luxurious walk-in tub designed for safety, accessibility, and therapeutic relaxation. Perfect for seniors and individuals with mobility challenges.",
    
    mainContent: [
      {
        title: "Premium Walk-in Tub Solutions",
        content: `At GTA Bath Solution, we specialize in walk-in tub installations that combine safety, accessibility, and luxury. Our walk-in tubs are designed with low step-in thresholds, comfortable seating, and therapeutic features that make bathing safe and enjoyable for people of all ages and mobility levels.

Our walk-in tubs feature:
• Ultra-low 3" step-in threshold for easy access
• Built-in safety grab bars and slip-resistant surfaces
• Comfortable built-in seating with back support
• Quick-drain technology for faster emptying
• Dual drainage system for enhanced safety
• ADA-compliant design and installation

Each installation is customized to your specific bathroom layout and personal needs, ensuring a perfect fit and optimal functionality.`
      },
      {
        title: "Therapeutic Benefits and Features",
        content: `Our walk-in tubs aren't just about safety – they're designed to provide therapeutic benefits that can improve your overall well-being and quality of life.

Therapeutic features include:
• Hydrotherapy jets for muscle relaxation and pain relief
• Aromatherapy systems for stress reduction
• Chromotherapy lighting for mood enhancement
• Heated seats for comfort during filling
• Fast-fill faucets to minimize wait time
• Temperature control systems for safety

Many of our clients report improved circulation, reduced joint pain, better sleep quality, and enhanced overall well-being after installing their walk-in tub. It's an investment in your health and independence.`
      },
      {
        title: "Professional Installation and Support",
        content: `Our certified technicians handle every aspect of your walk-in tub installation, from initial assessment to final testing. We work with your existing plumbing and electrical systems whenever possible to minimize disruption and cost.

Installation includes:
• Complete bathroom assessment and measurements
• Removal of existing bathtub or shower
• Professional plumbing and electrical connections
• Waterproofing and tile work as needed
• Quality testing and safety verification
• Comprehensive cleanup and debris removal

We also provide ongoing support with maintenance guidance, warranty service, and any questions you may have about your new walk-in tub.`
      }
    ],

    features: [
      "Ultra-low 3-inch step-in threshold",
      "Built-in safety grab bars and seating",
      "Hydrotherapy and aromatherapy options", 
      "Quick-drain technology",
      "ADA-compliant design",
      "Lifetime warranty on installation",
      "Professional certified installation",
      "Customizable therapeutic features"
    ],

    process: [
      {
        step: 1,
        title: "Home Assessment",
        description: "Our specialists visit your home to assess your bathroom, discuss your needs, and recommend the best walk-in tub solution for your space and budget."
      },
      {
        step: 2,
        title: "Custom Design",
        description: "We create a custom installation plan that works with your existing plumbing and electrical systems while maximizing safety and functionality."
      },
      {
        step: 3,
        title: "Professional Installation",
        description: "Our certified technicians complete the installation, typically within 1-2 days, including all plumbing, electrical, and finishing work."
      },
      {
        step: 4,
        title: "Testing & Training",
        description: "We thoroughly test all features and provide comprehensive training on how to safely operate and maintain your new walk-in tub."
      }
    ],

    pricing: {
      starting: "From $3,500",
      factors: [
        "Tub size and model selection",
        "Therapeutic features included",
        "Bathroom modification requirements",
        "Plumbing and electrical work needed",
        "Installation complexity and timeline"
      ]
    },

    faqs: [
      {
        question: "How long does a walk-in tub installation take?",
        answer: "Most walk-in tub installations are completed within 1-2 days. The timeline depends on your bathroom's current configuration and any additional modifications needed for plumbing or electrical work."
      },
      {
        question: "Do I need to modify my existing plumbing?",
        answer: "In most cases, we can work with your existing plumbing with minimal modifications. Our technicians will assess your current setup during the initial consultation and discuss any necessary changes."
      },
      {
        question: "Are walk-in tubs covered by insurance?",
        answer: "Some insurance plans and Medicare may cover walk-in tubs when prescribed by a physician for medical necessity. We can provide documentation to help with insurance claims and work with your healthcare provider if needed."
      },
      {
        question: "How do I prevent slipping when getting in and out?",
        answer: "Our walk-in tubs feature slip-resistant surfaces, built-in grab bars, and comfortable seating. The ultra-low threshold and door design make entry and exit much safer than traditional tubs."
      },
      {
        question: "What therapeutic features are available?",
        answer: "We offer various therapeutic options including hydrotherapy jets, aromatherapy systems, chromotherapy lighting, heated seats, and fast-fill systems. We'll help you choose features that best meet your health and wellness goals."
      },
      {
        question: "What warranty do you provide?",
        answer: "We provide a comprehensive warranty that covers both the tub itself (manufacturer warranty) and our installation work (lifetime warranty). This ensures your investment is protected for years to come."
      }
    ],

    relatedServices: [
      'grab-bar-installation',
      'bathroom-wall-panels',
      'bathtub-tiles-reglazing'
    ]
  };

  return <ServiceDetailPage {...serviceData} />;
}

export const metadata = {
  title: 'Walk-in Tub Installation | Accessible Bathing Solutions | GTA Bath Solution',
  description: 'Professional walk-in tub installation in the GTA. Accessible, safe, and therapeutic bathing solutions starting at $3,500. ADA-compliant with lifetime warranty.',
  keywords: 'walk-in tub, accessible bathing, senior bathtub, Toronto, GTA, mobility solutions, therapeutic tub',
}; 