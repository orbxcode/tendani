"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2, Upload } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function SwapPropertyForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <CheckCircle2 className="h-16 w-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold">Submission Successful!</h3>
        <p className="text-muted-foreground">
          Thank you for submitting your property for swap. Our team will review your details and contact you soon with
          potential matches.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Tabs defaultValue="your-property">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="your-property">Your Property</TabsTrigger>
          <TabsTrigger value="desired-property">Desired Property</TabsTrigger>
        </TabsList>
        <TabsContent value="your-property" className="space-y-6 pt-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Your Property Details</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="property-title">Property Title</Label>
                <Input id="property-title" placeholder="e.g., 3-Bedroom Family Home" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="property-type">Property Type</Label>
                <Select>
                  <SelectTrigger id="property-type">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="bedrooms">Bedrooms</Label>
                <Select>
                  <SelectTrigger id="bedrooms">
                    <SelectValue placeholder="Select number of bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="bathrooms">Bathrooms</Label>
                <Select>
                  <SelectTrigger id="bathrooms">
                    <SelectValue placeholder="Select number of bathrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1</SelectItem>
                    <SelectItem value="2">2</SelectItem>
                    <SelectItem value="3">3</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Property Address</Label>
              <Input id="address" placeholder="Enter your property address" required />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input id="city" placeholder="City" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="province">Province</Label>
                <Select>
                  <SelectTrigger id="province">
                    <SelectValue placeholder="Select province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gauteng">Gauteng</SelectItem>
                    <SelectItem value="western-cape">Western Cape</SelectItem>
                    <SelectItem value="eastern-cape">Eastern Cape</SelectItem>
                    <SelectItem value="kwazulu-natal">KwaZulu-Natal</SelectItem>
                    <SelectItem value="free-state">Free State</SelectItem>
                    <SelectItem value="north-west">North West</SelectItem>
                    <SelectItem value="mpumalanga">Mpumalanga</SelectItem>
                    <SelectItem value="limpopo">Limpopo</SelectItem>
                    <SelectItem value="northern-cape">Northern Cape</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="property-size">Property Size (m²)</Label>
              <Input id="property-size" type="number" placeholder="e.g., 150" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="property-value">Estimated Property Value (R)</Label>
              <Input id="property-value" type="number" placeholder="e.g., 2500000" required />
            </div>
            <div className="space-y-2">
              <Label>Property Features</Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="garden" />
                  <label htmlFor="garden" className="text-sm">
                    Garden
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="pool" />
                  <label htmlFor="pool" className="text-sm">
                    Pool
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="garage" />
                  <label htmlFor="garage" className="text-sm">
                    Garage
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="security" />
                  <label htmlFor="security" className="text-sm">
                    Security
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="view" />
                  <label htmlFor="view" className="text-sm">
                    View
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="furnished" />
                  <label htmlFor="furnished" className="text-sm">
                    Furnished
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="property-description">Property Description</Label>
              <Textarea id="property-description" placeholder="Describe your property in detail..." rows={4} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="property-images">Property Images</Label>
              <div className="flex items-center gap-4">
                <Button type="button" variant="outline" className="w-full">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Images
                </Button>
                <span className="text-sm text-muted-foreground">No files chosen</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Upload up to 10 images of your property. Accepted formats: JPG, PNG. Maximum size: 5MB per image.
              </p>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="desired-property" className="space-y-6 pt-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Desired Property Details</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="desired-property-type">Property Type</Label>
                <Select>
                  <SelectTrigger id="desired-property-type">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="land">Land</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="desired-location">Preferred Location</Label>
                <Select>
                  <SelectTrigger id="desired-location">
                    <SelectValue placeholder="Select location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="johannesburg">Johannesburg</SelectItem>
                    <SelectItem value="cape-town">Cape Town</SelectItem>
                    <SelectItem value="durban">Durban</SelectItem>
                    <SelectItem value="pretoria">Pretoria</SelectItem>
                    <SelectItem value="port-elizabeth">Port Elizabeth</SelectItem>
                    <SelectItem value="bloemfontein">Bloemfontein</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="desired-bedrooms">Minimum Bedrooms</Label>
                <Select>
                  <SelectTrigger id="desired-bedrooms">
                    <SelectValue placeholder="Select number of bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                    <SelectItem value="5">5+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="desired-bathrooms">Minimum Bathrooms</Label>
                <Select>
                  <SelectTrigger id="desired-bathrooms">
                    <SelectValue placeholder="Select number of bathrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1+</SelectItem>
                    <SelectItem value="2">2+</SelectItem>
                    <SelectItem value="3">3+</SelectItem>
                    <SelectItem value="4">4+</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="desired-size">Minimum Property Size (m²)</Label>
              <Input id="desired-size" type="number" placeholder="e.g., 120" />
            </div>
            <div className="space-y-2">
              <Label>Desired Features</Label>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="desired-garden" />
                  <label htmlFor="desired-garden" className="text-sm">
                    Garden
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desired-pool" />
                  <label htmlFor="desired-pool" className="text-sm">
                    Pool
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desired-garage" />
                  <label htmlFor="desired-garage" className="text-sm">
                    Garage
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desired-security" />
                  <label htmlFor="desired-security" className="text-sm">
                    Security
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desired-view" />
                  <label htmlFor="desired-view" className="text-sm">
                    View
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="desired-furnished" />
                  <label htmlFor="desired-furnished" className="text-sm">
                    Furnished
                  </label>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="additional-requirements">Additional Requirements</Label>
              <Textarea
                id="additional-requirements"
                placeholder="Any specific requirements for your desired property..."
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>Willing to Pay Price Difference?</Label>
              <RadioGroup defaultValue="yes">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="pay-difference-yes" />
                  <Label htmlFor="pay-difference-yes">Yes</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="pay-difference-no" />
                  <Label htmlFor="pay-difference-no">No</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="maybe" id="pay-difference-maybe" />
                  <Label htmlFor="pay-difference-maybe">Depends on the difference</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        </TabsContent>
      </Tabs>

      <div className="space-y-4 border-t pt-6">
        <h3 className="text-lg font-semibold">Contact Information</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" placeholder="Enter your full name" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input id="email" type="email" placeholder="Enter your email" required />
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" placeholder="Enter your phone number" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferred-contact">Preferred Contact Method</Label>
            <Select>
              <SelectTrigger id="preferred-contact">
                <SelectValue placeholder="Select contact method" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="phone">Phone</SelectItem>
                <SelectItem value="whatsapp">WhatsApp</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      <div className="flex items-start space-x-2">
        <Checkbox id="terms" required />
        <div className="grid gap-1.5 leading-none">
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the terms and conditions
          </label>
          <p className="text-sm text-muted-foreground">
            By submitting this form, I consent to the processing of my personal information for property swap matching
            purposes.
          </p>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Submit Property for Swap
      </Button>
    </form>
  )
}
