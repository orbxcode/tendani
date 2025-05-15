import Link from "next/link"
import Image from "next/image"
import { Bed, Bath, Maximize, MapPin } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

interface PropertyListItemProps {
  title: string
  price: string
  location: string
  beds: number
  baths: number
  size: string
  image: string
  type: "sale" | "rent"
  description: string
}

export function PropertyListItem({
  title,
  price,
  location,
  beds,
  baths,
  size,
  image,
  type,
  description,
}: PropertyListItemProps) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden border rounded-lg">
      <div className="relative md:w-1/3">
        <Badge className="absolute top-2 right-2 z-10">{type === "sale" ? "For Sale" : "For Rent"}</Badge>
        <Link href="/properties/1">
          <div className="aspect-[4/3] md:aspect-square overflow-hidden">
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
      <div className="flex-1 p-4">
        <div className="space-y-2">
          <div className="space-y-1">
            <h3 className="font-bold text-lg">
              <Link href="/properties/1">{title}</Link>
            </h3>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-3.5 w-3.5" />
              <span>{location}</span>
            </div>
          </div>
          <div className="text-lg font-bold text-primary">{price}</div>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
          <div className="flex space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Bed className="mr-1 h-4 w-4" />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center">
              <Bath className="mr-1 h-4 w-4" />
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center">
              <Maximize className="mr-1 h-4 w-4" />
              <span>{size}</span>
            </div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <Button asChild>
            <Link href="/properties/1">View Details</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
