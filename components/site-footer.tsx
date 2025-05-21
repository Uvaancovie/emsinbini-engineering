import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-gray-100">
      <div className="container px-4 md:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex flex-col">
              <span className="text-xl font-bold">ENSIMBINI</span>
              <span className="text-xl">ENGINEERING CC</span>
            </Link>
            <p className="text-sm text-gray-500">Professional engineering solutions for all your needs.</p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm hover:underline">
                Home
              </Link>
              <Link href="/about" className="text-sm hover:underline">
                About
              </Link>
              <Link href="/services" className="text-sm hover:underline">
                Services
              </Link>
              <Link href="/projects" className="text-sm hover:underline">
                Projects
              </Link>
              <Link href="/clients" className="text-sm hover:underline">
                Clients
              </Link>
              <Link href="/contact" className="text-sm hover:underline">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start">
                <MapPin className="mr-2 h-4 w-4 text-gray-500" />
                <span>194 Bluff Rd, Bluff, Durban, 4052</span>
              </div>
              <div className="flex items-start">
                <Mail className="mr-2 h-4 w-4 text-gray-500" />
                <span>ensimbinieng@mweb.co.za</span>
              </div>
              <div className="flex items-start">
                <Phone className="mr-2 h-4 w-4 text-gray-500" />
                <span>031 467 9052</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Business Hours</h3>
            <div className="grid grid-cols-2 gap-1 text-sm">
              <div>Monday</div>
              <div>7:30 - 17:00</div>
              <div>Tuesday</div>
              <div>7:30 - 17:00</div>
              <div>Wednesday</div>
              <div>7:30 - 17:00</div>
              <div>Thursday</div>
              <div>7:30 - 17:00</div>
              <div>Friday</div>
              <div>7:30 - 17:00</div>
              <div>Saturday</div>
              <div>7:30 - 12:00</div>
              <div>Sunday</div>
              <div>Closed</div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} ENSIMBINI ENGINEERING CC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
