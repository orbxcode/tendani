"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function PropertySearch() {
  const [searchQuery, setSearchQuery] = useState("")
  const [propertyType, setPropertyType] = useState("all")
  const [location, setLocation] = useState("all")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the search here
    console.log("Search query:", searchQuery)
    console.log("Property type:", propertyType)
    console.log("Location:", location)
    // Redirect to search results page or filter current results
  }

  return (
    <form onSubmit={handleSearch} className="w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-3">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by location, property name, or keyword..."
            className="pl-9"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Select  value={propertyType} onValueChange={setPropertyType}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Property Type" />
          </SelectTrigger>
          <SelectContent className="text-primary">
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="house">House</SelectItem>
            <SelectItem value="apartment">Apartment</SelectItem>
            <SelectItem value="townhouse">Townhouse</SelectItem>
            <SelectItem value="land">Land</SelectItem>
            <SelectItem value="commercial">Commercial</SelectItem>
          </SelectContent>
        </Select>
        <Select value={location} onValueChange={setLocation}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent className="text-black">
            <SelectItem value="all" defaultValue={"all"}>All Locations</SelectItem>
            <SelectItem value="johannesburg">Johannesburg</SelectItem>
            <SelectItem value="cape-town">Cape Town</SelectItem>
            <SelectItem value="durban">Durban</SelectItem>
            <SelectItem value="pretoria">Pretoria</SelectItem>
            <SelectItem value="port-elizabeth">Port Elizabeth</SelectItem>
          </SelectContent>
        </Select>
        <Button type="submit" className="md:w-auto">
          Search
        </Button>
      </div>
    </form>
  )
}
