// app/properties/property-component.tsx
'use client';

import Link from 'next/link';
import { Grid3X3, List, Search, SlidersHorizontal, MapPin } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { PropertyCard } from '@/components/property-card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { PropertySearch } from '@/components/property-search';
import { Logo } from '@/components/logo';
import Header from '@/components/Header';

interface PropertyImage {
  id: string;
  image: { url: string };
  alt: string;
}

interface PropertyLocation {
  city: string;
  province: string;
  address: string;
  coordinates: { latitude: number; longitude: number };
}

interface PropertyFeatures {
  bedrooms: number;
  bathrooms: number;
  size: number;
  parking: number;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: PropertyLocation;
  propertyType: 'house' | 'apartment' | 'townhouse' | 'villa';
  transactionType: 'sale' | 'rent' | 'swap';
  features: PropertyFeatures;
  amenities?: string[];
  images: PropertyImage[];
  status?: 'available' | 'under-offer' | 'sold' | 'rented';
}

interface Filters {
  transactionType: string[];
  propertyType: string;
  city: string;
  minPrice: number;
  maxPrice: number;
  minBedrooms: number;
  sortBy: string;
  sortOrder: 'asc' | 'desc';
}

interface PropertiesComponentProps {
  properties: Property[];
  totalPages: number;
  currentPage: number;
  isLoading: boolean;
  error: string | null;
  filters: Filters;
  onFilterChange: (newFilters: Partial<Filters>) => void;
  onPageChange: (page: number) => void;
}

export function PropertiesComponent({
  properties,
  totalPages,
  currentPage,
  isLoading,
  error,
  filters,
  onFilterChange,
  onPageChange,
}: PropertiesComponentProps) {
  const handleTransactionTypeChange = (type: string, checked: boolean) => {
    const updatedTypes = checked
      ? [...filters.transactionType, type]
      : filters.transactionType.filter((t) => t !== type);
    onFilterChange({ transactionType: updatedTypes });
  };

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
                        <label className="text-sm font-medium mb-2 block">Transaction Type</label>
                        <div className="space-y-2">
                          {['sale', 'rent', 'swap'].map((type) => (
                            <div key={type} className="flex items-center space-x-2">
                              <Checkbox
                                id={`${type}-mobile`}
                                checked={filters.transactionType.includes(type)}
                                onCheckedChange={(checked) =>
                                  handleTransactionTypeChange(type, checked as boolean)
                                }
                              />
                              <label htmlFor={`${type}-mobile`} className="text-sm capitalize">
                                For {type}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Property Type</label>
                        <Select
                          value={filters.propertyType}
                          onValueChange={(value) => onFilterChange({ propertyType: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Types</SelectItem>
                            <SelectItem value="house">House</SelectItem>
                            <SelectItem value="apartment">Apartment</SelectItem>
                            <SelectItem value="townhouse">Townhouse</SelectItem>
                            <SelectItem value="villa">Villa</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Price Range</label>
                        <div className="space-y-4">
                          <Slider
                            value={[filters.minPrice, filters.maxPrice]}
                            min={0}
                            max={20000000}
                            step={100000}
                            onValueChange={([min, max]) =>
                              onFilterChange({ minPrice: min, maxPrice: max })
                            }
                          />
                          <div className="flex items-center justify-between">
                            <span className="text-sm">R {filters.minPrice.toLocaleString()}</span>
                            <span className="text-sm">R {filters.maxPrice.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Bedrooms</label>
                        <Input
                          type="number"
                          min="0"
                          value={filters.minBedrooms}
                          onChange={(e) =>
                            onFilterChange({ minBedrooms: parseInt(e.target.value) || 0 })
                          }
                        />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Location</label>
                        <Select
                          value={filters.city}
                          onValueChange={(value) => onFilterChange({ city: value })}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select city" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="all">All Locations</SelectItem>
                            {[
                              'cape-town',
                              'johannesburg',
                              'durban',
                              'pretoria',
                              'port-elizabeth',
                            ].map((city) => (
                              <SelectItem key={city} value={city}>
                                {city
                                  .split('-')
                                  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                                  .join(' ')}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              <div className="hidden md:flex items-center gap-2">
                <Select
                  value={`${filters.sortBy}-${filters.sortOrder}`}
                  onValueChange={(value) => {
                    const [sortBy, sortOrder] = value.split('-');
                    onFilterChange({ sortBy, sortOrder: sortOrder as 'asc' | 'desc' });
                  }}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="createdAt-desc">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                    <SelectItem value="bedrooms-desc">Bedrooms: Most</SelectItem>
                    <SelectItem value="size-desc">Size: Largest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="hidden md:block w-64 shrink-0">
              <div className="sticky top-24 border rounded-lg p-4 space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-2">Transaction Type</h3>
                  <div className="space-y-2">
                    {['sale', 'rent', 'swap'].map((type) => (
                      <div key={type} className="flex items-center space-x-2">
                        <Checkbox
                          id={type}
                          checked={filters.transactionType.includes(type)}
                          onCheckedChange={(checked) =>
                            handleTransactionTypeChange(type, checked as boolean)
                          }
                        />
                        <label htmlFor={type} className="text-sm capitalize">
                          For {type}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Property Type</h3>
                  <Select
                    value={filters.propertyType}
                    onValueChange={(value) => onFilterChange({ propertyType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Types</SelectItem>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Price Range</h3>
                  <div className="space-y-4">
                    <Slider
                      value={[filters.minPrice, filters.maxPrice]}
                      min={0}
                      max={20000000}
                      step={100000}
                      onValueChange={([min, max]) =>
                        onFilterChange({ minPrice: min, maxPrice: max })
                      }
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">R {filters.minPrice.toLocaleString()}</span>
                      <span className="text-sm">R {filters.maxPrice.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Bedrooms</h3>
                  <Input
                    type="number"
                    min="0"
                    value={filters.minBedrooms}
                    onChange={(e) => onFilterChange({ minBedrooms: parseInt(e.target.value) || 0 })}
                  />
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-2">Location</h3>
                  <Select
                    value={filters.city}
                    onValueChange={(value) => onFilterChange({ city: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All locations" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Locations</SelectItem>
                      {['cape-town', 'johannesburg', 'durban', 'pretoria', 'port-elizabeth'].map(
                        (city) => (
                          <SelectItem key={city} value={city}>
                            {city
                              .split('-')
                              .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                              .join(' ')}
                          </SelectItem>
                        ),
                      )}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => {
                      onFilterChange({
                        transactionType: [],
                        propertyType: 'all',
                        city: 'all',
                        minPrice: 0,
                        maxPrice: 20000000,
                        minBedrooms: 0,
                        sortBy: 'createdAt',
                        sortOrder: 'desc',
                      });
                    }}
                  >
                    Clear Filters
                  </Button>
                </div>
              </div>
            </div>

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
                  <div className="mb-4 flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                      Showing {properties.length} properties
                    </p>
                    <div className="md:hidden">
                      <Select
                        value={`${filters.sortBy}-${filters.sortOrder}`}
                        onValueChange={(value) => {
                          const [sortBy, sortOrder] = value.split('-');
                          onFilterChange({ sortBy, sortOrder: sortOrder as 'asc' | 'desc' });
                        }}
                      >
                        <SelectTrigger className="w-[180px]">
                          <SelectValue placeholder="Sort by" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="createdAt-desc">Newest</SelectItem>
                          <SelectItem value="price-asc">Price: Low to High</SelectItem>
                          <SelectItem value="price-desc">Price: High to Low</SelectItem>
                          <SelectItem value="bedrooms-desc">Bedrooms: Most</SelectItem>
                          <SelectItem value="size-desc">Size: Largest</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {properties.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-64">
                      <MapPin className="h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-medium mb-2">No properties found</h3>
                      <p className="text-sm text-muted-foreground">
                        Try adjusting your filters or search criteria
                      </p>
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {properties.map((property) => (
                          <PropertyCard
                            key={property.id}
                            id={property.id}
                            title={property.title}
                            price={property.price}
                            location={`${property.location.city}, ${property.location.province}`}
                            beds={property.features.bedrooms}
                            baths={property.features.bathrooms}
                            size={property.features.size.toString()}
                            image={property.images[0]?.image?.url || '/placeholder.svg'}
                            type={property.transactionType}
                            status={property.status}
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
                              onClick={() => onPageChange(currentPage - 1)}
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
                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                              let pageNum;
                              if (totalPages <= 5) {
                                pageNum = i + 1;
                              } else if (currentPage <= 3) {
                                pageNum = i + 1;
                              } else if (currentPage >= totalPages - 2) {
                                pageNum = totalPages - 4 + i;
                              } else {
                                pageNum = currentPage - 2 + i;
                              }
                              return (
                                <Button
                                  key={pageNum}
                                  variant="outline"
                                  size="sm"
                                  className={
                                    pageNum === currentPage
                                      ? 'bg-primary text-primary-foreground'
                                      : ''
                                  }
                                  onClick={() => onPageChange(pageNum)}
                                >
                                  {pageNum}
                                </Button>
                              );
                            })}
                            {totalPages > 5 && currentPage < totalPages - 2 && (
                              <span className="px-2">...</span>
                            )}
                            {totalPages > 5 && currentPage < totalPages - 2 && (
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => onPageChange(totalPages)}
                              >
                                {totalPages}
                              </Button>
                            )}
                            <Button
                              variant="outline"
                              size="icon"
                              disabled={currentPage === totalPages}
                              onClick={() => onPageChange(currentPage + 1)}
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
              © {new Date().getFullYear()} Tendani Properties. All rights reserved.
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
  );
}