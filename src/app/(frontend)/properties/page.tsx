import Link from "next/link"
import { Grid3X3, List, Search, SlidersHorizontal, MapPin } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { PropertyCard } from "@/components/property-card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { MobileMenu } from "@/components/mobile-menu"
import { PropertySearch } from "@/components/property-search"
import { Logo } from "@/components/logo"

export default function PropertiesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">
              Home
            </Link>
            <Link href="/properties" className="text-sm font-medium text-primary">
              Properties
            </Link>
            <Link href="/swap-property" className="text-sm font-medium hover:text-primary">
              Swap Property
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
            <Link href="/join-team" className="text-sm font-medium hover:text-primary">
              Join Our Team
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" className="hidden md:flex">
              <Link href="/contact">Contact Us</Link>
            </Button>
            <Button asChild className="hidden sm:flex md:flex">
              <Link href="/properties">Browse Properties</Link>
            </Button>
            <Button asChild size="icon" className="sm:hidden">
              <Link href="/properties">
                <MapPin className="h-5 w-5" />
                <span className="sr-only">Browse Properties</span>
              </Link>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>
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
                    {/* Mobile Filters - Same as desktop sidebar */}
                    <div className="space-y-6">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Search</label>
                        <div className="relative">
                          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                          <Input type="search" placeholder="Search properties..." className="w-full pl-8" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Transaction Type</label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="sale-mobile" />
                            <label htmlFor="sale-mobile" className="text-sm">
                              For Sale
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="rent-mobile" />
                            <label htmlFor="rent-mobile" className="text-sm">
                              For Rent
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="swap-mobile" />
                            <label htmlFor="swap-mobile" className="text-sm">
                              For Swap
                            </label>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Price Range</label>
                        <div className="space-y-4">
                          <Slider defaultValue={[0, 10000000]} min={0} max={20000000} step={100000} />
                          <div className="flex items-center justify-between">
                            <span className="text-sm">R 0</span>
                            <span className="text-sm">R 20M</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Location</label>
                        <Select>
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
                        <Button className="flex-1">Apply Filters</Button>
                        <Button variant="outline" className="flex-1">
                          Clear
                        </Button>
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
              <Select defaultValue="newest">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
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
                    <Input type="search" placeholder="Search properties..." className="w-full pl-8" />
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Transaction Type</h3>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sale" />
                      <label htmlFor="sale" className="text-sm">
                        For Sale
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="rent" />
                      <label htmlFor="rent" className="text-sm">
                        For Rent
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="swap" />
                      <label htmlFor="swap" className="text-sm">
                        For Swap
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Price Range</h3>
                  <div className="space-y-4">
                    <Slider defaultValue={[0, 10000000]} min={0} max={20000000} step={100000} />
                    <div className="flex items-center justify-between">
                      <span className="text-sm">R 0</span>
                      <span className="text-sm">R 20M</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Location</h3>
                  <Select>
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
                  <Button className="flex-1">Apply Filters</Button>
                  <Button variant="outline" className="flex-1">
                    Clear
                  </Button>
                </div>
              </div>
            </div>
            {/* Main Content */}
            <div className="flex-1">
              <div className="mb-4">
                <p className="text-sm text-muted-foreground">Showing 12 of 48 properties</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <PropertyCard
                  title="Luxury Apartment in Cape Town"
                  price="R 2,950,000"
                  location="Cape Town, Western Cape"
                  beds={2}
                  baths={2}
                  size="120 m²"
                  image="/placeholder.svg?height=400&width=600"
                  type="sale"
                />
                <PropertyCard
                  title="Modern Family Home in Johannesburg"
                  price="R 4,500,000"
                  location="Sandton, Johannesburg"
                  beds={4}
                  baths={3}
                  size="280 m²"
                  image="/placeholder.svg?height=400&width=600"
                  type="sale"
                />
                <PropertyCard
                  title="Beachfront Villa in Durban"
                  price="R 18,000 /month"
                  location="Umhlanga, Durban"
                  beds={3}
                  baths={2}
                  size="200 m²"
                  image="/placeholder.svg?height=400&width=600"
                  type="rent"
                />
                <PropertyCard
                  title="Family Home for Swap"
                  price="Swap Only"
                  location="Rosebank, Johannesburg"
                  beds={3}
                  baths={2}
                  size="180 m²"
                  image="/placeholder.svg?height=400&width=600"
                  type="swap"
                />
              </div>
              <div className="mt-8 flex justify-center">
                <nav className="flex items-center gap-1">
                  <Button variant="outline" size="icon" disabled>
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
                  <Button variant="outline" size="sm" className="bg-primary text-primary-foreground">
                    1
                  </Button>
                  <Button variant="outline" size="sm">
                    2
                  </Button>
                  <Button variant="outline" size="sm">
                    3
                  </Button>
                  <Button variant="outline" size="sm">
                    4
                  </Button>
                  <Button variant="outline" size="icon">
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
