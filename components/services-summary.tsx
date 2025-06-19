import { ArrowRight, Gamepad2, Download, Wrench, ShoppingCart, Headphones } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FAQCompact } from "./faq-compact"

export function ServicesSummary() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer a comprehensive range of gaming services to enhance your gaming experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-5">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Game Sales</CardTitle>
                <CardDescription>All types of games for various platforms</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Browse our extensive collection of games for PlayStation, Xbox, Nintendo, PC, and more.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/games" className="flex items-center justify-center gap-1">
                  Browse Games <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>PlayStation Consoles</CardTitle>
                <CardDescription>PS3, PS4, and PS5 consoles for sale</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                New and refurbished PlayStation consoles from PS3 to PS5 with warranty and professional setup service.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/consoles" className="flex items-center justify-center gap-1">
                  Shop Consoles <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Headphones className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Gaming Accessories</CardTitle>
                <CardDescription>Controllers, chargers & accessories</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                High-quality gaming controllers, charging stations, and accessories for all gaming platforms.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/accessories" className="flex items-center justify-center gap-1">
                  Shop Accessories <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Wrench className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>PlayStation Services</CardTitle>
                <CardDescription>Custom firmware and modifications</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Professional PlayStation customization services including custom firmware installation and repairs.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/playstation-services" className="flex items-center justify-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <Download className="h-8 w-8 text-primary" />
              <div>
                <CardTitle>Game Installation</CardTitle>
                <CardDescription>Professional game setup services</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Expert installation services for all types of games across different platforms and systems.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full" asChild>
                <Link href="/installation" className="flex items-center justify-center gap-1">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
        <div className="mt-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Find quick answers to common questions about our services.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <FAQCompact category="general" limit={3} />
          </div>
        </div>
      </div>
    </section>
  )
}
