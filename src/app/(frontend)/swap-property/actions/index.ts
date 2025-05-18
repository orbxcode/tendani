'use server'
import { getPayload } from 'payload'
import config from '@payload-config'

const payload = await getPayload({ config })

export async function createProperty(formData: FormData) {
  const property = await (payload as any).create({
    collection: 'properties',
    data: {
      title: formData.get('title'),
      description: formData.get('description'),
      price: Number(formData.get('price')),
      location: {
        city: formData.get('city'),
        province: formData.get('province'),
        address: formData.get('address'),
        coordinates: {
          latitude: Number(formData.get('latitude')),
          longitude: Number(formData.get('longitude')),
        },
      },
      propertyType: formData.get('propertyType'),
      transactionType: 'swap',
      features: {
        bedrooms: Number(formData.get('bedrooms')),
        bathrooms: Number(formData.get('bathrooms')),
        size: Number(formData.get('size')),
        parking: Number(formData.get('parking')),
      },
      swapPreferences: {
        preferredLocations: [
          {
            city: formData.get('preferredCity'),
            province: formData.get('preferredProvince'),
          },
        ],
        preferredPropertyTypes: formData.getAll('preferredPropertyTypes'),
        minBedrooms: Number(formData.get('minBedrooms')),
        minBathrooms: Number(formData.get('minBathrooms')),
        minSize: Number(formData.get('minSize')),
        additionalNotes: formData.get('additionalNotes'),
      },
      status: 'available',
    },
  })

  return property
}
