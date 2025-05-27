import { projects } from "@/lib/projects"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export default function ProjectsPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Engineering Insights & Case Studies</h1>
          <p className="text-gray-500 md:text-xl">
            Learn about engineering solutions, processes, and best practices through our detailed case studies and
            educational articles. Each post is designed to inform and inspire, showing how we solve real-world challenges.
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {projects.map((project) => (
            <Card key={project.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover rounded-t-lg"
                  sizes="(max-width: 600px) 100vw, 350px"
                />
              </div>
              <CardContent className="p-6 flex flex-col flex-1">
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 text-sm mb-3">{project.summary}</p>
                <div className="text-gray-800 text-xs mb-2">
                  <span className="font-semibold">Scenario:</span> {project.scenario}
                </div>
                <div className="text-gray-800 text-xs mb-2">
                  <span className="font-semibold">Solution:</span> {project.solution}
                </div>
                <div className="flex flex-wrap gap-1 mt-auto pt-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
