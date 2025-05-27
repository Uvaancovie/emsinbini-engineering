"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"

function openWhatsApp(phone: string, message: string) {
  // Format phone for WhatsApp (South Africa: +27)
  let formatted = phone.replace(/\D/g, "")
  if (formatted.startsWith("0")) formatted = "27" + formatted.slice(1)
  window.open(
    `https://wa.me/${formatted}?text=${encodeURIComponent(message)}`,
    "_blank"
  )
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Send email via API
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
    setLoading(false)
    if (res.ok) {
      alert("Thank you for your message. We will get back to you soon!")
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
      // If phone is provided, open WhatsApp
      if (formData.phone) {
        openWhatsApp(formData.phone, `Hello, my name is ${formData.name}. ${formData.message}`)
      }
    } else {
      alert("There was an error sending your message. Please try again later.")
    }
  }

  return (
    <div className="container px-4 py-12 md:px-6 md:py-24">
      <div className="mx-auto max-w-5xl space-y-8">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
          <p className="text-gray-500 md:text-xl">
            Get in touch with us for any inquiries or to discuss your project requirements.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject of your message"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="mr-3 h-5 w-5 text-gray-500" />
                    <div>
                      <h3 className="font-medium">Address</h3>
                      <p className="text-gray-500">194 Bluff Rd, Bluff, Durban, 4052</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="mr-3 h-5 w-5 text-gray-500" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-gray-500">ensimbinieng@mweb.co.za</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Phone className="mr-3 h-5 w-5 text-gray-500" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-gray-500">031 467 9052</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h2 className="mb-4 text-2xl font-bold">Business Hours</h2>
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium">Monday - Friday</div>
                  <div>7:30 - 17:00</div>
                  <div className="font-medium">Saturday</div>
                  <div>7:30 - 12:00</div>
                  <div className="font-medium">Sunday</div>
                  <div>Closed</div>
                </div>
              </CardContent>
            </Card>

            <div className="h-64 overflow-hidden rounded-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3464.3515570909!2d31.0!3d-29.9!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDU0JzAwLjAiUyAzMcKwMDAnMDAuMCJF!5e0!3m2!1sen!2sus!4v1621436761619!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Frequently Asked Questions</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">What areas do you serve?</h3>
                <p className="text-gray-500">
                  We primarily serve Durban and the surrounding areas, but we can take on projects throughout South
                  Africa.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">How do I request a quote?</h3>
                <p className="text-gray-500">
                  You can request a quote by filling out our contact form, calling us, or sending us an email with your
                  project details.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">What information do you need for a project?</h3>
                <p className="text-gray-500">
                  We typically need project specifications, timeline requirements, budget constraints, and any existing
                  documentation or plans.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-bold">Do you offer emergency services?</h3>
                <p className="text-gray-500">
                  Yes, we offer emergency engineering services for critical situations. Please call our office directly
                  for immediate assistance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
