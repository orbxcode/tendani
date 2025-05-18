import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MobileMenu } from '@/components/mobile-menu'
import { Logo } from '@/components/logo'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium hover:text-primary">
            Home
          </Link>
          <Link href="/properties" className="text-sm font-medium hover:text-primary">
            Properties
          </Link>
          <Link href="/swap-property" className="text-sm font-medium hover:text-primary">
            Swap Property
          </Link>
          <Link href="/about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="/market" className="text-sm font-medium hover:text-primary">
            Market
          </Link>
          <Link href="/join-team" className="text-sm font-medium hover:text-primary">
            Join Our Team
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" className="hidden md:flex">
            <Link href="/market">Market Trends</Link>
          </Button>
          <Button asChild className="hidden sm:flex md:flex">
            <Link href="/properties">Browse Properties</Link>
          </Button>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}
