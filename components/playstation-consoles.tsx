import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function PlayStationConsoles() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              PlayStation Consoles
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We sell PlayStation consoles from PS3 to PS5, including both new
              and refurbished units with warranty.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center p-4">
              <img
                src="/images/ps5-slim.png"
                alt="PlayStation 5 Console"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>PlayStation 5</CardTitle>
                <Badge variant="secondary">Latest</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Ultra-high speed SSD</li>
                <li>• Ray tracing support</li>
                <li>• 4K gaming at 120fps</li>
                <li>• DualSense controller included</li>
                <li>• Backward compatibility with PS4</li>
              </ul>
              <p className="text-lg font-bold mt-4">From $499</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/contact">Check Availability</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center p-4">
              <img
                src="/images/play4.webp"
                alt="PlayStation 4 Console"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>PlayStation 4</CardTitle>
                <Badge variant="outline">Popular</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• 1TB or 500GB storage</li>
                <li>• Full HD 1080p gaming</li>
                <li>• DualShock 4 controller</li>
                <li>• Extensive game library</li>
                <li>• PlayStation VR compatible</li>
              </ul>
              <p className="text-lg font-bold mt-4">From $299</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/contact">Check Availability</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center p-4">
              <img
                src="/images/ps3-slim.png"
                alt="PlayStation 3 Console"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>PlayStation 3</CardTitle>
                <Badge variant="outline">Classic</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Blu-ray disc support</li>
                <li>• Wireless DualShock 3</li>
                <li>• PlayStation Network access</li>
                <li>• Classic game library</li>
                <li>• Media streaming capabilities</li>
              </ul>
              <p className="text-lg font-bold mt-4">From $149</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/contact">Check Availability</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Console Services</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our PlayStation consoles come with warranty and optional
              services
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mt-8">
            <div className="text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold">Warranty</h4>
              <p className="text-sm text-muted-foreground">
                6-12 months warranty on all consoles
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold">Setup Service</h4>
              <p className="text-sm text-muted-foreground">
                Free setup and configuration
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              <h4 className="font-semibold">Trade-In</h4>
              <p className="text-sm text-muted-foreground">
                Trade your old console for credit
              </p>
            </div>
            <div className="text-center space-y-2">
              <div className="rounded-full bg-primary/10 p-4 w-16 h-16 mx-auto flex items-center justify-center">
                <svg
                  className="h-8 w-8 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </div>
              <h4 className="font-semibold">Repairs</h4>
              <p className="text-sm text-muted-foreground">
                Professional repair services
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
