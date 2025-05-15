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

export function AgentApplicationForm() {
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
        <h3 className="text-2xl font-bold">Application Submitted!</h3>
        <p className="text-muted-foreground">
          Thank you for your interest in joining our team. We'll review your application and contact you soon.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Personal Information</h3>
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
            <Label htmlFor="location">Current Location</Label>
            <Input id="location" placeholder="City, Province" required />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Professional Information</h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="experience">Level of Experience</Label>
            <Select>
              <SelectTrigger id="experience">
                <SelectValue placeholder="Select your experience level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="beginner">Beginner (No Experience)</SelectItem>
                <SelectItem value="some">Some Experience (1-3 years)</SelectItem>
                <SelectItem value="experienced">Experienced (3+ years)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="license">Real Estate License</Label>
            <Select>
              <SelectTrigger id="license">
                <SelectValue placeholder="Select license status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes, I have a license</SelectItem>
                <SelectItem value="in-progress">In progress</SelectItem>
                <SelectItem value="no">No, I don't have a license</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="specialization">Areas of Specialization/Interest</Label>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="residential" />
              <label htmlFor="residential" className="text-sm">
                Residential
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="commercial" />
              <label htmlFor="commercial" className="text-sm">
                Commercial
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="luxury" />
              <label htmlFor="luxury" className="text-sm">
                Luxury
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="investment" />
              <label htmlFor="investment" className="text-sm">
                Investment
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rental" />
              <label htmlFor="rental" className="text-sm">
                Rental
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="development" />
              <label htmlFor="development" className="text-sm">
                Development
              </label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="why">Why are you interested in joining Tendani's team?</Label>
          <Textarea
            id="why"
            placeholder="Tell us why you want to join our team and what you hope to achieve..."
            rows={4}
            required
          />
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Additional Information</h3>
        <div className="space-y-2">
          <Label htmlFor="resume">Upload CV/Resume (Optional)</Label>
          <div className="flex items-center gap-4">
            <Button type="button" variant="outline" className="w-full">
              <Upload className="mr-2 h-4 w-4" />
              Choose File
            </Button>
            <span className="text-sm text-muted-foreground">No file chosen</span>
          </div>
          <p className="text-xs text-muted-foreground">Accepted formats: PDF, DOC, DOCX. Maximum size: 5MB</p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="referral">How did you hear about us?</Label>
          <Select>
            <SelectTrigger id="referral">
              <SelectValue placeholder="Select an option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="website">Website</SelectItem>
              <SelectItem value="social">Social Media</SelectItem>
              <SelectItem value="referral">Referral</SelectItem>
              <SelectItem value="event">Event</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
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
            By submitting this application, I consent to the processing of my personal information.
          </p>
        </div>
      </div>

      <Button type="submit" className="w-full">
        Submit Application
      </Button>
    </form>
  )
}
