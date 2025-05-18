import Link from 'next/link'
import Image from 'next/image'
import { Building, MapPin, Bed, Bath, Maximize, Phone, Mail, Share2, Heart } from 'lucide-react'
import { notFound } from 'next/navigation'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card, CardContent } from '@/components/ui/card'
import { PropertyCard } from '@/components/property-card'
import { PropertyEnquiryForm } from '@/components/property-enquiry-form'
import { PropertySwapDetails } from '@/components/property-swap-details'
import Header from '@/components/Header'
import { getPropertyById, getProperties } from '../actions'
import { Key } from 'react'
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'

interface PropertyPageProps {
  params: {
    id: string
  }
}

export default async function PropertyDetailsPage({ params }: PropertyPageProps) {
  const property = await getPropertyById(params.id)

  if (!property) {
    notFound()
  }

  // Fetch similar properties
  const { docs: similarProperties } = await getProperties({
    where: {
      and: [
        { id: { not_equals: property.id } },
        { propertyType: { equals: property.propertyType } },
        { transactionType: { equals: property.transactionType } },
      ],
    },
    limit: 3,
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-ZA', {
      style: 'currency',
      currency: 'ZAR',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
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
                src={property.images[0]?.image?.url || '/placeholder.svg'}
                alt={property.images[0]?.alt || property.title}
                width={1000}
                height={600}
                className="rounded-lg object-cover w-full h-[400px]"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {property.images
                .slice(1, 5)
                .map((img: { image: { url: any }; alt: any }, index: Key | null | undefined) => (
                  <div key={index} className={`relative ${index === 3 ? 'group' : ''}`}>
                    <Image
                      src={img.image?.url || '/placeholder.svg'}
                      alt={img.alt || `Property Image ${Number(index) + 2}`}
                      width={400}
                      height={300}
                      className={`rounded-lg object-cover w-full h-[190px] ${
                        index === 3 ? 'group-hover:brightness-50' : ''
                      }`}
                    />
                    {index === 3 && property.images.length > 5 && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <Button variant="secondary">+{property.images.length - 5} More</Button>
                      </div>
                    )}
                  </div>
                ))}
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
                  <div className="flex items-center text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>
                      {property.location.address}, {property.location.city},{' '}
                      {property.location.province}
                    </span>
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {formatPrice(property.price)}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {property.transactionType === 'sale'
                      ? 'For Sale'
                      : property.transactionType === 'rent'
                        ? 'For Rent'
                        : 'For Swap'}
                  </div>
                </div>
              </div>

              {/* Property Features */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Bed className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Bedrooms</span>
                  <span className="font-bold">{property.features.bedrooms}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Bath className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Bathrooms</span>
                  <span className="font-bold">{property.features.bathrooms}</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 bg-muted rounded-lg">
                  <Maximize className="h-6 w-6 mb-2 text-primary" />
                  <span className="text-sm text-muted-foreground">Area</span>
                  <span className="font-bold">{property.features.size} m²</span>
                </div>
              </div>

              {/* Swap Details - Only shown for swap properties */}
              {property.transactionType === 'swap' && property.swapPreferences && (
                <PropertySwapDetails swapPreferences={property.swapPreferences} />
              )}

              {/* Tabs */}
              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="location">Location</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-4">
                  <div className="space-y-4">
                    <p>{property.description}</p>
                  </div>
                </TabsContent>
                <TabsContent value="features" className="pt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-4">
                      <h3 className="font-semibold">Amenities</h3>
                      <ul className="space-y-2">
                        {property.amenities.map(
                          (
                            amenity:
                              | string
                              | number
                              | bigint
                              | boolean
                              | ReactElement<unknown, string | JSXElementConstructor<any>>
                              | Iterable<ReactNode>
                              | ReactPortal
                              | Promise<
                                  | string
                                  | number
                                  | bigint
                                  | boolean
                                  | ReactPortal
                                  | ReactElement<unknown, string | JSXElementConstructor<any>>
                                  | Iterable<ReactNode>
                                  | null
                                  | undefined
                                >
                              | null
                              | undefined,
                            index: Key | null | undefined,
                          ) => (
                            <li key={index} className="flex items-center">
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
                              {amenity}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="location" className="pt-4">
                  <div className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                      {/* Add your map component here */}
                      <div className="w-full h-full flex items-center justify-center">
                        <p className="text-muted-foreground">Map view coming soon</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Property Location</h3>
                      <p className="text-muted-foreground">
                        {property.location.address}, {property.location.city},{' '}
                        {property.location.province}
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Similar Properties */}
              {similarProperties.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold mb-4">Similar Properties</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {similarProperties.map(
                      (similarProperty: {
                        id: Key | null | undefined
                        title: string
                        price: string | number
                        location: { city: any; province: any }
                        features: {
                          bedrooms: number
                          bathrooms: number
                          size: { toString: () => string }
                        }
                        images: { image: { url: any } }[]
                        transactionType: string
                        status: string | undefined
                      }) => (
                        <PropertyCard
                          key={similarProperty.id?.toString()?.toString()?.toString()}
                          id={similarProperty.id?.toString()?.toString()?.toString()}
                          title={similarProperty.title}
                          price={similarProperty.price}
                          location={`${similarProperty.location.city}, ${similarProperty.location.province}`}
                          beds={similarProperty.features.bedrooms}
                          baths={similarProperty.features.bathrooms}
                          size={similarProperty.features.size.toString()}
                          image={similarProperty.images[0]?.image?.url || '/placeholder.svg'}
                          type={similarProperty.transactionType as 'sale' | 'rent' | 'swap'}
                          status={
                            similarProperty.status as
                              | 'available'
                              | 'under-offer'
                              | 'sold'
                              | 'rented'
                              | undefined
                          }
                        />
                      ),
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="w-full lg:w-80 space-y-6">
              {/* Agent Info */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Image
                      src="/placeholder.svg"
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
                  <PropertyEnquiryForm
                    propertyAddress={`${property.location.address}, ${property.location.city}`}
                  />
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
