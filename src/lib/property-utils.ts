import { Property } from '@/app/(frontend)/properties/[id]/page'

export function transformPropertyForCard(property: Property) {
  return {
    id: property.id,
    title: property.title,
    price: property.price,
    location: `${property.location.city}, ${property.location.province}`,
    beds: property.features.bedrooms,
    baths: property.features.bathrooms,
    size: property.features.size.toString(),
    image: property.images[0]?.image?.url || '/placeholder.svg',
    type: property.transactionType,
    status: property.status || 'available',
  }
}
