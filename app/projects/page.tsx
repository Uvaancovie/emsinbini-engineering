import { Card, CardContent } from "@/components/ui/card"

export default function ProjectsPage() {
  const projects = [
    {
      title: "Industrial Facility Renovation",
      description:
        "Complete structural renovation and modernization of a manufacturing facility in Durban. The project involved structural reinforcement, electrical system upgrades, and installation of new production equipment.",
      image: "/placeholder.svg?height=400&width=600&text=Project+1",
      category: "Structural Engineering",
      client: "Manufacturing Company",
      year: "2023",
    },
    {
      title: "Commercial Building Design",
      description:
        "Design and engineering services for a new commercial building in the Bluff area. The project included structural design, electrical systems, HVAC, and plumbing design in compliance with local building codes.",
      image: "/placeholder.svg?height=400&width=600&text=Project+2",
      category: "Civil Engineering",
      client: "Real Estate Developer",
      year: "2022",
    },
    {
      title: "Bridge Inspection and Repair",
      description:
        "Comprehensive inspection and repair of a bridge structure. The project involved structural assessment, identification of defects, and implementation of repair solutions to extend the bridge's service life.",
      image: "/placeholder.svg?height=400&width=600&text=Project+3",
      category: "Structural Engineering",
      client: "Municipal Government",
      year: "2022",
    },
    {
      title: "Industrial Equipment Installation",
      description:
        "Design and installation of specialized industrial equipment for a manufacturing plant. The project included mechanical design, electrical integration, and commissioning of the equipment.",
      image: "/placeholder.svg?height=400&width=600&text=Project+4",
      category: "Mechanical Engineering",
      client: "Industrial Manufacturer",
      year: "2021",
    },
    {
      title: "Power Distribution System Upgrade",
      description:
        "Upgrade of an existing power distribution system for a commercial complex. The project involved redesigning the electrical infrastructure to improve efficiency and meet increased power demands.",
      image: "/placeholder.svg?height=400&width=600&text=Project+5",
      category: "Electrical Engineering",
      client: "Commercial Property Owner",
      year: "2021",
    },
    {
      title: "Warehouse Expansion Project",
      description:
        "Engineering services for the expansion of a logistics warehouse. The project included structural design, foundation work, and integration with the existing facility.",
      image: "/placeholder.svg?height=400&width=600&text=Project+6",
      category: "Civil Engineering",
      client: "Logistics Company",
      year: "2020",
    },
  ]

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Projects</h1>
          <p className="text-gray-500 md:text-xl">
            Take a look at some of our recent engineering projects and success stories.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="h-48 w-full object-cover" />
              <CardContent className="p-6">
                <div className="mb-2 text-sm font-medium text-gray-500">
                  {project.category} | {project.year}
                </div>
                <h3 className="mb-2 text-xl font-bold">{project.title}</h3>
                <p className="mb-4 text-gray-500">{project.description}</p>
                <div className="text-sm font-medium">
                  Client: <span className="text-gray-500">{project.client}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Project Approach</h2>
          <p>
            At ENSIMBINI ENGINEERING, we approach each project with meticulous attention to detail and a commitment to
            excellence. Our project methodology ensures that we deliver high-quality results that meet or exceed our
            clients' expectations.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <div className="mb-2 text-2xl font-bold">1</div>
              <h3 className="mb-2 font-medium">Requirements Analysis</h3>
              <p className="text-sm text-gray-500">Understanding client needs and project scope</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <div className="mb-2 text-2xl font-bold">2</div>
              <h3 className="mb-2 font-medium">Design & Planning</h3>
              <p className="text-sm text-gray-500">Creating detailed designs and project plans</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <div className="mb-2 text-2xl font-bold">3</div>
              <h3 className="mb-2 font-medium">Implementation</h3>
              <p className="text-sm text-gray-500">Executing the project with precision</p>
            </div>
            <div className="rounded-lg bg-gray-100 p-4 text-center">
              <div className="mb-2 text-2xl font-bold">4</div>
              <h3 className="mb-2 font-medium">Quality Assurance</h3>
              <p className="text-sm text-gray-500">Rigorous testing and quality control</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg bg-gray-100 p-6 text-center">
          <h2 className="mb-4 text-2xl font-bold">Have a Project in Mind?</h2>
          <p className="mb-6">
            We're ready to help you bring your engineering project to life. Contact us today to discuss your
            requirements and how we can assist you.
          </p>
          <div className="flex justify-center space-x-4">
            <div className="font-medium">
              Call us: <span className="text-primary">031 467 9052</span>
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
