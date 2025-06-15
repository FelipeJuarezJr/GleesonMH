'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  'Site Evaluation',
  'Plans and Permits',
  'Home Delivery',
  'Set-up / Utility Hook-up',
  'Anchoring / Tie-downs',
  'Close-off and Trim out',
  'Below Grade Skirting',
  'Vinyl and Hardboard skirting',
  'Awnings',
  'Sheds',
  'Cooling and Heating',
  'Final Inspection',
  'Move-in'
]

const images = [
  {
    id: 1,
    image: 'https://www.gleesonmhservice.com/assets/images/original.238131129_std.jpg',
    title: 'Complete Home Setup',
    description: 'Professional installation and setup of your manufactured home, ensuring everything is perfect for your move-in.'
  },
  {
    id: 2,
    image: 'https://www.gleesonmhservice.com/assets/images/Image004.238124210_std.jpg',
    title: 'Quality Finishing',
    description: 'Expert finishing touches including skirting, awnings, and utility connections for a complete home solution.'
  }
]

const LandHome = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">Land & Manufactured Home Packages</h1>
        <h2 className="text-3xl font-bold mb-12 text-center text-primary">GOT LAND?</h2>
        
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed text-center">
            Let Gleeson Mobile Home Service assist you from site evaluation to final inspection and move-in.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {images.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-80 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={item.id === 1}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-primary">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Complete Package Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg shadow-sm"
              >
                <span className="text-primary mr-3">✓</span>
                <span className="text-gray-700">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Why Choose Our Complete Package?</h2>
          <ul className="text-left max-w-2xl mx-auto space-y-4">
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white">One-stop solution for your manufactured home needs</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white">Experienced team handling every aspect of the process</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white">Quality materials and professional installation</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white">Comprehensive service from start to finish</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Dream Home?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today to discuss your land and home package needs.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 hover:shadow-lg transition-all"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  )
}

export default LandHome 