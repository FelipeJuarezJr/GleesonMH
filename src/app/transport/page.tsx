'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const transportImages = [
  {
    id: 1,
    image: 'https://www.gleesonmhservice.com/assets/images/erics_truck.224130900_std.JPG',
    title: 'Professional Transport Equipment',
    description: 'Our state-of-the-art transport equipment ensures safe and efficient delivery of your manufactured home.'
  },
  {
    id: 2,
    image: 'https://www.gleesonmhservice.com/assets/images/Vanderhyden17.224110330_std.jpg',
    title: 'Expert Transport Team',
    description: 'Our experienced team handles every aspect of the transport process with precision and care.'
  }
]

const Transport = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Mobile Home Transport</h1>
        
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed">
            Gleeson Transport Service delivers homes from major manufacturers in Arizona: Cavco, Clayton, Champion and Fleetwood. 
            We also relocate pre-owned homes. Our service is unique because we are able to work directly with our setup crews, 
            so that homes can be placed, even on the most difficult lots with the help of our remote crawler. 
            Gleeson Mobile Home Service obtains permits and installs more units than any other company in Arizona. 
            We are one of the most dependable and longest running companies in the industry today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {transportImages.map((item) => (
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

        <div className="bg-gray-50 rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Why Choose Our Transport Service?</h2>
          <ul className="text-left max-w-2xl mx-auto space-y-4">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Direct delivery from major Arizona manufacturers</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Integrated setup crew for seamless installation</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Remote crawler for challenging lot placements</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>Permit acquisition and handling</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Move Your Home?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a free quote and consultation.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  )
}

export default Transport 