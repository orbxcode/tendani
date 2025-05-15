import Link from "next/link"
import Image from "next/image"
import { Building, MapPin, Bed, Bath, Maximize, Phone, Mail, Share2, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { PropertyCard } from "@/components/property-card"
import { PropertyEnquiryForm } from "@/components/property-enquiry-form"

export default function PropertyDetailsPage() {
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
            <Link href="/properties" className="text-sm font-medium text-primary">
              Properties
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
        <div className="container py-8">
          <div className="mb-6">
            <Link href="/properties" className="text-sm text-muted-foreground hover:text-primary">
              &larr; Back to Properties
            </Link>
          </div>

          {/* Property Image Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="md:col-span-2">
              <Image
                src="/placeholder.svg?height=600&width=1000"
                alt="Luxury Apartment in Cape Town"
                width={1000}
                height={600}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Property Image"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-[190px]"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Property Image"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-[190px]"
              />
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Property Image"
                width={400}
                height={300}
                className="rounded-lg object-cover w-full h-[190px]"
              />
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Property Image"
                  width={400}
                  height={300}
                  className="rounded-lg object-cover w-full h-[190px] brightness-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Button variant="secondary">View All Photos</Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Luxury Apartment in Cape Town</h1>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>Sea Point, Cape Town, Western Cape</span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">R 2,950,000</div>
                  <div className="text-sm text-muted-foreground">For Sale</div>
                </div>
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Bed className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Bedrooms</span>
                  <span className="font-bold">2</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Bath className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Bathrooms</span>
                  <span className="font-bold">2</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Maximize className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Area</span>
                  <span className="font-bold">120 m²</span>
                </div>
              </div>

              {/* Swap Details - Only shown for swap properties */}
              <div className="mb-8 p-4 border rounded-lg bg-muted/30">
                <h2 className="text-xl font-bold mb-4">Swap Details</h2>
                <p className="mb-2">This property is available for swap. The owner is looking for:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>A 2-bedroom apartment in Cape Town</li>
                  <li>Preferably in the City Bowl or Atlantic Seaboard area</li>
                  <li>With at least 1 parking space</li>
                  <li>Modern finishes preferred</li>
                </ul>
                <div className="mt-4">
                  <Button asChild>
                    <Link href="/swap-property">Propose a Swap</Link>
                  </Button>
                </div>
              </div>

              {/* Tabs */}
              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <div className="space-y-4">
                    <p>
                      This stunning luxury apartment in the heart of Sea Point offers breathtaking ocean views and
                      modern living at its finest. Recently renovated with high-end finishes, this property represents
                      the perfect blend of comfort, style, and location.
                    </p>
                    <p>
                      The open-plan living area features floor-to-ceiling windows that flood the space with natural
                      light and showcase the magnificent sea views. The designer kitchen comes fully equipped with
                      premium appliances, stone countertops, and ample storage.
                    </p>
                    <p>
                      Both bedrooms are generously sized with built-in wardrobes, and the master bedroom includes an
                      en-suite bathroom with a walk-in shower. The second bathroom features a full bathtub and modern
                      fixtures.
                    </p>
                    <p>
                      Additional features include secure parking, 24-hour security, a communal pool, and easy access to
                      Sea Point Promenade, restaurants, shops, and public transport.
                    </p>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Interior Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Air Conditioning
                        </li>
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Built-in Wardrobes
                        </li>
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Dishwasher
                        </li>
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Granite Countertops
                        </li>
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Walk-in Shower
                        </li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="font-semibold">Exterior Features</h3>
                      <ul className="space-y-2">
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Balcony
                        </li>
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Communal Pool
                        </li>
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Secure Parking
                        </li>
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          24-Hour Security
                        </li>
                        <li className="flex items-center">
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
                            className="h-4 w-4 mr-2 text-primary"
                          >
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                          Elevator
                        </li>
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="location" className="pt-4">
                  <div className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      <Image
                        src="/placeholder.svg?height=500&width=800"
                        alt="Map"
                        width={800}
                        height={500}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold">Nearby Amenities</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="text-sm font-medium">Education</h4>
                          <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                            <li>Sea Point Primary School (0.5 km)</li>
                            <li>Sea Point High School (0.8 km)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Shopping</h4>
                          <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                            <li>Sea Point Promenade (0.2 km)</li>
                            <li>V&A Waterfront (3.5 km)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Transportation</h4>
                          <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                            <li>MyCiti Bus Stop (0.3 km)</li>
                            <li>Cape Town International Airport (22 km)</li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-sm font-medium">Healthcare</h4>
                          <ul className="text-sm text-muted-foreground space-y-1 mt-1">
                            <li>Sea Point Medical Center (0.7 km)</li>
                            <li>Cape Town Mediclinic (4.2 km)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Floor Plan */}
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-4">Floor Plan</h2>
                <div className="border rounded-lg p-4">
                  <Image
                    src="/placeholder.svg?height=400&width=800"
                    alt="Floor Plan"
                    width={800}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Similar Properties */}
              <div>
                <h2 className="text-xl font-bold mb-4">Similar Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <PropertyCard
                    title="Modern Apartment in Green Point"
                    price="R 3,150,000"
                    location="Green Point, Cape Town"
                    beds={2}
                    baths={2}
                    size="110 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="sale"
                  />
                  <PropertyCard
                    title="Waterfront Apartment"
                    price="R 4,200,000"
                    location="V&A Waterfront, Cape Town"
                    beds={2}
                    baths={2}
                    size="130 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="sale"
                  />
                  <PropertyCard
                    title="Penthouse with City Views"
                    price="R 5,500,000"
                    location="De Waterkant, Cape Town"
                    beds={3}
                    baths={2}
                    size="160 m²"
                    image="/placeholder.svg?height=400&width=600"
                    type="sale"
                  />
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 space-y-6">
              {/* Agent Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=200&width=200"
                      alt="Tendani"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-bold">Tendani</h3>
                      <p className="text-sm text-muted-foreground">Property Expert</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <span>+27 12 345 6789</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      <span>tendani@properties.co.za</span>
                    </div>
                  </div>
                  <Button className="w-full">Contact Agent</Button>
                </CardContent>
              </Card>

              {/* Enquiry Form */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-4">Enquire About This Property</h3>
                  <PropertyEnquiryForm propertyAddress="Sea Point, Cape Town" />
                </CardContent>
              </Card>

              {/* Share and Save */}
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" className="flex-1">
                  <Heart className="h-4 w-4 mr-2" />
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
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
