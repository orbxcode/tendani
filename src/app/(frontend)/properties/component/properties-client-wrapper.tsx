'use client'

import { useState, useEffect } from 'react'
import { PropertiesComponent } from './property-component'
import { Property } from './property-component'
import { getProperties } from '../actions'

interface PropertiesClientWrapperProps {
  initialData: {
    docs: Property[]
    totalPages: number
    page: number
  }
}

export function PropertiesClientWrapper({ initialData }: PropertiesClientWrapperProps) {
  const [properties, setProperties] = useState(initialData.docs)
  const [totalPages, setTotalPages] = useState(initialData.totalPages)
  const [currentPage, setCurrentPage] = useState(initialData.page)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState({
    transactionType: [] as string[],
    propertyType: 'all',
    city: 'all',
    minPrice: 0,
    maxPrice: 20000000,
    minBedrooms: 0,
    sortBy: 'createdAt',
    sortOrder: 'desc' as 'asc' | 'desc',
  })

  const fetchProperties = async (page: number, currentFilters = filters) => {
    setIsLoading(true)
    setError(null)

    try {
      const where: any = {}

      // Add transaction type filter
      if (currentFilters.transactionType.length > 0) {
        where.transactionType = {
          in: currentFilters.transactionType,
        }
      }

      // Add property type filter
      if (currentFilters.propertyType !== 'all') {
        where.propertyType = {
          equals: currentFilters.propertyType,
        }
      }

      // Add city filter
      if (currentFilters.city !== 'all') {
        where['location.city'] = {
          equals: currentFilters.city,
        }
      }

      // Add price range filter
      where.price = {
        gte: currentFilters.minPrice,
        lte: currentFilters.maxPrice,
      }

      // Add bedrooms filter
      if (currentFilters.minBedrooms > 0) {
        where['features.bedrooms'] = {
          gte: currentFilters.minBedrooms,
        }
      }

      const sort = `${currentFilters.sortOrder === 'desc' ? '-' : ''}${currentFilters.sortBy}`

      const response = await getProperties({
        page,
        where,
        sort,
      })

      setProperties(response.docs)
      setTotalPages(response.totalPages)
      setCurrentPage(response.page)
    } catch (err) {
      setError('Failed to fetch properties. Please try again.')
      console.error('Error fetching properties:', err)
    } finally {
      setIsLoading(false)
    }
  }

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    const updatedFilters = { ...filters, ...newFilters }
    setFilters(updatedFilters)
    fetchProperties(1, updatedFilters)
  }

  const handlePageChange = (page: number) => {
    fetchProperties(page)
  }

  return (
    <PropertiesComponent
      properties={properties}
      totalPages={totalPages}
      currentPage={currentPage}
      isLoading={isLoading}
      error={error}
      filters={filters}
      onFilterChange={handleFilterChange}
      onPageChange={handlePageChange}
    />
  )
}
