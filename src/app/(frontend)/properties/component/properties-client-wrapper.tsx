'use client'

import { useState } from 'react'
import { PropertiesComponent } from './property-component'
import { Property } from './property-component'

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

  const handleFilterChange = (newFilters: Partial<typeof filters>) => {
    setFilters((prev) => ({ ...prev, ...newFilters }))
    // TODO: Fetch properties with new filters
  }

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // TODO: Fetch properties for new page
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
