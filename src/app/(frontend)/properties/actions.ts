import { getPayload } from 'payload/dist/payload'
import config from '@payload-config'

export async function getProperties(params: any = {}) {
  const payload = await getPayload({ config })
  return payload.find({
    collection: 'properties',
    ...params,
  })
}

export async function getPropertyById(id: string) {
  const payload = await getPayload({ config })
  return payload.findByID({
    collection: 'properties',
    id,
  })
} 