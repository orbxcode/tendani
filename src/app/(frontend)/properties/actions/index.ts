'use server'

//import payload
import { CollectionSlug, getPayload } from 'payload'
import config from '@payload-config'
import { Property } from '@/app/(frontend)/properties/component/property-component'

interface GetPropertiesParams {
  page?: number
  limit?: number
  where?: any
  sort?: string
}

export async function getProperties({
  page = 1,
  limit = 10,
  where = {},
  sort = '-createdAt',
}: GetPropertiesParams = {}) {
  const payload = await getPayload({ config })

  try {
    const properties = await payload.find({
      collection: 'properties' as CollectionSlug,
      depth: 1,
      page,
      limit,
      sort,
      where,
    })

    return {
      docs: properties.docs as unknown as Property[],
      totalPages: properties.totalPages || 1,
      page: properties.page || 1,
    }
  } catch (error) {
    console.error('Error fetching properties:', error)
    return {
      docs: [],
      totalPages: 1,
      page: 1,
    }
  }
}

//get property by id
export async function getPropertyById(id: string) {
  const payload = await getPayload({ config })
  const property = await payload.find({
    collection: 'properties' as CollectionSlug,
    depth: 1,
    where: { id: { equals: id } },
  })
  return property.docs[0] as unknown as Property
}

//get similar properties
export async function getSimilarProperties(property: Property) {
  const payload = await getPayload({ config })
  const similarProperties = await payload.find({
    collection: 'properties' as CollectionSlug,
    depth: 1,
    where: {
      AND: [
        { id: { not_equals: property.id } },
        { propertyType: { equals: property.propertyType } },
        { transactionType: { equals: property.transactionType } },
      ],
    },
    limit: 3,
  })
  return similarProperties.docs as unknown as Property[]
}
