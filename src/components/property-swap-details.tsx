import { Button } from '@/components/ui/button'
import Link from 'next/link'

export interface SwapPreferences {
  preferredLocations?: { city: string; province: string; id?: string | null }[] | null
  preferredPropertyTypes?: ('house' | 'apartment' | 'townhouse' | 'villa')[] | null
  minBedrooms?: number | null
  minBathrooms?: number | null
  minSize?: number | null
  additionalNotes?: string | null
}

export interface PropertySwapDetailsProps {
  swapPreferences: SwapPreferences
}

export function PropertySwapDetails({ swapPreferences }: PropertySwapDetailsProps) {
  return (
    <div className="mb-8 p-6 border rounded-lg bg-muted/30">
      <h2 className="text-xl font-bold mb-4">Swap Details</h2>
      <p className="mb-4 text-muted-foreground">
        This property is available for swap. The owner is looking for:
      </p>

      {/* Preferred Locations */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Preferred Locations</h3>
        <ul className="list-disc pl-5 space-y-1">
          {swapPreferences.preferredLocations?.map((location, index) => (
            <li key={index}>
              {location.city}, {location.province}
            </li>
          ))}
        </ul>
      </div>

      {/* Preferred Property Types */}
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Preferred Property Types</h3>
        <div className="flex flex-wrap gap-2">
          {swapPreferences.preferredPropertyTypes?.map((type, index) => (
            <span key={index} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </span>
          ))}
        </div>
      </div>

      {/* Minimum Requirements */}
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Minimum Requirements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {swapPreferences.minBedrooms && (
            <div className="p-3 bg-background rounded-lg">
              <div className="text-sm text-muted-foreground">Bedrooms</div>
              <div className="font-semibold">Min. {swapPreferences.minBedrooms}</div>
            </div>
          )}
          {swapPreferences.minBathrooms && (
            <div className="p-3 bg-background rounded-lg">
              <div className="text-sm text-muted-foreground">Bathrooms</div>
              <div className="font-semibold">Min. {swapPreferences.minBathrooms}</div>
            </div>
          )}
          {swapPreferences.minSize && (
            <div className="p-3 bg-background rounded-lg">
              <div className="text-sm text-muted-foreground">Size</div>
              <div className="font-semibold">Min. {swapPreferences.minSize} m²</div>
            </div>
          )}
        </div>
      </div>

      {/* Additional Notes */}
      {swapPreferences.additionalNotes && (
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Additional Requirements</h3>
          <p className="text-muted-foreground">{swapPreferences.additionalNotes}</p>
        </div>
      )}

      {/* Action Button */}
      <Button asChild className="w-full">
        <Link href="/swap-property/new">Propose a Swap</Link>
      </Button>
    </div>
  )
}
