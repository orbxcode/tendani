"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

interface PropertyEnquiryFormProps {
  propertyAddress: string
}

export function PropertyEnquiryForm({ propertyAddress }: PropertyEnquiryFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center py-4 text-center">
        <CheckCircle2 className="h-12 w-12 text-green-500 mb-2" />
        <h3 className="text-xl font-bold">Enquiry Sent!</h3>
        <p className="text-muted-foreground">Thank you for your interest. We'll get back to you shortly.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input id="name" placeholder="Enter your full name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Your Email</Label>
        <Input id="email" type="email" placeholder="Enter your email" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Your Phone Number</Label>
        <Input id="phone" placeholder="Enter your phone number" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Your Message</Label>
        <Textarea
          id="message"
          placeholder="I am interested in this property..."
          defaultValue={`I am interested in the property at ${propertyAddress}.`}
          rows={3}
          required
        />
      </div>
      <div className="space-y-2">
        <Label>Preferred Contact Method</Label>
        <RadioGroup defaultValue="email">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="email" id="email-contact" />
            <Label htmlFor="email-contact">Email</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="phone" id="phone-contact" />
            <Label htmlFor="phone-contact">Phone</Label>
          </div>
        </RadioGroup>
      </div>
      <Button type="submit" className="w-full">
        Send Inquiry
      </Button>
    </form>
  )
}
