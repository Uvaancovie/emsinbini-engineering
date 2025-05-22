import { Card, CardContent } from "@/components/ui/card"

export default function ClientsPage() {
  const clients = [
    {
      name: "Transnet Port Terminals",
      logo: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//transet-port-terminals.png",
      description:
        "South Africa's leading port terminal operator. We provide specialized engineering services for their port equipment maintenance and repair needs.",
    },
    {
      name: "CPS Projects",
      logo: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//cps.jpg",
      description:
        "A leading project management and engineering company. We collaborate on various industrial projects, providing precision engineering services.",
    },
    {
      name: "Konecranes",
      logo: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//konecranes.png",
      description:
        "Global leader in lifting equipment and services. We provide specialized maintenance and repair services for their crane systems.",
    },
    {
      name: "ZMPC Africa",
      logo: "https://pnjqqkfklormkqcysssl.supabase.co/storage/v1/object/public/emsinbini//zpmc.jpg",
      description:
        "A major player in the African manufacturing sector. We deliver precision engineering solutions for their manufacturing processes.",
    }
  ]

  const testimonials = [
    {
      text: "ENSIMBINI ENGINEERING has been a reliable partner in maintaining our port equipment. Their technical expertise and quick response time have been invaluable to our operations.",
      author: "Port Operations Manager",
      position: "Transnet Port Terminals",
    },
    {
      text: "Working with ENSIMBINI has been a pleasure. Their commitment to quality and safety standards aligns perfectly with our project requirements.",
      author: "Project Director",
      position: "CPS Projects",
    },
    {
      text: "ENSIMBINI's team has consistently delivered high-quality maintenance services for our crane systems. Their attention to detail and safety protocols are exemplary.",
      author: "Maintenance Manager",
      position: "Konecranes",
    },
    {
      text: "The precision engineering services provided by ENSIMBINI have significantly improved our manufacturing efficiency. Their expertise in handling various materials is impressive.",
      author: "Operations Director",
      position: "ZMPC Africa",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-blue-800">Our Clients</h1>
          <p className="text-gray-600 md:text-xl">
            We're proud to have worked with these esteemed organizations on various engineering projects.
          </p>
          <div className="mt-4 rounded-lg bg-blue-50 p-6">
            <p className="text-lg font-medium text-blue-800">
              ENSIMBINI ENGINEERING is a black-owned (Level 1) company, eligible for tenders under the Broad Based Black Economic Empowerment (B-BBEE) Policy of South Africa.
            </p>
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {clients.map((client, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 flex-shrink-0">
                    <img 
                      src={client.logo} 
                      alt={client.name} 
                      className="h-full w-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="mb-2 text-xl font-bold text-blue-800">{client.name}</h3>
                    <p className="text-gray-600">{client.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-center text-3xl font-bold text-blue-800">Client Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl text-blue-600">"</div>
                  <p className="mb-4 italic text-gray-600">{testimonial.text}</p>
                  <div>
                    <p className="font-bold text-blue-800">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-center text-3xl font-bold text-blue-800">Industries We Serve</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg bg-blue-50 p-4 text-center hover:shadow-md transition-shadow">
              <h3 className="mb-2 text-lg font-medium text-blue-800">Port Operations</h3>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 text-center hover:shadow-md transition-shadow">
              <h3 className="mb-2 text-lg font-medium text-blue-800">Manufacturing</h3>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 text-center hover:shadow-md transition-shadow">
              <h3 className="mb-2 text-lg font-medium text-blue-800">Industrial</h3>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 text-center hover:shadow-md transition-shadow">
              <h3 className="mb-2 text-lg font-medium text-blue-800">Engineering</h3>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 text-center hover:shadow-md transition-shadow">
              <h3 className="mb-2 text-lg font-medium text-blue-800">Project Management</h3>
            </div>
            <div className="rounded-lg bg-blue-50 p-4 text-center hover:shadow-md transition-shadow">
              <h3 className="mb-2 text-lg font-medium text-blue-800">Maintenance</h3>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-blue-800 p-8 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">Become Our Client</h2>
          <p className="mb-6">
            Join our growing list of satisfied clients. Contact us today to discuss how we can assist with your
            engineering needs.
          </p>
          <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="font-medium">
              Phone: <span className="text-blue-200">031 467 9052</span>
            </div>
            <div className="font-medium">
              Email: <span className="text-blue-200">ensimbinieng@mweb.co.za</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
