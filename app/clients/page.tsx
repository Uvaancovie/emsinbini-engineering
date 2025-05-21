import { Card, CardContent } from "@/components/ui/card"

export default function ClientsPage() {
  const clients = [
    {
      name: "Manufacturing Company A",
      logo: "/placeholder.svg?height=160&width=160&text=Client+1",
      description:
        "A leading manufacturer in the automotive industry. We provided structural engineering services for their factory expansion.",
    },
    {
      name: "Construction Firm B",
      logo: "/placeholder.svg?height=160&width=160&text=Client+2",
      description:
        "A major construction company specializing in commercial buildings. We collaborated on multiple projects providing engineering consultation.",
    },
    {
      name: "Municipal Government C",
      logo: "/placeholder.svg?height=160&width=160&text=Client+3",
      description:
        "Local government entity. We assisted with infrastructure projects including bridge inspections and repairs.",
    },
    {
      name: "Industrial Corporation D",
      logo: "/placeholder.svg?height=160&width=160&text=Client+4",
      description:
        "A large industrial corporation. We designed and implemented mechanical systems for their production facilities.",
    },
    {
      name: "Property Developer E",
      logo: "/placeholder.svg?height=160&width=160&text=Client+5",
      description:
        "A commercial property developer. We provided comprehensive engineering services for their new office complex.",
    },
    {
      name: "Energy Company F",
      logo: "/placeholder.svg?height=160&width=160&text=Client+6",
      description:
        "An energy production company. We designed electrical systems and provided consulting services for their facilities.",
    },
    {
      name: "Logistics Provider G",
      logo: "/placeholder.svg?height=160&width=160&text=Client+7",
      description: "A logistics and warehousing company. We engineered the expansion of their warehouse facilities.",
    },
    {
      name: "Retail Chain H",
      logo: "/placeholder.svg?height=160&width=160&text=Client+8",
      description:
        "A retail chain with multiple locations. We provided structural assessments and renovation designs for their stores.",
    },
  ]

  const testimonials = [
    {
      text: "ENSIMBINI ENGINEERING delivered exceptional results for our factory expansion project. Their attention to detail and technical expertise were impressive.",
      author: "John Smith",
      position: "Project Manager, Manufacturing Company A",
    },
    {
      text: "We've worked with ENSIMBINI on multiple projects, and they consistently provide high-quality engineering services. Their team is responsive, professional, and knowledgeable.",
      author: "Sarah Johnson",
      position: "Director, Construction Firm B",
    },
    {
      text: "The bridge inspection and repair project was completed on time and within budget. ENSIMBINI's engineers identified issues that we hadn't noticed and provided effective solutions.",
      author: "Michael Brown",
      position: "Infrastructure Manager, Municipal Government C",
    },
    {
      text: "ENSIMBINI ENGINEERING's mechanical design for our production facility has significantly improved our operational efficiency. We highly recommend their services.",
      author: "David Wilson",
      position: "Operations Director, Industrial Corporation D",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Clients</h1>
          <p className="text-gray-500 md:text-xl">
            We're proud to have worked with these esteemed organizations on various engineering projects.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((client, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6 text-center">
                <img src={client.logo || "/placeholder.svg"} alt={client.name} className="mx-auto mb-4 h-20 w-auto" />
                <h3 className="mb-2 text-lg font-bold">{client.name}</h3>
                <p className="text-sm text-gray-500">{client.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-center text-3xl font-bold">Client Testimonials</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl">"</div>
                  <p className="mb-4 italic text-gray-600">{testimonial.text}</p>
                  <div>
                    <p className="font-bold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.position}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-center text-3xl font-bold">Industries We Serve</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <h3 className="mb-2 text-lg font-medium">Manufacturing</h3>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <h3 className="mb-2 text-lg font-medium">Construction</h3>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <h3 className="mb-2 text-lg font-medium">Infrastructure</h3>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <h3 className="mb-2 text-lg font-medium">Commercial</h3>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <h3 className="mb-2 text-lg font-medium">Energy</h3>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <h3 className="mb-2 text-lg font-medium">Logistics</h3>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-100 p-8 text-center">
          <h2 className="mb-4 text-2xl font-bold">Become Our Client</h2>
          <p className="mb-6">
            Join our growing list of satisfied clients. Contact us today to discuss how we can assist with your
            engineering needs.
          </p>
          <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <div className="font-medium">
              Phone: <span className="text-primary">031 467 9052</span>
            </div>
            <div className="font-medium">
              Email: <span className="text-primary">ensimbinieng@mweb.co.za</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
