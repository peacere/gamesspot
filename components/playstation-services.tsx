import { CheckCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { FAQCompact } from "./faq-compact"

export function PlayStationServices() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">Custom PlayStation Solutions</h2>
              <p className="text-muted-foreground">
                We offer professional PlayStation customization services to enhance your gaming experience. Our team of
                experts can help you unlock the full potential of your console.
              </p>
            </div>
            <ul className="grid gap-2">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Custom firmware installation for all PlayStation models</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>System modifications and upgrades</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Hardware repairs and maintenance</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>Performance optimization</span>
              </li>
            </ul>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" asChild>
                <Link href="/contact">Contact for Service</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[300px] w-full md:h-[400px] rounded-lg overflow-hidden">
              <img
                src="/images/controller-setup.png"
                alt="PlayStation console customization"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center">Our PlayStation Services</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Custom Firmware Installation</CardTitle>
                <CardDescription>Unlock additional features on your PlayStation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our expert technicians can install custom firmware on your PlayStation console, allowing you to access
                  additional features and capabilities not available in the standard system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>System Modifications</CardTitle>
                <CardDescription>Enhance your PlayStation's capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We offer various system modifications to enhance your PlayStation's capabilities, including storage
                  upgrades, cooling improvements, and performance optimizations.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Game Backup Solutions</CardTitle>
                <CardDescription>Protect your game investments</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We provide solutions to create and manage backups of your game library, ensuring you never lose access
                  to your purchased games due to disc damage or digital rights issues.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Hardware Repairs</CardTitle>
                <CardDescription>Fix common PlayStation issues</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our technicians can diagnose and repair common PlayStation hardware issues, including HDMI ports, disc
                  drives, power supplies, and overheating problems.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Controller Customization</CardTitle>
                <CardDescription>Personalize your gaming experience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We offer controller customization services, including custom button mapping, LED modifications, and
                  aesthetic upgrades to enhance your gaming experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Consultation Services</CardTitle>
                <CardDescription>Expert advice for your PlayStation needs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Not sure what services you need? Our experts can provide consultation services to help you determine
                  the best solutions for your specific PlayStation needs and requirements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter">PlayStation Services FAQs</h2>
              <p className="max-w-[900px] text-muted-foreground">Common questions about our PlayStation services.</p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl py-12">
            <FAQCompact category="playstation" limit={3} />
          </div>
        </div>
      </div>
    </section>
  )
}
