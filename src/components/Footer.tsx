'use client'

import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Transport', href: '/transport' },
    { name: 'Land & Home', href: '/land-home' },
    { name: 'Tie Downs', href: '/tiedowns' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ],
  services: [
    { name: 'Transport', href: '/transport' },
    { name: 'Setup', href: '/services#setup' },
    { name: 'Permits', href: '/services#permits' },
    { name: 'Block & Level', href: '/services#block-level' },
    { name: 'Skirting', href: '/services#skirting' },
    { name: 'Awnings', href: '/services#awnings' },
    { name: 'HVAC', href: '/services#hvac' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Gleeson Mobile Home Service</h3>
            <p className="text-gray-300 mb-4">
              Professional manufactured housing transport, installation, and service throughout Arizona since 1984.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FaPhone className="w-4 h-4" />
                <span>480-497-5435</span>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope className="w-4 h-4" />
                <span>butchm@gleesonmhservice.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <FaMapMarkerAlt className="w-4 h-4 mt-1" />
                <span>
                  931 E. Impala Avenue<br />
                  Mesa, AZ 85204
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* License Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Licenses</h3>
            <div className="space-y-2 text-gray-300">
              <p>License I10G-5956</p>
              <p>ROC-278984 KB1</p>
              <div className="mt-4">
                <p className="font-semibold">Business Hours</p>
                <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white mt-12 pt-8 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Gleeson Mobile Home Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 