import Link from "next/link"
import { Building } from "lucide-react"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 font-bold text-xl ${className}`}>
      <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-primary text-primary-foreground">
        <Building className="h-5 w-5" />
      </div>
      <span className="hidden sm:inline">Tendani Properties</span>
    </Link>
  )
}
