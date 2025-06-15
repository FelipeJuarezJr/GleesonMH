import { FaTruck, FaTools, FaClipboardCheck, FaHome, FaSnowflake, FaRuler } from 'react-icons/fa'

const services = [
  {
    id: 'transport',
    icon: <FaTruck className="w-12 h-12" />,
    title: 'Transport',
    description: 'Professional transport services for manufactured and modular homes throughout Arizona. Our experienced team ensures safe and efficient delivery of your home to its destination.',
    features: [
      'State-wide transport services',
      'Specialized equipment and vehicles',
      'Experienced drivers and crew',
      'Route planning and permits',
      'Insurance coverage'
    ]
  },
  {
    id: 'setup',
    icon: <FaTools className="w-12 h-12" />,
    title: 'Complete Setup',
    description: 'Full-service setup of your manufactured home, including site preparation, delivery, and installation. We handle every aspect of the process to ensure a smooth transition.',
    features: [
      'Site preparation',
      'Home delivery and placement',
      'Blocking and leveling',
      'Utility connections',
      'Final inspection'
    ]
  },
  {
    id: 'permits',
    icon: <FaClipboardCheck className="w-12 h-12" />,
    title: 'Permits & Inspections',
    description: 'Expert handling of all necessary permits and inspections required for your manufactured home installation. We navigate the regulatory requirements to ensure compliance.',
    features: [
      'Permit applications',
      'Building inspections',
      'Code compliance',
      'Documentation',
      'Regulatory liaison'
    ]
  },
  {
    id: 'block-level',
    icon: <FaRuler className="w-12 h-12" />,
    title: 'Block & Level',
    description: 'Professional blocking and leveling services to ensure your home is properly supported and perfectly level. This crucial step ensures the longevity and stability of your home.',
    features: [
      'Precise leveling',
      'Proper blocking',
      'Foundation stability',
      'Quality materials',
      'Expert installation'
    ]
  },
  {
    id: 'skirting',
    icon: <FaHome className="w-12 h-12" />,
    title: 'Skirting & Awnings',
    description: "Custom skirting and awning installation to enhance your home's appearance and provide protection from the elements. We offer various styles and materials to match your preferences.",
    features: [
      'Custom skirting design',
      'Awning installation',
      'Material selection',
      'Professional installation',
      'Weather protection'
    ]
  },
  {
    id: 'hvac',
    icon: <FaSnowflake className="w-12 h-12" />,
    title: 'HVAC Services',
    description: 'Comprehensive heating, ventilation, and air conditioning services for your manufactured home. We ensure your home\'s climate control systems are properly installed and maintained.',
    features: [
      'HVAC installation',
      'System maintenance',
      'Repairs and upgrades',
      'Energy efficiency',
      '24/7 emergency service'
    ]
  }
]

export default function Services() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-xl text-gray-600">
          Comprehensive manufactured housing services throughout Arizona since 1984.
          We handle everything from transport to installation and maintenance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            id={service.id}
            className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
          >
            <div className="text-primary mb-6">{service.icon}</div>
            <h2 className="text-2xl font-bold mb-4">{service.title}</h2>
            <p className="text-gray-600 mb-6">{service.description}</p>
            <ul className="space-y-3">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Contact us today for a free quote or to learn more about our services.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  )
} 