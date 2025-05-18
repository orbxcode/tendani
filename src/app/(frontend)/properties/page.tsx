'use client'

import Link from 'next/link'
import { Grid3X3, List, Search, SlidersHorizontal, MapPin } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PropertyCard } from '@/components/property-card'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MobileMenu } from '@/components/mobile-menu'
import { PropertySearch } from '@/components/property-search'
import { Logo } from '@/components/logo'
import Header from '@/components/Header'
import { useProperties } from '@/hooks/useProperties'
import { useState } from 'react'

export default function PropertiesPage() {
  const [localFilters, setLocalFilters] = useState({
    transactionType: [] as string[],
    propertyType: '',
    city: '',
    minPrice: 0,
    maxPrice: 20000000,
    minBedrooms: 0,
    sortBy: 'createdAt',
    sortOrder: 'desc' as 'asc' | 'desc',
  })

  const { properties, totalPages, currentPage, isLoading, error, setFilters, setPage } =
    useProperties(localFilters)

  const handleFilterChange = (newFilters: any) => {
    const updatedFilters = { ...localFilters, ...newFilters }
    setLocalFilters(updatedFilters)
    setFilters(updatedFilters)
  }

  const handleTransactionTypeChange = (type: string, checked: boolean) => {
    const updatedTypes = checked
      ? [...localFilters.transactionType, type]
      : localFilters.transactionType.filter((t) => t !== type)
    handleFilterChange({ transactionType: updatedTypes })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="mb-8">
            <PropertySearch />
          </div>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold">Property Listings</h1>
            <div className="flex items-center gap-2">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="md:hidden">
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="py-4">
                    <h2 className="text-lg font-semibold mb-4">Filters</h2>
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Search</label>
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input
                            type="search"
                            placeholder="Search properties..."
                            className="w-full pl-8"
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Transaction Type</label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="sale-mobile"
                              checked={localFilters.transactionType.includes('sale')}
                              onCheckedChange={(checked) =>
                                handleTransactionTypeChange('sale', checked as boolean)
                              }
                            />
                            <label htmlFor="sale-mobile" className="text-sm">
                              For Sale
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="rent-mobile"
                              checked={localFilters.transactionType.includes('rent')}
                              onCheckedChange={(checked) =>
                                handleTransactionTypeChange('rent', checked as boolean)
                              }
                            />
                            <label htmlFor="rent-mobile" className="text-sm">
                              For Rent
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox
                              id="swap-mobile"
                              checked={localFilters.transactionType.includes('swap')}
                              onCheckedChange={(checked) =>
                                handleTransactionTypeChange('swap', checked as boolean)
                              }
                            />
                            <label htmlFor="swap-mobile" className="text-sm">
                              For Swap
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Price Range</label>
                        <div className="space-y-4">
                          <Slider
                            defaultValue={[localFilters.minPrice, localFilters.maxPrice]}
                            min={0}
                            max={20000000}
                            step={100000}
                            onValueChange={([min, max]) =>
                              handleFilterChange({ minPrice: min, maxPrice: max })
                            }
                          />
                          <div className="flex items-center justify-between">
                            <span className="text-sm">R {localFilters.minPrice}</span>
                            <span className="text-sm">R {localFilters.maxPrice}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Location</label>
                        <Select
                          value={localFilters.city}
                          onValueChange={(value) => handleFilterChange({ city: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cape-town">Cape Town</SelectItem>
                            <SelectItem value="johannesburg">Johannesburg</SelectItem>
                            <SelectItem value="durban">Durban</SelectItem>
                            <SelectItem value="pretoria">Pretoria</SelectItem>
                            <SelectItem value="port-elizabeth">Port Elizabeth</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" className="rounded-none rounded-l-md">
                  <Grid3X3 className="h-4 w-4" />
                  <span className="sr-only">Grid view</span>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-none rounded-r-md">
                  <List className="h-4 w-4" />
                  <span className="sr-only">List view</span>
                </Button>
              </div>
              <Select
                value={`${localFilters.sortBy}-${localFilters.sortOrder}`}
                onValueChange={(value) => {
                  const [sortBy, sortOrder] = value.split('-')
                  handleFilterChange({ sortBy, sortOrder })
                }}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="createdAt-desc">Newest</SelectItem>
                  <SelectItem value="price-asc">Price: Low to High</SelectItem>
                  <SelectItem value="price-desc">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar Filters - Desktop */}
            <div className="hidden md:block w-64 shrink-0">
              <div className="sticky top-24 border rounded-lg p-4 space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Search</h3>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="search"
                      placeholder="Search properties..."
                      className="w-full pl-8"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Transaction Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="sale"
                        checked={localFilters.transactionType.includes('sale')}
                        onCheckedChange={(checked) =>
                          handleTransactionTypeChange('sale', checked as boolean)
                        }
                      />
                      <label htmlFor="sale" className="text-sm">
                        For Sale
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="rent"
                        checked={localFilters.transactionType.includes('rent')}
                        onCheckedChange={(checked) =>
                          handleTransactionTypeChange('rent', checked as boolean)
                        }
                      />
                      <label htmlFor="rent" className="text-sm">
                        For Rent
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="swap"
                        checked={localFilters.transactionType.includes('swap')}
                        onCheckedChange={(checked) =>
                          handleTransactionTypeChange('swap', checked as boolean)
                        }
                      />
                      <label htmlFor="swap" className="text-sm">
                        For Swap
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Price Range</h3>
                  <div className="space-y-4">
                    <Slider
                      defaultValue={[localFilters.minPrice, localFilters.maxPrice]}
                      min={0}
                      max={20000000}
                      step={100000}
                      onValueChange={([min, max]) =>
                        handleFilterChange({ minPrice: min, maxPrice: max })
                      }
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">R {localFilters.minPrice}</span>
                      <span className="text-sm">R {localFilters.maxPrice}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Location</h3>
                  <Select
                    value={localFilters.city}
                    onValueChange={(value) => handleFilterChange({ city: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cape-town">Cape Town</SelectItem>
                      <SelectItem value="johannesburg">Johannesburg</SelectItem>
                      <SelectItem value="durban">Durban</SelectItem>
                      <SelectItem value="pretoria">Pretoria</SelectItem>
                      <SelectItem value="port-elizabeth">Port Elizabeth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex gap-2">
                  <Button className="flex-1" onClick={() => setFilters(localFilters)}>
                    Apply Filters
                  </Button>
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      setLocalFilters({
                        transactionType: [],
                        propertyType: '',
                        city: '',
                        minPrice: 0,
                        maxPrice: 20000000,
                        minBedrooms: 0,
                        sortBy: 'createdAt',
                        sortOrder: 'desc',
                      })
                      setFilters({})
                    }}
                  >
                    Clear
                  </Button>
                </div>
              </div>
            </div>
            {/* Main Content */}
            <div className="flex-1">
              {isLoading ? (
                <div className="flex justify-center items-center h-64">
                  <p>Loading properties...</p>
                </div>
              ) : error ? (
                <div className="flex justify-center items-center h-64">
                  <p className="text-red-500">{error}</p>
                </div>
              ) : (
                <>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground">
                      Showing {properties.length} properties
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                      <PropertyCard
                        key={property.id}
                        title={property.title}
                        price={property.price.toString()}
                        location={`${property.location.city}, ${property.location.province}`}
                        beds={property.features.bedrooms}
                        baths={property.features.bathrooms}
                        size={`${property.features.size} m²`}
                        image={property.images[0]?.image?.url || '/placeholder.svg'}
                        type={property.transactionType}
                      />
                    ))}
                  </div>
                  {totalPages > 1 && (
                    <div className="mt-8 flex justify-center">
                      <nav className="flex items-center gap-1">
                        <Button
                          variant="outline"
                          size="icon"
                          disabled={currentPage === 1}
                          onClick={() => setPage(currentPage - 1)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="m15 18-6-6 6-6" />
                          </svg>
                          <span className="sr-only">Previous page</span>
                        </Button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                          <Button
                            key={page}
                            variant="outline"
                            size="sm"
                            className={
                              page === currentPage ? 'bg-primary text-primary-foreground' : ''
                            }
                            onClick={() => setPage(page)}
                          >
                            {page}
                          </Button>
                        ))}
                        <Button
                          variant="outline"
                          size="icon"
                          disabled={currentPage === totalPages}
                          onClick={() => setPage(currentPage + 1)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                          >
                            <path d="m9 18 6-6-6-6" />
                          </svg>
                          <span className="sr-only">Next page</span>
                        </Button>
                      </nav>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Logo className="text-base" />
            <p className="text-center text-sm text-muted-foreground md:text-left">
              &copy; {new Date().getFullYear()} Tendani Properties. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm hover:underline">
              About Us
            </Link>
            <Link href="/contact" className="text-sm hover:underline">
              Contact Us
            </Link>
            <Link href="/privacy" className="text-sm hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
