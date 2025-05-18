'use server'

//import payload
import { CollectionSlug, getPayload } from 'payload'
import config from '@payload-config'
import { Property } from '@/app/(frontend)/properties/component/property-component'

const payload = await getPayload({ config })

export async function getProperties() {
  const properties = await payload.find({
    collection: 'properties' as CollectionSlug,
    depth: 1,
    page: 1,
    limit: 10,
    sort: '-createdAt',
    locale: 'all',
    where: {},
    pagination: true,
  })

  return {
    docs: properties.docs as unknown as Property[],
    totalPages: properties.totalPages || 1,
    page: properties.page || 1,
  }
}
