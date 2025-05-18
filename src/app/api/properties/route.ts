import { NextResponse } from 'next/server'
import payload from 'payload'

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)

  const page = Number(searchParams.get('page')) || 1
  const limit = Number(searchParams.get('limit')) || 12
  const transactionType = searchParams.get('transactionType')
  const propertyType = searchParams.get('propertyType')
  const city = searchParams.get('city')
  const minPrice = Number(searchParams.get('minPrice'))
  const maxPrice = Number(searchParams.get('maxPrice'))
  const minBedrooms = Number(searchParams.get('minBedrooms'))
  const sortBy = searchParams.get('sortBy') || 'createdAt'
  const sortOrder = searchParams.get('sortOrder') || 'desc'

  const query: any = {
    status: 'available',
  }

  if (transactionType) {
    query.transactionType = transactionType
  }

  if (propertyType) {
    query.propertyType = propertyType
  }

  if (city) {
    query['location.city'] = city
  }

  if (minPrice) {
    query.price = {
      ...query.price,
      greater_than_equal: minPrice,
    }
  }

  if (maxPrice) {
    query.price = {
      ...query.price,
      less_than_equal: maxPrice,
    }
  }

  if (minBedrooms) {
    query['features.bedrooms'] = {
      greater_than_equal: minBedrooms,
    }
  }

  try {
    const properties = await payload.find({
      collection: 'properties',
      where: query,
      page,
      limit,
      sort: `${sortOrder === 'desc' ? '-' : ''}${sortBy}`,
      depth: 2,
    })

    return NextResponse.json(properties)
  } catch (error) {
    console.error('Error fetching properties:', error)
    return NextResponse.json({ error: 'Error fetching properties' }, { status: 500 })
  }
}
