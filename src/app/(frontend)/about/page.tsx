import Link from "next/link"
import Image from "next/image"
import { Building, Award, Users, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TestimonialCard } from "@/components/testimonial-card"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Building className="h-6 w-6" />
            <span>Tendani Properties</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/properties" className="text-sm font-medium hover:text-primary">
              Properties
            </Link>
            <Link href="/about" className="text-sm font-medium text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="/join-team" className="text-sm font-medium hover:text-primary">
              Join Our Team
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild>
              <Link href="/properties">Browse Properties</Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
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
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Tendani</h1>
                <p className="text-muted-foreground md:text-xl">
                  With over 20 years of experience in South African property development, Tendani has established
                  himself as a trusted name in the industry. His commitment to client satisfaction and deep market
                  knowledge ensures you receive the best service for all your property needs.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Tendani - Property Expert"
                  width={500}
                  height={500}
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:gap-12 items-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Experience</h2>
                <p className="text-muted-foreground">
                  Tendani's journey in the South African property market spans over two decades, during which he has
                  helped countless clients find their dream homes and make successful property investments.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold">20+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold">1000+</h3>
                    <p className="text-muted-foreground">Happy Clients</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Award className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold">50+</h3>
                    <p className="text-muted-foreground">Industry Awards</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission and Vision */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Mission</h2>
                <p className="text-muted-foreground">
                  To provide exceptional real estate services that exceed client expectations, built on a foundation of
                  integrity, expertise, and personalized attention. We are committed to helping our clients make
                  informed decisions about their property needs, whether buying, selling, renting, or investing.
                </p>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
                <p className="text-muted-foreground">
                  To be the most trusted and respected real estate agency in South Africa, known for our unparalleled
                  market knowledge, innovative approach, and unwavering commitment to client satisfaction. We aim to set
                  the standard for excellence in the industry and make a positive impact on the communities we serve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Tendani */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Why Choose Tendani?</h2>
              <p className="text-muted-foreground mt-2 md:text-lg">
                Here's why clients trust us with their property needs
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  </div>
                  <h3 className="font-bold">Trusted Experience</h3>
                  <p className="text-sm text-muted-foreground">
                    With over 20 years in the industry, we bring unparalleled expertise to every transaction.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-bold">Local Knowledge</h3>
                  <p className="text-sm text-muted-foreground">
                    Our deep understanding of South African property markets helps you make informed decisions.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </div>
                  <h3 className="font-bold">Personalized Service</h3>
                  <p className="text-sm text-muted-foreground">
                    We tailor our approach to meet your unique needs and preferences.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 space-y-2">
                  <div className="rounded-full bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
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
                      className="h-6 w-6 text-primary"
                    >
                      <path d="M12 2v20" />
                      <path d="m17 5-5-3-5 3" />
                      <path d="m17 19-5 3-5-3" />
                      <path d="M2 12h20" />
                      <path d="m5 7-3 5 3 5" />
                      <path d="m19 7 3 5-3 5" />
                    </svg>
                  </div>
                  <h3 className="font-bold">Comprehensive Network</h3>
                  <p className="text-sm text-muted-foreground">
                    Our extensive connections in the industry open doors to exclusive opportunities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">What Our Clients Say</h2>
              <p className="text-muted-foreground mt-2 md:text-lg">
                Don't just take our word for it - hear from our satisfied clients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <TestimonialCard
                quote="Tendani helped us find our dream home in Cape Town. His knowledge of the local market was invaluable."
                author="Sarah Johnson"
                location="Cape Town"
                rating={5}
              />
              <TestimonialCard
                quote="As first-time buyers, we were nervous about the process. Tendani guided us every step of the way with patience and expertise."
                author="David and Lisa Nkosi"
                location="Johannesburg"
                rating={5}
              />
              <TestimonialCard
                quote="I've worked with many agents over the years, but Tendani's professionalism and dedication stands out. Highly recommended!"
                author="Michael van der Merwe"
                location="Durban"
                rating={5}
              />
              <TestimonialCard
                quote="Selling our family home was an emotional process, but Tendani made it smooth and stress-free. He got us an excellent price too!"
                author="Elizabeth Moyo"
                location="Pretoria"
                rating={5}
              />
              <TestimonialCard
                quote="Tendani's market insights helped us make a smart investment decision. Three years later, our property has appreciated significantly."
                author="James and Thandi Williams"
                location="Port Elizabeth"
                rating={5}
              />
              <TestimonialCard
                quote="When relocating to South Africa, we needed someone trustworthy to help us find a home. Tendani exceeded our expectations."
                author="Robert Chen"
                location="Cape Town"
                rating={5}
              />
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Work With Us?</h2>
                <p className="max-w-[600px] md:text-xl">
                  Whether you're looking to buy, sell, rent, or join our team, we're here to help you every step of the
                  way.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/properties">Browse Properties</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link href="/" className="flex items-center gap-2 font-bold">
              <Building className="h-5 w-5" />
              <span>Tendani Properties</span>
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Tendani Properties. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact Us
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
