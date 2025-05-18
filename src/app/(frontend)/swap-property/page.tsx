import { getProperties } from '../properties/actions'
import { PropertyCard } from '@/components/property-card'
import { PropertySwapDetails } from '@/components/property-swap-details'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import Header from '@/components/Header'

export default async function SwapPropertyPage() {
  const { docs: swapProperties } = await getProperties({
    where: {
      transactionType: { equals: 'swap' },
      status: { equals: 'available' },
    },
  })

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Property Swap Listings</h1>
              <p className="text-muted-foreground">
                Find properties available for swap or list your own property
              </p>
            </div>
            <Button asChild>
              <Link href="/swap-property/new">
                <Plus className="h-4 w-4 mr-2" />
                List Your Property
              </Link>
            </Button>
          </div>

          {swapProperties.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-xl font-semibold mb-2">No swap properties available</h2>
              <p className="text-muted-foreground mb-4">
                Be the first to list your property for swap!
              </p>
              <Button asChild>
                <Link href="/swap-property/new">List Your Property</Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {swapProperties.map((property) => (
                <div key={property.id}>
                  <PropertyCard
                    id={property.id}
                    title={property.title}
                    price={property.price}
                    location={`${property.location.city}, ${property.location.province}`}
                    beds={property.features.bedrooms}
                    baths={property.features.bathrooms}
                    size={property.features.size.toString()}
                    image={property.images[0]?.image?.url || '/placeholder.svg'}
                    type={property.transactionType}
                    status={property.status}
                  />
                  <PropertySwapDetails swapPreferences={property.swapPreferences} />
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
