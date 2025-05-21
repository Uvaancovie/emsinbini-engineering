import { Card, CardContent } from "@/components/ui/card"

export default function ServicesPage() {
  const services = [
    {
      title: "Mechanical Engineering",
      description:
        "Design, analysis, and implementation of mechanical systems and components. We provide solutions for various industries including manufacturing, automotive, and energy.",
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
          className="h-10 w-10"
        >
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      title: "Structural Engineering",
      description:
        "Analysis and design of structures to ensure safety, functionality, and durability. We work on buildings, bridges, and other infrastructure projects.",
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
          className="h-10 w-10"
        >
          <path d="M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14" />
          <path d="M2 20h20" />
          <path d="M14 12v.01" />
        </svg>
      ),
    },
    {
      title: "Civil Engineering",
      description:
        "Design and construction of infrastructure projects including buildings, roads, and bridges. We provide comprehensive solutions from planning to execution.",
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
          className="h-10 w-10"
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
      ),
    },
    {
      title: "Electrical Engineering",
      description:
        "Design, installation, and maintenance of electrical systems for various applications. We ensure safety, efficiency, and compliance with regulations.",
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
          className="h-10 w-10"
        >
          <path d="M18 16.8a7.14 7.14 0 0 0 2.24-3.22 8.34 8.34 0 0 0 .25-2.08c.04-3.1-2.46-5.64-5.5-5.5-3.5.2-5.4 3.6-5 6.5.1.5.4 1.2.5 1.8.1.6.1 1.2.1 1.8" />
          <path d="M13 17.8c-.5-.4-1-.7-1.5-1.1-.9-.7-1.1-1.6-.8-2.7.6-2.2 2.2-3.6 4.1-4.4 1.9-.8 3.8-.7 5.7.2 1.7.8 2.9 2.2 3.4 4s.2 3.6-.8 5.1c-.5.8-1.2 1.5-1.9 2.1-1.4 1.2-3 2-4.8 2.2-1.5.1-3-.1-4.4-.7" />
          <path d="M6.53 9.4a5.2 5.2 0 0 1 0-7.4" />
          <path d="M9.12 12a5.2 5.2 0 0 1 0-7.4" />
          <line x1="2" y1="12" x2="12" y2="22" />
        </svg>
      ),
    },
    {
      title: "Project Management",
      description:
        "Comprehensive project management services to ensure timely completion, quality control, and cost-effectiveness. We handle all aspects of project execution.",
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
          className="h-10 w-10"
        >
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      title: "Consulting Services",
      description:
        "Expert advice and guidance on engineering matters. We provide insights and recommendations based on our extensive experience and industry knowledge.",
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
          className="h-10 w-10"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
          <p className="text-gray-500 md:text-xl">
            We provide comprehensive engineering solutions tailored to your specific requirements.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
                <p className="text-gray-500">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Approach</h2>
          <p>At ENSIMBINI ENGINEERING, we follow a systematic approach to every project:</p>
          <ol className="ml-6 space-y-2 list-decimal">
            <li>
              <strong>Consultation:</strong> We begin by understanding your specific requirements and objectives.
            </li>
            <li>
              <strong>Planning:</strong> We develop a comprehensive plan that outlines the scope, timeline, and
              resources needed.
            </li>
            <li>
              <strong>Design:</strong> Our engineers create detailed designs that meet your specifications and comply
              with industry standards.
            </li>
            <li>
              <strong>Implementation:</strong> We execute the project according to the approved design, ensuring quality
              at every step.
            </li>
            <li>
              <strong>Testing:</strong> We conduct thorough testing to ensure that everything functions as intended.
            </li>
            <li>
              <strong>Handover:</strong> We provide complete documentation and training to ensure a smooth transition.
            </li>
          </ol>
        </div>

        <div className="rounded-lg bg-gray-100 p-6">
          <h2 className="mb-4 text-2xl font-bold">Need a Custom Solution?</h2>
          <p className="mb-4">
            If you don't see the specific service you're looking for, please contact us. We offer customized solutions
            to meet your unique engineering needs.
          </p>
          <p className="font-medium">
            Contact us at: <span className="text-primary">031 467 9052</span> or{" "}
            <span className="text-primary">ensimbinieng@mweb.co.za</span>
          </p>
        </div>
      </div>
    </div>
  )
}
