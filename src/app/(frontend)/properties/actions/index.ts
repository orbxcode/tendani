'use server'

//import payload
import { getPayload } from 'payload/dist/payload'
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
      collection: 'properties',
      depth: 1,
      page,
      limit,
      sort,
      where,
    })

    return {
      docs: properties.docs as Property[],
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
