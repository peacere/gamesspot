import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ProductsSection() {
  return (
    <section id="products" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Our Products
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover our range of high-quality gaming products designed to
              enhance your experience.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center">
              <img
                src="/placeholder.svg?height=240&width=300"
                alt="PlayStation Controllers"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>PlayStation Controllers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                High-quality PlayStation controllers including DualShock 4 and
                DualSense controllers. Perfect for gaming and compatible with
                all PlayStation consoles.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center">
              <img
                src="/placeholder.svg?height=240&width=300"
                alt="Gaming Accessories"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Gaming Accessories</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Complete range of gaming accessories including headsets,
                charging stations, protective cases, and custom controller
                modifications.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
          <Card className="overflow-hidden">
            <div className="h-60 bg-muted flex items-center justify-center">
              <img
                src="/placeholder.svg?height=240&width=300"
                alt="Console Modifications"
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>Console Modifications</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Professional console modification services including custom
                firmware installation, hardware upgrades, and performance
                enhancements.
              </p>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Learn More</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
