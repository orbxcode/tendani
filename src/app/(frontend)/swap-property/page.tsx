import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { Building, ArrowRight, Repeat } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SwapPropertyForm } from "@/components/swap-property-form"
import { MobileMenu } from "@/components/mobile-menu"
import Footer from "@/components/Footer"

export default function SwapPropertyPage() {
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
            <Link href="/swap-property" className="text-sm font-medium text-primary">
              Swap Property
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
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
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Swap Your Property</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl">
                  Looking to exchange your property? Submit your details below and find your perfect swap match.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold tracking-tighter">How Property Swapping Works</h2>
              <p className="text-muted-foreground mt-2 md:text-lg">
                A simple process to help you find the perfect property exchange
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="text-xl font-bold">Submit Your Property</h3>
                <p className="text-muted-foreground">
                  Fill out the form below with details about your current property and what you're looking for in a
                  swap.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="text-xl font-bold">Get Matched</h3>
                <p className="text-muted-foreground">
                  Our team and AI agent will review your submission and match you with potential swap opportunities from our
                  database.
                </p>
              </div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="rounded-full bg-primary/10 w-16 h-16 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="text-xl font-bold">Complete Your Swap</h3>
                <p className="text-muted-foreground">
                  Once you find a suitable match, our team will guide you through the property exchange process.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Swap Form Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter">Submit Your Property for Swap</h2>
                <p className="text-muted-foreground">
                  Fill out the form with details about your current property and what you're looking for in a swap. Our
                  team will contact you with potential matches.
                </p>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-2">
                    <Repeat className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold">Why Swap?</h3>
                      <p className="text-sm text-muted-foreground">
                        Property swapping can be a cost-effective alternative to traditional buying and selling,
                        potentially saving on agent fees, transfer costs, and moving expenses.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="aspect-video relative overflow-hidden rounded-lg">
                  <Image
                    src="/media/jointeam1.jpg"
                    alt="Property Swap"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="bg-background rounded-lg border p-6 shadow-sm">
                <SwapPropertyForm />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Swap Properties */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Featured Properties for Swap</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Browse these properties currently available for swap
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-lg border">
                <Badge className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground">For Swap</Badge>
                <Link href="/properties/1">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Family Home for Swap"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-bold">Family Home in Rosebank</h3>
                  <p className="text-sm text-muted-foreground mb-2">Rosebank, Johannesburg</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm">
                      <span className="flex items-center">
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
                          className="mr-1 h-4 w-4"
                        >
                          <path d="M2 22v-5l5-5 5 5-5 5z" />
                          <path d="M9.5 14.5 16 8" />
                          <path d="m17 2 5 5-5 5-5-5z" />
                        </svg>
                        3 Beds
                      </span>
                      <span className="flex items-center">
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
                          className="mr-1 h-4 w-4"
                        >
                          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                          <line x1="10" x2="8" y1="5" y2="7" />
                          <line x1="2" x2="22" y1="12" y2="12" />
                          <line x1="7" x2="7" y1="19" y2="21" />
                          <line x1="17" x2="17" y1="19" y2="21" />
                        </svg>
                        2 Baths
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <p className="font-medium">Looking to swap for:</p>
                    <p className="text-muted-foreground">2-bedroom apartment in Cape Town</p>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link href="/properties/1">View Details</Link>
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <Badge className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground">For Swap</Badge>
                <Link href="/properties/2">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Apartment for Swap"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-bold">Modern Apartment in Cape Town</h3>
                  <p className="text-sm text-muted-foreground mb-2">Sea Point, Cape Town</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm">
                      <span className="flex items-center">
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
                          className="mr-1 h-4 w-4"
                        >
                          <path d="M2 22v-5l5-5 5 5-5 5z" />
                          <path d="M9.5 14.5 16 8" />
                          <path d="m17 2 5 5-5 5-5-5z" />
                        </svg>
                        2 Beds
                      </span>
                      <span className="flex items-center">
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
                          className="mr-1 h-4 w-4"
                        >
                          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                          <line x1="10" x2="8" y1="5" y2="7" />
                          <line x1="2" x2="22" y1="12" y2="12" />
                          <line x1="7" x2="7" y1="19" y2="21" />
                          <line x1="17" x2="17" y1="19" y2="21" />
                        </svg>
                        2 Baths
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <p className="font-medium">Looking to swap for:</p>
                    <p className="text-muted-foreground">3-bedroom house in Johannesburg</p>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link href="/properties/2">View Details</Link>
                  </Button>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-lg border">
                <Badge className="absolute top-2 right-2 z-10 bg-primary text-primary-foreground">For Swap</Badge>
                <Link href="/properties/3">
                  <div className="aspect-[4/3] overflow-hidden">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Townhouse for Swap"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-4">
                  <h3 className="font-bold">Townhouse in Durban</h3>
                  <p className="text-sm text-muted-foreground mb-2">Umhlanga, Durban</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-4 text-sm">
                      <span className="flex items-center">
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
                          className="mr-1 h-4 w-4"
                        >
                          <path d="M2 22v-5l5-5 5 5-5 5z" />
                          <path d="M9.5 14.5 16 8" />
                          <path d="m17 2 5 5-5 5-5-5z" />
                        </svg>
                        3 Beds
                      </span>
                      <span className="flex items-center">
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
                          className="mr-1 h-4 w-4"
                        >
                          <path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
                          <line x1="10" x2="8" y1="5" y2="7" />
                          <line x1="2" x2="22" y1="12" y2="12" />
                          <line x1="7" x2="7" y1="19" y2="21" />
                          <line x1="17" x2="17" y1="19" y2="21" />
                        </svg>
                        2.5 Baths
                      </span>
                    </div>
                  </div>
                  <div className="mt-2 text-sm">
                    <p className="font-medium">Looking to swap for:</p>
                    <p className="text-muted-foreground">Similar property in Pretoria</p>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <Link href="/properties/3">View Details</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg">
                <Link href="/properties">
                  View All Swap Properties
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
                <p className="max-w-[700px] text-muted-foreground md:text-lg">
                  Common questions about property swapping
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How does property swapping work?</h3>
                <p className="text-muted-foreground">
                  Property swapping involves exchanging your property with another owner's property. Both parties agree
                  to the exchange, and the necessary legal processes are followed to transfer ownership.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Are there any fees involved?</h3>
                <p className="text-muted-foreground">
                  While you may save on agent commissions, there are still legal fees, transfer duties, and potentially
                  capital gains tax to consider. Our team can provide a detailed breakdown of costs.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">What if the properties have different values?</h3>
                <p className="text-muted-foreground">
                  If there's a value difference, the owner of the less valuable property typically pays the difference
                  to the other party. This is negotiated as part of the swap agreement.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">How long does the swap process take?</h3>
                <p className="text-muted-foreground">
                  The process typically takes 2-3 months, similar to a traditional property sale. This includes finding
                  a suitable match, legal processes, and transfer of ownership.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Is property swapping legally binding?</h3>
                <p className="text-muted-foreground">
                  Yes, once both parties agree to the swap and sign the necessary legal documents, the agreement is
                  legally binding. Our legal team will guide you through this process.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Can I swap a property with a mortgage?</h3>
                <p className="text-muted-foreground">
                  Yes, but it requires additional steps. Both parties will need to settle their existing mortgages or
                  arrange for new financing. Our team can help coordinate with financial institutions.
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
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Ready to Swap Your Property?</h2>
                <p className="max-w-[600px] md:text-xl">
                  Submit your property details today and find your perfect swap match with Tendani Properties.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="#swap-form">Submit Your Property</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-primary border-white hover:bg-white/10">
                  <Link href="/properties">Browse Swap Properties</Link>
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
