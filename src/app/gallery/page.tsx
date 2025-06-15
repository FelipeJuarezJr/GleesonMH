'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { FC } from 'react'

interface GalleryItem {
  id: number
  image: string
  title: string
  description: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    image: 'https://www.gleesonmhservice.com/assets/images/JOBS_011.223133953_large.jpg',
    title: 'Modern Desert Oasis',
    description: 'A stunning manufactured home nestled in the Arizona landscape, featuring contemporary design elements and seamless integration with its natural surroundings. The clean lines and spacious layout exemplify modern desert living at its finest.'
  },
  {
    id: 2,
    image: 'https://www.gleesonmhservice.com/assets/images/JOBS_013.223134106_large.jpg',
    title: 'Mountain View Retreat',
    description: 'This beautifully positioned manufactured home offers breathtaking mountain views and a perfect blend of indoor-outdoor living. The strategic placement and professional installation ensure optimal enjoyment of Arizona\'s stunning natural scenery.'
  },
  {
    id: 3,
    image: 'https://www.gleesonmhservice.com/assets/images/JOBS_015.223134218_large.jpg',
    title: 'Desert Elegance',
    description: 'A masterfully installed manufactured home that showcases the perfect balance of comfort and style. The careful attention to detail in the setup and landscaping creates an inviting atmosphere that feels like home from the moment you arrive.'
  }
]

export default function Gallery() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Our Work Gallery</h1>
        <p className="text-xl text-gray-600">
          Explore our portfolio of professionally installed manufactured homes across Arizona.
          Each project represents our commitment to quality and excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {galleryItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Space?</h2>
        <p className="text-xl text-gray-600 mb-8">
          Let us help you create your perfect manufactured home setup.
        </p>
        <a
          href="/contact"
          className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 hover:shadow-lg transition-all"
        >
          Get Started
        </a>
      </div>
    </div>
  )
} 