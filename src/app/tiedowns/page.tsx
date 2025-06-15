'use client'

import { motion } from 'framer-motion'
import { FaFilePdf } from 'react-icons/fa'

const products = [
  'TIE-DOWN ENGINEERING & MINUTE MAN PRODUCTS',
  'CROSSDRIVE ROCK ANCHORS',
  'CONCRETE SLAB ANCHORS',
  'AUGER EARTH ANCHORS',
  'LLBS LONGITUINAL / LATERAL BRACING',
  'XI2 FOUNDATION SYSTEM (Can be retrofit for FHA/VA approval)'
]

const Tiedowns = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">Tie Downs & Anchoring</h1>
        
        <div className="prose prose-lg mx-auto mb-16">
          <p className="text-gray-700 leading-relaxed">
            When strong winds blow, manufactured homes need special protection. No matter where you live, 
            you need tiedowns and anchors to keep your manufactured home stable and secure. Before you start 
            the job, you should understand why this wind protection system is necessary, and know the basic 
            requirements for tiedowns and anchors. You also need to become familiar with all the components 
            that make up your anchoring system. It's a good idea to consult with an experienced professional 
            installer or building inspector if you have any questions or doubts about the installation.
          </p>
        </div>

        <div className="bg-gray-50 rounded-xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Our Products</h2>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {products.map((product, index) => (
              <li key={index} className="flex items-center">
                <span className="text-primary mr-3">•</span>
                <span className="text-gray-700">{product}</span>
              </li>
            ))}
          </ul>
          <p className="text-center mt-6 text-lg font-semibold text-primary">
            Above ground or pit set? We have an anchor for you!
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-primary">Xi2 Foundation System</h2>
            <p className="text-gray-700 mb-6">
              The Xi2 Foundation System provides comprehensive windstorm and seismic protection for your home. 
              This innovative and cost-efficient foundation technology includes both lateral and longitudinal 
              stabilization, addressing wind and seismic loads on all sides of the home.
            </p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Key Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Protection for Wind Zones I, II & III</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Compatible with single and double stack block configurations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Steel pier system option available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>FHA/VA approval available through retrofit</span>
                </li>
              </ul>
            </div>
            <a
              href="https://www.tiedown.com/userdocs/pdf/d927.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <FaFilePdf className="mr-2" />
              View Xi2 System Documentation
            </a>
          </motion.div>
        </div>

        <div className="bg-primary rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4 text-white">Why Proper Anchoring Matters</h2>
          <ul className="text-left max-w-2xl mx-auto space-y-4">
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white">Protection against strong winds and storms</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white">Compliance with local building codes</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white">Enhanced structural stability</span>
            </li>
            <li className="flex items-start">
              <span className="text-white mr-2">✓</span>
              <span className="text-white">Professional installation by experienced technicians</span>
            </li>
          </ul>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Professional Anchoring?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact us today for a consultation and quote on your tiedown needs.
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

export default Tiedowns 