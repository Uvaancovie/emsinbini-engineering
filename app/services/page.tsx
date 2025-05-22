import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      title: "Turning",
      description:
        "Precision turning services for various materials including ferrous metals, non-ferrous metals, plastics, and tuffnol. Available during normal working hours and after hours.",
      icon: (
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
          className="h-10 w-10 text-blue-600"
        >
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        </svg>
      ),
    },
    {
      title: "Metal Spraying",
      description:
        "Professional metal spraying services using specialized equipment for surface coating and protection. Available for various industrial applications.",
      icon: (
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
          className="h-10 w-10 text-blue-600"
        >
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        </svg>
      ),
    },
    {
      title: "Drilling & Fitting",
      description:
        "Precision drilling and fitting services for all types of materials. Our experienced team ensures accurate and efficient results.",
      icon: (
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
          className="h-10 w-10 text-blue-600"
        >
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        </svg>
      ),
    },
    {
      title: "Fabrication",
      description:
        "Custom fabrication services for various materials. We handle complex projects with precision and attention to detail.",
      icon: (
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
          className="h-10 w-10 text-blue-600"
        >
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        </svg>
      ),
    },
    {
      title: "CNC & Milling",
      description:
        "Advanced CNC machining and milling services using state-of-the-art equipment. We work with various materials to meet your specifications.",
      icon: (
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
          className="h-10 w-10 text-blue-600"
        >
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        </svg>
      ),
    },
    {
      title: "24/7 Call Out Service",
      description:
        "Emergency call out service available when required. Our team is ready to assist with urgent manufacturing needs outside normal working hours.",
      icon: (
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
          className="h-10 w-10 text-blue-600"
        >
          <path d="M12 2v20" />
          <path d="M2 12h20" />
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" />
        </svg>
      ),
    },
  ]

  const equipment = [
    "Lathes",
    "Milling Machines",
    "Drilling Machines",
    "Welding Machines and Equipment (Argon, Oxygen and Acetylene)",
    "Various Hand Tools (Grinders, Drills, Spanners etc.)",
    "Slotter",
    "Metal Spraying Gun",
    "Boring Mill",
    "Gear Driven Milling Machines",
    "CNC Machine"
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24 bg-white">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl text-blue-800">Our Services</h1>
          <p className="text-gray-600 md:text-xl">
            We provide comprehensive manufacturing and engineering solutions with state-of-the-art equipment.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden border-blue-200 hover:border-blue-400 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-50">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold text-blue-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800">Our Equipment</h2>
          <p className="text-gray-600">Ensimbini Engineering is equipped with state-of-the-art machinery and tools to deliver high-quality services:</p>
          <ul className="ml-6 space-y-2 list-disc text-gray-600">
            {equipment.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-blue-800">Materials We Work With</h2>
          <p className="text-gray-600">We work with a wide range of materials including:</p>
          <ul className="ml-6 space-y-2 list-disc text-gray-600">
            <li>Ferrous Metals</li>
            <li>Non-ferrous Metals</li>
            <li>Plastics</li>
            <li>Tuffnol</li>
          </ul>
        </div>

        <div className="rounded-lg bg-blue-800 p-6 text-white">
          <h2 className="mb-4 text-2xl font-bold">Need Our Services?</h2>
          <p className="mb-4">
            We provide our services during normal working hours as well as after hours. Emergency call out service is available when required.
          </p>
          <p className="font-medium">
            Contact us at: <span className="text-blue-200">031 467 9052</span> or{" "}
            <span className="text-blue-200">ensimbinieng@mweb.co.za</span>
          </p>
        </div>
      </div>
    </div>
  )
}
