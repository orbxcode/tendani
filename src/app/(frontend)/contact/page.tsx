import Link from "next/link"
import Image from "next/image"
import { Building, MapPin, Phone, Mail, Clock } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
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
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium text-primary">
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
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  We're here to answer any questions you have about our properties and services.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information and Form */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              {/* Contact Form */}
              <div className="space-y-4">
                <div>
                  <h2 className="text-2xl font-bold">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </div>

              {/* Contact Information */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold">Contact Details</h2>
                  <p className="text-muted-foreground">Reach out to us directly using the information below.</p>
                </div>
                <div className="grid gap-4">
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-muted-foreground">+27 12 345 6789</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-muted-foreground">info@tendaniproperties.co.za</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Office Address</h3>
                      <p className="text-muted-foreground">
                        123 Main Street, Sandton
                        <br />
                        Johannesburg, 2196
                        <br />
                        South Africa
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="rounded-full bg-primary/10 p-3">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold">Office Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 8:30 AM - 5:30 PM
                        <br />
                        Saturday: 9:00 AM - 1:00 PM
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=500&width=800"
                    alt="Office Location Map"
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Find answers to common questions about our services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What areas do you cover?</h3>
                <p className="text-muted-foreground">
                  We cover all major cities and regions in South Africa, including Johannesburg, Cape Town, Durban,
                  Pretoria, and Port Elizabeth.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How do I schedule a property viewing?</h3>
                <p className="text-muted-foreground">
                  You can schedule a property viewing by contacting us directly via phone, email, or by using the
                  contact form on our website. We'll arrange a convenient time for you to visit the property.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What documents do I need when buying a property?</h3>
                <p className="text-muted-foreground">
                  You'll need identification documents, proof of address, proof of income, and bank statements. For
                  financing, you'll also need documents required by your mortgage provider.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Do you help with property financing?</h3>
                <p className="text-muted-foreground">
                  Yes, we have partnerships with major banks and financial institutions in South Africa and can assist
                  you in finding the best financing options for your property purchase.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How long does the buying process take?</h3>
                <p className="text-muted-foreground">
                  The buying process typically takes 2-3 months from offer acceptance to transfer of ownership,
                  depending on various factors including financing approval and legal processes.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What fees are involved when selling a property?</h3>
                <p className="text-muted-foreground">
                  Selling fees typically include agent commission, transfer costs, compliance certificates, and
                  potentially capital gains tax. We provide a detailed breakdown before you list with us.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Find Your Dream Property?</h2>
                <p className="max-w-[600px] md:text-xl">
                  Browse our extensive collection of properties or let us help you find the perfect match for your
                  needs.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/properties">Browse Properties</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link href="/join-team">Join Our Team</Link>
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
