import Link from 'next/link'
import Image from 'next/image'
import { Building, Award, Users, Clock } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { TestimonialCard } from '@/components/testimonial-card'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

interface AboutPageProps {
  aboutTendani: string
  image: {
    url: string
    alt?: string
    width?: number
    height?: number
  }
  yearsOfExperience: number
  happyClients: number
  awards: number
  mission: string
  vision: string
  testimonials: {
    rating: number
    message: string
    author: string
    location: string
    id?: string
  }[]
}

export default function AboutComponent({
  aboutTendani,
  image,
  yearsOfExperience,
  happyClients,
  awards,
  mission,
  vision,
  testimonials,
}: AboutPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About Tendani
                </h1>
                <div
                  className="text-muted-foreground md:text-xl"
                  dangerouslySetInnerHTML={{ __html: aboutTendani }}
                />
              </div>
              <div className="flex justify-center">
                <Image
                  src={image.url}
                  alt={image.alt || 'Tendani - Property Expert'}
                  width={image.width || 500}
                  height={image.height || 500}
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
                  Tendani&apos;s journey in the South African property market spans over two decades,
                  during which he has helped countless clients find their dream homes and make
                  successful property investments.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Clock className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold">{yearsOfExperience}+</h3>
                    <p className="text-muted-foreground">Years Experience</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Users className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold">{happyClients}+</h3>
                    <p className="text-muted-foreground">Happy Clients</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Award className="h-12 w-12 text-primary mb-4" />
                    <h3 className="text-2xl font-bold">{awards}+</h3>
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
                <div
                  className="text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: mission }}
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Our Vision</h2>
                <div
                  className="text-muted-foreground"
                  dangerouslySetInnerHTML={{ __html: vision }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Tendani section remains the same */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">Why Choose Tendani?</h2>
              <p className="text-muted-foreground mt-2 md:text-lg">
                Here&apos;s why clients trust us with their property needs
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
                    With years in the industry, we bring unparalleled expertise to every
                    transaction.
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
                    Our deep understanding of South African property markets helps you make informed
                    decisions.
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
                Don&apos;t just take our word for it - hear from our satisfied clients
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id || index}
                  quote={testimonial.message}
                  author={testimonial.author}
                  location={testimonial.location}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action and Footer remain the same */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Work With Us?
                </h2>
                <p className="max-w-[600px] md:text-xl">
                  Whether you&apos;re looking to buy, sell, rent, or join our team, we&apos;re here
                  to help you every step of the way.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/properties">Browse Properties</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="text-primary border-white hover:bg-white/10"
                >
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
