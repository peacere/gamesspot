import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-lg font-bold">Game</span>
          </Link>
          <nav className="flex gap-4 md:gap-6">
            <Link href="/games" className="text-xs md:text-sm hover:underline underline-offset-4">
              Games
            </Link>
            <Link href="/consoles" className="text-xs md:text-sm hover:underline underline-offset-4">
              Consoles
            </Link>
            <Link href="/accessories" className="text-xs md:text-sm hover:underline underline-offset-4">
              Accessories
            </Link>
            <Link href="/playstation-services" className="text-xs md:text-sm hover:underline underline-offset-4">
              PlayStation Services
            </Link>
            <Link href="/installation" className="text-xs md:text-sm hover:underline underline-offset-4">
              Installation
            </Link>
            <Link href="/about" className="text-xs md:text-sm hover:underline underline-offset-4">
              About
            </Link>
            <Link href="/contact" className="text-xs md:text-sm hover:underline underline-offset-4">
              Contact
            </Link>
            <Link href="/faq" className="text-xs md:text-sm hover:underline underline-offset-4">
              FAQ
            </Link>
          </nav>
        </div>
        <p className="text-xs text-muted-foreground md:text-sm">
          © {new Date().getFullYear()} Game. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
