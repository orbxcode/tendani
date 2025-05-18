import { NextResponse } from 'next/server'
import { getPayload } from 'payload/dist/payload'
import config from '@payload-config'

export async function POST(request: Request) {
  try {
    const payload = await getPayload({ config })
    const body = await request.json()

    const property = await payload.create({
      collection: 'properties',
      data: body,
    })

    return NextResponse.json(property)
  } catch (error) {
    console.error('Error creating property:', error)
    return NextResponse.json({ error: 'Failed to create property' }, { status: 500 })
  }
}

export async function GET(request: Request) {
  try {
    const payload = await getPayload({ config })
    const { searchParams } = new URL(request.url)

    const page = Number(searchParams.get('page')) || 1
    const limit = Number(searchParams.get('limit')) || 10
    const where = searchParams.get('where') ? JSON.parse(searchParams.get('where')!) : {}
    const sort = searchParams.get('sort') || '-createdAt'

    const properties = await payload.find({
      collection: 'properties',
      depth: 1,
      page,
      limit,
      where,
      sort,
    })

    return NextResponse.json(properties)
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json({ error: 'Failed to fetch properties' }, { status: 500 })
  }
}
