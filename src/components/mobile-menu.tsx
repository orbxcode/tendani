"use client"

import { useState } from "react"
import Link from "next/link"
import { X, Menu, Building, Home, MapPin, Info, Phone, UserPlus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between border-b py-4">
            <div className="flex items-center gap-2 font-bold text-xl">
              <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground">
                <Building className="h-5 w-5" />
              </div>
              <span>Tendani Properties</span>
            </div>
            {/* Single close button */}
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4 py-6">
            <Link
              href="/"
              className="flex items-center gap-3 text-lg font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Home className="h-5 w-5" />
              Home
            </Link>
            <Link
              href="/properties"
              className="flex items-center gap-3 text-lg font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <MapPin className="h-5 w-5" />
              Properties
            </Link>
            <Link
              href="/swap-property"
              className="flex items-center gap-3 text-lg font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
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
                className="h-5 w-5"
              >
                <path d="M16 3 L21 8 L16 13" />
                <path d="M21 8 L7 8" />
                <path d="M8 21 L3 16 L8 11" />
                <path d="M3 16 L17 16" />
              </svg>
              Swap Property
            </Link>
            <Link
              href="/about"
              className="flex items-center gap-3 text-lg font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Info className="h-5 w-5" />
              About
            </Link>
            <Link
              href="/contact"
              className="flex items-center gap-3 text-lg font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-5 w-5" />
              Contact
            </Link>
            <Link
              href="/join-team"
              className="flex items-center gap-3 text-lg font-medium px-4 py-2 hover:bg-muted rounded-md transition-colors"
              onClick={() => setIsOpen(false)}
            >
              <UserPlus className="h-5 w-5" />
              Join Our Team
            </Link>
          </nav>
          <div className="mt-auto border-t py-4 space-y-4">
            <Button asChild className="w-full">
              <Link href="/properties" className="flex items-center justify-center gap-2">
                <MapPin className="h-4 w-4" />
                Browse Properties
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/contact">Contact Us</Link>
            </Button>

            {/* Footer icons */}
            <div className="flex justify-center gap-6 pt-2">
              <Link
                href="/about"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Info className="h-5 w-5" />
                <span className="sr-only">About Us</span>
              </Link>
              <Link
                href="/contact"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="h-5 w-5" />
                <span className="sr-only">Contact Us</span>
              </Link>
              <Link
                href="/privacy"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
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
                  className="h-5 w-5"
                >
                  <rect width="18" height="18" x="3" y="3" rx="2" />
                  <path d="M12 3v18" />
                  <path d="M3 12h18" />
                </svg>
                <span className="sr-only">Privacy Policy</span>
              </Link>
              <Link
                href="/terms"
                className="text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
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
                  className="h-5 w-5"
                >
                  <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                  <path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2z" />
                  <path d="M9 9h1" />
                  <path d="M9 13h6" />
                  <path d="M9 17h6" />
                </svg>
                <span className="sr-only">Terms of Service</span>
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
