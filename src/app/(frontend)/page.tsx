import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PropertyCard } from "@/components/property-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { MobileMenu } from "@/components/mobile-menu"
import { PropertySearch } from "@/components/property-search"
import { Logo } from "@/components/logo"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/properties" className="text-sm font-medium hover:text-primary">
              Properties
            </Link>
            <Link href="/swap-property" className="text-sm font-medium hover:text-primary">
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
            <Button asChild className="hidden sm:flex md:flex">
              <Link href="/properties">Browse Properties</Link>
            </Button>
            <Button asChild size="icon" className="sm:hidden">
              <Link href="/properties">
                <MapPin className="h-5 w-5" />
                <span className="sr-only">Browse Properties</span>
              </Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="absolute inset-0 z-0">
            <Image
              src="/media/hero3.jpg"
              alt="South African property landscape"
              fill
              className="object-cover brightness-[0.6]"
              priority
            />
          </div>
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Your Trusted Partner in South African Property
            </h1>
            <p className="mx-auto mt-4 max-w-[700px] text-lg text-white/90 md:text-xl">
              With over 20 years of expertise, Tendani helps you find your dream property or investment opportunity.
            </p>
            <div className="mt-8 bg-white/10 backdrop-blur-sm p-4 rounded-lg">
              <PropertySearch />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/properties?type=sale">Browse Properties for Sale</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90">
                <Link href="/properties?type=rent">Browse Properties for Rent</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-primary border-white hover:bg-white/10">
                <Link href="/sell">Sell Your Property</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-primary border-white hover:bg-white/10">
                <Link href="/swap-property">Swap Your Property</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Tendani Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container grid gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Meet Tendani: Your Experienced Property Partner
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  With over two decades in South African property development, Tendani has established himself as a
                  trusted name in the industry. His commitment to client satisfaction and deep market knowledge ensures
                  you receive the best service for all your property needs.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild>
                  <Link href="/about">Learn More About Tendani</Link>
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/media/hero.jpg"
                alt="Tendani - Property Expert"
                width={400}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </section>

        {/* Featured Properties Section */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Property Listings</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore our selection of premium properties across South Africa
                </p>
              </div>
            </div>
            <Tabs defaultValue="all" className="mt-8">
              <div className="flex justify-center">
                <TabsList>
                  <TabsTrigger value="all" >All</TabsTrigger>
                  <TabsTrigger value="sale">For Sale</TabsTrigger>
                  <TabsTrigger value="rent">For Rent</TabsTrigger>
                </TabsList>
              </div>
              <TabsContent value="all" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <PropertyCard
                    title="Luxury Apartment in Cape Town"
                    price="R 2,950,000"
                    location="Cape Town, Western Cape"
                    beds={2}
                    baths={2}
                    size="120 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="sale"
                  />
                  <PropertyCard
                    title="Modern Family Home in Johannesburg"
                    price="R 4,500,000"
                    location="Sandton, Johannesburg"
                    beds={4}
                    baths={3}
                    size="280 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="sale"
                  />
                  <PropertyCard
                    title="Beachfront Villa in Durban"
                    price="R 18,000 /month"
                    location="Umhlanga, Durban"
                    beds={3}
                    baths={2}
                    size="200 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="rent"
                  />
                </div>
              </TabsContent>
              <TabsContent value="sale" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <PropertyCard
                    title="Luxury Apartment in Cape Town"
                    price="R 2,950,000"
                    location="Cape Town, Western Cape"
                    beds={2}
                    baths={2}
                    size="120 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="sale"
                  />
                  <PropertyCard
                    title="Modern Family Home in Johannesburg"
                    price="R 4,500,000"
                    location="Sandton, Johannesburg"
                    beds={4}
                    baths={3}
                    size="280 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="sale"
                  />
                  <PropertyCard
                    title="Penthouse with Ocean Views"
                    price="R 8,750,000"
                    location="Sea Point, Cape Town"
                    beds={3}
                    baths={3}
                    size="220 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="sale"
                  />
                </div>
              </TabsContent>
              <TabsContent value="rent" className="mt-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <PropertyCard
                    title="Beachfront Villa in Durban"
                    price="R 18,000 /month"
                    location="Umhlanga, Durban"
                    beds={3}
                    baths={2}
                    size="200 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="rent"
                  />
                  <PropertyCard
                    title="Modern Apartment in Pretoria"
                    price="R 12,500 /month"
                    location="Hatfield, Pretoria"
                    beds={2}
                    baths={1}
                    size="85 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="rent"
                  />
                  <PropertyCard
                    title="Furnished Townhouse"
                    price="R 15,000 /month"
                    location="Bryanston, Johannesburg"
                    beds={3}
                    baths={2.5}
                    size="160 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="rent"
                  />
                </div>
              </TabsContent>
            </Tabs>
            <div className="mt-10 flex justify-center">
              <Button asChild size="lg">
                <Link href="/properties">
                  See All Listings
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="w-full py-12 md:py-24 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What Our Clients Say</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Hear from our satisfied clients about their experience working with Tendani
                </p>
              </div>
            </div>
            <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            </div>
          </div>
        </section>

        {/* Call to Action Banner */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                  Ready to Find Your Ideal Property or Explore New Opportunities?
                </h2>
                <p className="max-w-[600px] md:text-xl">
                  Whether you're looking to buy, sell, rent, or join our team, we're here to help you every step of the
                  way.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary">
                  <Link href="/properties">Buy or Rent Now</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link href="/join-team">Join Our Agent Network</Link>
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
