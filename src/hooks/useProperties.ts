import { useState, useEffect } from 'react'
import { Property } from '@/payload-types'

interface PropertyFilters {
  transactionType?: string
  propertyType?: string
  city?: string
  minPrice?: number
  maxPrice?: number
  minBedrooms?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
  page?: number
  limit?: number
}

interface UsePropertiesReturn {
  properties: Property[]
  totalPages: number
  currentPage: number
  isLoading: boolean
  error: string | null
  setFilters: (filters: PropertyFilters) => void
  setPage: (page: number) => void
}

export function useProperties(initialFilters: PropertyFilters = {}): UsePropertiesReturn {
  const [properties, setProperties] = useState<Property[]>([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(initialFilters.page || 1)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<PropertyFilters>(initialFilters)

  useEffect(() => {
    const fetchProperties = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const queryParams = new URLSearchParams()

        // Add all filters to query params
        Object.entries({ ...filters, page: currentPage }).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== '') {
            queryParams.append(key, value.toString())
          }
        })

        const response = await fetch(`/api/properties?${queryParams.toString()}`)

        if (!response.ok) {
          throw new Error('Failed to fetch properties')
        }

        const data = await response.json()
        setProperties(data.docs)
        setTotalPages(data.totalPages)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setIsLoading(false)
      }
    }

    fetchProperties()
  }, [filters, currentPage])

  const updateFilters = (newFilters: PropertyFilters) => {
    setCurrentPage(1) // Reset to first page when filters change
    setFilters(newFilters)
  }

  const updatePage = (page: number) => {
    setCurrentPage(page)
  }

  return {
    properties,
    totalPages,
    currentPage,
    isLoading,
    error,
    setFilters: updateFilters,
    setPage: updatePage,
  }
}
