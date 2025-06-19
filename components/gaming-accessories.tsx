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

export function GamingAccessories() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Gaming Accessories
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Complete your gaming setup with our high-quality controllers,
              chargers, and accessories.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center p-4">
              <img
                src="/images/dualsense-controller-starblue3-sosogames.jpg"
                alt="PlayStation 5 DualSense Controller"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>PS5 DualSense Controller</CardTitle>
                <Badge variant="secondary">New</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Haptic feedback technology</li>
                <li>• Adaptive triggers</li>
                <li>• Built-in microphone</li>
                <li>• USB-C charging</li>
                <li>• Multiple color options</li>
              </ul>
              <p className="text-lg font-bold mt-4">$69.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/contact">Buy Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center p-4">
              <img
                src="/images/ps4.jpg"
                alt="PlayStation 4 DualShock Controller"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>PS4 DualShock 4 Controller</CardTitle>
                <Badge variant="outline">Popular</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Precision analog sticks</li>
                <li>• Built-in touchpad</li>
                <li>• Motion sensors</li>
                <li>• 3.5mm audio jack</li>
                <li>• Rechargeable battery</li>
              </ul>
              <p className="text-lg font-bold mt-4">$59.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/contact">Buy Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center p-4">
              <img
                src="/images/psCharger.jpg"
                alt="Controller Charging Station"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Controller Charging Station</CardTitle>
                <Badge variant="outline">Essential</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Charges 2 controllers simultaneously</li>
                <li>• LED charging indicators</li>
                <li>• Compact design</li>
                <li>• Compatible with PS4/PS5</li>
                <li>• Fast charging technology</li>
              </ul>
              <p className="text-lg font-bold mt-4">$29.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/contact">Buy Now</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center p-4">
              <img
                src="/images/pss charger.jpg"
                alt="Wireless Controller Charger"
                className="w-full h-full object-contain"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>Wireless Controller Charger</CardTitle>
                <Badge variant="outline">Premium</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Wireless charging pad</li>
                <li>• Universal compatibility</li>
                <li>• Overcharge protection</li>
                <li>• Sleek modern design</li>
                <li>• Non-slip base</li>
              </ul>
              <p className="text-lg font-bold mt-4">$39.99</p>
            </CardContent>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link href="/contact">Buy Now</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="mt-16">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold">Why Choose Our Accessories?</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              All our gaming accessories come with quality guarantee and
              customer support
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
              <h4 className="font-semibold">Quality Guarantee</h4>
              <p className="text-sm text-muted-foreground">
                All accessories tested for quality
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
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold">Fast Shipping</h4>
              <p className="text-sm text-muted-foreground">
                Quick delivery to your door
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
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold">Customer Support</h4>
              <p className="text-sm text-muted-foreground">
                Expert help when you need it
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
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold">Warranty</h4>
              <p className="text-sm text-muted-foreground">
                1-year warranty on all products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
