import Image from 'next/image'
import Link from 'next/link'
import { FaTruck, FaTools, FaHome, FaClipboardCheck } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-primary text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div className="container mx-auto px-4 z-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Gleeson Mobile Home Service
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Professional manufactured housing transport, installation, and service throughout Arizona since 1984
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<FaTruck className="w-12 h-12" />}
              title="Transport"
              description="Professional transport services for manufactured and modular homes throughout Arizona"
            />
            <ServiceCard
              icon={<FaTools className="w-12 h-12" />}
              title="Installation"
              description="Complete setup services including permitting, blocking, leveling, and utility hookup"
            />
            <ServiceCard
              icon={<FaHome className="w-12 h-12" />}
              title="Skirting & Awnings"
              description="Custom skirting and awning installation to enhance your home's appearance"
            />
            <ServiceCard
              icon={<FaClipboardCheck className="w-12 h-12" />}
              title="Permits & Inspections"
              description="Expert handling of all necessary permits and inspections for your project"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">About Us</h2>
            <p className="text-lg text-gray-600 mb-8">
              Founded in 1984 by Terry Gleeson, we provide manufactured and modular housing transport, 
              installation, and service throughout Arizona. We work with manufactured home communities, 
              sales centers, corporations, and individuals to provide the complete home or building setup 
              experience from permitting to closing.
            </p>
            <div className="flex justify-center gap-4">
              <div className="bg-primary text-white px-6 py-2 rounded-full">
                Licensed
              </div>
              <div className="bg-primary text-white px-6 py-2 rounded-full">
                Bonded
              </div>
              <div className="bg-primary text-white px-6 py-2 rounded-full">
                Insured
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function ServiceCard({ icon, title, description }: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
} 