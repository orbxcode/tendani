import Link from 'next/link'
import Image from 'next/image'
import { Badge } from '@/components/ui/badge'
import { Bed, Bath, Maximize, MapPin } from 'lucide-react'
import { formatCurrency } from '@/lib/utils'
import { Media } from '../payload-types'

export interface PropertyCardProps {
  id: string | number
  title: string
  price: number
  location: string
  beds: number
  baths: number
  size: string
  image: string
  type: 'sale' | 'rent' | 'swap'
  status?: 'available' | 'under-offer' | 'sold' | 'rented' | null
}

export function PropertyCard({
  id,
  title,
  price,
  location,
  beds,
  baths,
  size,
  image,
  type,
  status,
}: PropertyCardProps) {
  const formatPrice = (price: string | number, type: string) => {
    if (type === 'swap') return 'Swap Only'
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price
    if (type === 'rent') {
      return `${formatCurrency(numericPrice)} /month`
    }
    return formatCurrency(numericPrice)
  }

  const getTransactionBadge = (type: string) => {
    const styles =
      {
        sale: 'bg-primary text-primary-foreground',
        rent: 'bg-blue-500 text-white',
        swap: 'bg-purple-500 text-white',
      }[type] || 'bg-primary text-primary-foreground'

    const labels = {
      sale: 'For Sale',
      rent: 'For Rent',
      swap: 'For Swap',
    }

    return (
      <Badge className={`absolute top-2 right-2 z-10 ${styles}`}>
        {labels[type as keyof typeof labels]}
      </Badge>
    )
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border">
      {getTransactionBadge(type)}
      <Link href={`/properties/${id || '1'}`}>
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="font-bold truncate">{title}</h3>
        <p className="text-sm text-muted-foreground mb-2 flex items-center">
          <MapPin className="h-4 w-4 mr-1" />
          {location}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4 text-sm">
            <span className="flex items-center">
              <Bed className="mr-1 h-4 w-4" />
              {beds}
            </span>
            <span className="flex items-center">
              <Bath className="mr-1 h-4 w-4" />
              {baths}
            </span>
            <span className="flex items-center">
              <Maximize className="mr-1 h-4 w-4" />
              {size}
            </span>
          </div>
        </div>
        <div className="mt-2">
          <p className="text-lg font-bold text-primary">{formatPrice(price, type)}</p>
        </div>
      </div>
    </div>
  )
}
