import Link from "next/link"
import Image from "next/image"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface PropertyCardProps {
  title: string
  price: string
  location: string
  beds: number
  baths: number
  size: string
  image: string
  type: "sale" | "rent" | "swap"
}

export function PropertyCard({ title, price, location, beds, baths, size, image, type }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative">
        <Badge className="absolute top-2 right-2 z-10">
          {type === "sale" ? "For Sale" : type === "rent" ? "For Rent" : "For Swap"}
        </Badge>
        <Link href="/properties/1">
          <div className="aspect-[4/3] overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              width={600}
              height={400}
              className="h-full w-full object-cover transition-transform hover:scale-105"
            />
          </div>
        </Link>
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="font-bold line-clamp-1">
              <Link href="/properties/1">{title}</Link>
            </h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-3.5 w-3.5" />
              <span className="line-clamp-1">{location}</span>
            </div>
          </div>
          <div className="text-lg font-bold text-primary">{price}</div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between p-4 pt-0">
        <div className="flex space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Bed className="mr-1 h-4 w-4" />
            <span>{beds}</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-1 h-4 w-4" />
            <span>{baths}</span>
          </div>
          <div className="flex items-center">
            <Maximize className="mr-1 h-4 w-4" />
            <span>{size}</span>
          </div>
        </div>
        <Button asChild size="sm" variant="outline">
          <Link href="/properties/1">View</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
