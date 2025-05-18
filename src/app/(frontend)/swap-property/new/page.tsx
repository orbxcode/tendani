'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '@/components/ui/label'
import Header from '@/components/Header'
import { createProperty } from '../actions'

export default function NewSwapPropertyPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const formData = new FormData(e.currentTarget)
      const data = {
        title: formData.get('title'),
        description: formData.get('description'),
        price: Number(formData.get('price')),
        location: {
          city: formData.get('city'),
          province: formData.get('province'),
          address: formData.get('address'),
          coordinates: {
            latitude: Number(formData.get('latitude')),
            longitude: Number(formData.get('longitude')),
          },
        },
        propertyType: formData.get('propertyType'),
        transactionType: 'swap',
        features: {
          bedrooms: Number(formData.get('bedrooms')),
          bathrooms: Number(formData.get('bathrooms')),
          size: Number(formData.get('size')),
          parking: Number(formData.get('parking')),
        },
        swapPreferences: {
          preferredLocations: [
            {
              city: formData.get('preferredCity'),
              province: formData.get('preferredProvince'),
            },
          ],
          preferredPropertyTypes: formData.getAll('preferredPropertyTypes'),
          minBedrooms: Number(formData.get('minBedrooms')),
          minBathrooms: Number(formData.get('minBathrooms')),
          minSize: Number(formData.get('minSize')),
          additionalNotes: formData.get('additionalNotes'),
        },
        status: 'available',
      }
      // Send the form data to create the property
      const response = await createProperty(formData)

      if (!response.ok) {
        throw new Error('Failed to create property')
        
      }

      router.push('/swap-property')
    } catch (error) {
      console.error('Error creating property:', error)
      // TODO: Add error handling UI
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container py-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">List Your Property for Swap</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Property Details</h2>
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" name="description" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Estimated Value (R)</Label>
                  <Input id="price" name="price" type="number" min="0" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" name="city" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="province">Province</Label>
                    <Input id="province" name="province" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input id="latitude" name="latitude" type="number" step="any" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input id="longitude" name="longitude" type="number" step="any" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="propertyType">Property Type</Label>
                  <Select name="propertyType" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Input id="bedrooms" name="bedrooms" type="number" min="0" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Input id="bathrooms" name="bathrooms" type="number" min="0" required />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="size">Size (m²)</Label>
                    <Input id="size" name="size" type="number" min="0" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="parking">Parking Spaces</Label>
                    <Input id="parking" name="parking" type="number" min="0" required />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Swap Preferences</h2>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="preferredCity">Preferred City</Label>
                    <Input id="preferredCity" name="preferredCity" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="preferredProvince">Preferred Province</Label>
                    <Input id="preferredProvince" name="preferredProvince" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Preferred Property Types</Label>
                  <Select name="preferredPropertyTypes" required>
                    <SelectTrigger>
                      <SelectValue placeholder="Select preferred property types" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="house">House</SelectItem>
                      <SelectItem value="apartment">Apartment</SelectItem>
                      <SelectItem value="townhouse">Townhouse</SelectItem>
                      <SelectItem value="villa">Villa</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="minBedrooms">Min Bedrooms</Label>
                    <Input id="minBedrooms" name="minBedrooms" type="number" min="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="minBathrooms">Min Bathrooms</Label>
                    <Input id="minBathrooms" name="minBathrooms" type="number" min="0" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="minSize">Min Size (m²)</Label>
                    <Input id="minSize" name="minSize" type="number" min="0" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="additionalNotes">Additional Requirements or Notes</Label>
                  <Textarea id="additionalNotes" name="additionalNotes" />
                </div>
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? 'Submitting...' : 'Submit Property for Swap'}
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  )
}
