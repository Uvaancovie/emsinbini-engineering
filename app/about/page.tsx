import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About ENSIMBINI ENGINEERING</h1>
          <p className="text-gray-500 md:text-xl">
            Professional engineering solutions tailored to your specific requirements.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <img
              src="/placeholder.svg?height=400&width=600&text=Company+Image"
              alt="ENSIMBINI ENGINEERING Office"
              className="rounded-lg object-cover w-full aspect-video"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Our Story</h2>
            <p>
              ENSIMBINI ENGINEERING CC was established with a vision to provide high-quality engineering services to
              clients in Durban and beyond. With years of experience in the industry, our team of skilled engineers is
              committed to delivering innovative solutions that meet the highest standards of quality and safety.
            </p>
            <p>
              Based in Bluff, Durban, we have grown to become a trusted name in the engineering sector, known for our
              reliability, expertise, and dedication to client satisfaction.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Mission</h2>
          <p>
            Our mission is to provide innovative engineering solutions that exceed client expectations while maintaining
            the highest standards of quality, safety, and environmental responsibility.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Values</h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-500">
                  We strive for excellence in every project we undertake, ensuring the highest quality in our work.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-500">
                  We conduct our business with honesty, transparency, and ethical practices.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Innovation</h3>
                <p className="text-gray-500">
                  We embrace innovative approaches and technologies to deliver cutting-edge solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-gray-500">We are committed to meeting deadlines and delivering on our promises.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Safety</h3>
                <p className="text-gray-500">We prioritize safety in all our operations and designs.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">Client Focus</h3>
                <p className="text-gray-500">
                  We put our clients' needs first and work closely with them to achieve their goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Our Team</h2>
          <p>
            Our team consists of highly qualified and experienced engineers, technicians, and support staff who are
            passionate about their work and committed to delivering exceptional results.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <img
                  src={`/placeholder.svg?height=300&width=300&text=Team+Member+${member}`}
                  alt={`Team Member ${member}`}
                  className="mx-auto rounded-full w-32 h-32 object-cover mb-4"
                />
                <h3 className="text-lg font-bold">Team Member {member}</h3>
                <p className="text-gray-500">Position Title</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
