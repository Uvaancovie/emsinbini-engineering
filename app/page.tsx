import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  ENSIMBINI ENGINEERING CC
                </h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We specialize in precision and general engineering - Turning,shafts
                ,pumps,rollers, milling, fitting and fabrication.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="/projects">
                      View Our Projects <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  src="https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//fabrication.jpg"
                  alt="Engineering Project"
                  className="rounded-lg object-cover w-full aspect-video"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We provide comprehensive engineering solutions tailored to your specific requirements.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <img
                    src="https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//drilling.jpg"
                    alt="Drilling Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Drilling</h3>
                  <p className="text-gray-600">
                    Precision drilling services for various materials including ferrous metals, non-ferrous metals, plastics, and tuffnol.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <img
                    src="https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini/fabrication.jpg"
                    alt="Fabrication Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
                      <path d="M2 20h20" />
                      <path d="M14 12v.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Fabrication</h3>
                  <p className="text-gray-600">
                    Custom fabrication services for various materials. We handle complex projects with precision and attention to detail.
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48 w-full">
                  <img
                    src="https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//milling.jpg"
                    alt="Milling Services"
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6 space-y-4">
                  <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-600"
                    >
                      <path d="M2 12h20" />
                      <path d="M6 12v8" />
                      <path d="M18 12v8" />
                      <path d="M12 12v8" />
                      <path d="M18 2v4" />
                      <path d="M6 2v4" />
                      <path d="M12 2v4" />
                      <path d="M4 4h16" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-blue-800">Milling</h3>
                  <p className="text-gray-600">
                    Advanced milling services using state-of-the-art equipment. We work with various materials to meet your specifications.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Take a look at some of our recent engineering projects.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
              {[1, 2, 3].map((project) => (
                <div key={project} className="overflow-hidden rounded-lg">
                  <img
                    src={`/placeholder.svg?height=300&width=400&text=Project+${project}`}
                    alt={`Project ${project}`}
                    className="w-full h-48 object-cover transition-all hover:scale-105"
                  />
                  <div className="p-4 bg-white">
                    <h3 className="text-xl font-bold">Engineering Project {project}</h3>
                    <p className="text-gray-500 mt-2">
                      A brief description of this engineering project and the solutions we provided.
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-8">
              <Button asChild>
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-800">Our Clients</h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We've had the pleasure of working with these esteemed organizations.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mt-8">
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//transet-port-terminals.png"
                  alt="Transnet Port Terminals"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//cps.jpg"
                  alt="CPS Projects"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//konecranes.png"
                  alt="Konecranes"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
              <div className="flex items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <img
                  src="https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//zpmc.jpg"
                  alt="ZMPC Africa"
                  className="max-h-12 w-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Contact Us</h2>
                <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with us for any inquiries or to discuss your project requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-2 h-5 w-5 text-gray-500" />
                    <span>194 Bluff Rd, Bluff, Durban, 4052</span>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-2 h-5 w-5 text-gray-500" />
                    <span>ensimbinieng@mweb.co.za</span>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-2 h-5 w-5 text-gray-500" />
                    <span>031 467 9052</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">Business Hours</h3>
                  <div className="grid grid-cols-2 gap-2">
                    <div>Monday - Friday</div>
                    <div>7:30 - 17:00</div>
                    <div>Saturday</div>
                    <div>7:30 - 12:00</div>
                    <div>Sunday</div>
                    <div>Closed</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3515570909!2d31.0!3d-29.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU0JzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sus!4v1621436761619!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="rounded-lg"
                ></iframe>
                <Button asChild className="w-full">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
